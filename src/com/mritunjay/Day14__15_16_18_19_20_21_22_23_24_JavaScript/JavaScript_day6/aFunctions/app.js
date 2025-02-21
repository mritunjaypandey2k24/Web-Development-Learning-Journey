// function
// funtion funcName(){
//   //do something
// }

function hello(){
    console.log("Hello");
}

//funtion calling (using the funtion): funcName();

hello();

function printName(){
    console.log("Mritunjay");
    console.log("Hello there!");
}

printName();

function print1to5(){
    for(let i=1; i<=5; i++){
        console.log(i);
    }
}
print1to5();


function isAdult(){
    let age = 18;
    if(age>=18){
        console.log("Adult");
    }else{
        console.log("Not an Adult");
    }
}

isAdult();

//Practise Question

function printPoem(){
    console.log("Twinkle Twinkle little star");
    console.log("How I wonder what you are?");
}
printPoem();


//Create a Function to roll a dice & always display the value of the dice (1 to 6).

function rolldice(){
    let rand = Math.floor(Math.random()*6)+1
    console.log(rand);
}

rolldice();
rolldice();
rolldice();
rolldice();
rolldice();
rolldice();

//Functions with Arguments
//function funcName(arg1, arg2....){
// do something
// }

function printInfo(name, age){
    console.log(`${name}'s age is ${age}.`);
}

printInfo("Mritunjay",24);
printInfo("Karan",20);
printInfo("karan"); //karan's age is undefined.
//in function's we have to write the starting argument but can skip the last arguments
printInfo(23);//arguments are stored in order so even though I wrote a number
//it was taken as name

function sum(a,b){
    console.log(a+b);
}
sum(1,2);
sum(2,4);
sum(3,8);

//Practise Question

// Create a function to give avg of 3 numbers

function avgCalc(a,b,c){
    let avg = (a+b+c)/3;
    console.log(avg);
}
avgCalc(98,99,100);

//Practise Question
// Create a function that prints the multiplcn of number

function printTable(n){
    for(let i=1; i<=10; i++){
        console.log(n*i);
    }
}
printTable(10);


//return keyWord

//function funcName(arg1,arg2,....){
// do something
// return val;
//}

function sumNum(a,b){
    return a+b;
}
let total = sumNum(10938,20484)
console.log(total);
console.log(sumNum(1,2));
console.log(sumNum(1,sumNum(2,3)));

//Practise Question
//Create a function that return the sum of number from 1 to n

function Sum1toN(n){
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum += i;
    }

    return sum;
}

console.log(Sum1toN(10));
console.log(Sum1toN(1000));

//Scope
// Scope determines the accesibility of variables objexts and functions from different parts
// function, block, lexical

//Function scope: variable defined inside a function are not visible or accesible outside the function
let sum1 = 45; //Global Scope
function CalSum(a,b){
    let sum1 = a+b; //Function Scope: it is more specific
    return sum1;
}
console.log(sum1);


//Block Scope
// block -> {  }
//Variable declared inside a {} block cannot be accesed from outside the block

{
    let a = 34;
    const b = 35;
    var c = 24;
}
// console.log(a); // a is not defined error
// console.log(b); // b is not defined error
console.log(c); //works but using var is not good idea
//block was used in for loop and for if condition

let age=24;

if(age >=18){
    let str = "adult";
}
// console.log(string);  //string is not defined error


//Lexical Scope
// a variable defined outside a function can be accessible inside another function defined
// after the variable declaration.
// The opposite is NOT true.

//i.e nested functions

function outerFunc(){

    function innerFunc(){//Hoisting concept: variable used before defining
        console.log(x);
        let a =20;
    }

    let x=5;
    let y=6;

    // function innerFunc(){
    //     console.log(x);
    // }

    innerFunc();

    // console.log(a); //doesn't work
}

outerFunc(); // 5;
// innerFunc();//innerFunc() not defined as its scope is function scope and can be used inside outer function only

//Practise Question;

let greet = "hello"; //global scope

function changegreet(){
    let greet = "namaste";//function scope
    console.log(greet);
    function innerGreet(){
        console.log(greet); //lexical scope
    }

}
console.log(greet);
changegreet();





