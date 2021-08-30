'use strict';


// Make navbar trasnparent when it is on the top
const navbar = document.querySelector('#navBar');
const navbarHeight = navbar.getBoundingClientRect().height;
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
//   const link = target.dataset.link;
//   if(link == null) {
//     return;
//   }
//   const scrollTo = document.querySelector(link);
//   scrollTo.scrollIntoView();
// })

// navbar 메뉴에 data-link 속성을 추가하여 각 섹션의 아이디를 달아줌

// show navbar list when clicking toggle btn
const toggleBtn = document.querySelector('.navbar__toggle-btn');
const navbarMenu = document.querySelector('#navBar');
toggleBtn.addEventListener('click',() => {
  navbarMenu.classList.toggle('visible');
})

// remove navbar list when scrolling 

document.addEventListener('scroll',() => {
  if(navbarMenu.classList.contains('visible')){
    navbarMenu.classList.remove('visible');
  }
})

// Handling button move to contact section!

const ContactMeBtn = document.querySelector(".home__contact");

ContactMeBtn.addEventListener("click",() => {
  const btnIndex = 5;
  scrolling(btnIndex);
})


// Make section slowlyy fade to transparent as tnavBar__menuhe window scrolls down



document.addEventListener('scroll',() => {
  let height = 0;
  for (const page of section) {
    height += page.clientHeight;
    page.realHeight = height;
  }

  section.forEach((page) => {
    if (window.scrollY < page.realHeight - page.clientHeight * 0.2) {
      page.style.opacity = 1;
    } else {
      page.style.opacity = 1 - (window.scrollY / (page.realHeight));
    }
  })
})

// show "Arrow up" button when scrolling down

const ArrowBtn = document.querySelector('.arrow-Up');

document.addEventListener('scroll',() => {
  if (window.scrollY > section[0].realHeight/2) {
    ArrowBtn.classList.add("showUp");
  } else {
    ArrowBtn.classList.remove("showUp");
  }
})

// handle click on the "arrow up" button
ArrowBtn.addEventListener('click',() => {
  window.scrollTo({
    top : section[0].offsetTop,
    behavior : "smooth",
  })
})

// Project
const workBtnContainer = document.querySelector(".work__categories");
const categories = document.querySelectorAll(".category__btn")
const projectContainer = document.querySelector(".work__projects"); 
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click',(event) => {
  const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;
  if(filter == null) {
    return;
  }
  projectContainer.classList.add('anim-out');

  const selected = document.querySelector('.category__btn.selected');
  selected.classList.remove('selected');
  const target = event.target.nodeName === "BUTTON" ? event.target : event.target.parentNode;
  target.classList.add('selected');

  categories.forEach((category) => {
    if(filter == category.dataset.filter) {
      category.classList.add('actvie');
    } else {
      category.classList.remove('actvie');
    }
  });
  
  setTimeout(() => {
    projects.forEach((project) => {
     if(filter == "*" || filter == project.dataset.type) {
       project.classList.remove('invisible')
     } else {
       project.classList.add('invisible')
     }
     projectContainer.classList.remove('anim-out');
    });
  },300)
  // 자바스크립트의 코드는 동기적으로 실행되기 때문에 anim-out을 함과 동시에
  // 원래는 invisible도 함께 먹여지지만.. 
});
// display 속성을 none으로 하고 동시에 opacity도 0으로 하여 css 적용


//   projects.forEach((project) => {
//     if(filter == "*") {
//       project.style.display = "flex";
//     } else if (filter == project.dataset.type) {
//       project.style.display = "flex";
//     } else {
//       project.style.display = "none";
//     }
//   })
//   // 숫자버튼은 span이 먹여져있기 때문에 undefined로 출력되는 문제 해결
//   // display를 사용하면 말햇듯이 css 적용이 힘듦..
// });




function scrolling (btnIndex) {
  const index = Number(btnIndex);
  window.scrollTo({
    top: section[index].offsetTop-86,
    behavior : 'smooth',
  })
}

// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY

// https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements