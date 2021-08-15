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
  const btnIndex = navArr.indexOf(event.target);
  scrolling(btnIndex);
}

for (const menu of navArr) {
  menu.addEventListener('click',moveSection);
}

// // ELLIES'S
// const navbarMenu = document.querySelector('.navbar__menu');
// navbar_menu.addEventListener('click',(event) => {
//   const target = event.target;
//   const link = targer.dataset.link;
//   if(link == null) {
//     return;
//   }
//   const scrollTo = document.querySelector(link);
//   scrollTo.scrollIntoView();
// })

// navbar 메뉴에 data-link 속성을 추가하여 각 섹션의 아이디를 달아줌

// Handling button move to contact section!

const ContactMeBtn = document.querySelector(".home__contact");

ContactMeBtn.addEventListener("click",() => {
  const btnIndex = 5;
  scrolling(btnIndex);
})


// Make section slowlyy fade to transparent as the window scrolls down

let height = 0;
for (const page of section) {
  height += page.scrollHeight-80;
  page.realHeight = height
}

document.addEventListener('scroll',() => {
  console.log(scrollY);
  section.forEach((section) => {
    if (window.scrollY < section.realHeight -300) {
      section.style.opacity = 1;
    } else {
      section.style.opacity = 1 - (window.scrollY / (section.realHeight+200));
    }
  })
})






function scrolling (btnIndex) {
  const index = Number(btnIndex);
  window.scrollTo({
    top: section[index].offsetTop-86,
    behavior : 'smooth',
  })
}

// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY

// https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements