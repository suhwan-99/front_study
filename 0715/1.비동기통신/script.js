// 옛날꺼
const xhr = new XMLHttpRequest();
xhr.open("POST","https://jsonplaceholder.typicode.com/posts");
xhr.setRequestHeader("content-type", "application/json");
const data = {
  userId: 100,
  title: '비동기통신 연습',
  body: '이것저것 보내는 중'
};
// 요청 함수 send()
xhr.send(JSON.stringify(data));
// 요청 후 받은 데이터를 받는 함수
xhr.onload = () => {
  console.log(xhr.status); // 응답 결과에 해당하는 상태코드 
  console.log(JSON.parse(xhr.response)); // 응답 데이터
}

// 요즘꺼
// fetch('요청 주소')
// .then((변수) => 성공시 처리할 코드)
// .then((변수) => 성공시 처리할 코드)
// .catch((e) => 요성 실패시 처리할 코드)

const getbtn = document.querySelector('.get');
const postbtn = document.querySelector('.post');

const title = document.querySelector('.title');
const id = document.querySelector('.id');
const userId = document.querySelector('.userId');
const body = document.querySelector('.body');


getbtn.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/posts/4')
  // then에 들어가는 코드는 응답이 올때까지 기다려야하니 그때 실행하는 코드
    .then((response) => response.json())
    // response.json() 값이 data로 이동
    .then((data) => {
      title.innerHTML = data.title;
      id.innerHTML = data.id;
      userId.innerHTML = data.userId;
      body.innerHTML = data.body;
      console.log(data.tltle); 
      console.log(data.id); 
      console.log(data.userId); 
      console.log(data.body); 
    })
    .catch((e) => {
      console.log(e);
    })

});

const post_userId = document.querySelector("[name='userId']");
const post_title = document.querySelector("[name='title']");
const post_body = document.querySelector("[name='body']");

postbtn.addEventListener('click', (e) => {
  // submit의 기본동작을 멈춤
  e.preventDefault();
  const data ={
    userId: post_userId.value,
    title: post_title.value,
    body: post_body.value
  };
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method:'post',
    body: JSON.stringify(data),
    headers: {
      "content-type" : "application/json"
    }
  }).then(response => response.json())
    .then(data => {
      console.log(data);
      alert('게시글 등록 완료!!');
    })
    .catch(e => {
      console.log(e);
      alert('게시글 등록 실패 ㅜㅜ');
    })
});

const async_test = document.querySelector('.async');
async_test.addEventListener('click', async () => {
  let a = 1;
  a = await fetch('https://jsonplaceholder.typicode.com/posts/4');
  a = await a.json();
  console.log(a);
});

function add(i) {
  for(i = 0; i < 10000; i++){

  }
  return i;
}