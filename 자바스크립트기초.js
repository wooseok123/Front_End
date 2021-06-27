const mathScore = prompt("수학 몇 점?");
const engScore = prompt("영어 몇 점?");
const result = (mathScore + engScore) / 2;

console.log(result);

// prompt는 str이기 때문에 숫자 합쳐짐
// ex) '50'+'40' -> 5040 
// 그럼에도 /2가 되는 것은 '자동 형변환' -> 원인을 찾기 힘든 에러 도출 가능성
// -> 명시적 형변환이 필요

// string() str로 형변환
// number() num으로 형변환 (boolean,str은 못함)
// Number(null) -> 0
// Number(undefined) -> NaN

//boolean

//false -> 0,"",null,undefined,NaN

//기본 연산자

// 나머지 -> % (쓰는 방법 : 홀/짝수 구분 , 어떤 값이 들어와도 5 이하 -> x%5)
// ** -> 승
// 우선순위-> 당연히 곱셈과 뺄셈

//증가, 감소 연산자  ++ --

// ex) let result = num ++ -> console.log(result)
// 값은 그대로임.. (++하기 전에 num 값을 저장)
// 그러므로 ++num을 하면 더해진 값이 저장

// 비교 연산자

// < > <= >= == !=

// 논리 연산자 (&& || !)

// 효율성을 따질 때, ex) 운전면혀가 있고 시력이 좋은 여군
// -> 여군인데 시력이 좋고 운전면허가 있는 사람
//순으로 코딩하는게 좋음 -> 여군부터 표본을 줄일 수 있기 때문

// 괄호로 우선순위에 대해 정립할 것

// 이름이 MIKE인 남자이거나 성인이면 통과
// -> (name === mike && gender = "m") || age >= 19


// 반복문(for, while, dowhile)

// for ( (초기값) ; (조건) ; (코드 실행 후 작업) {
    // 반복할 코드
// }

// ex) for (let i =0 ; i <10 ; i++) {
    // console.log(i);
// }

// let i = 0
// while (i<10) {
    //코드
    //i++
// }

// do while

// ex) let i= 0;

do {
    // 1. 코드 실행
    i++
} while (i<10) // 2. 조건 만족 (적어도 한 번은 실행한다)

// break 멈추고 빠져나옴, continue 멈추지만 반복문 실행 

switch(평가){
    case A :
        //a일시 실행코드
    case B :
        //b일시 실행코드
    ...
} // if else문으로 조건이 많을 떄는 switch 쓰는게 좋ㅇ므

switch(fruit) {
    case "바나나" :
        console.log(1000)
    case "콩나물" :
        console.log(2000)
    default :
        console.log("그런 과일 없음ㅋ ㅋ")
  };

  // 만약 break을 안 걸면 끝까지 다 찾아보니 걸어주는 것이 좋음
//   default -> 기본값
// 케이스 다르지만 도출값이 같을 경우

case "바나나" :
case "콩나물" :
    console.log(blah);

//함수

function/*함수*/ sayHello/*함수명*/(name)/*매개변수*/ {
    console.log(name);
}

function sayHello(name) {
    let msg = "hello ";
    if (name) {
        msg += name;
    }
    console.log(msg)
}

sayHello("mike");

// 전역변수가 let인 경우 함수 안에서도 변경되어 나올 수 있음
// 전역변수를 과도하게 사용하기 보단 함수에 맞는 지역변수 사용

function sayhello(name) {
    let newName = name || 'friend';
    let msg = `hello, ${newName}`;
    console.log(msg)
}

sayhello(); // newName은 매개변수가 없으면 null으므로 or 연산자 활용
// 즉 없을 시 default
function sayhello(name = 'frined') {
    let newName = name
    let msg = `hello, ${newName}`;
    console.log(msg)
} // 매개변수 name에 값이 없을 경우를 대비해 미리 default 값

//함수 -> 한번에 한 작업에 집중
// 읽기 쉽고 어떤 동작인지 알 수 있게 네이밍
// ex) showError getName createUserData checkLogin

//함수 선언문 vs 함수 표현식
function sayHi() {
    console.log("hello"); //함수 선언문
}
sayHi();

let sayHi = function(){
    console.log('Hello') //함수 표현식
}
sayHi(); 
//둘 다 같은데.. 차이점은
// 함수 선언문의 경우 sayHi();의 위치가 어디든 상관 x
// 실행 전 초기화 단계에서 코드의 모든 함수 선언문을 미리 check
// -> hoisting

//함수 표현식은 위->밑으로 읽기에 sayHi();가 함수 표현식보다 위에 있으면 x

// 둘 중 뭐사용? 별 상관 x 선언문이 좀 더 자유로움
// 화살표 함수

let add = (num1,num2) => {
    return num+num2;
}
// 코드가 1줄이고 return 하나 밖에 없기때문에.. {-> (로 바꿔도 됨

let add = (num1,num2) => (
    return num1+num2;
)

let add = (num1,num2) => num1,num2; //한 줄일 경우
let sayHello = (name) => `Hello, ${name}`;

//인수가 없는 경우
let showError = () => {
    alert('error!')
} // 이때는 괄호 생략 불가능 + 일반괄호 () 불가
// 화살 표현식은 ES6이후로 활발해졌기 때문에 무조건 알자

// object

// 접근 -> object명.key값 || object명['key값']
// 추가 -> object명.key값 = 바꿀val값 || 똑같이 인덱싱으로
// 삭제 -> delete object명.key값

const superman {
    name : name,
    age : age,
    gender : 'male', 
}
 
// -->

const superman {
    name,
    age,
    gender :'male' //key=val 인경우 단축 프로퍼티 설정 가능
}


//-------------------

function isAdult(user) {
    if (!('age' in user) || user.age <20) {
        return false;
    }
} return true; //짜피 return 은 끝내므로 else 가 필요 x

const Mike = {
    name : "Mike",
    age = 30,
};

const Jane = {
    name : "Jane"
};

console.log(isAdult(Mike)); 

// object를 매개변수로 받고 안에서 프로퍼티 값을 비교

for(x in Mike){
    console.log(x) // key값을 반환
}

//  ==

for (let x = 0; x < Mike.length ; x++) {
    console.log(Mike[x])
}


// 객체 메소드

// ojbect 안에 함수를 넣을 수도 있음

const superMan = {
    name : 'clark',
    age : 33,
    fly : function() {

    },
    hi(){

    }
}

//this

let boy = {
    name : 'mike',
    showName : function () {
        console.log(boy.name)
    }
};

let boy = {
    name : 'nezko',
    showName : function() {
      console.log(this.name)
    }
  };
  
  let man = boy;
  boy = null;
  console.log(boy);
  man.showName();

  // this -> 해당 객체 안에서만 참조되는 object가 됨


  // 객체를 표현하고 싶을 때는 화살표 함수 사용 x 즉 선언문 사용해
  // 안 그러면 this는 window 라는 전역변수를 사용하게 됨

  // array 

  // 값으로는 str, num, fun, obj 다 들어갈 수 있음

  // 반복문으로는 for of를 사용함 (for in과 헷갈리지 않도록 주의 => 객체용)

  // ex)
  // let days = ['월','화','수];

  for (let day of days){
      console.log(day);
  }

  // push -> 요소 뒤에 넣음 unshit -> 앞에 넣음 ..아니면 그냥 인덱싱