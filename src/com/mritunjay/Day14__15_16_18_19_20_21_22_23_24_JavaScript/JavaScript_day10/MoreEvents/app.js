//More Events

// 1. change event
//      The change event occurs when the value of an element has been changed (only works on <input>, <textarea>
//       and <select> elements).
// 2. input event
//       The input event fires when the value of an <input> , <select> , or <textarea> element has been changed.

let form = document.querySelector("form");

form.addEventListener("submit", function (event){
    event.preventDefault();
})

let user = document.querySelector("#user");

user.addEventListener("change", function(){

    console.log("change event");
    console.log("final value = ", this.value); //here this is user as it called addEventListener function
});

// change event jo hai vo har changes ko track nahi karta wo initial state ke baad final state me input me kya hai wo dikhata hai
//but to track each and every change we use input event

user.addEventListener("input", function(){

    console.log("input event");
    console.log("final value = ", this.value); //here this is user as it called addEventListener function
});

//Non-character keys like ctrl,space,arrow etc doesnt trigger input keys
//only character key like a,n,f,k,12,3 etc trigger input key
























