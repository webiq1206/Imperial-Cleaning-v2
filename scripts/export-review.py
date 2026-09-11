"""Build a self-contained review from the actual Next production output.
Run with NEXT_PUBLIC_DESIGN_PREVIEW=1 at build time. No hosting is required. The review uses built page markup and lightweight local interactions.
"""
from pathlib import Path
import base64, gzip, html, json, re, sys, subprocess
root=Path(__file__).resolve().parents[1]
output=Path(sys.argv[1] if len(sys.argv)>1 else root/'Imperial-Website-Redesign-Preview.html')
pages={};titles={};questions={}
def collect_questions(value, result):
    if isinstance(value,dict):
        if value.get('@type')=='Question' and value.get('acceptedAnswer'):
            result[re.sub(r'\s+',' ',html.unescape(value['name'])).strip().lower()]=html.unescape(value['acceptedAnswer']['text'])
        for child in value.values():collect_questions(child,result)
    elif isinstance(value,list):
        for child in value:collect_questions(child,result)
for p in (root/'.next/server/app').rglob('*.html'):
    rel=p.relative_to(root/'.next/server/app').as_posix()
    u='/' if rel=='index.html' else '/'+rel.removesuffix('.html')
    if u.startswith('/admin') or u=='/_not-found':continue
    markup=p.read_text()
    # Include only public, fully prerendered pages.
    questions[u]={}
    for schema in re.findall(r'<script\b[^>]*type="application/ld\+json"[^>]*>(.*?)</script>',markup,re.S):
        try:collect_questions(json.loads(schema),questions[u])
        except (ValueError,KeyError):pass
    pages[u]=re.sub(r'<script\b[^>]*>.*?</script>','',markup,flags=re.S)
    title=re.search(r'<title>(.*?)</title>',markup)
    titles[u]=html.unescape(title.group(1).split(' | ')[0]) if title else u
if 'Design preview:' not in pages.get('/contact',''):raise SystemExit('Build in design preview mode before exporting.')
assets={}
for p in (root/'.next/static').rglob('*'):
    if p.is_file() and p.suffix in ['.css','.woff','.woff2']:
        k='/_next/static/'+p.relative_to(root/'.next/static').as_posix()
        mime={'.js':'text/javascript','.css':'text/css','.woff':'font/woff','.woff2':'font/woff2'}[p.suffix]
        assets[k]={'mime':mime,'data':base64.b64encode(p.read_bytes()).decode()}
for p in [root/'public/hero-logo.webp',root/'public/images/commercial-interior.jpg',root/'public/favicon.ico']:
    assets['/'+p.relative_to(root/'public').as_posix()]={'mime':'image/webp' if p.suffix=='.webp' else 'image/jpeg' if p.suffix=='.jpg' else 'image/x-icon','data':base64.b64encode(p.read_bytes()).decode()}
