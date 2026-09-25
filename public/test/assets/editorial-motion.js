(() => {
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const targets = document.querySelectorAll('.intro .manifesto, .history-copy, .houses-head, .house-card, .concept-gallery figure, .occasions .occasion-card, .home-plan-teaser .plan');
  if (!targets.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -40px 0px', threshold: .08 });
  targets.forEach(item => { item.classList.add('editorial-reveal'); observer.observe(item); });
  document.documentElement.classList.add('motion-ready');
})();
