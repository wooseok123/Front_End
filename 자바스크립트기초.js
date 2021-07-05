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

//   let과 const는 tdz(temporal dead zone)라고 해서
//   호이스팅의 영향을 받지 x, 즉 선언되기 전에 부르면 오류

//   하지만 호이스팅은 scope 내부에서 일어남

//   그러므로

//   let age = 30;

//   function showAge() {
//       console.log(age);

//       let age = 20;
//   }

//   showAge();

//   => age = 20으로 나옴
------------------------------------------------------------------------------------
1. var 
 선언 및 초기화가 동시에 일어남 => 값을 할당하지 않아도 undefined

 2. let
  선언 단계와 초기화가 분리 => 초기화는 실제 코드에 도달해야지만 하므로 ReferenceError 발생

3. const
   선언 초기화 할당이 전부 동시에 => 선언만 할 수가 없다


let, const => 블록 스코프(block-scoped)
 => 함수, if, for, while, try, cathch 등의 블록문에서 생성된 변수는 
 외부 접근 불가 => 즉 지역변수

 var => 함수 스코프 => 함수 내에서만 선언된 변수가 지역변수, 그 외는 모두 전역변수
------------------------------------------------------------------------------------
  객체 리터럴 => object 형식

  그러나 양이 많다면 => 생성자 함수

  ex) function User/*보통 생성자 함수는 앞글자가 대문자*/(name,age) {
      // this = {} object 생성
      this.name = name;
      this.age = age;
      this.sayName = function(){
          console.log(this.name);
      }
      // return this (this 반환) => 두 줄은 생략 => object 계속 일관적으로 만들 수 있다
  }

  let user1 = new User('Mike', 30); // new 연산자를 활용하여 함수 호출
  let user2 = new User('Jane', 30);
  let user3 = new User('Tom', 30);

  -----------------------------------------------------------------------------------

  computed property (계산된 프로퍼티)

  ex)

  let a = 'age';

  const user = {
      name : "mike",
      [a] : 30 //  age = 30 (변수 a에 할당된 값이 들어감)
  }

const user = {
    [1+4] : 5,
    ["안녕"+"하세요"] : 'Hello'
}

object.assgin() : 객체 복제

const user = {
    name : "mike",
    age : 30
}

const cloneUser = user;

=> 이러면 cloneUser는 앞의 user와 같은 메모리 값을 참조하게 됨 (즉 복사가 아님!!)

그러므로 복제하고 싶으면 const cloneUser = object.assgin({}/*초기값*/,user);
 => {} + {name : 'mike', age : 30} = 빈 객체 안에 객체가 들어가므로
   {
       name : 'mike',
       age : 30,
   }

object.assgin({gender = 'female'}, user); => gender가 default key 값으로 들어감
만약 키가 같다면? ex) name = 'Tom' => user가 덮어 씀
object.assgin({},info1,info2,---) => 다양한 값 할당 가능

object.entries() : 키/값 배열로 변환
ex) 
const user = {
    name : 'mike',
    age : 30,
    gender : 'male',
}
object.entries(user); => 
[
    ["name","mike"],
    [blahblah..],
]
---------------------------------------------------------------
object.fromEntries() : => 키,값 배열을 객체로 돌려줌

------------------------------------

object의 key값은 property 값이 가능
ex)

const hihi  = {
    1 : false,
    true : "hi"
}

object.keys(obj); => // ["1","true"]

인덱싱할 때도 "" 붙여서 인덱싱 // hihi["1"]

symbol 형태도 가능
const a = symbol(); 
const b = symblo();
// 유일한 식별자

console.log(a) // symbol()
console.log(b) // symbol()
// a === b => false (둘이 다름)

const id = symbol('id'); // 설명 id

const id = symbol('id');
const id2 = symbol('id');

// 둘이 다름

const id = symbol(id);

const user = {
    name : 'mike',
    age : 30,
    [id] : 'myid',
}

user // {name : 'mike', age:30 , Symbol(id) : "myid"}

// 신기한게 key가 symbol 형인 것은 .keys, .values, entries 다 건너뜀

for (let a in user) => 이것도 건너뜀 

// 이게 왜 쓸모가 있냐??

// 원본 데이터를 건드리지 않고 데이터값을 넣을 ㅜ수 있음
// 남이 만든 key 값을 변경해버릴 수도 있기 때문임. 

Symbol.for() : // 전역 심볼
// for 문 뒤에 key 값을 입력하여 같은 symbol을 공유할 수 있음

const id1 = symbol.for('id');
const id2 = symbol.for('id')
console.log(id1===id2) ===> true

