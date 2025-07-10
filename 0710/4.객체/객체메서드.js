//객체(object) 에는 함수(메서드)도 넣을 수 있음

let user = {
  name: '홍길동',
  age: 20
}

user.hi = function() {
  console.log('hi');
}
user.hi();

let user2 = {
  name: '고길동',
  age: 20,
  hi: function(){
    console.log(this.name);
  }
}
user2.hi();

user = {name: '홍길동'}
user2 = {name: '고길동'}

//객체 참조  - 객체로 선언이 됐기때문에 a값을 바꾸고 b값을 출력해도 a값(객체)의 주소가 b안에 들어가있어 b도 변함O
let a = {name: '홍길동'};
let b = a;
a.name = '고길동';
console.log(b.name);

// 원시형태로 선언했기때문에 aa값을 바꾸고 bb 값을 출력해도 변함 x
let aa = '홍길동';
let bb = aa;


console.log(bb);
aa = '고길동';
console.log(bb);

//배열 : 자료형 구분없이 아무 자료형 다 넣을 수 있음
let arr = [1,2,3,4];
arr[0] = 20;
arr[1] = 'a';

// 배열방에 추가하기 - 맨 뒤에 추가가 됨
arr.push('zzz');
console.log(arr); 

// 배열방 보기
arr.pop();
console.log(arr);