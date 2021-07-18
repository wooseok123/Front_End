const total = document.querySelector("h1");
const startBtn = document.querySelector("button");
let total_num = 0;
const dx = 1;


function handleNum () {
    setInterval(addNum,10);
    startBtn.innerHTML = "더하기 중지"
}

function addNum () {
    total_num += dx;
    total.innerHTML = total_num;
}





startBtn.addEventListener("click",handleNum);