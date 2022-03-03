function  setup() {
    createCanvas(1600, 800);
    background(220);
}

let radius = 0;

function draw() {
    const randomX = random(400);
    const randomY = random(800);
    radius += 1;
    circle(radius, cos(radius)*1600, 30);
    // 뫼비우스의 띠가 돌아가게 만들고 싶엉
}

ㅎ

