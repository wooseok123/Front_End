const CStexts = [`생수를 마셔 미네랄을 보충하기 위해서는 상당히 많은 양의 물을 먹어야 합니다.
따라서 미네랄의 총 함량보다는, 각각의 무기물 함량을 봐야 합니다.
무기물은 마그네슘, 칼슘, 칼륨, 나트륨 등을 지칭하는 단어이고 이를 통칭하여 미네랄이라고 합니다.`,
`일반적으로 마그네슘이 많으면 쓴 맛, 칼슘과 칼륨이 많으면 단 맛을 냅니다.
 또한 마그네슘과 칼슘이 많으면 목넘김이 단단하며 적으면 부드럽습니다.
  대표적으로 에비앙은 마그네슘이 많아 쓰고 마그네슘과 칼슘이 많아 목넘김이 단단합니다.
  
  주의해야할 부분은, 석회질 성분(칼슘, 마그네슘)이 많은 물을 섭취한 사람에게서 결석 질환의 유병률이 높게 보고된 상황입니다. 결석이 있는 분들은 조심하시기 바랍니다.`,
`불소는 아직까지 의견이 분분합니다. 장점과 부작용에 대한 사례가 충돌하기 때문이죠.

아직까지도 학계에서 불소 포함과 미포함 생수에 대한 정확한 입장을 드러내지 않았습니다.

개인적으로 조사한 결과, 성인의 경우 소량의 불소는 치약에도 존재하니 큰 상관은 없으리라 생각하지만, 아기의 경우 소량도 위험할 수 있습니다
그래서 시중에 나오는 베이비워터의 경우 대부분 불소 함유량이 0입니다.`,
`페트병 생수는 직사광선을 맞으면 광분해가 되어 발암 물질이 나올 수 있습니다. 그러므로 가게 바깥에 비치된 생수는 일반 생수병에 비해 발암물질과 미세 플라스틱이 많습니다.

배송을 통해 먹으면 대부분 창고에서 보관되어 실어져 오기 때문에 걱정하지 않아도 됩니다. 그렇다 하더라도 보관은 직사광선이 없는 곳에 보관해야 합니다.

하지만 모든 생수병에서는 인체에 무해할 정도의 "미세플라스틱"이 검출되며
정수기를 사용하더라도 모든 플라스틱 입자는 거르지 못합니다.
거의 모든 식품에 미세 플라스틱이 극소량 존재한다는 사실, 그리고 이는 인체에 큰 영향이 없다는 사실을 인지하시길 바랍니다.`,
`PH는 산성과 알칼리성의 정도를 나타냅니다. PH가 7이면 중성, 7미만은 산성, 7이상은 알칼리성입니다.
정상인의 혈액 PH 수치는 7.35~7.45, 그러므로 생수의 이상적인 PH 농도도 7.35~7.45입니다.
WHO에서도 PH 관련 가이드라인은 내놓지 않았습니다. 허나 '물의 PH가 6.5~8.0 범위에 들도록 하여 수도관이 부식되지 않도록 권장합니다.'라는 문구를 봤을 때, 대략 그 사이일 것이라고 추정합니다.
시중에서 판매되는 강산성, 강알칼리성 물은 인체에 해롭고 영양 불균형으로 이어지므로 중성~약알칼리 물이 적당하겠습니다.`];


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
  const title = event.target.outerText;

  // 박스 부분이나 텍스트를 눌러도 똑같이 인식되도록 함
  const index = event.target.nodeName === "H2" ? 
  waterCS_contents.indexOf(event.path[1]) : waterCS_contents.indexOf(event.path[0]);

  modal_title.innerText = title;
  modal_content.innerText = CStexts[index];
  modalContainer.style.opacity = 1;
  modalContainer.style.pointerEvents = 'auto';
}));

const modalContainer = document.querySelector(".CS_modal");

const modalClose = document.querySelector(".close");
modalClose.addEventListener("click",() => {
  modalContainer.style.opacity = 0;
  modalContainer.style.pointerEvents = 'none';
})