//Function Expressions

//const variablename = function(arg1,arg2,...){
// //do something
// }

let name = "mritunjay";

let sum3 = function(a,b){
    return a+b;
}
console.log(sum3);

console.log(sum3(2,3));

let helloworld = function(){
    console.log("Hello World");
}

helloworld();

helloworld = function(){
    console.log("Namaste!");
}
console.log(helloworld());



//Higher Order Function
// A function that does one or both
//1) takes one or multiple functions as argument
//2) returns a function

///takes one or multiple functions as argument

function multipleGreet(func, n){ //Higher Order function
    for(let i=1; i<=n; i++){
        func();
    }
}

greet = function(){
    console.log("Hello");
}

multipleGreet(greet,20);
multipleGreet(function(){console.log("Namaste")},1000);

//returns a function

function oddEvenTest(request){
    if(request=="odd"){
        let odd =  function(n){
            console.log(!(n%2 == 0));
        }

        return odd;
    }
    else if(request == "even"){
        let even = function(n){
            console.log(n%2==0);
        }
        return even;
    }
    else{
        console.log("Wrong Request");
    }
}
let request = "odd";
let func = oddEvenTest(request);
func(10);

request="even";
func = oddEvenTest(request);
func(10);


//Methods

//actions that can be performed on an object

//meaning jaise hum key value pair banate hai object keliye
//similarly jab hum functions banaye un objects ke liye to wo functions ko method kehte hai

const calculator={

    num : 55, //this is property(key-value pair)

    add: function(a,b){
        return a+b;
    },

    sub: function(a,b){
        return a-b;
    },

    div: function(a,b){
        return a/b;
    }
}
console.log(calculator);
console.log(calculator.num);
console.log(calculator.add(1,2));
console.log(calculator.sub(1,2));
console.log(calculator.div(1,2));
//Math.PI  here Math is an object and PI is key and it value: 3.1415...
// similarly Math.random() random is the key and its function is the value
//in string and arrays we used many methods
//JS's arrays and string are internally objects
// thats why typeof array is object
// and we use .push() and .pop()

//Method shorthand

const calcu = {
    add(a,b){//no need use keyword function here
        return a+b;
    },
    sub(a,b){
        return a-b;
    }
}
console.log(calcu.add(1,2));
console.log(calcu.sub(1,2));


//HomeWork
//Qs1. Write a JavaScript function that returns array elements larger than a number.
let number =[1,2,3,5,6,4,78,9];

function maxfinder(a,num){
    let max=[];
    for(let i=0; i<a.length; i++){
        if(a[i]>num){
            max.push(a[i]);
        }
    }
    return max;
}

let ans = maxfinder(number,5);
console.log(ans);

//Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh” ans = “abcdefgh”

function duplicateRemover(a){
    let ans = "";
    for(let i=0; i<a.length; i++){
        let ch = a[i];
        if(ans.indexOf(ch)==-1){
            ans += ch;
        }
    }

    return ans;
}
let str = "abcdabcdefgggh"

ans = duplicateRemover(str);
console.log(ans);

//Qs3. Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] output :
//
// "United States of America"

let country = ["Australia", "Germany", "United States of America"]

function longestName(a){
    let max = 0;
    for(let i=0; i<a.length; i++){
        if(a[i].length > a[max].length){
            max = i;
        }
    }

    return a[max];
}
console.log(longestName(country));

//Qs4. Write a JavaScript function to count the number of vowels in a String
// argument.

function vowelCount(a){
    let count=0;
    for(let i=0; i<a.length; i++){

        if(a[i]=='a'||a[i]=='e'||a[i]=='i'||a[i]=='o'||a[i]=='u'){
            count++;
        }

    }
    return count;
}

console.log(vowelCount("Hello How are you"));


//Write a JavaScript function to generate a random number within a range
// (start, end).

function randomNumber(a,b){
    let rand = Math.floor(Math.random()*(b-a))+a;
    return rand;
}

// console.log(randomNumber(1,6));
console.log(randomNumber(20,25));





