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
        window.scrollTo({
            top: section[pageNum].offsetTop,
            behavior:'smooth',
        })
    })
    nextBtn.addEventListener("click",function() {
        if(pageNum < totalNum-1) {
            pageNum++;
        }
        pageChangeFunc();
        window.scrollTo({
            top: section[pageNum].offsetTop,
            behavior:'smooth',
        })
    })
    function pageChangeFunc() {
        h1.innerHTML = (pageNum +1) + " 페이지 입니다";
        document.getElementsByTagName("body")[0].style.background = bgColorArr[pageNum];
        // window.scrollTo(0,section[pageNum].offsetTop);
        // 바로바로 감
        // offsetTop => 해당 section의 가장 윗값


        // smooth 추가 가능

    }
    pageChangeFunc();

    window.addEventListener("scroll",function(event) {
        const scroll = this.scrollY;
    //     // const scroll2 = document.documentElement.scrollTop

    //     if (scroll < section[1].offsetTop) {
    //         pageNum = 0;
    //     }
    //     if (scroll > section[1].offsetTop) {
    //         pageNum = 1;
    //     }
    //     pageChangeFunc();
    // 반복적이고 일차원적
        for(let i = 0; i < totalNum; i++) {

            if(scroll > section[i].offsetTop - window.outerHeight/2 &&
                scroll < section[i].offsetTop - window.outerHeight/2 + section[i].offsetHeight) {
                    pageNum = i;
                    break;
                }



            // if(scroll > section[i].offsetTop &&
            //     scroll <section[i].offsetTop + section[i].offsetHeight) {
            //     pageNum = i;
            //     break;
            // }
            // 스크롤 내릴 때 일정 범위에서 페이징을 바꿈
        }
        pageChangeFunc();
    })
    

}