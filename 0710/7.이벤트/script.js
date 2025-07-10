const btn = document.querySelector('.btn');

// addEventListener 함수를 이용해서 이벤트 설정을 함
// 이벤트 종류: 클릭, 더블클릭, 등등..
// 이벤트 핸들러: 이벤트 발생시 실행할 코드 > 함수

// 요소.addEventListener(이벤트종류, 이벤트핸들러)

//이벤트 삭제
// 요소.removeEventListener(이벤트종류, 이벤트 핸들러)

btn.addEventListener( 'click', function() {
  alert('zzzz');
});
// 위에 걸어둔 이벤트 삭제가 안됨
btn.removeEventListener( 'click', function(){
  alert('zzzz');
});

function handler(){
  alert("이건 지울 수 있음");
}
btn.addEventListener('click', handler);
btn.removeEventListener('click', handler);

const btn2 = document.querySelector('.btn2');
//이벤트 객체 : 이벤트가 발생활때 생기는 모든 정보를 가지고 있음
btn2.addEventListener('click', function(event){
  console.log(event.type);
  console.log(event.clientX);
  console.log(event.target);
});
