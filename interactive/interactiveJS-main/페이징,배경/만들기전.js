window.onload = function () {
    const prevBtn = document.querySelector(".prevBtn");
    const nextBtn = document.querySelector(".nextBtn");
    const description = document.querySelector("h1");

    const colorArr = ["#cd58ed","#838cde","#83de9e","#ded883"];
    let totalPageNum  = colorArr.length;

    let pageNum = 0

    function goToPrev() {

        if (pageNum <= 1) {
            pageNum = 1;
        } else {
            --pageNum;
        }
        changeBgColor();
    }
    function goToNext() {
        if (pageNum >= totalPageNum) {
            pageNum = totalPageNum;
        } else {
            ++pageNum;

        }
        changeBgColor();
        // 기본적으로 실행하도록
    }
    function makeRandomNum () {
        const randomnum = Math.round(Math.random()*(totalPageNum-1));
        return randomnum;
    }
    function changeBgColor() {
        const body = document.querySelector("body");
        const num = makeRandomNum();
        body.style.backgroundColor = colorArr[num];

        describeh1();
        // color 색상을 바꿀 때마다 describeh1 실행
    }
    function describeh1 () {
        description.innerHTML = `${pageNum}페이지 입니다.`
    }
    
    prevBtn.addEventListener("click",goToPrev);
    nextBtn.addEventListener("click",goToNext);

    // 함수는 하나에 하나의 동작만 하도록...
    // 최대한 중복을 피할 것
}