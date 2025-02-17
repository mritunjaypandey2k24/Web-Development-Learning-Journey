//Array Methods

// forEach
// arr.forEach(some function definition or name)

let arr= [1,2,3,4,5];
//
let print = function (el){
    console.log(el);
}

arr.forEach(print);

//OR

arr.forEach(function(el){
    console.log(el);
})

//OR

arr.forEach((el)=>{
    console.log(el);
})

//forEach on objects in arr

let objArr = [
    {
    name:"aman",
    marks:95
    },
    {
        name:"Karan",
        marks:98
    },
    {
        name:"jagat",
        marks:67
    },
];

objArr.forEach((student)=>{
    console.log(student);
    console.log(student.marks);
})


//Map
// let newArr = arr.map(some function definition or name)

let num = [1,2,3,4,5];

let double = num.map(function(el){
    return el*2;
});

console.log(double);

//Or
double = num.map((el)=>{
    return el*2;
});

console.log(double);


let gpa = objArr.map((el)=>{
    return el.marks/10;
})

console.log(gpa);

// /Filter

// let newArr = arr.filter(some function definition or name);

let nums =[2,4,1,5,6,2,7,8,9];

let even = nums.filter((num)=>(num%2==0));

console.log(even); //contains element for which above condition was true

let odd = nums.filter((num)=>(num%2 !=0));

console.log(odd);

//Every method llr to AND operator
// Returns true if every element of array gives true for some function.Else return false

let numb = [1,2,3,4]
let ans = numb.every((el)=>(el%2==0));
console.log(ans);

numb = [2,4];
ans = numb.every((el)=>(el%2==0));
console.log(ans);


//Some llr to OR
// Returns true if some element of array gives true for some function.Else return false

// arr.some(some function def or name)

numb = [1,2,3,4]
ans = numb.some((el)=>el%2==0);
console.log(ans);

numb = [1,3];
ans = numb.some((el)=>(el%2==0));
console.log(ans);

//Reduce Method
// Reduces the array to a single value

// arr.reduce( reducer function with 2 variable for (accmulator, element));
numb = [1,2,3,4];

ans = numb.reduce((res,el)=>(res+el));
console.log(ans);
// for each element the logic is performed and stored in res then for next element same logic is performed
//and the returned value is stored in the accumulator which is res here and finally the returned value isi the single value

//Reduce - Maximum in an array

numb = [1,2,3,4,5,6,7];
let max = numb.reduce((res,el)=>Math.max(res,el));
console.log(max);


//Practise

// check if all the number in our array are multiple of 10 or not

let number = [110,44940,20,251];

ans = number.every((el)=>(el%10==0));
console.log(ans);

//create a function to find the min number in an array

// ans = number.reduce((res,el)=>Math.min(res,el));
ans = number.reduce((res,el)=>{
    if(res>el){
        return el;
    }else{
        return res;
    }
});
console.log(ans);

//Default Parameters
//giving a default value to the arguments

//function func(a, b=2){  //if we dont provide value to b during function call b will have default value of 2
//do something
//}

function sum(a,b=2){
    console.log(a+b);
}
sum(1,4);
sum(1);

// cant use for first argument as first value in function call is used for first argument


//Spread
// Expand an iterable into multiple values

// function func(...arr){}
let arr4 = [1,2,3,4,5,];
console.log(Math.min(1,34,5,6,7,84,2,-1));//In JS multiple values are allowed
console.log(Math.min(...arr4));

console.log(1,2,3,4,5);
console.log(...arr4);
console.log(..."Mritunjay");

//Spread with ArrayLiteral

let oldArr = [1,2,3,4,5];
let newArr = [...oldArr];
newArr.push(6);
console.log(oldArr);
console.log(newArr);

let oldChars = "hello";
let charArray = [...oldChars];
console.log(charArray);

let odds = [1,3,5,7];
let evens = [2,4,6,8];
let numbers = [...odds, ...evens];
console.log(numbers);


//Spread with object literals

let data = {
    email: "ironman@gmail.com",
    password: "abcd"

};

let datacopy = {...data, id: 123, country:"India"};
console.log(datacopy);

arr = [1,2,3,4,5];
let obj1 = {...arr};
console.log(obj1); //here key become index of array and value is the value at that index

let obj2 = {..."hello"};
console.log(obj2);


///Rest : Allows a function to take an indefinite number of argument and bundle them in array

function sums(...args){
    for(let i=0; i<args.length; i++){
        console.log("You gaves us",args[i]);
    }
    // return args.reduce((add,el)=> add+el);
}

sums(1,23,4,5,8);

function min(a,b,c,g){
    console.log(arguments);
    console.log(arguments.length);
    // arguments.push(1);//arguments.push is not function as argument is a collection and not array
}
min(5,3,2,-1);
min();

// function sum(){
//     // return arguments.reduce((sum,el)=> sum+el); //not works bcoz argument is not an array
// }

// so we use rest instead of arguments

function summation(...args){

    return args.reduce((sum,el)=> sum+el);
}
console.log("Using rest");
console.log(summation(2,4,5,6,7,5))

function minm(msg,...args){
    console.log(msg);
    return args.reduce((min,el)=>Math.min(min,el));
}
console.log(minm("Hello",3,5,6,7,3,1));
console.log(minm(10,3,5,6,7,3,1));

//Destructuring
// Storing values of array or object value into multiple variables

let names = ["tony","bruce","peter","steve","abc","xyz","pyq"];
// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerup = names[2];
//shorter way

let [winner,runnerup,secondRunnerup, ...others] = names;
console.log(winner);
console.log(runnerup);
console.log(secondRunnerup);
console.log(others);

//Destructuring for Objects
const student5 = {
    name:"karan",
    age:14,
    class:8,
    subjects:["hindi","english","maths","science"],
    username:"karnan@123",
    password: "abcd",
    city: "pune"
};

// let username=student.username;
// let password = student.password;
//
// let {username, password} = student; // variable name should be the key in the object
// console.log(username);
// console.log(password);

//OR
let { username: user, password:pass, city:place="Mumbai"} = student5; //we gave default value to city
console.log(user);
console.log(pass);
console.log(place);





//HomeWork QUestion
// Qs1. Square and sum the array elements using the arrow function and then find the
// average of the array.
//
array = [3,3,3];
// let squareSum = array.reduce((res,el)=>res+el**2,0)
// let avg = squareSum/array.length;
// console.log(avg);

const square = array.map((el)=>el**2);
console.log(square);

const sum95 = square.reduce((res,el)=>res+el);

const avg = sum95/array.length;
console.log(avg);

//Qs2. Create a new array using the map function whose each element is equal to the
// original element plus 5.
console.log(array);
newArr = array.map((el)=>el+5);
console.log(newArr);

//Qs3. Create a new array whose elements are in uppercase of words present in the
// original array.

let strings = ["hello","hi","goodmorning","night"];
let upcs = strings.map((el)=>el.toUpperCase());
console.log(upcs);


//Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled.


const doubleAndReturnArgs=(arr,...args)=>[
    ...arr,
...args.map((v)=>v*2),
];
console.log(doubleAndReturnArgs([1,2,3,4],5,6,7));
console.log(doubleAndReturnArgs([2],4,5,6));


//Qs5. Write a function called mergeObjects that accepts two objects and returns a new
// object which contains all the keys and values of the first object and second object.


const mergeObjects = (obj1,obj2)=>({...obj1,...obj2});
console.log(mergeObjects({a:1,b:2,c:3,d:4},{e:5,f:6}));










