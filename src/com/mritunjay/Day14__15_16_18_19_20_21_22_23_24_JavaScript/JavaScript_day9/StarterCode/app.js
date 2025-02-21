//select elements
//1)getElementById
//Returns the element as an object or null(if not found)
//eg: document.getElementById(id);
let imgObj = document.getElementById("mainImg");

console.log(imgObj);
console.dir(imgObj);
console.log(imgObj.src);
console.log(imgObj.tagName);
console.log(imgObj.id);
let parDsrpn = document.getElementById("description");
console.dir(parDsrpn);
console.log(parDsrpn.tagName);

console.log(document.getElementById("abc")); //null

//getElementByClassName
//Returns the Element as an HTML Collections or empty collection(if not found)
// Collection is similar to array we can access element by index and is iterable and we can print length
// we cant use array methods like push pop etc etc

let smallImg = document.getElementsByClassName("oldImg");
console.log(smallImg);
console.log(smallImg[0]);
console.log(smallImg[1]);
console.log(smallImg[2]);

for(let i=0; i<smallImg.length; i++){
    // console.dir(smallImg[i]);
    // console.dir(smallImg[i].src);
    smallImg[i].src = "assets/spiderman_img.png";
    console.log(`value of img no. ${i} is changed`);
}

console.log(document.getElementsByClassName("ajjfj"));  //gives empty collection for invalid classname

//Selecting Elements by TagName
//getElementByTagName
//returns the elements as an HTML Collections or empty collection(if not found)

let ptag = document.getElementsByTagName("p");
console.log(ptag);
console.dir(ptag);
// ptag[1].innerText = "abc";

let spantag = document.getElementsByTagName("span");
console.log(spantag); //Empty collection as span tag was not used


//Query Selectors
//Allows us to use any CSS selector
// document.querySelector('p'); //selects first p element
// document.querySelector("#myId");// selects first element with id = myId
// document.querySelector(".myClass"); //selects first element with class = myClass
//
// document.querySelectorAll("p"); //selects all p elements

console.dir(document.querySelector("h1")); //returns h1 object
console.dir(document.querySelector("#description")); //return paragraph object with id as description
console.dir(document.querySelector(".oldImg")); //it gives the first element which matches the class or id given
console.dir(document.querySelector('p')); //there are 2 paragraph element by it return the first p as it encountered that first
console.dir(document.querySelector('p').innerText);

//nesting in querySelector

//div ke andar ke anchor tag ko select karna hai
console.dir(document.querySelector("div a"));  //gives object a.boxlink i.e first anchor tag having class boxlink

//select all anchor tag inside the div then?

console.dir(document.querySelectorAll("div a"));
console.dir(document.querySelectorAll("p"));
console.dir(document.querySelectorAll("p"));

//Using Propertes and Methods
//1. innerText
//shows the visible text contained in a node

//2. textContent
// Shows all the full text including hidden thing whose display might be set to none in the index.html


//3. innerHTML
// Shows the full markup

let para = document.querySelector('p');
console.dir(para.innerText);
console.dir(para.innerHTML);
console.dir(para.textContent);
// para.innerText="Hi I am Peter Parker";
// para.innerText="Hi I am <b>Peter Parker</b>"; bold tag get printed instead of making the word bold

// para.innerHTML = "Hi I am <b>Peter Parker</b>"; //this works as it innerHTML recogninse the tag

let heading = document.querySelector("h1");
console.log(heading.innerText)

// heading.innerHTML = "<u>Spider Man</u>"; //OR
heading.innerHTML = `<u>${heading.innerText}</u>`;

//Manipulating Attributes

// obj.getAttributes(attr)
// obj.setAttribute(attr,val)

let img = document.querySelector("img");
// console.log(img.getAttribute("id"));
// img.setAttribute("id","spidermanImg"); //the content changes bcoz we gave width:35% to mainImg id not it got reset

// img.setAttribute("src","assets/creation_3.jpeg");

// console.log(img.getAttribute('class')); //null
// img.setAttribute('class','images'); //here we creted a attribute with values images
// console.log(img.getAttribute('class'));


//Manipulating Style
//style property
//obj.style

img = document.querySelector("img");

console.dir(img); //there are many property among them one is style property which in itself is an object with many property
//css->background-image, border-bottom to js->backgroundImage, borderBottom
console.log(img.style);

heading = document.querySelector('h1');
console.log(heading.style);
// heading.style.color = "purple";
// heading.style.color='green';
// heading.style.backgroundColor = 'yellow';

//change all anchor tag color to yellow

let links = document.querySelectorAll('.box a');// here we get a collections in links

