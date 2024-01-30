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
  Inventory Filter
*/
let filterItem = document.querySelector('.item-links');
let filterImages = document.querySelectorAll('.inventroy-item');

window.addEventListener('load', () => {
  // Get the section from the URL
  var urlParams = new URLSearchParams(window.location.search);
  var section = urlParams.get('section');

  // If a section was provided, set it as the active menu item
  if (section) {
    var activeLink = document.querySelector('.item-link.menu-active');
    if (activeLink) {
      activeLink.classList.remove('menu-active');
    }

    var newActiveLink = document.querySelector('.item-link[data-name="' + section + '"]');
    if (newActiveLink) {
      newActiveLink.classList.add('menu-active');
      filterImages.forEach((image) => {
        let filterImages = image.getAttribute('data-name');
        if ((filterImages == section) || section == 'all') {
          image.style.display = 'block'
        } else {
          image.style.display = 'none'
        }
      })
    }
  }

  filterItem.addEventListener('click', (selectedItem) => {
    if (selectedItem.target.classList.contains('item-link')) {
      document.querySelector('.menu-active').classList.remove('menu-active');
      selectedItem.target.classList.add('menu-active');
      let filterName = selectedItem.target.getAttribute('data-name');
      filterImages.forEach((image) => {
        let filterImages = image.getAttribute('data-name');
        if ((filterImages == filterName) || filterName == 'all') {
          image.style.display = 'block'
        } else {
          image.style.display = 'none'
        }
      })
    }
  })
})



/*Translations*/ 

