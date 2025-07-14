document.querySelector('a').addEventListener('click', (e) => {
  e.preventDefault(); // 기본동작 막아주는 코드 a 링크의 기능이 막힘
  console.log('aa');
});

document.querySelector('p').addEventListener('contextmenu', (e) => {
  e.preventDefault();
});

document.querySelector('p').addEventListener('selectstart', (e) => {
  e.preventDefault();
});
