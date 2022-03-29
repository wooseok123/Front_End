window.onload = function() {
    const resetBtn = document.querySelector(".resetBtn");
    const startBtn = document.querySelector(".startBtn");
    const h1 = document.querySelector("h1");
    const arrow = document.querySelector(".arrow");
    let rotateNum;


    startBtn.addEventListener("click",function() {
        rotateNum = Math.round(Math.random()*360);
        h1.innerHTML = rotateNum + "deg";
        arrow.style.transform = "rotate("+rotateNum+"deg)";
        // 문자열+숫자 => 자동인식해서 문자열이 됨
    })

    resetBtn.addEventListener("click",function() {
        rotateNum = 0;
        h1.innerHTML = rotateNum + "deg";
        arrow.style.transform = "rotate("+rotateNum+"deg)";
    })
}