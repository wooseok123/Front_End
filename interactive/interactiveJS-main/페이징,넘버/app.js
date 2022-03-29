window.onload = function () {
    const page = document.querySelector("h1");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let pageNum = 0;
    let totalPageNum = 6;

    prevBtn.addEventListener("click",function() {
        if (pageNum > 0) {
            -- pageNum;
        } else {
            pageNum = totalPageNum -3;
            // 페이지 넘버보다 음수로 갈 경우 default page로 가게 해줌
        }
        page.innerText = `${pageNum} 페이지입니다.`
    })

    nextBtn.addEventListener("click",function() {
        if (pageNum < totalPageNum) {
            ++ pageNum;
        } else {
            pageNum = 3;
        }

        page.innerText = `${pageNum} 페이지입니다.`
    })

}