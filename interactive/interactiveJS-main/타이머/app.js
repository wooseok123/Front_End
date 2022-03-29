window.onload = function () {
    const num = document.querySelector(".num");

    const button = document.querySelector(".startBtn")
    button.addEventListener("click",function () {
        interval();
    });

    let timer;

    function interval() {
        clearInterval(timer);
        // 계속 interval 함수를 실행하면 setInterval 함수가 중첩됨
        // 그러므로 clearInterval로 없애주는 거임

        let secNum = 0;
        timer = setInterval(function() {
            secNum ++;
            num.innerHTML = secNum;
        },10)
    
    }


}