// prompt 는 css를 적용할 수 없고 제한적이므로 잘 사용하지 않는다.
    //    게다가 입력값을 적기 전까진 무한 로딩이다.

// typeof variable -> 해당 변수의 데이터 자료형을 볼 수 있다.
    // 띄어쓰기 해야함!

// str->int -> parseInt() + str -> int = NaN!(Not a Number)

// var은 절대 쓰지 말고, 대게 const를 쓰며 업데이트 할 필요가 있으면
 // let을 쓰도록

 // isNaN -> 함수인데, 인자를 하나 주면 숫자인지 아닌지 알려줌
   // 당연히 return 값은 boolean

/*
-----------------------

else if(조건문) {
 조건이 맞을 때 실행될 문
};

== elif

-----------------------

and = && 
or = ||

-------------------------

= -> allocate value
== -> are they same? (not type)
=== -> are they 'literally' same? (value+type)

-------------------------------------------------

document -> 연결된 hmtl의 문서 전체를 가져옴
즉, html element를 모두 변경, 수정, 읽을 수 있다

dir() -> ojbect화 시킴 

ex) console.dir(document)

------------------------------------------------------

html에서 id를 어떻게 가져올까?
document.getElementById("id");
 -> 해당 id를 가진 구역을 모두 가져옴 
 
 안의 내용을 바꾸고 싶다
 -> title.innerText = "바꿀 내용"
 
 -------------------------------------------------

 dir 속성을 통해 해당 태그 or object가 어떤 속성을 가지고 있는지
 둘러보는 것도 좋음!
 'on~~'으로 시작하는 것은 이벤트가 일어났을 때!

 getelementsbyclassname -> 특정 클래스를 array 형태로 받음(복수의 클래스)
  == getelementsbytagname

  queryselector -> element를 css 방식으로 검색
  ex) document.queryselector(".hello h1") ' . '  ->class '#' -> id
   ("div h1")

   ++ querySelector(".hello:first-child id") -> 이것도 됨
  안의 h1 까지.. 즉 자식 선택자까지 명시해주어야 함
  ++ 가장 먼저 찾은 값을 들고 옴(즉 1개)

  css값까지 바꿀 수 있음(왜냐하면 기본적으로 style 속성이 내재)
  ex) title.style.color (style 속성안에 또 객채로 object 값인..)

  만약 복수의 값을 가지고 오고 싶다 -> queryselectorAll
  -> array 값

  // addEventListener(a,b) -> 이벤트가 발생했음을 듣는 함수 ex) ("click", 함수);
  -> a라는 이벤트가 일어나면 b를 실행해라
  또한 함수명+()를 하면, 조건 상관없이 무조건 출력됨 그러므로 ()는 뺴자!
  또한 이를 쓰러면 queryselector 을 사용하자!

받고자 하는 이벤트 명을 찾는 가장 좋은 방법은..
이벤트가 일어나는 태그명 + mdn
ex) h1 html element mdn
우리가 원하는 것은 자바스크립트 형태의 html element임

google에서 검색해서 web APIs라는 문장이 포함된 페이지를 찾음
이후 상위 개념에서 event 속성을 찾으셈!

혹은 console.dir("element")를 통해 property 검색 가능
특히 event에 관련된 것은 앞에 on이 붙어 있는데,
실제로 쓸 때는 on을 빼고 써야 함

mouseenter -> 마우스가 밖->해당 영역으로 들어올 때 
mouseleave -> 마우스가 해당 영역 -> 밖으로 나갈 때 

html, css, js가 하는 일은 각각이 할 수 있도록..
js에서도 css를 건드릴 수 있지만
이는 style 속성 자체를 가지고 있는 css에서 하는게 맞지!


window가 가장 상위의 object임

-----------------------------------------------------

title.onclick = handleTitleClick 

=== title.eventListener("click",handleTitleClick);

둘 다 같은 기능을 하지만, 후자를 선호함

왜냐하면, .removeEventListener 를 통해 없앨 수 있기 때문

resize event -> 화면 크기가 바뀔 때 씀

document 는 htmlelement만 가져오므로 div, class 등을 검색할 수는 없음
ex) document.div... etc



 */

/*
const title = document.querySelector("#title");



function handleTitleColor () {
    const currentColor = title.style.color;
    console.log(currentColor);
    let newColor;
    if (currentColor == "red") {
        newColor = "blue";
    } else {
        newColor = "red";
    }
    title.style.color = newColor;
};

변수를 DOM 요소로 설정한 후, 직접적으로 값을 재할당하느냐, 간접적으로 하느냐에 따라
상황이 다르게 흘러가는 듯 
그리고 const 라고 해도 직접적으로 바꾸는게 아니면, 에러가 안나는 듯

직접적으로 값을 바꾸고 싶을 때는 DOM 자체를 이용하자
DOM 요소를 변수에 담으면 변수는 그릇일 뿐이지, 바로 내용물을 함부로 바꿀 순 없다.


title.addEventListener("click",handleTitleColor);

*/

/*

const h1 = document.querySelector(".title");

function handleTitleClick () {
    h1.classList.toggle("clicked");
};



// css에서 색깔 변경이 이루어지는 것이 맞기 때문에
// classname을 추가시키는 것으로 css를 적용시킴

// 또한 string으로 바로 값을 대조하기 보다는
// 변수에 집어 넣어 error 가능성을 최소화시키자 

// classname 자체를 바꿔버리면, 해당 클래스가 몇 개의 클래스를 가지던
// 1개의 클래스로 바꿔버림 ( 즉 폰트, 글씨체 등등 다른 클래스가 없어짐)
// -> classlist로 추가, 삭제 기능을 사용
// -> 원래 가지던 class는 그대로 계승


// 여러 속성에 대한 이해가 필요
// ex) classlist에 목표값이 contains 되어있으면 .remove(class)
// 있으면 add를 한다고 하려면 5~6줄의 코드가 필요하지만,
// toggle이라는 속성을 통해 쉽게 해결 가능

h1.addEventListener("click",handleTitleClick);

*/

// function onLoginClcik() {
//     const userName = loginInput.value;
//     if (userName === "") {
//         alert("You wrote nothing.");
//     } else if (userName.length > 15) {
//         alert("Your name is too long.");
//     }
// };

// 항상 user가 주는 값을 경계하고 타당한지 체크하는 습관!
// 위에 코드도 좋지만, 브라우저 자체가 해결하게 하는 것도 좋음
// ex) html에서 required + maxlength 를 줘버리면 브라우저가
// 알아서 문제를 줌


/* 
<form id="login-form">
<input
required
maxlength="15"
type="text"
placeholder="what is your name?"
/>
<button>Log In</button>
</form> 

form 요소를 사용하지 않으면, required 속성을 통한 메시지 도출 x
그러므로 꼭 form 요소를 사용하자
*/
 
{/* <form id="login-form">
<input
required
maxlength="15"
type="text"
placeholder="what is your name?"
/>
<button>Log In</button>
</form>
<!-- 여기서 문제점이 생기는데, form 요소에서 input+button이 있거나
input 속성에 submit이 있으면 form이 제출되고 웹페이지가 refresh됨 --> */}
// 그리고 굳이 button이 없어도 더 이상 input이 없다면 enter만 눌러도 submit됨
// 즉 click이랑 상관 없이 submit 될 때 우리가 값을 저장하고 픈 것임.