반대로 변수명을 알고 싶다면 keyfor

ex) console.log(Symbol.keyfor('id1')) // id

// 하지만 전역심볼이 아닌 경우에는 key 값을 keyfor로 볼 수 없음
// 이때는 .description 속성을 활용해 볼 수 있음

// 숨겨진 symbol key 보는 법

=> object.getOwnPropertySymbols(user); // [Symbol(id)]
or   Reflect.ownKeys(user); // ["name","age",symbol(id)]

// 그러나 이렇게까지 구차하게는 안하니깐
// 원본 데이터를 건드리지 않고 추가하는 방법이 있다를 기억해라
------------------------------------------------------

toString() => 10진수를 2진수/16진수로 바꿈

let num = 10;

num.toString(); //"10"
num.toString(2); //"1010"

let num2 = 255;
num2.toString(16); // "ff"

Math // 내장객체

Math.PI
Math.ceil() // 올림
Math.floor // 내림
Math.round // 반올림

근데 소수점에서 올려달라고 할 수도 있다

let userRate = 30.1234,

=> Math.round(userRate * 100) / 100 => 30.12
아니면 userRate.toFixed(2) // 3번째부터 반올림, 즉 2번째 소수까지 고정
하지만 결과값이 const 이므로 number(userRate.toFixed(2));
이렇게 숫자값으로 만듦

-----------------------------------------------------

let x = number('x') //NaN 

그렇다고 해서 if (x == NaN) // 오류임
// 왜냐하면 isNaN(x) 만이 NaN 값을 체크할 수 있기 때문임

parseInt // 문자열을 숫자로 바꿔줌
number와 다른 점은 안에 문자열이 있어도 동작함
let margin = '19px';
ex) parseInt(margin); // 19
     Number(Margin); // NaN

// 근데 parseInt 는 읽을 수 있는 곳 까지 읽고 문자를 만나면 숫자를 반환함
//ㄱ 그러므로 f3 처럼 숫자로 시작하지 않으면 NaN 반환

// 두 번째 인수를 받아 x진수로 표현 가능

ex) let redColor = 'f3';
   parseInt (redColor,16); //243

parseFloat // 소수점까지 반환 parseInt 는 정수만 반환
     
Math.random() // 0~1사이의 숫자 반환

// 1~100 사이의 임의 숫자 반환??

Math.floor(Math.random()*100)+1 //+1은 0이 나올 수도 있기 때문
//floor를 해줘야 함! 
Math.pow // 인자를 2개 받음 인수와 승
Math.sqrt() // 제곱근

--------------------------------------------------------------
// 문자열 메소드

let html = '<div class="box_title>제목 영역</div'
// DOM과 관련해서는 문자열을 만들 때 ''로 해야 편함

let desc = "It's 3 o'clock."
// 영어 문장은 ""로 해야 편함

// ``은 여러줄 표현 가능 ex)

let desc = `오늘은 맑고 화창한
날씨가 계속 되겠습니다.
내일은 비소식이 있습니다.`

// 문자열로 한다면 \n 

let desc = '오늘은 맑고 화창한\n날씨가 계속 되겠습니다.'

// 문자열은 불변, 교체는 가능해도 내용 수정은 불가능함

ex) let desc = '안녕하세요.'

desc[3] = '용';
// consol.log(desc) => '안녕하세요.'

let desc = "Hi guys. Nice to meet you."

desc.toUpperCase() // 값을 바꾸는게 아님
desc.toLowerCase() // 각각 대문자 소문자


desc.indexOf(text) // 찾고자하는 text의 인덱스를 반환

desc.indexOf("to"); // 14

desc.indexOf('Man'); // -1 찾고자하는게 없다면 -1을 반환

ex)

function hasCola(str) {
    if (str.indexOf('콜라') > -1) {
        console.log("금칙어가 있습니다");
    }
    console.log('통과');
}

hasCola("와 사이다가 짱이야!");

// 

function hascola(strrr) {
    if (strrr.includes("콜라")) {
        //
    }
}

// if문에 집어 넣을 때에는 > -1 이정도로 표현해줘야 함

desc.slice(n,m);

// n은 시작 위치 , m은 없으면 문자열 끝까지 양수면 그 숫자까지(포함x)
// 음수면 끝에서부터 셈

let desc = "abcdefg";
desc.slice(1,2) => "b"

desc.slice(2,-2) => "cde"

substring(n,m) // slice와 동일하지만 n,m의 위치를 바꿔도 동작함
// 즉 n,m 사이라고 생각하면 편함
// 음수는 0으로 인식

trim() // 앞뒤 모두 공백지움

