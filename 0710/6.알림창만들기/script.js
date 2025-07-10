function showHide(state){
  // js 문법
  // document.getElementById('ab').style.display = state;

  //jQuery 문법
  $('#ab').css('display', state);
}
// function noshow(){
//   document.getElementById('ab').style.display = 'none';
// }

// document.querySelector('.alert').innerHTML = 'zzzz';

function showMsg(msg){

  //js문범
  // document.querySelector('.alert').innerHTML = msg;

  //jQuery문법
  $('.alert').html(msg);
}
