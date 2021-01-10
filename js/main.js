const navbar = document.querySelector('.navbar');
const navbarBrand = navbar.querySelector('.navbar-brand');
const navLink = Array.from(navbar.querySelectorAll('.nav-custom'));
const navDownload = navbar.querySelector('.download');
const navFeatures = navbar.querySelector('.features');
const navContact = navbar.querySelector('.contact');

// function findSection() {
//     var section = document.querySelector();
//     document.getElementById("demo").innerHTML = testDiv.offsetTop;
//   }

// function scrollNav() {
//     window.scrollTo(0, 500);
//   }
//   scrollNav();

navDownload.addEventListener('click', () => {
    document.querySelector('.discover').scrollIntoView({ 
        behavior: 'smooth' 
      });
})

navFeatures.addEventListener('click', () => {
    document.querySelector('.unlimited').scrollIntoView({ 
        behavior: 'smooth' 
      });
})

navContact.addEventListener('click', () => {
    document.querySelector('.social').scrollIntoView({ 
        behavior: 'smooth' 
      });
})

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


