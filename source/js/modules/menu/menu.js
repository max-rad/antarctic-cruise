const showMenu = () => {
  const navMain = document.querySelector('[data-menu="menu"]');
  const navToggle = navMain.querySelector('[data-menu="toggle"]');
  const anchorLinks = navMain.querySelectorAll('[data-link]');

  navMain.classList.remove('navigation--no-js');
  navToggle.addEventListener('click', function (evt) {
    evt.preventDefault();

    if (navMain.classList.contains('navigation--is-closed')) {
      navMain.classList.remove('navigation--is-closed');
      navMain.classList.add('navigation--is-opened');
    } else {
      navMain.classList.remove('navigation--is-opened');
      navMain.classList.add('navigation--is-closed');
    }
  });

  window.addEventListener('mouseup', (evt) => {
    if (!navMain.contains(evt.target)) {
      navMain.classList.remove('navigation--is-opened');
      navMain.classList.add('navigation--is-closed');
    }
  });

  for (let anchor of anchorLinks) {
    anchor.addEventListener('click', (evt) => {
      evt.preventDefault();
      navMain.classList.remove('navigation--is-opened');
      navMain.classList.add('navigation--is-closed');
    });
  }
};

export {showMenu};
