const text = document.querySelector("h1");
const select = document.querySelector("select");

select.onchange = function(){
    text.style.color = this.value;
}