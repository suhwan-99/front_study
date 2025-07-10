//불린으로 형변환
// 뭔가 존재한다 싶으면 true
// 없다는 느낌은 전부 false
let a = Boolean(1); 
console.log(typeof a, a);

// 공백도 하나의 문자이므로 true
a = Boolean("    "); 
console.log(typeof a, a);

// 공백조차 없으면 false
a = Boolean(""); 
console.log(typeof a, a);

//Null, undefined, NaN 이런 애들은 false

//연산자
let x = y = z = 10;

//논리 연산자도 똑같음(&& ,|| ,!)
//비트 연산자( &, |, ~, ^< >>, << ) 2진수 계산

//동등 연산자( == )
let num1 = 10;
// 자료형 상관없이 같냐라고 물어봄
// != 도 같음


// prompt로 숫자 하나를 입력 받고 입력 받은 숫자와 num값과 같은지 다른지 출력
// let num2 = Number (prompt("숫자 하나 입력"));
let num2 = "10";
console.log(num2 == num1)
console.log(false == 0);
console.log("" == 0);

// === 연산자 : 일치연산자의 염격버전(자료형까지 구분)
console.log(num2 === num1)
console.log(false === 0);
console.log("" === 0);