repeat(num) // 문자열 반복


---문자열 비교

"a" < "c" // 아스키 코드를 보면 c가 더 큼
"c" > "F" // 대문자보다 소문자가 더 큼

해당 아스키값을 보고싶으면

"a".codePointAt(0);

아스키값 => 문자 도출

String.fromCodePoint(97) 


-----------------------------------


splice(n,m) => 특정 요소를 지움
//n = 시작점 m = 개수 ()
ex) let arr = [1,2,3,4,5];
arr.splice(1,2);

// arr = [1,4,5]

splice(n,m,r1,r2,...) => 특정 요소를 지우고 그 자리에 추가

ex) arr.splice(1,3,100,200)

// arr = [1,100,200,5]

// splice 는 반환된 값임

arr.concat(arr2,arr3..) : //합쳐서 새배열 반환

let arr = [1,2];

arr.concoat([3,4];) //[1,2,3,4]

arr.forEach(fn) : //배열 반복

let users = ['mike','tom','jane'];
users.foreach((item,index,arr)) 

//ex

users.forEach((name,index) => {
    console.log(`${index}. ${name}`);
});


arr.indexOf / arr.lastIndexOf

let arr = [1,2,3,4,5,1,2,3,];

arr.indexOf(3);
arr.indexOf(3,3) // 두 번째 인수는 그 이후로 부터

arr.lastIndexOf() // 뒤에서 부터 탐색

arr.includes() : 포함하는지 확인

arr.find(fn) / arr.findIndex(fn) //true값을 반환, 없으면 undefined
// 조심해야 할 것은 1개만 찾고 끝난다는 거

let arr == [1,2,3,4,5];

const result = arr.find((item) => {
    return item % 2 === 0;
});

console.log(result);

let userlist = [
    {name : "mike", age:30},
    {name : "Jane", age:27},
    {name : "Tom", age:10},
];

const result = userlist.find((user) => {
    if (user.age < 19) {
        return true;
    }
    return false;
})

console.log(result);

--

const result = userlist.findindex((user) => {
    if (user.age < 19) {
        return true;
    }
    return false;
})

console.log(result);
// 그럼 만족하는 모든 요소를 반환하고 싶으면??

arr.filter(fn);

const = arr [ 1,2,3,4,5];

const result = arr.filter((name) => {
    if // 위와 동일
})

arr.reverse() // 역순으로 재정렬

arr.map(fn) // 함수를 받아 특정 기능 시행, 새로운 배열 반환

let userList = [
    {name: "Mike", age : 30},
    {name: "Jane", age : 27},
    {name : "Tom", age : 10},
];

let newUserList = userList.map((user,index) => {
    return Object.assign({}, user, {
        id : index + 1,
        isAdult: user.age > 19,
    });
});

console.log(newUserList);

//map은 실무에서 자주 사용됨!

let arr = ["안녕","나는","철수야"];

let result = arr.join();
=> // 배열을 () 안에 있는 걸 추가해서 합침

const users = "Mike,Jane,Tom,Tony";

let result = str.split(""); // 문자 하나하나 마다 자름
                       "," // ,기준으로 자름
Array.isArray() // array 인지 확인

ex)

let  user = {
    name : "Mike",
    age : 30,
}

let userlist = ["Mike","Tom","Jane"];

console.log(typeof user);
console.log(typeof userlist); // 값이 둘 다 같음 (object)

console.log(Array.isArray(user)) // array 여부 확인 가능

------------------------

arr.sort(); //배열 재정렬, 배열 자체가 바뀜

// 안에 있는 배열을 문자열로 받기 때문에 문제가 발생

ex) 

arr = [13,27,5,8];
arr.sort(); // [13,27,5,8]

//인수로 정렬 로직을 담은 함수를 받는다

function fn(a,b) {
    return a-b;
}// 두 요소를 전달해서 양,0,음수인지 알려주면 됨
// a가 음수이면 앞으로 가고, 같으면 가만히, a가 양수이면 뒤로 감
arr.sort(fn);

//귀찮고 힘들기 때문에 Lodash라는 라이브러리를 통해 보통 함

ex) arr.sortBy(arr); (숫자든 문자든 객체든 원하는 기준에 따라 정렬)
나중에 한 번 봐보자

let total = 0
arr.foreach((num) => {
    total+=num;
})

//reduce를 사용해서도 가능

let arr =[1,2,3,4,5]

const result = arr.reduce((prev,cur) => {
    prev += cur;
}, 0)

// prev는 누적계산값, cur은 현재값(=arr인덱싱한 값)
// 뒤의 0은 prev의 초기값 (0이 default임)

