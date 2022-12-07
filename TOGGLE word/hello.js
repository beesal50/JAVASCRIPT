

function hello(){
    const text = document.querySelector('h1');
    if (text.innerHTML === "Hello !"){
            text.innerHTML = "GoodBye !"
    }
    else{
            text.innerHTML = "Hello !"
        }
    }

    document.querySelector("button").onclick = hello;