navigation=json.loads(subprocess.check_output(['node','--import','tsx','-e',"console.log(JSON.stringify(require('./data/navigation.ts').navigation))"],cwd=root,text=True))
quote_markup=re.search(r'<form class="quote-form".*?</form>',pages['/contact'],re.S).group(0)
runtime=(root/'scripts/review-runtime.js').read_text()
packed=base64.b64encode(gzip.compress(json.dumps({'pages':pages,'titles':titles,'assets':assets,'questions':questions,'navigation':navigation,'quoteMarkup':quote_markup,'runtime':runtime},ensure_ascii=False).encode(),compresslevel=9)).decode()
shell=r'''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Imperial Cleaning | Website Redesign Review</title><style>
*{box-sizing:border-box}body{margin:0;background:#171c24;color:#eff5ff;font:14px Arial,sans-serif}header{background:#080d13;border-bottom:1px solid #334051;padding:19px 24px}h1{font-size:19px;font-weight:500;margin:0 0 8px}header p{margin:0;color:#aebcce;font-size:13px;line-height:1.6}.controls{padding:13px 24px;display:flex;align-items:center;gap:10px;flex-wrap:wrap;background:#101823;position:sticky;top:0;z-index:3;border-bottom:1px solid #334051}button,select{font:14px Arial;color:#e6effa;background:#202c3b;border:1px solid #4b5d75;padding:10px 13px;border-radius:6px;cursor:pointer;min-height:42px}button[aria-pressed=true]{background:#00bfff;color:#04121e;border-color:#00bfff}select{max-width:min(420px,100%);flex:1;min-width:220px}button:focus-visible,select:focus-visible{outline:2px solid #00bfff;outline-offset:3px}.label{color:#b7c5d9;font-size:13px}.viewport-wrap{overflow:auto;padding:24px 16px 40px;text-align:center}iframe{display:block;margin:auto;border:1px solid #3e4d62;border-radius:8px;width:1280px;max-width:none;height:calc(100vh - 235px);min-height:650px;background:#050607}#loading{padding:50px;color:#b6c6dd;text-align:center}.review-notes{max-width:1100px;margin:0 auto;padding:0 24px 40px;display:grid;grid-template-columns:repeat(3,1fr);gap:24px}.review-notes h2{font-size:16px;font-weight:500}.review-notes p{font-size:13px;color:#b8c5d7;line-height:1.7}a{color:#83dfff}.path{color:#97abc6;font-size:12px;overflow-wrap:anywhere;padding:0 24px 15px} @media(max-width:700px){header{padding:16px}.controls{padding:12px}.review-notes{grid-template-columns:1fr;gap:4px}.viewport-wrap{padding:16px 8px}iframe{min-height:650px}} 
</style></head><body><header><h1>Imperial Cleaning Inc. <span style="color:#8195af">/ Website redesign review</span></h1><p>Explore all 95 public pages. Switch screen sizes, use the menus, and try the quote flow. Local interactions are simulated; requests are never sent.</p></header><div class="controls"><span class="label">View</span><button data-width="1280" aria-pressed="true">Desktop</button><button data-width="834" aria-pressed="false">Tablet</button><button data-width="390" aria-pressed="false">Mobile</button><select aria-label="Choose a page" id="pages"><option>Loading pages…</option></select><button id="home">Home</button></div><div id="loading">Opening your redesign…</div><div class="viewport-wrap" id="wrap" hidden><iframe id="site" title="Imperial website redesign" sandbox="allow-scripts allow-same-origin allow-forms allow-popups" referrerpolicy="no-referrer"></iframe></div><p class="path" id="path"></p><div class="review-notes"><div><h2>Recognizably Imperial</h2><p>The existing lion logo, black and white foundation, and cyan and purple accents stay. Clearer typography, quieter backgrounds, and defined sections make the content easier to scan.</p></div><div><h2>A clearer path to a quote</h2><p>Prominent quote and call actions, two-step forms, relevant customer reviews, grouped navigation, and page search help visitors reach the right service and take the next step.</p></div><div><h2>Prepared for your review</h2><p>Nothing has been published or merged into main. Email delivery must be configured and tested before a future launch. The office photo is illustrative stock imagery, not an Imperial project. This standalone copy reproduces the built layouts with local review controls; the branch contains the full application.</p></div></div><script>
const PACK="__PACK__";let data,urls={},active='/',ready=false;const frame=document.getElementById('site'),select=document.getElementById('pages');
function esc(s){return s.replace(/</g,'\\u003c')}
function script(code){return '<script>'+code.replace(/<\/script/gi,'<\\/script')+'<\/script>'}
function render(path){
 let hash='';if(path.includes('#')){[path,hash]=path.split('#')};path=path.split('?')[0]||active;
 if(!data.pages[path]){document.getElementById('path').textContent='This link is a downloadable sitemap or external resource. Choose a page above to continue.';return}
 active=path;select.value=path;document.getElementById('path').textContent=path==='/'?'Homepage':path;
 let text=data.pages[path];
 text=text.replace(/<link\b[^>]*rel="(?:preload|modulepreload|preconnect|dns-prefetch)"[^>]*>/gi,'');
 text=text.replace(/<img\b[^>]*>/gi,tag=>{let src=tag.match(/\ssrc="([^"]*)"/i)?.[1]||'';src=src.replace(/&amp;/g,'&');if(src.startsWith('/_next/image'))src=new URL('https://preview.invalid'+src).searchParams.get('url');const a=data.assets[src];if(a){tag=tag.replace(/\ssrc="[^"]*"/i,' src="data:'+a.mime+';base64,'+a.data+'"').replace(/\ssrcSet="[^"]*"/ig,'')}return tag});
 text=text.replace(/(src|href)="(\/_next\/static\/[^"?]+)(?:\?[^\"]*)?"/g,(m,attr,path)=>urls[path]?attr+'="'+urls[path]+'"':m);
 text=text.replace(/<link\b[^>]*rel="(?:icon|apple-touch-icon|manifest)"[^>]*>/gi,'');
 const previewStyle = '<style>dialog.review-dialog{position:fixed;inset:50% auto auto 50%;transform:translate(-50%,-50%);margin:0;color:#f0f5fb;box-shadow:0 24px 80px #0009;padding-top:50px}dialog.review-dialog::backdrop{background:#000b}dialog.review-dialog .review-close{position:absolute;top:10px;right:12px;font-size:26px}.review-navigation{background:#101419;border:1px solid #435065;border-radius:10px;max-width:calc(100vw - 32px);padding:38px 0 0}.review-navigation .nav-panel{border:0;max-width:100%}dialog.mobile-drawer{inset:0 0 0 auto;transform:none!important;height:100dvh;max-height:100dvh;margin:0;border:1px solid #435065;border-radius:0}dialog.mobile-drawer:not([open]){display:none}.mobile-drawer details{border-bottom:1px solid #354150;padding:12px 0}.mobile-drawer summary{cursor:pointer;font-size:1.1rem;padding:8px 0}.mobile-drawer .nav-link{font-size:1rem}.mobile-drawer ul{list-style:none;padding:8px 0}</style>';
 const config = { navigation:data.navigation, titles:data.titles, questions:data.questions[path], quoteMarkup:data.quoteMarkup };
 text=text.replace('</head>',previewStyle+'</head>');
 text=text.replace('</body>',script('window.IMPERIAL_REVIEW='+esc(JSON.stringify(config))+';'+data.runtime)+'</body>');
 if(hash)text=text.replace('</body>',script('addEventListener("load",()=>document.getElementById('+JSON.stringify(hash)+')?.scrollIntoView());')+'</body>');
 frame.srcdoc=text;
}
(async()=>{try{const compressed=Uint8Array.from(atob(PACK),c=>c.charCodeAt(0));const decoded=new Blob([compressed]).stream().pipeThrough(new DecompressionStream('gzip'));data=await new Response(decoded).json();for(const [path,a]of Object.entries(data.assets)){urls[path]=URL.createObjectURL(new Blob([Uint8Array.from(atob(a.data),c=>c.charCodeAt(0))],{type:a.mime}))}const ordered=Object.keys(data.pages).sort((a,b)=>a==='/'?-1:b==='/'?1:a.localeCompare(b));select.innerHTML='';for(const path of ordered){let opt=document.createElement('option');opt.value=path;opt.textContent=path==='/'?'Homepage':data.titles[path];select.append(opt)}document.getElementById('loading').hidden=true;document.getElementById('wrap').hidden=false;ready=true;render('/');if(innerWidth<720)document.querySelector('[data-width="390"]').click();}catch(e){document.getElementById('loading').textContent='This review needs a current browser such as Chrome, Edge, or Safari. '+e.message}})();
select.onchange=()=>render(select.value);document.getElementById('home').onclick=()=>render('/');document.querySelectorAll('[data-width]').forEach(b=>b.onclick=()=>{frame.style.width=b.dataset.width+'px';document.querySelectorAll('[data-width]').forEach(x=>x.setAttribute('aria-pressed',String(b===x)))});window.addEventListener('message',e=>{if(e.source===frame.contentWindow&&e.data?.imperialReview&&typeof e.data.path==='string')render(e.data.path)});
</script></body></html>'''
output.parent.mkdir(parents=True,exist_ok=True);output.write_text(shell.replace('__PACK__',packed))
print(json.dumps({'path':str(output),'bytes':output.stat().st_size,'pages':len(pages),'assets':len(assets)}))
