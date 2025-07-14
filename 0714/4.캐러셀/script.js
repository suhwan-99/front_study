
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const pre = document.querySelector('.pre');
const next = document.querySelector('.next');
const carousel = document.querySelector('.carousel');

// 현재 보고있는 캐러셀의 번호
let sildeNo = 1;

btn1.addEventListener('click', () => {
  carousel.style.transform = 'translateX(0)';
  sildeNo = 1;
  
});
btn2.addEventListener('click', () => {
  carousel.style.transform = 'translateX(-100vw)';
  sildeNo = 2;
});
btn3.addEventListener('click', () => {
  carousel.style.transform = 'translateX(-200vw)';
  sildeNo = 3;
});

pre.addEventListener('click', () => {
  if(sildeNo === 1) {
    return;
  }
  carousel.style.transform = `translateX(-${sildeNo - 2}00vw)`;
  sildeNo--;
  // if(sildeNo === 2) {
  //   carousel.style.transform = 'translateX(0)';
  //   sildeNo--;
  // } else if( sildeNo === 3){
  //   carousel.style.transform = 'translateX(-100vw)';
  //   sildeNo--;
  // }
});

next.addEventListener('click', () => {
  if(sildeNo >= 3){
    return;
  }
  carousel.style.transform = `translateX(-${sildeNo}00vw)`;
  sildeNo++;
});


