// var userAnswer = confirm('havo qanday') ;
//  var hedding = document .querySelector('.hedding');

// if ( userAnswer == true)
// {hedding.textContent="yomg\'r yog\'ayabdi";}


// else{
//     hedding.textContent="yomg'r yo'q"; 
// }

// // hedding.textContent="hello world";


var userAnswer = (500+250)*11225;
var userYevro = (120*11685);
var userNatija = (userAnswer + userYevro);
// console.log(userNatija);

var useName = prompt('Ismingizni kiriting');
var useSumma = prompt('Sizda qancha pul bor');


var elhedding = document.querySelector(".hedding");
var elspan = document.querySelector(".span");

if ( useSumma>userNatija ){
    elhedding.textContent=('Oq yol');

} else{
    elhedding.textContent=('Biroz sabir qilasiz. Pul miqdoringiz kam');
}
elspan.textContent=useName

