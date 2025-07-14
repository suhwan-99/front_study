// 정해진 시간이 흐른 뒤 해당 코드가 작동되도락 함
// setTimeout(콜백함수, 시간(ms));
// 5초 뒤에 콜백 함수 실행

const time = document.querySelector('.time');
let t = 5;

const interval = setInterval( () => {
  t--;
  time.innerHTML = t;
  // console.log(t);
}, 1000);
setTimeout( ( ) => {
  document.querySelector('.alert').style.display = 'none';
  clearInterval(interval)
}, 5000);


// 정해진 시간이 흐른 뒤 해당 코드가 반복하며 작동
// setInterval(콜백함수, 시간(ms));
let timer;
let cnt = 0;
const twoseTimer = setInterval( () => {
  console.log('2초마다 실행되는 코드');
  cnt++; 
  if(cnt >= 2){
    clearInterval(twoseTimer);
  };
}, 2000);
document.querySelector('.btn').addEventListener('click', () => { 
  // 코드를 지워줄 코드 clear*****
  clearTimeout(timer)
  timer = setTimeout( () => {
    console.log('클릭하면 3초 뒤에 나타남');
  }, 3000);

});


// 현재 시간 보기
const clock = document.querySelector('.clock');
function insertTime(){
  const date = new Date();
  const hour = String (date.getHours()).padStart(2,0);
  const m = String (date.getMinutes()).padStart(2,0);
  const s = String (date.getSeconds()).padStart(2.0);

  clock.innerHTML = `${hour} : ${m} : ${s}`;
};
insertTime();
setInterval(insertTime, 1000);

// 년도 추출
// console.log(date.getFullYear());

// // 월 추출
// console.log(date.getMonth() + 1);

// // 일 추출
// console.log(date.getDate());

// // 요일 추출 - (0: 일요일, 6: 토요일)
// console.log(date.getDay());

// // 시간 추출
// console.log(date.getHours());

// // 분 추출
// console.log(date.getMinutes());
// // 초 추출
// console.log(date.getSeconds());


