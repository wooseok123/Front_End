const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
]

// 이름과 배열에 있는 값이 같도록 할 것

const chosenImage = images[Math.floor(Math.random() * images.length)];



const bgImage = document.createElement("img"); 
//  자바스크립트에서 요소를 만들어 html에 끼워주기
bgImage.className = "overLay"
bgImage.src = `img/${chosenImage}`;
const bgDiv = document.querySelector("#bgimg");
bgDiv.appendChild(bgImage);
