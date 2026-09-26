"""Read-only checks against the locally running build. Never submits a lead."""
import concurrent.futures
import json
import re
import urllib.request
from urllib.parse import urlparse
from bs4 import BeautifulSoup

origin = 'http://127.0.0.1:3107'
paths = json.load(open('data/public-routes.generated.json'))
def inspect(path):
    with urllib.request.urlopen(origin + path) as response:
        assert response.status == 200, path
        soup = BeautifulSoup(response.read(), 'html.parser')
    main = soup.find('main')
    assert main and len(main.find_all('h1')) == 1, (path, 'H1')
    assert soup.title and soup.select_one('meta[name="description"]'), (path, 'metadata')
    expected_canonical = 'https://imperialcleaninginc.com' + ('' if path == '/' else path)
    assert soup.select_one('link[rel="canonical"]')['href'] == expected_canonical, (path, 'canonical')
    assert not main.select('a button, button a, h3 h3'), (path, 'nested interactive or heading')
    for script in soup.select('script[type="application/ld+json"]'):
        json.loads(script.string)
    text = main.get_text(' ', strip=True)
    if re.match(r'^/(idaho|utah)/(construction|commercial)-cleaning/', path):
        assert not re.search(r'ISO.certified|zero deficiencies|24/7|security.cleared|We do not invent', text, re.I), (path, 'unsupported copy')
        assert len(text.split()) < 1600, (path, 'excessive copy')
    if path.startswith('/resources/'):
        assert main.select_one('a[download]'), (path, 'missing worksheet')
    broken=[]
    for a in main.select('a[href]'):
        href=a['href']
        if href.startswith('/') and not href.startswith('//'):
            target=urlparse(href).path
            if target not in paths:
                try:
                    with urllib.request.urlopen(origin + target, timeout=15) as linked:
                        if linked.status != 200:
                            broken.append(target)
                except Exception:
                    broken.append(target)
    assert not broken,(path,broken)
    return {'path':path,'words':len(text.split()),'h1':main.h1.get_text(' ',strip=True)}
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
    results=list(pool.map(inspect,paths))
for row in results: print(json.dumps(row))
print(f'PASS {len(results)} rendered pages: status, H1, canonical, metadata, JSON-LD, internal targets and control nesting.')
