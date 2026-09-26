(() => {
  const key = 'benkowo-theme-preview';
  const root = document.documentElement;
  const isEnglish = document.documentElement.lang.toLowerCase().startsWith('en');
  document.querySelectorAll('[data-theme-preview]').forEach(host => {
    host.className = 'theme-preview';
    host.setAttribute('role', 'group');
    host.setAttribute('aria-label', isEnglish ? 'Colour palette' : 'Kolorystyka');
    host.innerHTML = `<div class="theme-preview-inner"><p class="theme-preview-title">${isEnglish ? 'Colour palette' : 'Kolorystyka'}</p><div class="theme-preview-options"><button type="button" class="theme-option" data-theme-choice="warm" aria-pressed="true"><span class="theme-swatch" aria-hidden="true"></span>${isEnglish ? 'Warm' : 'Ciepły'}</button><button type="button" class="theme-option" data-theme-choice="forest" aria-pressed="false"><span class="theme-swatch" aria-hidden="true"></span>${isEnglish ? 'Forest' : 'Leśny'}</button><button type="button" class="theme-option" data-theme-choice="plum" aria-pressed="false"><span class="theme-swatch" aria-hidden="true"></span>${isEnglish ? 'Plum' : 'Śliwkowy'}</button></div></div>`;
  });
  const options = [...document.querySelectorAll('[data-theme-choice]')];
  const apply = (choice) => {
    if (!['warm', 'forest', 'plum'].includes(choice)) return;
    root.dataset.theme = choice;
    options.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.themeChoice === choice)));
    try { localStorage.setItem(key, choice); } catch (_) {}
  };
  apply(root.dataset.theme || 'warm');
  options.forEach(button => button.addEventListener('click', () => apply(button.dataset.themeChoice)));
})();
