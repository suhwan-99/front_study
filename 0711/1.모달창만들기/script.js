const btnBoard = document.querySelector('#open');
// js문법
btnBoard.addEventListener('click', () =>{
  document.querySelector('.black-bg').classList.add('show');
});

// jqery문법 - on = addEventListener , $ = document.querySelector
// $('#open').on('click', () =>{
//   $('.black-bg').addClass('show');

// $('.black-bg').fadeIn(); === 스물스물 기어나오게 만듬 fadeOut은 사라지게

// });

const btnBoard2 = document.querySelector('#close');
//js문법
btnBoard2.addEventListener('click', () =>{
  document.querySelector('.black-bg').classList.remove('show');
});

// //jq문법
// $('#close').on('click', () => {
//   $('.black-bg').removeClass('show');
// });