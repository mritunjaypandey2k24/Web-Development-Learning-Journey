//trim() method
//
// to remove space from start and
// end of string i.e it make a new string with no
// spaces at start and end as strings are immutable
// let msg= "      He  llo       ";
// console.log(msg);
// console.log(msg.trim());
//
// let password = prompt("Set your password");
// let newPassword = password.trim();
// console.log(password);
//
// let msg = "    abc";
// msg = msg.trim();


// //toUpperCase() or .toLowerCase()

// let name = "Mritunjay";
// let msg = "error";
// console.log(msg.toUpperCase());



//Methods with Arguments

//indexOf() gives first occurence

// let str = "ILoveCoding";
// console.log(str.indexOf("Love"));  //1
// console.log(str.indexOf("love"));  // doesnt exist : -1
//
// console.log(str.indexOf("j"));   // j not present -> o/p: -1
// console.log(str.indexOf("o"));  //2


//Method Chaining

// let msg = "       hello";
// console.log(msg);
//
// // let newMsg = msg.trim();
// // console.log("after trim: ",newMsg);
// // newMsg = newMsg.toUpperCase();
// // console.log( "after Uppercase: ",newMsg);
//
// //OR
// let newMsg = msg.trim().toUpperCase();
// console.log(newMsg);


//slice method: return a part of original string as new string

// let str = "ILoveCoding";
// console.log(str.slice(1,5));   //Love: si=1 and ei=5(non-inclusive)
// console.log(str.slice(1));  //from si=1 to end of the string
// console.log(str.slice(1, str.length));
//
// console.log(str.slice(-1)); // 11-1= 10 so prints index 10 till end i.e 'g'
// console.log(str.slice(-2)); // 'ng'
// console.log(str.slice(-3));  // 'ing'
//
// console.log(str.substring(1,5));


//replace method:


// search for a value in string and replace it with other value
//only first occurence is replaced

// let str = "ILoveCoding";
// console.log(str.replace("Love","do"));
//
// console.log(str.replace('o','x'));

//repeat method

// let str = "ILoveCoding";
// console.log(str.repeat(3));
// let fruit = "mango";
// console.log(fruit.repeat(3));

//Practise QUestion
// let msg = "help!";
// msg  = msg.trim().toUpperCase();
// console.log(msg);
//
// let str = "ILoveCoding";
// console.log(str.slice(4,9)); //eCodi
// console.log(str.indexOf("ve")); //3
// console.log(str.replace("I","We"));
// console.log(str.slice(5).replace('d','t'));

// let str= "college";
// console.log(str.replace('l','t').replace('l','t'));


//ARRAYS
let students = ["Mritunjay","Adarsh","Rahul"];
















