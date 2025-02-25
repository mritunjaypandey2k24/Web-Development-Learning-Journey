//DOM Events
// Events are signals that something has occurred. (user inputs/ actions)

// //inline events
//
// //onclick (when an element is clicked)
// // let btn = document.querySelector("button");  //selects the first button
// let btns = document.querySelectorAll("button");  //selects all button
// console.dir(btns);
//
// // btn.onclick = function (){
// //     // console.log("button was clicked");
// //     alert("button was clicked");
// // };
//
// function sayHello(){
//    alert("Hello");
// }
//
// // for(btn of btns){
// //     btn.onclick = sayHello; //only assign the name of function and not the function() like this
// //     console.dir(btn);
// // }
//
//
// // onmouseenter (when mouse enters an element)
//
// for(btn of btns){
//     btn.onclick = sayHello; //only assign the name of function and not the function() like this
//     btn.onmouseenter = function (){
//         console.log("you entered a button");
//     };
//     console.dir(btn);
// }


//Event Listener

// addEventListener

// element.addEventListener( event, callback )
//
// let btns = document.querySelectorAll('button');
//
// for(btn of btns){
//     // btn.onclick = sayHello;
//     // btn.onclick = sayName; //here multiple function is not performed only the last assigned function is performed
//
//     btn.addEventListener("click",sayHello);
//     btn.addEventListener("click",sayName);
//     //dblclick
//     btn.addEventListener("dblclick",function(){
//         console.log("you double clicked me");
//     });
// }
//
// function sayHello (){
//     alert("Hello");
// }
//
// function sayName(){
//     alert("Mritunjay");
// }
//
//
// let p = document.querySelector("p");
//
// p.addEventListener("click", function(){
//     console.log("Paragraph was clicked");
// })
//
// let box = document.querySelector("div");
// box.addEventListener("mouseenter", function(){
//     console.log("mouse inside the box");
// })


//this in Event Listeners
//When 'this' is used in a callback of event handler of something, it refers to that something.

// here the something is btn
// let btn = document.querySelector("button");
//
// btn.addEventListener("click", function (){
//     // console.log(this);
//     console.dir(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// })

// // on multiple element using single event listener
// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// // // we can use multiple event listener

// btn.addEventListener("click", function (){
//     // console.log(this);
//     console.dir(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// })
//
// p.addEventListener("click", function (){
//     // console.log(this);
//     console.dir(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// })
//
// h1.addEventListener("click", function (){
//     // console.log(this);
//     console.dir(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// })
//
// h3.addEventListener("click", function (){
//     // console.log(this);
//     console.dir(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
//  })  //This is a redundant way

//OR we can make a single function
//
// function changeColor(){
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// }
// btn.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);
// h1.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);


//KeyBoard Events

// let btn = document.querySelector("button");
// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("Button clicked");
// });
//
// btn.addEventListener("dblclick",function(event){
//     console.log(event);
//     console.log("Button clicked");
// });
//
//
// let input = document.querySelector("input");
//
// //keyboard events: keydown,keypress,keyup
// // keydown
// input.addEventListener("keydown", function(event){
//     console.log("Key was pressed");
//     console.log(event);
//     console.log("key = ",event.key);
//     console.log("code = ",event.code);
// });
// //event argument has properties code and key
// key shows which key on keyboard was pressed and code provide  code of that key on keyboard
// for g the key is : g & code is KeyG llrly for " " key is " " and code is space
//prop keycode gives ascii value

//keyup
// input.addEventListener("keyup", function(){
//     console.log("Key was released");
// });


let inp = document.querySelector("input");

inp.addEventListener("keydown",function(event){
    console.log("code = ", event.code); //ArrowUp(U),ArrowDown(D),ArrowLeft(L), ArrowRight(R)
    if(event.code == "ArrowUp" || event.code == "KeyU"){
        console.log("Character moves forward");
    }
    else if(event.code == "ArrowDown" || event.code == "KeyD"){
        console.log("Character moves Backward");
    }
    else if(event.code == "ArrowLeft" || event.code == "KeyL"){
        console.log("Character moves Left");
    }
    else if(event.code == "ArrowRight" || event.code == "KeyR"){
        console.log("Character moves Right");
    }
})











