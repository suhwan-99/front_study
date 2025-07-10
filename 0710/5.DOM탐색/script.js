let box = document.getElementById('box');
box.style.background = 'red';
console.log(box);

// 선택자를 이용해서 요소를 선택할 수 있음
// const box2 = document.querySelector('#box');
// box2.style.color = 'white';
// // 선택자에 해당하는 요소 중 첫번째것 하나만 적용
// const bg = document.querySelector('.bg');
// bg.style.background = 'pink';

//선택자에 해당하는 모든 요소들 적용
const bg = document.querySelectorAll('.bg');
// bg[0].style.background = 'pink';
// bg[1].style.background = 'pink';

// for(let i = 0; i <bg.length; i++){
//   bg[i].style.background = 'pink';
// }

// for...in: Object 반복할때
for(let b of bg){
  b.style.background = 'pink';
}

const li = document.querySelectorAll('ul > li');
for(let l of li){
  // 해당 hmtl을 바꿔서 출력
  l.innerHTML ='zzz';
}