// // console.log("Hello World");
// // console.log("Web Dev Journey");
// let a=10;
// let b=5;
// console.log("sum is: ",a+b);
// //this is a comment
//
// //template literals
// let pencilPrice = 10;
// let eraserPrice = 5;
// // let output = "the total price is: "+ (pencilPrice+eraserPrice) +" rupees";
// // let output =`The total price is : ${pencilPrice + eraserPrice} Rupees.`;
// // console.log(output);
// console.log(`The total price is : ${pencilPrice + eraserPrice} Rupees.`);
//
//
// //Operators in javaScript
//
// //Arithmetic operators
// let x=10;
// let y=5;
// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x/y);
// console.log(x%y);
// console.log(x**y);
//
// //unary operator
// a=1;
// b=2;
// console.log(a++); //1
// console.log(++a); //3
//
// //Assignment
// a=10;
// b=5;
// b=a;
// console.log(b);


// comparison Operator;

// let age=18;
// console.log(age>18);
// console.log(age<18);
// age=16
// console.log(age<18);

// console.log(5=='5'); //true as == checks only value and not type;
// console.log(1=='1'); //true as == checks only value and not type;
// console.log(0==' '); //true as == checks only value and not type;
// console.log(0 == false); //true as == checks only value and not type;
// console.log(null == undefined); //true as == checks only value and not type;
//
//
// console.log(5==='5'); //false as === check both value and datatype;
// console.log(1==='1');
// console.log(0===' ');
// console.log(0 === false);
// console.log(null === undefined);

//Comparison for Non numbers
// console.log('a'<'A'); //false as each character is associated to unicode number in hex
// console.log('a'<'b'); //true
// console.log('*'<'&'); //false

//Conditional-Statements

// console.log("before my if statement");
// let age=24;
// if(age>=18){
//     console.log("you can vote");
//     console.log("you can drive");
//     let a=5;
//     console.log(a*5);
// }
// if(age<18){
//     console.log("you cannot vote");
// }
// console.log("after my if statement");
//
// let firstName = "Mritunjay";
// if(firstName == "Mritunjay"){
//     console.log(`Welcome ${firstName}`);
// }

//Practise Question
// let color = 'blue';
// //Traffic light System;
// if(color==='red'){
//     console.log("Stop Light color is red");
// }else if(color==='yellow'){
//     console.log("slow down Light color is yellow");
// }else if(color==="green"){
//     console.log("Go light color is green");
// }else{
//     console.log("Traffic light is broken");
// }

//Practise Question

// let size = "XL";
//
// if(size==="XL"){
//     console.log("RS ",250);
// }else if(size==="L"){
//     console.log("RS ",200);
// }else if(size==="M"){
//     console.log("RS ",150);
// }else{
//     console.log("RS ",100);
// }

//Nested if else

// let marks = 85;
//
// if(marks>=33){
//     if(marks>=80){
//         console.log("Grade: O");
//     }else{
//         console.log("Grade: A");
//     }
// }else{
//     console.log("Grade: Fail");
// }


//Logical Operator

//&&
// console.log(true && true); //true;
// console.log(5>3 && 3>2); //true;
//
// let marks = 85;
// if(marks>=33 && marks>=80){
//     console.log("pass");
//     console.log("Grade: A");
//
// }
//
// //||
// marks=45
// if(marks>=33 || marks>=80){
//     console.log("pass");
//     console.log("Grade: A");
//
// }
//
// // !
// marks = 16;
// if(!(marks>=33 || marks>=80)){
//     console.log("pass");
//     console.log("Grade: A");
//
// }
//
// //Practise aquestion
// //good string
// let str = "apple";
// // str = "snake";
// if(str[0]==='a' && str.length >3){
//     console.log("good string");
// }else{
//     console.log("Not a good string");
// }
//
// let n=12;
//
// if((n%2==0) && ((num+1==15)||(num-1 ==11))){
//     console.log("safe");
// }else{
//     console.log("unsafe");
// }

//truthy and falsy value
// if(true){
//     console.log("it has true value");
// }else{
//     console.log("it has false value");
// }
// if(0){
//     console.log("it has true value");
// }else{
//     console.log("it has false value");
// }
// if(1){
//     console.log("it has true value");
// }else{
//     console.log("it has false value");
// }
// if(null){
//     console.log("it has true value");
// }else{
//     console.log("it has false value");
// }
// if(undefined){
//     console.log("it has true value");
// }else{
//     console.log("it has false value");
// }
// if("hello there"){
//     console.log("it has true value");
// }else{
//     console.log("it has false value");
// }
// if(NaN){
//     console.log("it has true value");
// }else{
//     console.log("it has false value");
// }
// if(""){
//     console.log("it has true value");
// }else{
//     console.log("it has false value");
// }
// if(" "){
//     console.log("it has true value");
// }else{
//     console.log("it has false value");
// }
// if(-10){
//     console.log("it has true value");
// }else{
//     console.log("it has false value");
// }

//switch

// let color="yellow";
//
// switch(color){
//     case "red":
//         console.log("stop");
//         break;
//     case "yellow":
//         console.log("slow down");
//         break;
//     case "green":
//         console.log("Go");
//         break;
//     default:
//         console.log("Broken Light");
// }
// console.log("After switch statement");

//Practise Question

// let day =5;

// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Wrong Number");
// }

//Alert and Prompt
// alert("Something is wrong!");
// console.log("This is a simple log");
// console.error("This is an error message");
// console.warn("This is an error message");

// let firstName = prompt("Enter your name: ");
// console.log(firstName);
// let roll = prompt("Enter you roll no: ");
// console.log(roll);

// let firstName = prompt("Enter first Name: ");
// let lastName = prompt("Enter last Name");
// // console.log(`Welcome ${firstName+" "+lastName}`);
// let msg = `Welcome ${firstName+" "+lastName}!`;
// alert(msg);

// //Homework
// let num=10;
// if(num%10==0){
//     console.log("good");
// }else{
//     console.log("bad");
// }

// let name = prompt("Enter Name");
// let age = prompt("Enter Age");
// alert(`${name} is ${age} years old`);

//3
// let quarter = 3;
//
// switch(quarter){
//     case 1:
//         console.log("January, February, March");
//         break;
//     case 2:
//         console.log("April, May, June");
//         break;
//     case 3:
//         console.log("July,August,September");
//         break;
//     case 4:
//         console.log("October, November,December");
//         break;
//     default:
//         console.log("wrong quarter number");
//
// }
// //5
// let a=4,b=5,c=8;
// if(a>b && a>c){
//     console.log(a);
// }else if(b>c && b>a){
//     console.log(b);
// }else{
//     console.log(c);
// }

let a=32, b=47852;
if(a%10 === b%10){
    console.log("same last digit");
}else{
    console.log("different last digit");
}












