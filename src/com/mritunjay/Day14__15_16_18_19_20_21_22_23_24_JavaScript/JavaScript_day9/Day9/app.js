// //Practice Qs
// // Add the following elements to the container using only JavaScript and the DOM methods.
// // i) a <p> with red text that says "Hey I'm red!"
// // ii) an <h3> with blue text that says "I'm a blue h3!"
// // iii) a <div> with a black border and pink background color with the following elements inside of it:
// // • another <h1> that says "I'm in a div"
// // • a <p> that says "ME TOO!"
//
// let para1 = document.createElement('p');
// para1.innerText = "Hey, I am red!";
// document.querySelector('body').append(para1);
// para1.classList.add('red');
//
// let h3 = document.createElement('h3');
// h3.innerText = "Hey I'm blue h3!";
// document.querySelector('body').append(h3);
// h3.setAttribute('class','blue');
//
// let div = document.createElement('div');
// let h1= document.createElement('h1');
// let para2 = document.createElement('p');
//
// h1.innerText = "I am in a div";
// para2.innerText = "ME TOO!";
// div.append(h1);
// div.append(para2);
//
// div.classList.add('box');
// document.querySelector('body').append(div);

//HomeWork
//1 Create a new input and button element on the page using JavaScript only. Set the
// text of button to "Click me'

let input = document.createElement('input');
let btn = document.createElement('button');

btn.innerText = "click me";

document.querySelector('body').append(btn);
document.querySelector('body').append(input);


//2.Add following attributes to the element :
// Change placeholder value of input to "username"
// Change the id of button to "btn'
input.setAttribute('placeholder','username');
btn.setAttribute('id','btn');

//3.Access the btn using the querySelector and button id. Change the button background
// color to blue and text color to white.

let button = document.querySelector('#btn');
button.classList.add('btn-style');

//4. Create an hl element on the page and set its text to "DOM Practice" underlined.
// Change its color to purple.

let h1 = document.createElement('h1');
h1.innerText = "DOM Practise";
h1.classList.add('h1-style');

document.querySelector('body').prepend(h1);

//5. Create a p tag on the page and set its text to "My Web Development Practise",
// where Web Development is bold.

let para = document.createElement('p');
para.innerHTML = "My <b>Web Development</b> Practise";
document.querySelector('body').append(para);

