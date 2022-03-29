window.onload= function () {
    const prevBtn = document.querySelector(".prevBtn");
    const nextBtn = document.querySelector(".nextBtn");
    const h1 = document.getElementsByTagName("h1")[0];
    const bgColorArr = ["#cd58ed","#838cde","#83de9e","#ded883"];
    const section = document.getElementsByTagName("section");
    console.log(section);
    
    let pageNum = 0;
    let totalNum = bgColorArr.length;

    prevBtn.addEventListener("click",function() {
        if(pageNum > 0) {
            pageNum--;
        }
        pageChangeFunc();
    })
    nextBtn.addEventListener("click",function() {
        if(pageNum < totalNum-1) {
            pageNum++;
        }
        pageChangeFunc();
    })
    function pageChangeFunc() {
        h1.innerHTML = (pageNum +1) + " 페이지 입니다";
        document.getElementsByTagName("body")[0].style.background = bgColorArr[pageNum];
        console.log(section);
        window.scrollTo(0,section[pageNum].offsetTop);
        // 바로바로 감
        // offsetTop => 해당 section의 가장 윗값

        // window.scrollTo({
        //     top: section[pageNum].offsetTop,
        //     behavior:'smooth',
        // })
        // smooth 추가 가능
    }
    pageChangeFunc();
}