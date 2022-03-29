window.onload = function() {
    const prevBtn = document.querySelector(".prevBtn");
    const nextBtn = document.querySelector(".nextBtn");
    const h1 = document.getElementsByTagName("h1")[0];
    const bgColorArr = ["#cd58ed","#838cde","#83de9e","#ded883"];

    let pageNum = 0;
    let totalNum = bgColorArr.length;

    prevBtn.addEventListener("click", function() {
        if(pageNum > 0) {
            pageNum --;
        } else {
            pageNum = totalNum-1;
        }
        bgColorChange();
    })
    nextBtn.addEventListener("click",function() {
        if(pageNum < totalNum-1) {
            pageNum ++
        } else {
            pageNum = 0;
        }
        bgColorChange();
    })

    function bgColorChange(){
        h1.innerHTML = pageNum + "페이지입니다.";
        document.getElementsByTagName("body")[0].style.backgroundColor = bgColorArr[pageNum];
    }
    bgColorChange();
}