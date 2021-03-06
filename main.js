'use strict'

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  console.log(window.scrollY);
  console.log(navbarHeight)
  if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }

  });

  // Handle Scrolling when tapping on the navbar menu

  const navbarMenu = document.querySelector('.navbar__menu');
  navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
      return;
    }

    scrollIntoView(link);
    //console.log(event.target.dataset.link);
    //const scrollTo = document.querySelector(link);
    //scrollTo.scrollIntoView({behavior:'smooth'});
  });

  // Handle click on "contact me" button on home
  const homeContact = document.querySelector('.home__contact');
  homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
  });
  
  function scrollIntoView(selector) { 
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth'});
  }