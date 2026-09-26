(() => {
  const language = document.documentElement.lang.toLowerCase().startsWith('en') ? 'en' : 'pl';
  const isEnglish = language === 'en';

  const brand = () => `
    <a class="brand" href="${isEnglish ? '/test/en/' : '/test/'}" aria-label="${isEnglish ? 'Benkowo Białowieża — home page' : 'Benkowo Białowieża — strona główna'}">
      <span class="brand-mark" aria-hidden="true"><img src="/test/assets/icon-192.png" alt=""></span>
      <span class="brand-type"><strong>Benkowo</strong><small>Białowieża</small></span>
    </a>`;

  const languageSwitch = target => `
    <div class="language-switch" aria-label="${isEnglish ? 'Language selection' : 'Wybór języka'}">
      <a href="${isEnglish ? target : location.pathname}" lang="pl" hreflang="pl" ${isEnglish ? '' : 'aria-current="page"'} data-language-choice="pl">PL</a>
      <span aria-hidden="true">/</span>
      <a href="${isEnglish ? location.pathname : target}" lang="en" hreflang="en" ${isEnglish ? 'aria-current="page"' : ''} data-language-choice="en">EN</a>
    </div>`;

  const navItems = page => {
    if (page === 'catalog') return isEnglish
      ? [['/test/en/', 'Benkowo'], ['#plany', 'All ideas'], ['/test/en/#domy', 'Houses & garden'], ['/test/en/#lokalizacja', 'Location'], ['/test/en/#kontakt', 'Contact']]
      : [['/test/', 'Benkowo'], ['#plany', 'Wszystkie pomysły'], ['/test/#domy', 'Domy i ogród'], ['/test/#lokalizacja', 'Lokalizacja'], ['/test/#kontakt', 'Kontakt']];
    if (page === 'occasion') return isEnglish
      ? [['/test/en/', 'Home'], ['/test/en/stay-ideas/', 'Stay ideas'], ['#contact', 'Contact']]
      : [['/test/', 'Strona główna'], ['/test/pomysly-na-pobyt/', 'Pomysły na pobyt'], ['#kontakt', 'Kontakt']];
    return isEnglish
      ? [['#miejsce', 'The place'], ['#domy', 'Houses & garden'], ['/test/en/stay-ideas/', 'Ideas for your stay'], ['#lokalizacja', 'Location'], ['#kontakt', 'Contact']]
      : [['#miejsce', 'Miejsce'], ['#domy', 'Domy i ogród'], ['/test/pomysly-na-pobyt/', 'Pomysły na pobyt'], ['#lokalizacja', 'Lokalizacja'], ['#kontakt', 'Kontakt']];
  };

  document.querySelectorAll('[data-site-header]').forEach(header => {
    const page = header.dataset.page || 'home';
    const languageTarget = header.dataset.langHref || (isEnglish ? '/test/' : '/test/en/');
    let navigation;
    if (page === 'detail') {
      navigation = `
        <nav class="nav" aria-label="${isEnglish ? 'Navigation' : 'Nawigacja'}">
          <a class="back-link" href="${isEnglish ? '/test/en/stay-ideas/' : '/test/pomysly-na-pobyt/'}">${isEnglish ? '← All ideas' : '← Wszystkie pomysły'}</a>
          ${languageSwitch(languageTarget)}
        </nav>`;
    } else {
      const links = navItems(page).map(([href, label]) => `<a href="${href}">${label}</a>`).join('');
      navigation = `
        <button class="nav-toggle" type="button" aria-label="${isEnglish ? 'Open menu' : 'Otwórz menu'}" aria-expanded="false" aria-controls="main-nav"><span></span><span></span><span></span></button>
        <nav class="nav" id="main-nav" aria-label="${isEnglish ? 'Main navigation' : 'Główna nawigacja'}">
          ${links}
          ${languageSwitch(languageTarget)}
          <a class="button button-primary" href="${isEnglish ? '/test/en/#dostepnosc' : '/test/#dostepnosc'}">${isEnglish ? 'Ask about dates' : 'Zapytaj o termin'}</a>
        </nav>`;
    }
    header.innerHTML = `<div class="shell header-inner">${brand()}${navigation}</div>`;
  });

  document.querySelectorAll('[data-language-choice]').forEach(link => link.addEventListener('click', () => {
    try { localStorage.setItem('benkowo-language', link.dataset.languageChoice); } catch (_) {}
  }));

  const menuButton = document.querySelector('.nav-toggle');
  if (menuButton) {
    menuButton.addEventListener('click', () => {
      const open = document.body.classList.toggle('menu-open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? (isEnglish ? 'Close menu' : 'Zamknij menu') : (isEnglish ? 'Open menu' : 'Otwórz menu'));
    });
    document.querySelectorAll('.site-header .nav a').forEach(link => link.addEventListener('click', () => {
      document.body.classList.remove('menu-open');
      menuButton.setAttribute('aria-expanded', 'false');
    }));
  }

  const renderFooter = () => document.querySelectorAll('[data-site-footer]').forEach(footer => {
    footer.innerHTML = `
      <div class="shell footer-inner">
        <span>© 2026 Benkowo Białowieża</span>
        <span>${isEnglish ? 'The entire property for one group of up to 14 guests' : 'Cała posesja dla jednej grupy do 14 osób'}</span>
        <a href="tel:+48602761082">+48 602 761 082</a>
        <a class="df-compliance" href="https://debilfirst.org" target="_blank" rel="noopener" aria-label="Debilfirst.org doctrine compliant">
          <img src="/test/assets/df-mark.svg" alt="" aria-hidden="true"><span>Debilfirst.org doctrine compliant</span>
        </a>
      </div>`;
  });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', renderFooter, { once: true });
  else renderFooter();
})();