let userList = [
    {name: "Mike", age : 30},
    {name: "Jane", age : 27},
    {name : "Tom", age : 10},
];

let result = userList.reduce((prev,cur) => {
    if(cur.age > 19) {
        prev.push(cur.name);
    }
    return prev;
}, [])

let result = userList.reduce((total,user) => {
    return total += user.age;
}, 0)

let reuslt = userList.reduce((length,user) => {
    if (user.name.length ===3 ) {
        length.push(user.name);
    }
    return length
} , [])

// 각각 뭐쓸지는 상황에 맞게...

// reduceRight() => 배열 우측부터 함

----------------------------------------

//배열 구조 분해


let user = ['MIke', 'Tom', 'Jane'];

let [user1, user2, user3] = user;

// split도 배열 구조 분해가 가능함

let [a,b,c] = [1,2];

c = undefined

// default 값을 주는 경우도

let [a=3, b=4, c=5] = [1,2]; 
// a=1, b=2, c=5;

// 일부 반환값 무시

let [a,,c] = [1,2,3,4];
// a=1 c=3

let a = 1;
let b = 2;
[a,b] = [b,a] ; //바꿔치기

//객체 구조 분해

let user = {name:'Mike', age:30};
let {name, age} = user;
//순서를 신경쓰지 않아도 됨

// user의 key값만을 사용하지 않아도 됨

let {name:userName, age:userAge} = user;

let {name, age, gender} = user
//gender는 undefined 이므로 gender = ""
// default 값을 줌

// 나머지 매개변수 ...



// arguments
function showName(name) {
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
}
showName('Mike');
showName('Mike','Tom'); 
// 꼭 인자를 한 개만 주지 않아도 됨. 

//인자란?
//함수로 넘어 온 모든 인수에 접근
//함수 내에서 사용 가능한 지역 변수
//length, index
//array 형태의 객체 (array 아님)
//배열의 내장 메서드가 없다

// 나머지 매개 변수

function showName(...names) {
    console.log(names);
}

showName(); // [] 인자(arguments)를 쓸 경우엔 undefined 반환하는뎅 ㅋ
showName('Mike','Tom'); // ['MIke','Tom']


ex)

let result = 0;

function add(...num) {
    num.forEach((number) => {
          result += number;
    })
};

add(1,2,3,4,5,6,7,8,9,10);
console.log(result);

function add(...num) {
    let result = num.reduce((prev,cur) => {
        prev += cur;
    })
};

--------------------------------------------------

function User(name, age, ...skill) {
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const user1 = new User('Mike',30,'html','css')
const user2 = new User('Tom', 20, "JS", "React")
const user3 = new User('Tom', 10, 'English');

// 매개변수는 마지막에 위치해야 하며 뒤에 뭐가 와서도 안됨

let arr1 = [1,2,3];
let arr2 = [4,5,6];

//전개 구문 : 배열
let result = [0, ...arr1, ...arr2, 7,8,9];

// 전개 구문 : 객체
let user = {name:'Mike'};
let mike = {...user,age:30};

let arr = [1,2,3];
let arr2 = [...arr];
// 전개 구문 : 복제
let user = {name:'Mike',age:30};
let user2 = {...user};

user2.name = "Tom";

// 실용예제 arr1 -> [4,5,6,1,2,3] 으로 만들어라
let arr1 = [1,2,3];
let arr2 = [4,5,6];

arr1 = [...arr2,...arr1];

console.log(arr1);

// 이렇게 하면 안됨  -> [6,5,4,1,2,3]
arr2.forEach((num) => {
    arr1.unshift(num);
})

//굳이 할꺼면...

arr2.reverse().forEach((num) => {
    //
})


let arr1 = [1,2,3];
let arr2 = [4,5,6];

arr1 = arr2+arr1;
console.log(typeof arr1);

// 단순히 배열을 합치는 것은 str이 됨


let user = {name: 'mike'};
let info = {age : 30};
let fe = {"js", "React"};
let lang = {'Korean','English'};

user = Object.assign({},user,info,fe,lang);
---------------------------------------------------
let user = {name: 'mike'};
let info = {age : 30};
let fe = ["js", "React"];
let lang = ['Korean','English'];
let skills = []
const UserInfo = Object.assign({}, user, info, {
        skills : [...fe,...lang]
    });
console.log(UserInfo);

=>
let user = {name: 'mike'};
let info = {age : 30};
let fe = ["js", "React"];
let lang = ['Korean','English'];
let skills = []
const UserInfo = {
    ...user,
    ...info,
    skills : [
        ...fe,
        ...lang
    ]
};
console.log(UserInfo);
