let decrementbtn = document.querySelector("#decrement_btn");
let incrementbtn = document.querySelector("#increment_btn");
let reset = document.querySelector("#reset_btn");
let result = document.querySelector("#result");


let counter = 0

decrementbtn.addEventListener('click',  ()=>{
    counter--;
    result.textContent = counter
        console.log('coins')
})

incrementbtn.addEventListener('click',  ()=>{
    counter++;
    result.textContent = counter
        console.log('init')
})

reset.addEventListener('click',  ()=>{
    counter = 0;
    result.textContent = counter
        console.log('pull')
})


 












