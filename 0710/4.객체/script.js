// 객체(object)
// key ,value 가 한쌍으로 구성

let user = {
  name: '홍길동', age: 20,
  'math score': 100
}

console.log(user.name);
console.log(user.age);
console.log(user['math score']);

//상수 const
const member = {
  name: '홍길동',
  age: 20
}
console.log(user);
user = 10;
console.log(user);

// 상수지만 큰 구조는 변경하지 않고 안쪽 내용만 수정 가능
member.name = '고길동';
console.log(member);

// 이름을 보고싶은지 나이를 보고싶은지 입력 받음
let key = 'name';
console.log(member[key]); // == member["name"]

let item = "사과";
let cart = {
  [item] : 5
}

console.log(cart);

//10명의 회원 정보가 각각 담긴 객체 10개 생성
function makeUserObject(name, age) {
  let obj = {
    name, // key로 설정할 이름과 value로 설정할 매개변수가 동일하면
    age   // 생략해서 하나만 써도 돰
  };
  return obj;
}

let a = makeUserObject('홍길동', 20);
let b = makeUserObject('고길동', 10);
console.log(a,b);

// key, value 추가
a.addr ='강남구';
console.log(a);

// key, value 삭제
delete a.addr;
console.log(a);

//구조분해 할당
//a를 분해
let { age, ...r } = a;
console.log(r);

// 분해한 a의 r에 age 추가
console.log({...r, age:30});

// in 연산자로 키가 있는지 없는지
console.log('name' in a);
console.log('adsa' in a);

for( let key in a){
  console.log(`${key} : ${a[key]}`);
}