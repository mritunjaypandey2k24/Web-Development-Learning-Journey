//1. Get & Post Requests

// GET
// > Used to GET some response
// > Data sent in query strings
// (limited string data & visible in URL)

//POST
// > Used to POST something (for Create/Write/Update)
// > Data sent via request body (any type of data)

//2. Handling Post requests
// • Set up POST request route to get some response
// • Parse POST request data

//app.use(express.urlencoded({ extended: true }));
// app. use(express. json());

//3. Revisiting JS

//Object Oriented Programming
// To structure our code

// • prototypes
// • New Operator
// • constructors
// • classes
// • keywords (extends, super)
//
// const student1 = {
//     name:"aman",
//     age: 24,
//     marks:89,
//
//     getMarks: function(){
//         return this.marks;
//     }
// }
//
// const student2 = {
//     name:"raj",
//     age: 24,
//     marks:89,
//     getMarks: function(){
//         return this.marks;
//     }
// }
// const student3 = {
//     name:"jay",
//     age: 24,
//     marks:89,
//     getMarks: function(){
//         return this.marks;
//     }
// }

//This is an inefficient method to create objects
//getmarks func is created many time in each object, keys are repeated i.e inefficient


//4. Object Prototypes
// Prototypes are the mechanism by which JavaScript objects inherit features from one another.

// It is like a single template object that all objects inherit methods and properties from without having
// their own copy.

// arr.__proto__(reference)
// Array.prototype (actual object)
// String.prototype

//Every object in JavaScript has a built-in property, which is called its prototype. The prototype is
// itself an object, so the prototype will have its own prototype, making what's called a prototype
// chain. The chain ends when we reach a prototype that has null for its own prototype.


// let arr = [1,2,3];
// let arr2 = [1,2,3];
// arr.sayHello = ()=>{
//     console.log("Hello!, i am arr");
// };
// arr.push(4);
// console.log(arr);
// console.log(arr2); //doesn't contain sayHello function
// // but we cant define sayhello for  large num of array everytime
// // so if we want it to accesible by all array we define it in array prototype
// // similarly  function we want all string should have we define it in string prototype
//
// // console.log(arr.__proto__);
// // arr.__proto__.push = (n) =>{console.log("pushing number: ",n);}
// // arr.push(3); //only prints and not pushes actually in arr
// // console.log(arr);
// // arr.push(5);
//
// console.log(Array.prototype);
// console.log(String.prototype);
//
// let arr3 = [1,2,3,4,5];
// let arr4 = [1,2,3,4,5];
//
// arr3.sayHello = ()=>{
//     console.log("Hello!, i am arr");
// };
//
// arr4.sayHello = ()=>{
//     console.log("Hello!, i am arr");
// };
//
// console.log(arr3.sayHello===arr4.sayHello); //false; why? even though function name and its function is same?
//
// //bcoz for individual object anything we define is created in memory seperately
// //but for prototype, object dont make memory seperately during defining
//
// console.log("abc".toUpperCase === "xyz".toUpperCase);//true
// //both string refer to same uppercase function they dont have seperate function for that in memory


//5 Factory Functions
// A function that creates objects

// function PersonMaker(name,age){
//     const person = {
//         name:name,
//         age: age,
//         talk(){
//             console.log(`Hi my name is ${this.name}`);
//         }
//     };
//
//     return person;
// }
//
// let p1 = PersonMaker("adam",25);
// console.log(p1);
// p1.talk();
//
// let p2 = PersonMaker("eve",25);
// console.log(p2);
// p2.talk();

//this is also not an effiecient way and it has disadvantage
// as each object will create it own copy in memory
//verify
// console.log(p1.talk === p2.talk); //false;

// //using constructors -/ doesnt return anything and Start with Capital letter by convention
// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }
//
// person.prototype.talk = function(){
//     console.log(`Hi my name is ${this.name}`);
// }
//
// let p1 = new Person("adam",25); //instances
// let p2 = new Person("eve",25);

//6. New operator
// The new operator lets developers create an instance of a user-defined object type or of one of
// the built-in object types that has a constructor function.

// console.log(p1.talk === p2.talk); //true as talk is only created in prototype of Person constructor whom both instance p1 and p2 refer


// 7. Classes in JS
// Classes are a template for creating objects
// The constructor method is a special method of a class for creating and initializing an
// object instance of that class.

// class Person{
//     constructor(name,age){
//         this.name =  name;
//         this.age = age;
//     }
//
//     talk(){
//         console.log(`Hi, I am ${this.name}`);
//     }
// }

// let p1 = new Person("adam",25);
// let p2 = new Person("eve",25);
// console.log(p1);
// console.log(p2);
// p1.talk();
// p2.talk();
// console.log(p1.talk === p2.talk); //inside the class the functions are automatically created in prototype
// // so all new instances point to the same function and do not create a new function for each instance

//8. Inheritance
// Inheritance is a mechanism that allows us to create new classes on the basis of already existing classes.



// class Student{
//     constructor(name,age,marks){
//         this.name = name;
//         this.age = age;
//         this.marks = marks;
//     }
//     talk(){
//         console.log(`Hi, I am ${this.name}`);
//     }
// }
//
// let s1 = new Student("ajay",24,80);
//
// class Teacher{
//     constructor(name,age,subject) {
//         this.name = name;
//         this.age = age;
//         this.subject = subject;
//     }
//
//     talk(){
//         console.log(`Hi, I am ${this.name}`);
//     }
// }
//Here the name,age prop and talk method is repeating so we use inheritance for such cases

// class Person{
//     constructor(name, age) {
//         console.log("Person class constructor")
//         this.name = name;
//         this.age = age;
//     }
//
//     talk(){
//         console.log(`Hi, I am ${this.name}`);
//     }
// }
//
// class Student extends Person {
//
//     constructor(name,age,marks){
//         console.log("Student class constructor")
//         super(name,age); //parent class constructor is called
//         this.marks = marks;
//     }
//
// }
//
//
// class Teacher extends Person {
//
//     constructor(name,age,subject){
//         super(name,age);
//         this.subject = subject;
//     }
//
//
// }
//
//
// let s1 = new Student("ajay",24,80);
// console.log(s1.name);
// console.log(s1.age);
// s1.talk();
//
// let t1 = new Teacher("eve",32,"English");
// console.log(t1);
// t1.talk();



class Mammal{ //base class
    constructor(name){
        this.name = name;
        this.type = "warm-blooded";
    }

    eat(){
        console.log("I am eating");
    }
}

class Dog extends Mammal{ //child class
    constructor(name) {
        super(name);
    }

    eat(){
        console.log(`${this.name} is eating`);
    }

    //function overriding
    bark(){
        console.log("Woof");
    }
}

class Cat extends Mammal{ //child class
    constructor(name){
        super(name);
    }

    meow(){
        console.log("meow....");
    }
}

let dog1 = new Dog("dobby");
console.log(dog1);
console.log(dog1.type);
console.log(dog1.name);
dog1.bark();
dog1.eat();




