const box = document.querySelector('.box');
let boxy = box.scrollHeight;
console.log(boxy);
let boxHeight = box.clientHeight;
console.log(boxHeight);
const chkbox = document.querySelector('input');
const btn = document.querySelector('#next');


let isDisabled = true;

box.addEventListener('scroll', () =>{
  let scroll = box.scrollTop;
  if( isDisabled && boxHeight + scroll > boxy - 5){
    isDisabled = false;
    document.querySelector('#chk').disabled = false;
  }
});


let agree = 0;
chkbox.addEventListener('click', () => {
  agree = 1;
});
btn.addEventListener('click', () => {
  if(agree === 1){
    alert('다음 페이지로 이동');
    agree = 0;
  } else if (agree === 0) {
    alert('동의 후 클릭해주세요');
  }
});