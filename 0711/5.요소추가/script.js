// 실제로는 DB 또는 백엔드 서버쪽에서 보내주는 데이터임
const FRUITS = [
  {name: 'apple', memo: '빨갛고 맛있는 사과'},
  {name: 'mango', memo: '달달하고 맛있음'},
  {name: 'melon', memo: '그냥 맛있다'},
  {name: 'strawberry', memo: '새콤달달 맛있다'},
  {name: 'watermelon', memo: '시원하고 과즙이 미쳤다'}
];
for(let i = 0; i < FRUITS.length; i++){
  document.querySelectorAll('.card-body h5')[i].innerHTML = FRUITS[i].name;
  document.querySelectorAll('.card-body p')[i].innerHTML = FRUITS[i].memo;
  // setAttribute() : 속성을 추가, 수정
  document.querySelectorAll('img')[i].setAttribute('src', `./images/${FRUITS[i].name}.jpg`);
}