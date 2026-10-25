/* Local interactions for the downloadable review. No analytics or network calls. */
(() => {
  const { navigation, titles, questions, quoteMarkup } = window.IMPERIAL_REVIEW;
  const escape = text => String(text).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const normalized = text => text.replace(/\s+/g, ' ').trim().toLowerCase();
  function route(path) { parent.postMessage({imperialReview:true,path}, '*'); }
  function dialog(className, markup) {
    document.querySelectorAll('dialog.review-dialog').forEach(item => item.close());
    const element = document.createElement('dialog');
    element.className = `review-dialog ${className}`;
    element.innerHTML = `<button class="review-close icon-button" aria-label="Close dialog">×</button>${markup}`;
    document.body.append(element);
    element.querySelector('.review-close').onclick = () => element.close();
    element.addEventListener('click', event => { if (event.target === element) element.close(); });
    element.addEventListener('close', () => element.remove());
    element.showModal();
    return element;
  }
  function links(group) {
    return group.links.map(link => `<li><a class="nav-link" href="${escape(link.href)}"><span>${escape(link.label)}${link.detail ? `<small>${escape(link.detail)}</small>` : ''}</span><span aria-hidden="true">↗</span></a></li>`).join('');
  }
  function search() {
    const panel = dialog('search-dialog', '<h2>What can we help you find?</h2><p>Search services, cities, and cleaning guides.</p><label class="search-input"><input type="search" aria-label="Search Imperial Cleaning" placeholder="Try office cleaning or Idaho Falls"></label><div class="search-results" aria-live="polite"></div>');
    const input = panel.querySelector('input');
    const render = () => {
      const query = normalized(input.value), words = query.split(' ');
      const matches = Object.entries(titles).filter(([path,title]) => query ? words.every(word => normalized(title+' '+path).includes(word)) : ['/commercial-cleaning','/construction-cleaning','/service-areas','/contact'].includes(path)).sort((a,b) => Number(normalized(b[1]).includes(query))-Number(normalized(a[1]).includes(query))).slice(0,12);
      panel.querySelector('.search-results').innerHTML = `<span class="eyebrow">${query ? matches.length+' results' : 'Popular pages'}</span>` + matches.map(([path,title]) => `<a href="${escape(path)}"><span>${escape(title)}</span><span aria-hidden="true">↗</span></a>`).join('') + (!matches.length ? '<p>No matching pages. Try a city or service name, or <a href="/contact">contact our team</a>.</p>' : '');
    };
    input.oninput = render; render(); input.focus();
  }
  function setupForm(form) {
    const original = form.innerHTML;
    let values = {}, step = 1;
    const save = () => { for (const [key,value] of new FormData(form)) values[key] = value; };
    function error(message) {
      form.querySelector('.review-form-error')?.remove();
      const element = document.createElement('p');
      element.className = 'field-error review-form-error'; element.setAttribute('role','alert'); element.textContent = message;
      form.querySelector('h2').after(element);
    }
    function next() {
      save();
      if (!values.service) { error('Please choose a cleaning service.'); form.querySelector('[name=service]').focus(); return; }
      if (!values.location || values.location.trim().length < 2) { error('Please enter the city and state.'); form.querySelector('[name=location]').focus(); return; }
      step = 2;
      form.innerHTML = `<p class="preview-note">Design preview: requests won’t be sent.</p><div class="form-progress" aria-label="Step 2 of 2"><span class="active">1. Your space</span><span class="active">2. Your details</span></div><h2 tabindex="-1">How can we reach you?</h2><p class="form-intro">We’ll follow up about your cleaning needs. No obligation.</p><label for="review-name">Full name *</label><input id="review-name" name="name" autocomplete="name" required minlength="2" value="${escape(values.name||'')}"><div class="form-two-col"><div><label for="review-email">Email *</label><input id="review-email" name="email" type="email" autocomplete="email" required value="${escape(values.email||'')}"></div><div><label for="review-phone">Phone *</label><input id="review-phone" name="phone" type="tel" autocomplete="tel" required value="${escape(values.phone||'')}"></div></div><label for="review-company">Company <span class="optional-label">(optional)</span></label><input id="review-company" name="company" autocomplete="organization" value="${escape(values.company||'')}"><p class="form-consent">By submitting, you’re asking Imperial Cleaning to contact you about this request. <a href="/privacy-policy">Privacy policy</a>.</p><div class="form-actions"><button type="button" class="back-button">← Back</button><button class="ic-button" type="submit">Request my free quote ↗</button></div><div class="form-reassurance">Free quote. No obligation.</div><a class="form-call" href="tel:+1-208-520-3202">Prefer to talk? (208) 520-3202</a>`;
      form.querySelector('.back-button').onclick = () => { save(); first(); };
      form.querySelector('h2').focus();
    }
    function first() {
      step = 1; form.innerHTML = original;
      for (const [key,value] of Object.entries(values)) {
        form.querySelectorAll(`[name="${key}"]`).forEach(input => { if (input.type === 'radio') {input.checked = input.value === value; input.closest('label').classList.toggle('selected', input.checked);} else input.value = value; });
      }
      form.querySelector('.form-next').onclick = next;
      form.querySelectorAll('[name=service]').forEach(input => input.onchange = () => form.querySelectorAll('[name=service]').forEach(radio => radio.closest('label').classList.toggle('selected',radio.checked)));
    }
    first();
    form.onsubmit = event => {
      event.preventDefault();
      if (step === 1) { next(); return; }
      save();
      const digits = (values.phone||'').replace(/\D/g,'');
      if (!values.name || values.name.trim().length < 2) {error('Please enter your name.');form.querySelector('[name=name]').focus();return;}
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email||'')) {error('Please enter a valid email address.');form.querySelector('[name=email]').focus();return;}
      if (!(digits.length === 10 || (digits.length === 11 && digits.startsWith('1')))) {error('Please enter a 10-digit phone number.');form.querySelector('[name=phone]').focus();return;}
      form.innerHTML = '<div class="quote-result" role="status"><h2 tabindex="-1">Your preview request is ready.</h2><p>This is a design preview. Nothing was sent to Imperial Cleaning.</p><button type="button" class="ic-button secondary">Back to the form</button></div>';
      form.querySelector('button').onclick = first; form.querySelector('h2').focus();
    };
  }
  document.querySelectorAll('.quote-form').forEach(form => { if (form.querySelector('[name=service]')) setupForm(form); });
  document.querySelectorAll('.nav-trigger').forEach(button => button.onclick = () => {
    const group = navigation.find(group => normalized(group.label) === normalized(button.textContent));
    if (group) dialog('review-navigation', `<div class="nav-panel"><span class="eyebrow">${escape(group.label)}</span><ul>${links(group)}</ul></div>`);
  });
  document.querySelector('.menu-toggle')?.addEventListener('click', () => {
    dialog('mobile-drawer', `<h2>Explore Imperial</h2><p>Cleaning services across Idaho and Utah.</p><nav aria-label="Mobile navigation">${navigation.map(group => `<details><summary>${escape(group.label)}</summary><ul>${links(group)}</ul></details>`).join('')}</nav><button class="ic-button secondary review-search">Search the website</button><a href="/contact" class="ic-button">Get a free quote ↗</a><a href="tel:+1-208-520-3202" class="drawer-phone">(208) 520-3202</a>`).querySelector('.review-search').onclick = search;
  });
  document.querySelectorAll('.search-toggle').forEach(button => button.onclick = search);
  document.querySelectorAll('button[aria-controls]').forEach(button => {
    const answer = questions[normalized(button.textContent)];
    const content = document.getElementById(button.getAttribute('aria-controls'));
    if (!answer || !content) return;
    content.innerHTML = `<p style="padding:12px 20px 20px;color:#bac5d3;line-height:1.7">${escape(answer)}</p>`;
    button.onclick = () => {
      const opened = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded',String(!opened)); button.dataset.state = opened ? 'closed' : 'open';
      content.hidden = opened; content.dataset.state = opened ? 'closed' : 'open'; content.style.height = 'auto';
    };
  });
  document.querySelectorAll('button').forEach(button => {
    if (button.closest('.quote-form') || button.matches('.nav-trigger,.menu-toggle,.search-toggle') || button.hasAttribute('aria-controls')) return;
    if (/quote|contact.*team|contact us|schedule.*walk/i.test(button.textContent)) button.onclick = () => {
      const panel = dialog('quote-dialog', quoteMarkup); setupForm(panel.querySelector('.quote-form'));
    };
  });
  document.addEventListener('click', event => {
    const anchor = event.target.closest('a'); if (!anchor) return;
    const href = anchor.getAttribute('href'); if (!href) return;
    if (href.startsWith('#')) {event.preventDefault();document.getElementById(href.slice(1))?.scrollIntoView();return;}
    if (href.startsWith('/') || href.startsWith('https://imperialcleaninginc.com/')) {event.preventDefault();route(href.replace('https://imperialcleaninginc.com',''));}
  });
})();
