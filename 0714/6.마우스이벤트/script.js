document.querySelector('button').addEventListener('click', (e) =>{
  // 0: 왼쪽, 1: 가운데, 2:오른쪽
  console.log(e.button);
  console.log(e.altKey);
  console.log(e.ctrlKey);
  console.log(e.shiftKey);
  // 현재 보이는 화면 기준
  console.log(e.clientX, e.clientY);
  console.log(e.pageX, e.pageX);
  if(e.ctrlKey) {
    alert('컨트롤 클릭함');
  }
  if(e.altKey && e.shiftKey){
    alert('알트 쉬프트 클릭');
  }
});

// copy: 복사
// paste: 붙여넣기
document.querySelector('input').addEventListener('input', () => {
  // 변경이 될때마다 작동
  alert('input 이벤트 작동됨');
});

document.querySelector('input').addEventListener('change', () => {
  // 변경되고 포커스가 나가면 작동
  alert('change 이벤트 작동됨');
});

document.querySelector('input').addEventListener('cut', () => {
  // c + s나 삭제하기 했을때
  alert('잘라내기 이벤트 작동됨');
});