// 알림창 띄우기
// alert("자바 스크립트 파일 만듦");

// 출력문- 콘솔창에 띄움
console.log("콘솔창에 내용 띄우기");

// html에 출력하기
document.write("문서에 쓰기");

//변수 만들기
var 변수명; //옛날거
let 변수이름;

let msg = "hello";
console.log(msg);
msg = 20;
console.log(msg);

// 상수
const COLOR = 'red';
// COLOR = 'blue';
console.log(COLOR);

let n = 12.345;
console.log(typeof n);

// 실제로 나누기 0은 불가능 하지만
// js 수학적 연산은 전부 처리 가능
// 대신 결과가 안나오는건 특수 숫자 값으로 처리

console.log(n / 0);
console.log(typeof Infinity);
console.log("abc" / 2);
console.log( typeof NaN);

// 문자
// js에서는 문자(열)은 "", '', `` (백틱)
let str1 = "abc";
let str2 = 'abc';
// 백틱은 줄바꿈해도 사용 가능
let str3 = `abc`;

let age = 20;
let name = '홍길동';

console.log(name + '님의 나이는' + age + "살 입니다.");
console.log(`${name}님의 나이는 ${age +5 }살 입니다.`);

// 불린
let check = true;
console.log( 10 >= 5);
console.log(typeof check);

//null 값
// js 에서 null은 존재하지 않음, 비어있다, 알 수 없다 의 의미

let a = null;
// undefined: 값을 할당하지 않음
let x;
console.log(x);

// 모달창 띄우기
// alert: 메세지만 출력하고 확인버튼 1개

// prompt: 메세지를 출력하고 사용자에게 입력 받는 창, 확인과 취소 버튼이 있음
// 입력 받은 값을 콘솔창으로 리턴해서 보여줌, 취소를 누르면 null이 나옴
// prompt('메세지', 초기값);
// let result = prompt('메시지', 20);
// console.log(result);

// 문제1: 나이를 입력 받고 입력 받은 나이에 1더한 값은 콘솔창에 출력
// let result = Number (prompt('나이 입력'));
// console.log(`${result + 1} 살입니다`);

// confirm: 메세지를 출력하고 확인,취소 버튼이 있음
// 확인을 누르면 true/ 취소를 누르면 false
let re = confirm("메세지");
console.log(re);
