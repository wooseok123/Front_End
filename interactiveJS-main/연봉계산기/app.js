const input = document.querySelector("input");
const inputBtn = document.querySelector("button");
const showPerSecond = document.querySelector("p");

inputBtn.addEventListener("click",calculator);

function calculator () {
    const salary = Number(input.value);
    console.log(salary*10000);
    const perSecond = (salary*10000/(365*24*60*60));
    let total = 0;
    let count = 0;
    let show = setInterval(function() {
        ++ count 
        total += perSecond;
        showPerSecond.innerText = `${count}초에 ${total.toFixed(0)}원씩`
    },1000);

}