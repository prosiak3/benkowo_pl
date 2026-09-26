(() => {
  const script = document.currentScript;
  const currentLanguage = script?.dataset.currentLanguage;
  const polishTarget = script?.dataset.pl;
  const englishTarget = script?.dataset.en;
  let preferredLanguage = null;
  try { preferredLanguage = localStorage.getItem('benkowo-language'); } catch (_) {}
  if (!preferredLanguage) {
    const browserLanguage = (navigator.languages?.[0] || navigator.language || 'pl').toLowerCase();
    preferredLanguage = browserLanguage.startsWith('pl') ? 'pl' : 'en';
  }
  if (polishTarget && englishTarget && (currentLanguage === 'auto' || preferredLanguage !== currentLanguage)) {
    location.replace((preferredLanguage === 'en' ? englishTarget : polishTarget) + location.search + location.hash);
    return;
  }
  try {
    const theme = localStorage.getItem('benkowo-theme-preview');
    if (['warm', 'forest', 'plum'].includes(theme)) document.documentElement.dataset.theme = theme;
  } catch (_) {}
})();

