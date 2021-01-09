const navbar = document.querySelector('.navbar');
const navbarBrand = navbar.querySelector('.navbar-brand');
const navLink = Array.from(navbar.querySelectorAll('.nav-custom'));

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 56 || document.documentElement.scrollTop > 56) {
    navbar.classList.add('navbar-scroll');
    navbarBrand.classList.add('navbar-brand-scroll');
    navLink.map(item => item.classList.add('nav-custom-scroll'));
  } else {
    navbar.classList.remove('navbar-scroll');
    navbarBrand.classList.remove('navbar-brand-scroll');
    navLink.map(item => item.classList.remove('nav-custom-scroll'));
  }
}
// function scrollFunction() {
//   if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
//     navbar.style.background = "#fff";
//   } else {
//     navbar.style.background = "transparent";
//   }
// }
