// const redBtn = document.querySelector("#red");
// const greenBtn = document.querySelector("#green");
// const blueBtn = document.querySelector("#blue");
const buttons = document.querySelectorAll("button");
const text = document.querySelector("#text");

// redBtn.onclick = function(){
//     text.style.color = "red";
// }
// greenBtn.onclick = function(){
//     text.style.color = "green";
// }
// blueBtn.onclick = function(){
//     text.style.color = "blue";
// }

buttons.forEach(function(button){
    button.onclick = function(){
        text.style.color = button.dataset.color;
    }
});


