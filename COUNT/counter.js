
let counter = 0;

function hello(){
    counter++;
    document.querySelector("h1").innerText = counter;
    // if (counter % 10 === 0 ){
    //     alert(`Count is now ${counter}`)
    // }
}




document.querySelector("button").onclick = hello;
// setInterval(hello,1000);