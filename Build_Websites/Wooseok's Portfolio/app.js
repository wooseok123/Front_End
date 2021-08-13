'use strict';


// Make navbar trasnparent when it is on the top
const navbar = document.querySelector('#navBar');
const navbarHeight = navbar.getBoundingClientRect().height;
console.log(navbar);
document.addEventListener('scroll',() => {
  if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
})

// Handle scrolling when tapping on the navbar menu
const navbar_menu = document.querySelectorAll(".navBar__menu__item");
const navArr = Array.prototype.slice.call(navbar_menu);

const section = document.querySelectorAll("section");

function moveSection(event) {
  const btnIndex = Number(navArr.indexOf(event.target));
  window.scrollTo({
    top: section[btnIndex].offsetTop-86,
    behavior : 'smooth',
  })
}

for (const menu of navArr) {
  menu.addEventListener('click',moveSection);
}

// ELLIES'S
const navbarMenu = document.querySelector('.navbar__menu');
navbar_menu.addEventListener('click',(event) => {
  const target = event.target;
  const link = targer.dataset.link;
  if(link == null) {
    return;
  }
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView();
})



// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY

// https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements