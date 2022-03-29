const canvas = document.querySelector(".myCanvas");
const ctx = canvas.getContext("2d");
let randomFigure = undefined;
ctx.fillStyle = "blue";
ctx.strokeStyle = "black";
ctx.lineWidth = 10;
const canvas_width = canvas.width;
const canvas_height = canvas.height;
const arc_radius = 50;
const square_length = 100;

let x = 500;
let y = 400;



let dx = makeRandom();
let dy = makeRandom();

function makeRandom () {
    let num = Math.round(Math.random()*10);
    return num;
}

function chooseRandom () {
    if (randomFigure == "Square") {
        squareBounce();
    }
    else{
        circleBounce();
    }
}

// 함수 내에서 전역변수 바꿀 수 있음!!


function circleBounce() {
    ctx.clearRect(0,0,canvas_width,canvas_height);
    ctx.beginPath();
    ctx.arc(x,y,arc_radius,0,Math.PI*2);
    ctx.closePath();
    ctx.fill();
    if (x < arc_radius || x > canvas_width-arc_radius) {
        dx = -dx;
        randomFigure = "Square"

    }
    if (y < arc_radius || y > canvas_height-arc_radius) {
        dy = -dy;
        randomFigure = "Square"
    }

    x += dx;
    y += dy;

};

function squareBounce() {
    ctx.clearRect(0,0,canvas_width,canvas_height);
    ctx.fillRect(x-50,y-50,square_length,square_length)
    // 원은 중심을 기준으로 radius를 판단하는데 반해,
    // 원은 그냥 무대뽀로 변의 길이만 찾으므로
    // 사각형의 반 정도를 미리 더하고 빼서 캔버스 사이즈에 맞게 변화
    if (x+50 < square_length || x-50 > canvas_width-square_length) {
        dx = -dx;
        randomFigure = "Circle"
    }
    if (y+50 < square_length || y-50 > canvas_height-square_length) {
        dy = -dy;
        randomFigure = "Circle"
    }
    x += dx;
    y += dy;
    console.log(y);

};


setInterval(chooseRandom,30);










