const tasks = document.querySelector("#tasks");
const addTask = document.querySelector("#task");
const form = document.querySelector('form');
const button = document.querySelector("#submit");

form.onsubmit = () => {
    const task = addTask.value;
    const li = document.createElement('li');
    li.innerHTML = task;

    if(task.length > 0){
        tasks.append(li);
    }



    // stop from submitting
    return false;
}