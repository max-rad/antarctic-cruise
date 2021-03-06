import {ScrollLock} from '../../utils/scroll-lock';

const showMenu = () => {
  const scrollLock = new ScrollLock();
  const menuOverlay = document.querySelector('[data-overlay]');
  const navMain = document.querySelector('[data-menu="menu"]');
  const navToggle = navMain.querySelector('[data-menu="toggle"]');
  const anchorLinks = navMain.querySelectorAll('[data-link]');

  navMain.classList.remove('navigation--no-js');

  navToggle.addEventListener('click', function (evt) {
    evt.preventDefault();

    if (navMain.classList.contains('navigation--is-closed')) {
      navMain.classList.remove('navigation--is-closed');
      navMain.classList.add('navigation--is-opened');
      menuOverlay.classList.add('wrapper--overlay');
      scrollLock.disableScrolling();
    } else {
      navMain.classList.remove('navigation--is-opened');
      navMain.classList.add('navigation--is-closed');
      menuOverlay.classList.remove('wrapper--overlay');
      scrollLock.enableScrolling();
    }
  });

  menuOverlay.addEventListener('click', (evt) => {
    if (menuOverlay.classList.contains('wrapper--overlay')) {
      if (!navMain.contains(evt.target)) {
        navMain.classList.remove('navigation--is-opened');
        navMain.classList.add('navigation--is-closed');
        menuOverlay.classList.remove('wrapper--overlay');
        scrollLock.enableScrolling();
      }
    }
  });

  for (let anchor of anchorLinks) {
    anchor.addEventListener('click', (evt) => {
      evt.preventDefault();
      navMain.classList.remove('navigation--is-opened');
      navMain.classList.add('navigation--is-closed');
      menuOverlay.classList.remove('wrapper--overlay');
      scrollLock.enableScrolling();

      const anchorHref = anchor.getAttribute('href').substring(1);

      document.getElementById(anchorHref).scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    });
  }
};

export {showMenu};
