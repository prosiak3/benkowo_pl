(() => {
  const key = 'benkowo-theme-preview';
  const root = document.documentElement;
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
