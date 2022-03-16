const smoothScroll = () => {
  const anchorHeaderLinks = document.querySelectorAll('.navigation__link');
  const anchorFooterLinks = document.querySelectorAll('.footer-navigation__link');

  for (let anchor of anchorHeaderLinks) {
    anchor.addEventListener('click', function (evt) {
      evt.preventDefault();

      const anchorHref = anchor.getAttribute('href').substring(1);

      document.getElementById(anchorHref).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

    });
  }

  for (let anchor of anchorFooterLinks) {
    anchor.addEventListener('click', function (evt) {
      evt.preventDefault();

      const anchorHref = anchor.getAttribute('href').substring(1);

      document.getElementById(anchorHref).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

    });
  }
};

export {smoothScroll};
