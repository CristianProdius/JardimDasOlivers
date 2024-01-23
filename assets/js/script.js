'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle  +
 */

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header sticky & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 150) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);

let lastScrolledPos = 0;

const headerSticky = function () {
  if (lastScrolledPos >= window.scrollY) {
    header.classList.remove("header-hide");
  } else {
    header.classList.add("header-hide");
  }

  lastScrolledPos = window.scrollY;
}

addEventOnElem(window, "scroll", headerSticky);



/**
 * scroll reveal effect
 */

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
      sections[i].classList.add("active");
    }
  }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);


/*
  Inventory FIlter
*/
let filterItem = document.querySelector('.item-links');
let filterImages = document.querySelectorAll('.inventroy-item');

window.addEventListener('load',()=>{
  filterItem.addEventListener('click',(selectedItem)=>{
    if(selectedItem.target.classList.contains('item-link')){
      document.querySelector('.menu-active').classList.remove('menu-active');
      selectedItem.target.classList.add('menu-active');
      let filterName = selectedItem.target.getAttribute('data-name');
      filterImages.forEach((image)=>{
        let filterImages = image.getAttribute('data-name');
        if((filterImages == filterName) || filterName == 'all'){
          image.style.display = 'block'
        } else{
          image.style.display = 'none'
        }
      })
    }
  })
})



/*Translations*/ 

var resources = {
  en: {
    translation: {
      "Home": "Home",
      "Shop": "Shop",
      "Contact us": "Contact us",
      "Offer": "Offer",
      "Lang": "Português"
    }
  },
  pt: {
    translation: {
      "Home": "Início",
      "Shop": "Loja",
      "Contact us": "Contate-Nos",
      "Offer": "Oferta",
      // Add more key-value pairs for other text you want to translate
      "Lang": "English"
    }
  }
};


i18next.init({
  lng: 'en',
  resources: resources
}, function(err, t) {
  // Initialize jquery-i18next
  jqueryI18next.init(i18next, $);
  
  // Localize your HTML
  $('body').localize();
});


$('#lang-switch').click(function() {
  var newLang = i18next.language === 'en' ? 'pt' : 'en';
  i18next.changeLanguage(newLang, function(err, t) {
    $('body').localize();
  });
});