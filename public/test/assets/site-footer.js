(() => {
  const isEnglish = document.documentElement.lang.toLowerCase().startsWith('en');
  const propertyLine = isEnglish
    ? 'The entire property for one group of up to 14 guests'
    : 'Cała posesja dla jednej grupy do 14 osób';

  document.querySelectorAll('[data-site-footer]').forEach(footer => {
    footer.innerHTML = `
      <div class="shell footer-inner">
        <span>© 2026 Benkowo Białowieża</span>
        <span>${propertyLine}</span>
        <a href="tel:+48602761082">+48 602 761 082</a>
        <a class="df-compliance" href="https://debilfirst.org" target="_blank" rel="noopener" aria-label="Debilfirst.org doctrine compliant">
          <img src="/test/assets/df-mark.svg" alt="" aria-hidden="true">
          <span>Debilfirst.org doctrine compliant</span>
        </a>
      </div>`;
  });
})();
