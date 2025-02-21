// let student1="Mritunjay";
// let student2 = "Adarsh";
// let student3 = "Rahul";

let students = ["Mritunjay","Adarsh","Rahul"];
console.log(students);

let nums = [2,4,6,8];

console.log(nums[0]);
console.log(nums[1]);
console.log(nums[5]); //undefined
console.log(nums.length);
console.log(typeof nums); //object


let marks = [99,89,67,42,100];

//Array with Different DataType

let info = ["Mritunjay" ,24, 90.8];
console.log(info);

//Empty Array
let empArr =[];
console.log(empArr);
console.log(empArr[0]); //undefined

//length
console.log(info.length);
console.log(empArr.length);

//
console.log([].length); //0
console.log([1,2,3,4].length); //4

console.log(info[0]);
console.log(info[0][0]);   // 'M' //1st element ke 0th index wala character, llr to method chaining
console.log(info[0][1]);   //'r'
console.log(info[0].length);  //9

//Array are Mutable
let name = "Rohit";
name[0] = 'm';//No effect as strings are immutable
console.log(name); //Rohit

let fruits = ['mango', 'apple','litchi'];
console.log(fruits);
console.log(fruits.length);

fruits[0] = "banana";
fruits[1] = "pineapple";
console.log(fruits);

fruits[10]= 'papaya';
console.log(fruits.length); //11
console.log(fruits);

//Array Method

//push: add to end
let cars = ["audi","bmw","maruti","xuv"];
console.log(cars);
cars.push("toyota");
console.log(cars);

//pop: remove element from end and it return that element
console.log(cars.pop());

//Unshift: add to start
cars.unshift("toyota");
console.log(cars);
cars.unshift("ferrari");
console.log(cars);

//shift to remove the first element and returns it
console.log(cars.shift());
console.log(cars);

//
let follower = ["a","b","c"];
let block = follower.shift();
console.log(follower);
console.log(block);

//Practise

let start = ['january', 'july', 'march','august'];
console.log(start.shift());
console.log(start.shift());
start.unshift("june");
start.unshift("july");
console.log(start);


//Array method

//indexOf
let primary=["red","yellow","blue"];
console.log(primary.indexOf("yellow")); //1
console.log(primary.indexOf("green")); //-1 not present
console.log(primary.indexOf("red")); //0

//includes: search for a value
console.log(primary.includes("red")); //true
console.log(primary.includes("green")); //false


//Array Method

//concat: merge 2 array

let secondary = ["orange","green","violet"];

console.log(primary.concat(secondary));

let allcolors = primary.concat(secondary);
console.log(allcolors);



//reverse method: reverse an array
console.log(allcolors.reverse());

//slice: copies a portion of an array

let colors = ["red","yellow","blue","orange","pink","white"];
console.log(colors.slice()); // make copie of entire array
console.log(colors.slice(2)); //si=2 till the end
console.log(colors.slice(2,3)); //si=2 ei=3(exclusive)
console.log(colors.slice(-2)); //means length-2 : 6-2=4 is the si and till the end


console.log(colors.slice(colors.length -1)); //last element or last se 1 element chahiye
console.log(colors.slice(-2)); //last 2 elements
console.log(colors.slice(-3)); //last 3 elements
console.log(colors.slice(-8)); //full array print as size only 6


console.log(colors.slice(7)); //[]: empty array as the size is 6 and not element at 7
console.log(colors.slice(colors.length));


//splice method:removes/replaces/add element in place
// make changes in the original array
//arrname.splice(si, deletecount, items1,items2.....);


let colors1 = ["red","yellow","blue","orange","pink","white"];

console.log(colors1);
console.log(colors1.splice(4)); //removes element from index 4 in color
console.log(colors1);

console.log(colors1.splice(0,1)); //0 is si, from their remove 1 element i.e red
console.log(colors1);  //3 element remains
console.log(colors1.splice(0,1,"black","grey")); //from si=0 remove 1 element i.e yellow and add new item their
console.log(colors1);
console.log(colors1.splice(0,0,"red","yellow")); //at index 0, no element deleted and added red abd yellow
console.log(colors1)

