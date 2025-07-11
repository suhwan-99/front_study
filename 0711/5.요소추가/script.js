// 실제로는 DB 또는 백엔드 서버쪽에서 보내주는 데이터임
const FRUITS = [
  {name: 'apple', memo: '빨갛고 맛있는 사과'},
  {name: 'mango', memo: '달달하고 맛있음'},
  {name: 'melon', memo: '그냥 맛있다'},
  {name: 'strawberry', memo: '새콤달달 맛있다'},
  {name: 'watermelon', memo: '시원하고 과즙이 미쳤다'}
];

for(let i = 0; i < FRUITS.length; i++){
  let card = ` <div class="col">
          <div class="card" style="width: 18rem;">
            <img src="./images/${FRUITS[i].name}.jpg" class="card-img-top">
            <div class="card-body">
  
              <h5 class="card-title">${FRUITS[i].name}</h5>
              <p class="card-text">${FRUITS[i].memo}</p>
              <button class="btn btn-primary cart">담기</button>
            </div>
          </div>
        </div>
  `;
  // 내가 한것
  // const cardTitle = document.querySelectorAll('.card-body h5');
  // const cardMemo = document.querySelectorAll('.card-body p');
  // const cardImg = document.querySelectorAll('img');
  // for(let i = 0; i < FRUITS.length; i++){
    // cardTitle[i].innerHTML = FRUITS[i].name;
  // cardMemo[i].innerHTML = FRUITS[i].memo;
  //   // setAttribute() : 속성을 추가, 수정
  // cardImg[i].setAttribute('src', `./images/${FRUITS[i].name}.jpg`);
  // };
  
  // innerHTML 은 문자 그대로 추가가 되서 안됨
  document.querySelector('.row').insertAdjacentHTML('beforeend', card);
}
const cart = document.querySelectorAll('.cart');
for(let i = 0; i < cart.length; i++){
  cart[i].addEventListener('click', (e) =>{
   let nameTag = e.target.previousElementSibling.previousElementSibling;
   let name = nameTag.innerHTML;
   let temp = localStorage.getItem('cart');
   if( temp != null){
    // 로컬스토리지에 있으면 먼저 그 정보들을 꺼내와야 함
    // 문자열 형태이므로 원본인 배열로 되돌리기
    temp = JSON.parse(temp);
    // 새로 장바구니에 담을 name을 추가
    temp.push(name);
    // 추가된 정보를 로컬에 다시 넣음
    localStorage.setItem('cart', JSON.stringify(temp));

   } else{
    localStorage.setItem('cart', JSON.stringify( [name] ) );
   }
  });
};
// beforebegin: 해당 요소 앞에 html을 넣어줌
// beforeend: 해당 요소 마지막(내부) 자식으로 추가
// afterbegin: 해당요소 첫번째 자식으로 추가
// afterend: 해당 요소 뒤에 넣어줌

//FRUITS안에 있는 data를 반복처리, i는 index로 써도 됨
FRUITS.forEach((data, i) => {
  console.log(data.name, i);
});




// 로컬스토리지에 저장 or 수정 (동일한 키를 넣으면 기존 데이터를 지움)
localStorage.setItem('key', 'value')
// 해당 키에 대한 값(value)을 리턴해줌
localStorage.getItem('key')
// 해당 키를 삭제
localStorage.removeItem('key')

let arr =[1,2,3,4,5];
let obj = {
  name : 'kim',
  age : 20
};
// 로컬스토리지에는 배열, 오브젝트를 넣어봤자 문자열 형태로 처리됨 > 사용이 힘듦
localStorage.setItem('arr', arr);
localStorage.setItem('obj', obj);

//JSON형식으로 변환
// arr인 배열을 문자열(JSON) 형식으로 변환
let arr_json = JSON.stringify(arr);
//배열은 아니지만 배열구조(대괄호)가 유지된 채로 문자열이 됨
localStorage.setItem('arr', arr_json);

arr = localStorage.getItem('arr');

//로컬스토리지에서 꺼내와도 아직까진 문자열(구조가 살아있음)
console.log(arr, typeof arr);

// 문자열인 형태를 다시 배열로 되돌려줌
arr = JSON.parse(arr);
console.log(arr, typeof arr);