var resources = {
  pt: {
    translation: {
      "alert": "Tudo está sendo cuidado",
      "home": "Início",
      "shop": "Loja",
      "contact": "Contacto",
      "offer": "Oferta",
      "lang": "English",
      "heroTitle": "Nossa história",
      "h1": "Jardim das Oliveiras é uma empresa com mais de 18 anos de experiência que transforma oliveiras em várias podas espetaculares com imaginação e dicas úteis para satisfazer nossos clientes.",
      "h2": "Também para não esquecer de manter oliveiras centenárias como naturais, cuidar e dar vida que bem merece.",
      'h3': "Estamos a ajudar em todo processo do transplante. Oliveira e um símbolo nacional bem reconhecido em todo mundo e um orgulho português.",
      "h4": "Somos uma equipa com experiencia, com ideias e inspiração que muda o seu espaço exterior numa beleza.",
      "h-btn": "Comprar plantas",
      "map": "Aqui está como você pode nos encontrar",
      "c-t1": "Coleção Oliveiras",
      "c-p1": "De todo o mundo",
      "c-b1": "Veja o Catálogo",
      "c-t2": "Coleção de Plantas",	
      "c-p2": "Grande Diversidade",
      "c-b2": "Descubra agora",
      "c-t3": "Pedra de decoração",
      "c-p3": "Vários tamanhos",
      "c-b3": "Dê uma olhada",
      "c-t4": "Processo de transplantação de oliveiras",
      "c-b4": "Olhe aqui",

      "s-title": "Os Mais Vendido",
      "s-text": "Ver Todos os Produtos",
      "s2-title": "Pode Interessar Você",
      "s2-text": "Ver Todos os Produtos",
      "newCollection": "Nova Coleção",
      "oliveDecorativePlants": "Oliveiras, Decorativas, Plantas Ornamentais",
      "exploreMore": "Explorar Mais",
      "specialOffer":"Oferta Especial: 25% de desconto em Todas as Plantas",
      "uniqueAdditions":"Descubra adições únicas para o seu jardim com um desconto especial de 25% em nossa exclusiva coleção de plantas exóticas.",
      "buySale":"Comprar Venda",
      "f1":"Por que comprar na Jardim das Oliveiras?",
      "f2":"Variedades de Plantas",
      "f3":" Explore nossa coleção exclusiva de plantas raras e exóticas, selecionadas por sua singularidade e beleza.",
      "f4":"Fontes Sustentáveis",
      "f5":"Estamos comprometidos com práticas conscientes do meio ambiente, obtendo plantas de maneira responsável para um mundo mais verde.",
      "f6":"Orientação Especializada em Jardinagem",
      "f7":"Beneficie-se de nossa equipe experiente que fornece orientações e dicas para o sucesso de sua jardinagem.",
      "o1":"Oferta por Tempo Limitado",
      "o2":"Palmeira juntamente com rochas decorativas",
      "o3":"Explore nossas requintadas Plantas, elaboradas com cuidado usando práticas naturais e sustentáveis, perfeitas para todos os entusiastas de jardim.",
      "b1":"Mais para descobrir",
      "b2":"Nossa loja",
      "b3":"Nossas mídias sociais",
      "b4":"Mídia social",
      "b5":"Nossa história",
      "b6":"Nossa loja",
      "ft1":"A loja",
      "ft2":"Pegue o caminho par",
      "ft3":"Links úteis",
      "ft4":"Novos Produtos",  
      "ft5":"Mais Vendidos", 
      "ft6":"Páginas Importantes",
      "ft7":"Sobre Nós",
      "ft8":"Contate-Nos",
      "ft9":"Termos & Condições",
      "ft11":"Insira seu email abaixo para ser o primeiro a saber sobre novas coleções e lançamentos de produtos.",
      "ft12":"Inscrever-se",
      "[placeholder]f13":"Insira seu endereço de email",

      //Contact Page
      "con1": "Vamos entrar em contato",
      "con2": "Estamos aqui para ajudar e auxiliar você. Deixe-nos saber que você precisa de ajuda e entraremos em contato com você.",
      "con3": "Conecte-se conosco :",
      "con4": "Contate-nos",
      "con5": "Nome de usuário",
      "con7": "E-mail",
      "con9": "Telefone",
      "con11":"Mensagem",

      //Portofolio
      "por1": "Nosso jardim",
      "por2": "Produtos",
      "por3": "Todos",
      "por4": "Árvores",
      "por5": "Plantas",
      "por6": "Decoração",
      "por7": "Processo de transplantação de oliveiras"
    }
  },
  en: {
    translation: {
      "alert": "Everything is taking care of",
      "home": "Home",
      "shop": "Shop",
      "contact": "Contact",
      "offer": "Offer",
      "lang": "Português",
      "heroTitle": "Our story",
      "h1": "Jardim das Oliveiras is a company with more than 18 years of experience that transforms olive trees into variousspectacular pruning with imagination and useful tips forsatisfy our customers.",
      "h2": "Also not to forget to keep centenary olive trees as natural, take care and give life that well deserves.",
      'h3': "We are helping in the whole process of transplantation. Olive tree and a well-known national symbol all over the world and a Portuguese pride.",
      "h4": "We are a team with experience, with ideas and inspiration that changes your exterior space into a beauty.",
      "h-btn": "Buy plants",
      "map": "Here is how you can find us",
      "c-t1": "Olivers Collection",
      "c-p1": "From all over the world",
      "c-b1": "See Catalog",
      "c-t2": "Plants Collection",
      "c-p2": "Great Diversity",
      "c-b2": "Discover now",
      "c-t3": "Decoratives Rocks",
      "c-p3": "Differens sizes",
      "c-b3": "Take a look",
      "c-t4": "Olive trees transplantation process",
      "c-b4": "Look here",
      "s-title": "Best Sellers",
      "s-text": "View All Products",
      "s2-title": "You May Also Like",
      "s2-text": "View All Products",
      "newCollection": "New Collection",
      "oliveDecorativePlants": "Olive, Decorative, Ornamental Plants",
      "exploreMore": "Explore More",
      "specialOffer":"Special Offer: 25% Off All Plants",
      "uniqueAdditions":"Discover unique additions for your garden with a special 25% discount on our exclusive collection of exotic plants.",
      "buySale":"Buy Sale",
      "f1":"Why shop at Jardim das Oliveiras?",
      "f2":"Varieties of Plants",
      "f3":"Explore our exclusive collection of rare and exotic plants, selected for their uniqueness and beauty.",
      "f4":"Sustainable Sources",
      "f5":"We are committed to environmentally conscious practices, sourcing plants responsibly for a greener world.",
      "f6":"Expert Gardening Guidance",
      "f7":"Benefit from our experienced team that provides guidance and tips for the success of your gardening.",
      "o1":"Limited Time Offer",
      "o2":"Palm tree along with decorative rocks",
      "o3":"Explore our exquisite Plants, crafted with care using natural and sustainable practices, perfect for all garden enthusiasts.",
      "b1":"More to Discover",
      "b2":"Our Store",
      "b3":"Our Social Media",
      "b4":"Social Media",
      "b5":"Our Story",
      "b6":"Our Store",
      "ft1":"The Store",
      "ft2":"How to arrive at us",
      "ft3":"Useful Links",
      "ft4":"New Products",
      "ft5":"Best Sellers",
      "ft6":"Important Pages",
      "ft7":"About Us",
      "ft8":"Contact Us",
      "ft9":"Terms & Conditions",
      "ft11":"Enter your email below to be the first to know about new collections and product launches.",
      "ft12":"Subscribe",
      "[placeholder]f13":"Enter your email address",

      //Contact Page
      "con1": "Let's get in touch",
      "con2": "We are here to help and assist you. Let us know what you need help with and we will get back to you.",
      "con3": "Connect with us :",
      "con4": "Contact Us",
      "con5": "Username",
      "con7": "Email",
      "con9": "Phone",
      "con11":"Message",

      //portofolio
      "por1": "Our Garden",
      "por2": "Products",
      "por3": "All",
      "por4": "Trees",
      "por5": "Plants",
      "por6": "Decorations",
      "por7": "Olive trees transplantation process"
    }
  }
};


i18next.init({
  lng: 'pt',
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