const countBtn = document.getElementById("countBtn");
const countNum = document.getElementById("countNum");

let realNum = 0;

countBtn.addEventListener("click",() => {
    realNum++;
    countNum.innerText = `Total Clicks : ${realNum}`;
})