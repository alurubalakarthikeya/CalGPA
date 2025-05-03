document.addEventListener('DOMContentLoaded', () => {
  const isPWA = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
  if (isPWA) {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.style.paddingTop = 'env(safe-area-inset-top)';
    }
    const navbarContents = navbar.querySelectorAll('h1, .menu, .options, .sidenav');
    navbarContents.forEach(content => {
      content.style.marginTop = '0';
    });
  }
});