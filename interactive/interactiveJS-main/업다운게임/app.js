
window.onload = function () {
    const randomNum = Math.round(Math.random()*10);
    const Input = document.querySelector("input");
    const Btn = document.querySelector("button");
    const resultArr = ["up","down","congratulation!"]

    Btn.addEventListener("click",IsItSame);
    
    function IsItSame () {
        const InputNum = Input.value;
        console.log(InputNum);
        if (InputNum < randomNum) {
            alert(resultArr[0]);
        }
        else if (InputNum > randomNum) {
            alert(resultArr[1]);
        }
        else {
            alert(resultArr[2]);
        }
}

}