for(let i=0; i<links.length; i++){
    links[i].style.color = 'yellow';
    links[i].style.color = 'purple';
    links[i].style.color = 'green';
}

for(link of links){
    link.style.color = 'purple';
}

// we can access inline styling with this property and there is no change in the css
//due to this we dont use much this property for styling

let box = document.querySelector('.box');
console.dir(box.style); //here we can check the property they dont show any value which we set in the css file bcoz this property tell us about inline property
//instead if we set those property in the inline instead of css then that property can be seen in about lines output object's property
//hence we not use style property frequently


// Manipulating Style
// using classList
// obj.classList

// classList.add( ) to add new classes
// classList.remove( ) to remove classes
// classList.contains( ) to check if class exists
// classList.toggle( ) to toggle between add & remove

img = document.querySelector('img');
console.log(img.classList); //empty hai
img.setAttribute('class','abc xyz');
console.log(img.classList);

heading = document.querySelector('h1');
console.log(heading.classList); //empty

//add classes
heading.classList.add("abc");
heading.classList.add('green');
// heading.classList.add('underline');

console.log(heading.classList);

heading.classList.remove('green');

//using setAttributes
heading.setAttribute('class','green underline');
console.log(heading.classList);
//contains method
console.log(heading.classList.contains('underline'));
console.log(heading.classList.contains('green'));

//toggle method -> ek switch hai like on and off, agar on hai to toggle karne par off hoga and vice versa
// toggle b/w  remove or add
//if class exist then removes and if not exist then add
console.log("toggle")
console.log(heading.classList.toggle('green')); //false as green existed already now it is removed

console.log(heading.classList.toggle("underline"));//false means removed
console.log(heading.classList.toggle("NewStyle")); //true pehle nahi tha abb create hua
console.log(heading.classList.toggle("green")); //true pehle nahi tha abb create hua
console.log(heading.classList.toggle("underline")); //true pehle nahi tha abb create hua


box= document.querySelector('.box');
console.log(box.classList);
box.classList.add('yellowBg'); //makes box yellow color

//Navigation
// parentElement
// children
//childElementCount
// previousElementSibling / nextElementSibling

let h4 = document.querySelector('h4');

console.log(h4.parentElement);
console.log(h4.children);

box = document.querySelector('.box'); //div ko select kiya
console.log(box.children);

console.log(box.childElementCount);

let ul = document.querySelector('ul');
console.log(ul.parentElement);
console.log(ul.childElementCount);
console.log(ul.children);

console.log(ul.children[0]);
console.log(ul.children[1]);
console.log(ul.children[2]);


console.log(ul.children[2].previousElementSibling);
console.log(ul.children[1].previousElementSibling);

console.log(ul.children[1].nextElementSibling);

//heading ko img se acces karna hai

img = document.querySelector('img');
console.log(img.previousElementSibling);

img.previousElementSibling.style.color = "blue";


//Adding Elements
// we will learn to add new element in the Document object model like paragraph,heading, img etc
// document.createElement('p')

// appendChild( element); //
// append( element )
// prepend( element )
// insertAdjacent( where, element)

let newP = document.createElement('p');
console.dir(newP);
newP.innerText = "Hi I am New Paragraph";
//
// //to insert the new p inside body
//
// let body = document.querySelector('body');
// // console.log(body.appendChild(newP));
//
// //appendChild
// // append the newp in the box
box = document.querySelector('.box');
box.appendChild(newP);
//
// let btn = document.createElement('button');
// console.dir(btn);
// btn.innerText = "click me";
// box.appendChild(btn);
//
//
// //append
// newP.append("This is the new text");
// newP.append(btn);
// console.log(newP);
// newP.append("Do not click this button");
//
//
// //prepend Add element at the start
// box.prepend(newP);

//insertAdjacent we can specify where we want to element and which element we want to add
//• beforebegin : Before the targetEte•ent itself.
// •afterbegin : Just inside the targetELement before its first child.
// •beforeend :  Just inside the targetELement , after its last Child.
// •afterend• : After the target element itself.


let btn = document.createElement('button');
btn.innerText = "NEW BUTTON";
//let add this button according to paragraph

let p = document.querySelector('p');

p.insertAdjacentElement('beforebegin',btn);
p.insertAdjacentElement('afterbegin', btn); //p ke andar insert hua as its first child
p.insertAdjacentElement('beforeend',btn);// last child ban ta hai btn
p.insertAdjacentElement('afterend',btn);// after p element btn aayega

//Removing Elements
// • removeChild( element )
// • remove( element )

body = document.querySelector('body');
// body.removeChild(btn);

btn.remove();
newP.remove();
// body.remove(); //remove complete body;












