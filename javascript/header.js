$(function () {
  $('.btn-mobile').on('click', function () {
    $('#menu_mobile').toggleClass('active');

    const $icon = $(this).find('i');

    // Se você estiver usando Font Awesome 6/7:
    $icon.toggleClass('fa-bars fa-xmark');

    // Acessibilidade
    $(this).attr('aria-expanded', $('#menu_mobile').hasClass('active'));
  });
});



 // coloca efeito desfoque ao rolar
window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
