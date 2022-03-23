const smoothScroll = () => {
  const anchorLinks = document.querySelectorAll('[data-link]');

  for (let anchor of anchorLinks) {
    anchor.addEventListener('click', function (evt) {
      evt.preventDefault();

      const anchorHref = anchor.getAttribute('href').substring(1);

      document.getElementById(anchorHref).scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    });
  }
};

export {smoothScroll};
