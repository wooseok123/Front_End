const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");
const link = document.querySelector("a");
const showUserName = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "userName"
// 보통 string만 포함된 변수는 대문자로 쓴다(관습임)
// 보통 중복될 때는 변수를 하나 만들자 -> 실수를 덜 만들고 str이라는 사실을 상기시킴

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    window.localStorage.setItem(USERNAME_KEY,userName);
    paintGreetings(userName);
};

function paintGreetings (userName) { // 인자를 안넣으면 savedUserName이 정의되기 전이라 한 번 오류나는 듯
    showUserName.innerText =`Hi ${userName}`;     // showUserName.innerText = "Hi "+userName; // 이건 별로임..
    showUserName.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY); 

if ( savedUserName === null ) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    paintGreetings(savedUserName);
}


// 아무리 function () 안에 없다곤 해도
// 발생한 일에 대해 필요로 할 정보를 인자로 이미 주고 있음
// addeventlistener의 항상 첫 번째 인자는 그 정보!
// function에서 (evt) 이렇게 공간을 만들어주면 받긴 함

// preventDefault -> event가 일반적으로 수행하는 동작을 막는 함수
// ex) 새로고침하는 행위, 다른 사이트로 넘어가는 행위


// getElementById -> id 안의 어떤 tag 를 같이 못씀 오직 id만 쓸 수 있다
// alert는 모든 js를 중단하기 때문에 잘 쓰지 않는다. 