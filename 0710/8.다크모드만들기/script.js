const btn = document.querySelector('.btn');
const body = document.body;

// 교본용
//   다크모드면 true, 아니면 false
//   let isDark = false;
// btn.addEventListener('click', function(e){
//   if(isDark){
//     body.style.background = 'white';
//     body.style.color = 'black';
//     btn.value = '다크모드';
//     isDark = !isDark;
//   } else { 
//     body.style.color = 'white';
//     body.style.background = 'black';
//     btn.value = '라이트모드';
//     isDark = !isDark;
//    }
// }
btn.addEventListener('click', function(e){
  body.style.color = 'white';
  body.style.background = 'black';
  document.querySelector('.r-btn').style.display = 'block';
  document.querySelector('.btn').style.display = 'none';
});

const btn2 = document.querySelector('.r-btn');
btn2.addEventListener('click', function(e){
  body.style.color = 'black';
  body.style.background = 'white';
  document.querySelector('.btn').style.display = 'block';
  document.querySelector('.r-btn').style.display = 'none';
})