//Sort in array
//i.e arranging in asc or desc order
cars = ["toyota","gwagon","xuv","maruti","bmw","ferrari"];
console.log(cars);
//sort in ascending in string array
cars.sort();
console.log(cars);
let chars = ['d','a','c','b'];
chars.sort();
console.log(chars);

//number sort
let marksNum =[99,89,67,42,100];
console.log(marksNum);
console.log(marks.sort()); //there is discrepancy: it convert number in string and then unicode of that string is sorted
//therefore sort works for character and string array only



//Practise Question

let starts = ["january","july","march","august"];
starts.splice(0,2,"july","june");
console.log(starts);

let language = ['c','c++','html','javascript','python','java','c#','sql'];
console.log(language.reverse().indexOf('javascript'));

//Array References
//Reference means address in memory
console.log("name"=="name"); //true
console.log("name"==="name"); //true
console.log([1]===[1]); //false: means both array are different
console.log([1]==[1]); //false: means both array have different value
console.log([]==[]); //false;

//Here when we create an array let say arr[],
//arr is the reference variable and it doesn't store
//element itself, but their address in the memory

let arr1 = [1];
let arr2 =[1];

//2 ref variable created arr1 and arr2
//element of arr1, 1 is at adresss let say 123
// element of arr2, 1 is at adrress let say 567
//so when we compare arr1 === arr2(or ==) they compare address and not element
//which are different due to which it returns false

let arr=['a','b'];
let arrCopy = arr;
// here arr contains adress of elements so as
// equate arrcopy with arr value in arr i.e
//adress of 'a' and 'b' of arr is copied to arrCopy
//so arrCopy also points to same memory address

console.log(arr==arrCopy)//true;
console.log(arr===arrCopy)//true;
arr.push('c');
console.log(arrCopy); //['a','b','c']
arrCopy.pop();
console.log(arr);//['a','b']

//naya array banaya to naya address chahe andar ki value same ho





//Constant Arrays

let a=5; //can change its value
const b=5; //cant change value

const g =10; //assignment to const variable not possible

const newArray = [1,2,3];
newArray.push(4);
console.log(newArray);
newArray.pop();
console.log(newArray);
//we can perform operation on const array
//but we cannot convert it to new array
// i.e assigning new array
// newArray = [1,2,5]; like this
//as newArray stores address and not element so we can change
//element value but not its address

// newArray =cars; //not possible

//advantage is that for imp array we mistakely dont change the array like assigning null etc etc


//NESTED ARRAY/ Multi dimensional array//2d-array

nums = [[2,4],[3,5],[4,6]];
console.log(nums);
console.log(nums.length);//3
console.log(nums[0]);   //[2,4]
console.log(nums[1]);   //[3,5]
console.log(nums[0].length);     //2
console.log(nums[0][0]);     //2
//here no of row = no of array inside nums
//no of col = no of element inside array of num array
console.log(nums[1][3]); //undefined as 3rd element not present inside the array

//Practise Question
//Create a nested array to show the tic tac toe game state

let tictactoe = [["X",null,"O"],
                        [null,"X",null],
                        ["O",null,"X"]];
console.log(tictactoe);
tictactoe[0][1] = "O";
console.log(tictactoe);

//HomeWork
let homework = [7,9,0,-2];
let n=3;
let ans =homework.slice(0,n)
console.log(ans);

//get last n element of an array
ans = homework.slice(-n);
console.log(ans);

//Qs3. Write a JavaScript program to check whether a string is blank or not.
let string = "hello";
if(string.length ==0){
    console.log("String empty");
}else{
    console.log("String not empty");
}
//4.Write a JavaScript program to test whether the character at the given (character)
// index is lower case.

name = "Rohit";
let idx = 3;
if(name[idx]>='a' && name[idx]<='z'){
    console.log("It is lowercase")
}else{
    console.log("It is not lower case")
}


if(name[idx]==name[idx].toLowerCase()){
    console.log("It is lowercase")
}else{
    console.log("It is not lower case")
}


//Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.

string = "     Hellothere     ";
ans = string.trim();
console.log(ans);

//Qs6. Write a JavaScript program to check if an element exists in an array or not.

let existence = [1,2,3,4,5,6,7];
let search = "jeffry";
ans = existence.indexOf(search);

if(ans != -1){
    console.log("Element exist");
}else{
    console.log("Element doesn't exist");
}









