import {ScrollLock} from '../../utils/scroll-lock';
import {smoothScroll} from '../scroll/scroll';

const showMenu = () => {
  if (window.screen.width < 768) {
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
        menuOverlay.style.display = 'block';
        scrollLock.disableScrolling();
      } else {
        navMain.classList.remove('navigation--is-opened');
        navMain.classList.add('navigation--is-closed');
        menuOverlay.style.display = 'none';
        scrollLock.enableScrolling();
      }
    });

    window.addEventListener('mouseup', (evt) => {
      if (!navMain.contains(evt.target)) {
        navMain.classList.remove('navigation--is-opened');
        navMain.classList.add('navigation--is-closed');
        menuOverlay.style.display = 'none';
      }
    });

    for (let anchor of anchorLinks) {
      anchor.addEventListener('click', (evt) => {
        evt.preventDefault();
        navMain.classList.remove('navigation--is-opened');
        navMain.classList.add('navigation--is-closed');
        menuOverlay.style.display = 'none';
        scrollLock.enableScrolling();

        const anchorHref = anchor.getAttribute('href').substring(1);

        document.getElementById(anchorHref).scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      });
    }
  }
};

export {showMenu};
