// 함수 선언문
function hello(){
  console.log('hello');
}

// 함수 표현식
let hi = function(){
  console.log('hi');
}

// 콜백 함수
function yes(){
  console.log('예');
}
let no = function(){
  console.log('아니오');
}

function check(question, ok, cancel){
  if(question === 'y')
    ok();
  else 
  cancel();
}

check('y',yes, no);

function buy(item, price ,stock, callback){
  console.log(`${item}을 ${stock}개 구매함`);
  let total = price * stock;
  callback(total);
}

function pay(n){
  console.log(`총 금액 : ${n}원`);
}

function pay2(n){
  console.log(`총 금액(할인 적용) : ${n * 0.9}원`);
}

let 할인적용여부 = 'y';
if(할인적용여부 === 'y'){
  buy("컴퓨터", 100, 2, pay2);
} else{
  buy("컴퓨터", 100, 2, pay);
}

// setInterval(콜백함수, 시간)

setInterval(hello, 1000);
