//Qs1. Try out the following events in Event Listener on your own :
//
// - mouseout
// - keypress
// - Scroll
// - load

let inp = document.querySelector("input");

inp.addEventListener("keypress", function(event){
    console.log("key was pressed");
})

let div = document.querySelector("#box");

div.addEventListener("mouseout", function(){
    console.log("Mouse went outside the box");
})

document.addEventListener("scroll", function (){
    console.log("page is scrolled");
})

window.addEventListener("load", function(){
    console.log("page is loaded");
})


//Qs2. Create a button on the page using JavaScript. Add an event listener to the button
// that changes the button’s color to green when it is clicked.


const btn = document.createElement("button");
btn.innerText = "Click me!";
document.querySelector("body").append(btn);

btn.addEventListener("click", function(){
    btn.style.backgroundColor = "green";
})


//Qs3. Create an input element on the page with a placeholder ”enter your name” and an
// H2 heading on the page inside HTML.
// The purpose of this input element is to enter a user’s name so it should only input
// letters from a-z, A-Z and space (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside
// the heading.
// [Please note that no other character apart from the allowed characters should be
// visible in the heading]

inp2 = document.createElement("input");
inp2.placeholder = "enter your name";
document.querySelector("body").append(inp2);

h2 = document.createElement("h2");
document.querySelector("body").prepend(h2);

inp2.addEventListener("input", function (){
    this.value = this.value.replace(/[^a-zA-Z\s]/g,"");
    h2.innerText = this.value;
})

