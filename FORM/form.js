const form = document.querySelector("form");
const text = document.querySelector("h1");

form.onsubmit = function() {
    const fname = document.querySelector("#fname").value;
    const lname = document.querySelector("#lname").value;
    alert(`Hello ${fname} ${lname} , Welcome to our page !`)
    let show = `Your name is saved as ${fname} ${lname} .`
    text.innerHTML = show;


    // STOP FROM SUBMITTING
    return false;
}