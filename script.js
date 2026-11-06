document.addEventListener('DOMContentLoaded', () => {
  // Inicialización de selectores
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  /**
   * Alterna la visibilidad del menú móvil
   */
  const toggleMenu = () => {
    navMenu.classList.toggle('open');
    const isOpen = navMenu.classList.contains('open');
    
    // Cambia el icono hamburguesa / cerrar
    const icon = menuToggle.querySelector('i');
    icon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  };

  /**
   * Cierra el menú al hacer clic en un enlace
   */
  const closeMenu = () => {
    if (navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      const icon = menuToggle.querySelector('i');
      icon.className = 'fa-solid fa-bars';
    }
  };

  // Event Listeners
  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});