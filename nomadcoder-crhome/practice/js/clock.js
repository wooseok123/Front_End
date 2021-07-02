const clock = document.querySelector("h2#clock");

function sayHello() {
    console.log("hello");
}

// setInterval(sayHello,1000); interval -> 서버확인 or 주식 api 2초마다 갱신 등
setTimeout(sayHello,5000);

function whatTime () {
    const dateToday = new Date();

    // padStart(), padEnd(); -> 자리수에 따라 숫자,문자열을 추가시킴
    const hoursToday = String(dateToday.getHours()).padStart(2,"0")
    const minutesToday = String(dateToday.getMinutes()).padStart(2,"0")
    const secondsToday = String(dateToday.getSeconds()).padStart(2,"0") // String이지 string
    clock.innerText = `${hoursToday}:${minutesToday}:${secondsToday}`

};

whatTime();
setInterval(whatTime,1000);
