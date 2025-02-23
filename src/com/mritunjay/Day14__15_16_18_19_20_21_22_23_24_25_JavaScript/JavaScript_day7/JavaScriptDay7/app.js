//this keyword
// // "this" refer to an object that is executing the current piece of code
//
// const student = {
//     name:"Mritunjay",
//     age: 24,
//     eng: 95,
//     math: 96,
//     physics: 90,
//
//     getAvg(){
//         // let avg = (eng+math+physics)/3;
//         // console.log(avg); //error: eng is not defined at object
//
//         console.log(this);
//         let avg  = (this.eng + this.math+ this.physics)/3;
//         console.log(`${this.name} got avg marks = ${avg}`);
//     }
// }
//
// console.log(student.name);
// student.getAvg();
//
// //outside the object
//
// function getAvg(){
//     console.log(this);
//     let avg  = (this.eng + this.math+ this.physics)/3;
//     console.log(`${this.name} got avg marks = ${avg}`);
// }
//
// //call this function
// getAvg(); //prints Window object
//
// console.log(window);
// // console.log(window.alert("HI"));// alert() is a method of window but we dont need to write window by default
// console.log(window.getAvg()); //when there is not object the function is called on window object


//2. try & catch
// The try statement allows you to define a block of code to be tested for errors while it
// is being executed.
// The catch statement allows you to define a block of code to be executed, if an error
// occurs in the try block.


//eg

// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log(a);  //error: a is not defined
// console.log("hello2");
// console.log("hello2");
// console.log("hello2");

//this error cause the next lineof code not to execute
//so we use try and catch
//it is necesary to write try and catch both statement other wise it cause an error

// console.log("hello");
// console.log("hello");
// console.log("hello");
// // let a = "Namaste";
// try {
//     console.log(a);
// } catch(err) {
//     console.log(" caught an error.... a is not defined");
//     console.log(err);
// }
// console.log("hello2");
// console.log("hello2");
// console.log("hello2");


//Miscellanous Topicss //Imp

//Arrow Functions
// const funcName = (arg1, arg2,...) => {function description}
// this are nameless functions

const sum = (a,b) =>{
    console.log(a+b);
};

sum(1,2);
sum(2,35);

const cube = (a)=>{
    return a*a*a;
}

let c = cube(2);
console.log(c);
c=cube(3);
console.log(c);

const power = (a,b)=>{
    return a**b;
}
console.log(power(2,3));
//for single argument no need to write parenthesis

const square = a=>{
    return a*a;
}
console.log(square(9));

//but if no arguments then parenthesi compulsory

const hello = ()=>{
    console.log(("Hello World"));
}
hello();


//implicit return in Arrow function
// if the arrow functions is only returning and not printing or calculating anything
//then we can remove the return keyword as well

// const funcName  = (arg1,arg2,...) =>(value);

// const mul = (a ,b) =>(a*b); OR
const mul = (a,b) => a*b;
console.log(mul(2,3));

const sum1 = (a,b) => a+b;
const cube1 = a => a**3;
console.log(sum1(2,3));
console.log(cube1(3));


//Set Timeout -> it is afunction of window object(inbuilt)

// setTimeout(function, timeout);
// here the function is called callback i.e is afunction which passed as an argument in a function
//timeout tell how much time after we have to execute the function in the argument
// it works in milli second 1s = 1000ms


// console.log("hi there");
//
// setTimeout(()=>{
//     console.log("Paradise");
// }, 4000);  //the arrow function will be executed after 5s
//
// console.log("Welcome to");
// console.log("Welcome to");
// console.log("Welcome to");
// console.log("Welcome to");
// console.log("Welcome to");
// console.log("Welcome to");
//o/p  : hi there welcome to  Paradise

//Set Interval

// setInterval(function,timeoutOrInterval);

//setTimeout jo tha ek timeout ke baad function execute kardeta hai
//but setInterval  ek timeout rukega then function execute karega then again ek timeout rukega and then function execute karege
//and goes on, i.e wo multiple time execute karta hai function

// setInterval(()=>{
//     console.log("Mritunjay");
// },5000);

let id =setInterval(()=>{
    console.log("Mritunjay");
},5000);

console.log(id);

let id2 =setInterval(()=>{
    console.log("How are you");
},5000);

console.log(id2);

//to stop the Interval we use clearInterval

clearInterval(id);
clearInterval(id2);


//this keyword with arrow functions

// const student = {
//     name: "aman",
//     marks: 95,
//     prop: this, // global scope: therefor object for this is window
//     getName: function(){
//         console.log(this);
//         return this.name;
//     },
//     getMarks: ()=>{
//         console.log(this); //parent scope -> window
//         return this.marks;
//     }
// }
// // console.log(student); // object is window
// console.log(student.getName()); //function has lexical scope therfore object is student for "this"
//
// console.log(student.getMarks()); //undefined as "this" in this.Marks point to the object whom its parent are pointing
// //i.e it is pointing to the object who called its parent in this case it was window who called its parent so arrow function took window as the object
// and there is no Marks property in window object due to which output is undefined


// therefore conclusion is that:
// for Normal function "this" point to the object that is calling it i.e calling object
// for Arrow function "this" points to the object whom its parent function is pointing
// i.e it point to the object who called its parent function

const student = {
    name: "aman",
    marks: 95,
    prop: this, // global scope: therefor object for this is window
    getName: function(){
        console.log(this);
        return this.name;
    },
    getMarks: ()=>{
        console.log(this); //parent scope -> window
        return this.marks;
    },

    getInfo1: function(){
        setTimeout(()=>{
            console.log(this); //this is student object
        },2000);
    },
    getInfo2: function() {
        setTimeout( function(){
            console.log(this); //this is window object as setTimeout jo hai wo window ka function hai
        },2000);
    }
};


// console.log(student.getInfo1());
// console.log(student.getInfo2());

//Practise Question

// const squares = (n)=>(n*n);
//
// console.log(squares(4));
//
//
// let id10= setInterval(()=>{
//     console.log("Hello World");
//     },2000);
//
//
// setTimeout(()=>{
//     clearInterval(id10)
//     console.log("Clear Interval ran");
// },10000);



//HomeWork

//1. write an arrow function named arrayAverage that accepts an array of numbers anf return the average of those numbers

const arrayAverage = (arr)=>{
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum/arr.length;
}

let arr=[1,2,3,4,5];
console.log(arrayAverage(arr));

//2. Write an arrow function named isEven() that takes a single number as argument and returns it if
// it is even or not

const isEven = (n)=>{
    return n%2==0;
}

console.log(isEven(2));
console.log(isEven(3));
console.log(isEven(9));

const object = {
    message: "hello world",
    logMessage(){
        console.log(this.message);
    }
};

setTimeout(object.logMessage,1000);













