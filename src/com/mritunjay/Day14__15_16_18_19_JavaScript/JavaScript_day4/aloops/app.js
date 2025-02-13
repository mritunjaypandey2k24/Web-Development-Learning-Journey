//for loop

for(let i=1; i<=5;i++){
    console.log(i);
}

for(let i=10; i>=1; i=i-3){
    console.log(i);
}

// console.log(i); this i is defined inside for loop only

//1.Print all odd numbers from 1 to 15

for(let i=1; i<=15; i++){
    if(i%2 !=0){
        console.log(i);
    }
}

for(let i=1; i<=15; i=i+2){
    console.log(i);
}

for(let i=15; i>=1; i=i-2){
    console.log(i);
}

//2. Print all even numbers from 2 to 10

console.log("forward")
for(let i=2; i<=10; i=i+2){
    console.log(i);
}

console.log("backward")

for(let i=10; i>=2; i=i-2){
    console.log(i);
}

//3.Infinite loop

// for(let i=1; i>=0; i++){
//  i always greater than 0
// }

// for(let i=1; i<=5; i--){
//    always less than 5
// }

// for(let i=1; ;i++){
//    no condition
// }

//4. Print multiplication table for 5;

console.log("Table of 5");
for(let i=1; i<=10; i++){
    console.log(5*i);
}

for(let i=5; i<=50; i=i+5){
    console.log(i);
}

// let n = prompt("enter your number");

// n= parseInt(n);
// console.log(`Table of ${n} is: `);
// for(let i=n; i<=10*n; i=i+n){
//     console.log(i);
// }


//5. Nested for Loop
console.log("Nested Loop");

for(let i=1; i<=3; i++){
    console.log(`Outer loop: ${i}`);
    for(let j=1; j<=3; j++){
        console.log(j);
    }
}

//6. While Loop
console.log("While Loop");

let iter =1;
while(iter<=5){
    console.log(iter);
    iter++;
}
console.log("Reverse");

iter =5;
while(iter>=1){
    console.log(iter);
    iter--;
}

//7.Favorite Movie
// console.log("Favorite Movie");
// let favMovie = "Matrix";
//
// let guess = prompt("Enter name of Movie");
//
// while(guess!="quit" && guess!=favMovie){
//     console.log("Write quit to quit the game");
//     guess = prompt("Wrong Guess, Please try again");
// }
// if(guess == favMovie){
//     console.log("congrats");
// }else{
//     console.log("You quitted");
// }

//8. break keyword
//stops the execution of loop
console.log("break Keyword")
for(let i=1; i<=5; i++){
    if(i==3){
        break;
    }
    console.log(i);
}
console.log("We used break at 3");

// console.log("Favorite Movie");
// let favMovie = "Matrix";
//
// let guess = prompt("Enter name of Movie");
//
// while(guess!=favMovie){
//     if(guess == "quit"){
//         console.log("you entered quit");
//         break;
//     }
//     guess = prompt("Wrong Guess, Please try again");
// }
// if(guess == favMovie){
//     console.log("congrats");
// }

//9.Loop with Array
console.log("Loop with Array");

let fruits = ["mango","apple","banana","litchi","orange"]

for(let i=0; i<fruits.length; i++){
    console.log(i, fruits[i]);
}
for(let i= fruits.length-1; i>=0; i--){
    console.log(i, fruits[i]);
}

let heroes = [["Ironman","thor","Spiderman"],["Superman","Batman","Robin"]];

for(let i=0; i<heroes.length;i++){
    console.log(`List #${i}`);
    for(let j=0; j<heroes[i].length;j++){
        console.log(j,heroes[i][j]);
    }
}

let student =[["aman",95],["Rohit",96],["Raj",98]];
for(let i=0; i<student.length; i++){
    console.log("Information of student: ",i);
    for(let j=0; j<student[i].length; j++){
        console.log(student[i][j]);
    }
}


//10: for-of Loop

//for(element of Collections){}
console.log("for-of Loop");
fruits = ["mango","apple","banana","litchi","orange"]

for(fruit of fruits){
    console.log(fruit);
}

for(character of "Microsoft"){
    console.log(character);
}

//Nested for-of Loop
console.log("Nested for-of Loop");
heroes = [["Ironman","thor","Spiderman"],["Superman","Batman","Robin"]];

for(list of heroes){
    console.log(list);

    for(hero of list){
        console.log(hero);
    }
}

//HomeWOrk

//Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
// Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
// Result should be arr = [1, 3, 4, 5, 6, 3]
let arr = [1,2,3,4,5,6,2,3];
let num=2;
//1
for(let i=0; i<arr.length; i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}
console.log(arr);

//2 Write a JS program to find the no of digits in a number.
// Example : if number = 287152, count = 6
let number = 287152;
let count =0;
while(number > 0){
    number = Math.floor(number/10);
    count++;
}
console.log(count);

//3 Write a JS program to find the sum of digits in a number.
// Example : if number = 287152, sum = 25
number = 287152;
let sum =0;
while(number >0){
    sum += number%10;
    number = Math.floor(number/10);
}
console.log(sum);

//4Print the factorial of a number n.

let n=5;

let fact =1;
for(let i=n; i>=1; i--){
    fact = fact*i;
}
console.log(fact);

//5 Find the largest number in an array with only positive numbers.

arr=[10,20,30,40,60,180];
let max=0;
for(let i=0; i<arr.length; i++){
    max = Math.max(arr[i],max);
}
console.log(max);





