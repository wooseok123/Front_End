// window.onload => 
        
window.onload = function(){
    const resetBtn = document.querySelector(".startBtn");
    const h1Tag = document.getElementsByTagName("h1")[0];

    const handArr = ["가위","바위","보"];
            
    resetBtn.addEventListener("click",function() {
        const randomNum = Math.round((Math.random()) * (handArr.length - 1)); //round => 반올림
        h1Tag.innerHTML = handArr[randomNum];
    })
}