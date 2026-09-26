(() => {
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const targets = document.querySelectorAll('.intro .manifesto, .history-copy, .houses-head, .house-card, .concept-gallery figure, .occasions .occasion-card, .home-plan-teaser .plan');
  const motifs = document.querySelectorAll('.history-motif, .houses');
  if (!targets.length && !motifs.length) return;
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -40px 0px', threshold: .08 });
  const motifObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('motif-in-view');
      motifObserver.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -12% 0px', threshold: .05 });
  targets.forEach(item => { item.classList.add('editorial-reveal'); revealObserver.observe(item); });
  motifs.forEach(item => motifObserver.observe(item));
  document.documentElement.classList.add('motion-ready');
})();
