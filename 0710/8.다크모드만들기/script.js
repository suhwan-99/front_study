const btn = document.querySelector('.btn');
const body = document.body;
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