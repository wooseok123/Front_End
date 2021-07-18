
window.onload = function () {
    let randomNum = returnNum(10);
    const Input = document.querySelector("input");
    const Btn = document.querySelector("button");
    const result = document.querySelector("#result");
    const resultArr = ["up","down","congratulation!"]

    Btn.addEventListener("click",IsItSame);
    
    function IsItSame () {
        const InputNum = Input.value;
        if (InputNum < randomNum) {
            result.innerHTML = resultArr[0];
        }
        else if (InputNum > randomNum) {
            result.innerHTML = resultArr[1];
        }
        else {
            result.innerHTML = resultArr[2];
            setTimeout(resetFunc,1000);
        }
    }

    function resetFunc () {
        Input.value = undefined;
        result.innerHTML = "한 판더! (1부터 10사이)"
        randomNum = returnNum(10);
    }

    function returnNum (num) {
        return Math.round(Math.random()*num);
    }

}

