// 조건문

//if 문
// let age = 15;
// if (age >= 20){
//   console.log("성인");
// } else if (age >= 12){
//   console.log("청소년");
// } else {
//   console.log("어린이");
// }

// //삼항연산자
// // 조건신 ? 참: 거짓
// let result = age >= 20 ? "성인" : "청소년";

//switch 문
// let a = 3;
// switch(a) {
//   case 1:
//     console.log("a는 1이다");
//     break;
//   case 2:
//     console.log("a는 2이다");
//     break;
//   default:
//     console.log("a는 1,2가 아니다");
// }

//반복문
// for문
// for(초기값; 조건식; 증감식){
//   반복할 코드
// }
// let result = 0;
// for(let i = 1; i <= 10; i++){
//    result = result + i;
// }
// console.log(result);

let sum = 0;
let sum1 = 0;
for(let i = 1; i <= 10; i++){
  sum1 = 0;
  for(let j = 1; j <= i; j++) {
    sum1 = sum1 + j;
  }
  sum = sum + sum1;
}
console.log(sum);

// while 문
// while(조건식){
//   반복할 코드
// }