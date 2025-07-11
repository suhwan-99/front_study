const btn = document.querySelector('.navbar-toggler');
const list = document.querySelector('.list-group');
const li_tags= document.querySelectorAll(".list-group-item");
let open = false;
btn.addEventListener('click', () =>{
  // js문법
    list.classList.toggle('show');

    //jq문법
    // $('.list-group').toggleClass('show');
});
// for(let i = 0; i < li_tags.length; i++){
//   li_tags[i].addEventListener('click', () => {
//     alert('zzz');
//   });
// }

// jq문법
$(".list-group-item").on('click', () => {
  alert('ㅋㅋㅋ');
});