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
 */




 
