const showMenu = () => {
  const navMain = document.querySelector('[data-menu="menu"]');
  const navToggle = navMain.querySelector('[data-menu="toggle"]');

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
};

export {showMenu};
