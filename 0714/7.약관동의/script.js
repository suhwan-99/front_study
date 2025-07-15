const box = document.querySelector('.box');
let boxy = box.scrollHeight;
console.log(boxy);
let boxHeight = box.clientHeight;
console.log(boxHeight);
const chkbox = document.querySelector('#chk');
const btn = document.querySelector('#next');

let isDisabled = true;

box.addEventListener('scroll', () =>{
  let scroll = box.scrollTop;
  if( isDisabled && boxHeight + scroll > boxy - 5){
    isDisabled = false;
    chkbox.disabled = false;
  }
});


btn.addEventListener('click', () => {
  if(chkbox.checked){
    alert('다음 페이지로 이동');
    
  } else {
      alert('동의 후 클릭해주세요');
  }
});
// 화면 높이를 알 수 있음 445p
console.log(window.innerHeight);
console.log(document.body.clientHeight);
const innerHeight = window.innerHeight;
const bodyHeight = document.body.clientHeight;
window.addEventListener('scroll', () => {
  console.log(window.scrollY);

  const status = window.scrollY / (bodyHeight - innerHeight) * 100;
  console.log("비율 : ", status);

  document.querySelector('.status-bar').style.width = `${status}%`;
});
