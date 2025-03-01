//Node.js
// It is JavaScript Runtime Environment
// It is used for server side programming.

// *Node.js is not a language, library or framework.
//used to build backend and web server

// console.log("hello");

//3.Node REPL
//in terminal type "node" then u can perform same task as on the console of browser
// .help to get help
// .exit to exit or (Ctrl+c) 2 time to exit node enviroment

//4 Node files
//
// let n=5;
//
// for(let i=0; i<n; i++){
//     console.log("Hello",i);
// }

// to run this through node in terminal, we should be in the directory where the app.js file is
// and then run the node  and in it type "node app.js"
//
// console.log("Bye");

//6. Process
// process : This object provides information about, and control over, the current Node.js process.
//
// In REPL we can type below
// process.version
//process.release
// process.cwd  : return the current directory in repl
// process.argv : returns an array containing the command-line arguments passed when the Node.js
// process was launched.

// console.log(process.argv);

let args = process.argv;
for(let i=2; i<args.length; i++){
    console.log("Hello to ",args[i]);
}

//like in Browser we used prompts similarly Here we can use args to take some values and for that we use process.argv property



//7. module.exports
// requiring files
//to use function and values from other file

// require()         // a built-in function to include external modules that exist in separate files.
// module.exports    //a special object which contains everything one file want to send other file

// const someValue = require("./math");  // here ./ means same directory me math wala file se jo export hua hai wo humne require karliya yani use ek variable  me store kiya
//
// console.log(someValue);

// const math = require("./math");
// console.log(math);
// console.log(math.sum(2,3));
// console.log(math.PI);

//we dont write all code in a single file we divide code in multiple files
// let suppose for a user we have to write signup and login  code along with that a code to change users profile
//so both code we write in different javascript code;
//so in this way we get modularity in code
//i.e dividing codes in small small module


//8. module.exports
// requiring Directory  i,e ek directory se dusre directory me data kaise tranfer karte hai

// const info = require("./Fruits");  //here we require a directory
// console.log(info);

//ye 3 steps me hota hai
//require(./Fruit) karne par require Fruits directory me index.js naam ke file ko search karta hai
// and index.js is the entry point for that directory
//llr to main in java as main is the entry point for java

// console.log(info[0]);
// console.log(info[0].name);

//9. NPM (Node Package Manager)
// npm is the standard package manager for Node.js.

//1)it is a library of packages
//package is code written by someone which we can use
// express js used in backend and reactjs for frontend
//this are packages in the npm

//2) it functions (npm) as a command line tool


//10: Installing Packages

//npm install <- package nam->
//figlet package for printing text on command line
//befor installing a package make diretory for that package got to that directory in the cmd line
// these package have the scope only in the directory in which they are installed

//Installing Packages

//node_modules: The node_modules folder contains every installed dependency for your project. like in our code we used api then it become our dependency

// package-lock.json : It records the exact version of every installed dependency,
// including its sub-dependencies and their versions.

//package.json
// The package. json file contains descriptive and functional metadata(metadata is data about data) about a project, such as a name,
// version, and dependencies


// to make a package of our own project we use npm init for making the package
// npm init

//agar module package me delete hojaye ya naho then we can use "npm install" and enter it will download all modules


//12. Local V/S Global
// npm install -g <- package name ->  //for installing globally
// npm link <- package name ->   //before running the app.js we have to use this line to link the package

// we cant use the figlet which is in figlet directory
//But we can install package globally also but installing it locally for a particular directory is best practise

//Not advisable to use globally

//13. require V/S import
// import { sum } from "./math.js"

// We can't selectively load only the pieces we need with require but with import, we can selectively load only
// the pieces we need, which can save memory.

// Loading is synchronous for 'require' but can be asynchronous for 'import'.

import {sum,PI} from "./math.js";
//saare function or constant ko export bhi karna hai math.js me
//ise use karne se pehle iss directory ko packaage banane ke baad iske package.json file me "type": "module" add karna padega
//tab hi use kar sakte hai

//Aur haan, yaha pe hum ya to sirf require use karsakte hai ya fir import dono ek sath nahi
console.log(sum(2,3));
console.log(PI);

//can be used for packages as well can be seen in RandomWords Directory



