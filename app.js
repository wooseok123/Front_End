const canvas = document.querySelector(".myCanvas");
const ctx = canvas.getContext("2d");
const figureArr = ["Circle","Square","Triangle"];
ctx.fillStyle = "red";
ctx.strokeStyle = "yellow";
ctx.lineWidth = 10;
const canvas_width = canvas.width;
const canvas_height = canvas.height;
const arc_radius = 50;
const square_length = 100;

let x = 500;
let y = 400;

let dx = 1;
let dy = 1;

let change = false;

// function makeRandomFigure () {
//     const randomNum = Math.round(Math.random() * figureArr.length);
//     console.log(randomNum);
//     return randomNum;
// }

// function randomFigure (num) {
//     const randomFigure = num;
//     if (randomFigure == "Triangle") {
//         setInterval(triangleBounce,1);
//     }
//     else if (randomFigure == "Square") {
//         setInterval(squareBounce,1);
//     }
//     else {
//         console.log("이거지?")
//         setInterval(circleBounce,1);
        
//     }
// }

function circleBounce() {
    ctx.clearRect(0,0,canvas_width,canvas_height);
    ctx.beginPath();
    ctx.arc(x,y,arc_radius,0,Math.PI*2);
    ctx.closePath();
    ctx.fill();
    if (x < arc_radius || x > canvas_width-arc_radius) {
        dx = -dx;
    }
    if (y < arc_radius || y > canvas_height-arc_radius) {
        dy = -dy;

    }
    x += dx;
    y += dy;

};

// function squareBounce() {
//     ctx.clearRect(0,0,canvas_width,canvas_height);
//     ctx.fillRect(x,y,square_length,square_length)
//     if (x < square_length || x > canvas_width-square_length) {
//         dx = -dx;
//         randomFigure;
//     }
//     if (y < square_length || y > canvas_height-square_length) {
//         dy = -dy;
//         randomFigure;

//     }
//     x += dx;
//     y += dy;

// };

// function triangleBounce() {
//     ctx.clearRect(0,0,canvas_width,canvas_height);
//     ctx.beginPath();
//     ctx.arc(x,y,arc_radius,0,Math.PI*2);
//     ctx.closePath();
//     ctx.fill();
//     if (x < arc_radius || x > canvas_width-arc_radius) {
//         dx = -dx;
//         randomFigure;
//     }
//     if (y < arc_radius || y > canvas_height-arc_radius) {
//         dy = -dy;
//         randomFigure;

//     }
//     x += dx;
//     y += dy;

// };

setInterval(circleBounce,1);









