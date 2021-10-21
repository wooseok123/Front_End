

const CStexts = ["생수를 마셔 미네랄을 보충하기 위해서는 상당히 많은 양의 물을 먹어야 합니다. 따라서 미네랄의 총 함량보다는, 각각의 무기물 함량을 봐야 합니다."];

// make navBar background highlight when scrolling over

const navList = []
const navBarList = document.querySelectorAll(".navBar__menu__item")
  .forEach((nav) => navList.push(nav));

// function changeBgColor(event) {
//   event.target.classList.toggle("transition");
//   // event.target.style.backgroundColor = "#FEF9EF";
// } 

// navList.forEach((nav) => nav.addEventListener('mouseover',changeBgColor));

// // navList.addEventListener("mouse")


const waterCS_contents = Array.from(document.querySelectorAll(".waterCS__content"));
const modal_title = document.querySelector(".modal_title");
const modal_content = document.querySelector(".modal_content");

waterCS_contents.forEach( (item) => item.addEventListener("click",(event) => {
  console.log(event);
  const title = event.target.outerText;
  const index = waterCS_contents.indexOf(event.path[1]);
  modal_title.innerHTML = title;
  modal_content.textContent = CStexts[index];
  modalContainer.style.display = "block";
}));

const modalContainer = document.querySelector(".CS_modal");

const modalClose = document.querySelector(".close");
modalClose.addEventListener("click",() => {
  modalContainer.style.display = "none"
})
