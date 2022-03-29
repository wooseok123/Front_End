const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const inputRange = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

const INITIAL_COLOR = "#2c2c2c"
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
// 명시적으로 canvas 자체의 px값을 줌, css는 보이는 크기일 뿐임
// 안주면 다른 px 값으로 default 설정이 되어 왜곡되보임

ctx.strokeStyle = INITIAL_COLOR; // default로 지정
ctx.fillStyle =  INITIAL_COLOR;
ctx.lineWidth = 2.5;


let painting = false;
let filling = false;

function stopPainting (event) {
    painting = false;
}

function startPainting () {
    painting = true;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting) {
        ctx.beginPath(); // 시작점을 다시 연다는 의미
        ctx.moveTo(x, y); // 오직 움직일 때만 그 연 시작점의 위치로 ㄱㄱ
        // 이거 안하면 마우스 놓았다가 다시 그릴 때 점이 
        // 시작 위치부터 이어지는게 아니라, 마지막 위치에서부터 끌어당김
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }

}

function handleRangeChange () {
    const size = inputRange.value;
    ctx.lineWidth = size;   
    // ctx.linewidth = event.target.value
}

function handleColorClick (event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}
// default로 paint를 하고 싶은데 ㅠ.ㅠ 고쳐야 함!!
function handleModeClick () {
    if(filling === true) {
        filling = false;
        mode.innerText = "Fill"
        canvas.addEventListener("mousemove", onMouseMove);
        canvas.addEventListener("mousedown", startPainting);
        canvas.addEventListener("mouseup", stopPainting);
        canvas.addEventListener("mouseleave", stopPainting);
 

    } else {
        filling = true;
        mode.innerText = "Paint"
        canvas.addEventListener("click",handleCanvasClick);
    }
}

function handleCanvasClick () {
    if(filling) {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}


if(colors) {
    Array.from(colors).forEach(color =>
        color.addEventListener("click",handleColorClick)
    );
}
// clientX,Y 는 윈도우 전체에서의 위치값
// offsetX,Y 는 해당 영역에서의 위치값

if(inputRange) {
    inputRange.addEventListener("input", handleRangeChange);
}

if(mode) {
    mode.addEventListener("click",handleModeClick);
}

// Array.from (object -> Array로 만듦) 
// forEach => array 메소드임
