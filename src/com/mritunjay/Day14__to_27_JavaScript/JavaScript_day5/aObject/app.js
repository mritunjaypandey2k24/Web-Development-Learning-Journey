// //Object Literals: used to store keyed collections & complex entities
// // object are collection of properties
// // properties => (key, value) pair
//
// // Creation of Object Literal
//
// // let student = { OR
// const student = {
//     name: "Mritunjay",
//     age: "24",
//     CPI: 8.23,
//     city: "Mumbai"
//
// };
//
// let student2 = ["Mritunjay",23,8.23];
// //therefore we use Object literals for complex data and not array
// //similar to array for const object literal the reference cannot be change but the
// //properties can be changed
//
// let delhi ={
//     latitude:"28.7041 N",
//     longitude: "77.1025 E"
// };
//
// const item = {
//     price: 100.99,
//     discount: 50,
//     colors : ["red","blue"]
// };
//
//
// //3.Creating a Post
// // Thread /Twitter Post
// // Create an object literal for the properties of thread/ twitter post which includes -
// // · username
// // · content
// // · likes
// // · reposts
// // · tags
//
// const post = {
//     username: "@mritunjaypandey",
//     content:"This is my #firstPost",
//     likes: 150,
//     repost: 5,
//     tags: ["@alpha","@beta","@gamma"],
//     1: "xyz"
// }
// console.log(post["username"]);
// console.log(post[1]);
//
// //4. Get Values
//
// let student3 = {
//     name:"Mritunjay",
//     CPI: "8.23"
// };
//
// console.log(student3["name"]);
// console.log(post["content"]);
// console.log(post["tags"]);
//
// console.log(student3.name);
// console.log(student3.CPI);
// console.log(post.content);
// console.log(post.tags);
// console.log(post.tags[0]);
// console.log(post.username);
//
// //why use square bracket: when we have to use variables then we use square bracket wala option
// let prop = "repost";
// console.log(post[prop]);
//
//
//
// //5.Conversion in Get Values
// // JS automatically converts objects keys to strings when we use [] to get the value(only in case of number or keyword as key)
// // Even if we made the number as a key, the number will be converted to string.
//
// const obj = {
//     1:"a",
//     2:"b",
//     true:"c",
//     null:"d",
//     undefined:"e"
// };
// //Js convert all above keys to string
// console.log(obj);
// console.log(obj[1]); //1 is not index and not number, JS convert it to first String and then access the key in the object
// console.log(obj[2]); // hum to 2 likh rahe hain but JS use string me convert karta hai then keys se match karke uski value dega
// console.log(obj[null]); //ye null nahi hai ise JS string me covert karta hai internally
// console.log(obj[undefined]);
// console.log(obj[true]);
//
//
// // console.log(obj.1);   . operator doesnt convert 1 to string
// console.log(obj.null);
// console.log(obj.true);
// console.log(obj.undefined);
//
// //we use names normally for key instead of reserved keywords like true,undefined, null
//
//
// //6.Add_Update Values of Object literals for already existing value
//
// const student4 = {
//     name: "Mritunjay",
//     age: "24",
//     CPI: 8.23,
//     city: "Mumbai"
//
// };
// //change city to delhi, add new property gender:male, change cpi to marks and 8.23 to A
// student4.city = "Delhi";
//
// console.log(student4.city);
// console.log(student4);
//
// // student.gender right now undefined
// student4.gender = "Male";
// console.log(student4.gender); //Male
// console.log(student4);
//
// student4.CPI = "A";
// console.log(student4);
//
// student4.CPI = [98,98,100];
// console.log(student4);
//
// //delete values
// // delete obj.keyName;
// delete student4.CPI;
// console.log(student4);
//
// console.log(delete student4.city);
// console.log(student4);
//
// //Nested Objects
//
// //object of objects
// // storing information of multiple students
//
// const classInfo = {
//     aman: {
//         grade: "A+",
//         city: "Mumbai"
//     },
//
//     kisan: {
//         grade: "A",
//         city:"Delhi"
//     },
//
//     ajay: {
//         grade:"O",
//         city: "Nagpur"
//     }
// };
// console.log(classInfo.aman);
// console.log(classInfo.kisan);
// console.log(classInfo.ajay);
//
// console.log(classInfo.aman.city);
// console.log(classInfo.aman.grade);
// classInfo.aman.city = "Gurgaon";
// console.log(classInfo);
//
//
// //Array of Objects
const classInfo1 = [

    {
        name:"aman",
        grade:"A+",
        city: "Mumbai"
    },
    {
        name: "kisan",
        grade:"A",
        city:"Pune"
    },
    {
        name:"karan",
        grade:"O",
        city: "Delhi"
    }


];

console.log(classInfo1)
console.log(classInfo1[0]);
console.log(classInfo1[1]);
console.log(classInfo1[2]);

console.log(classInfo1[0].name);
console.log(classInfo1[0].grade);
console.log(classInfo1[0].city);
classInfo1[0].city ="gurgaon";
console.log(classInfo1[0].city);

classInfo1[0].gender = "Male";
console.log(classInfo1[0]);
//
// //9. Math Object
// //Math.PI, Math.E(exponenetial (e)
// //Math.cos, Math.abs, Math.pow(a,b)->a^b
// //Math.floor(n), Math.ceil(n)
// //Math.random()
//
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.abs(-356));
// console.log(Math.pow(2,3));
// console.log(Math.floor(3.23));
// console.log(Math.floor(-3.23));
// console.log(Math.ceil(3.21));
// console.log(Math.ceil(-3.21));
// console.log(Math.random());
// console.log(Math.random()*10);
//
// //Random Integer
// //from 1 to 10
// let step1 = Math.random();
// let step2 = step1*10;
// let step3 = Math.floor(step2);
// let step4 = step3+1; // range changes from 0-9 to 1-10
// console.log(step4);
//
//
// //11 practise
// // Generate a random number between 1 to 100
// console.log(Math.floor(Math.random()*100)+1);
//
// //Generate a random, number between 1 to 5
// console.log((Math.floor(Math.random()*5)+1));
// console.log((Math.floor(Math.random()*10)+1)%5+1);
//
// //Generate a random number between 21 to 25
// console.log(Math.floor(Math.random()*5)+21);
//
//
//
// //HomeWork
// //Create a program that generates a random number representing a dice roll.
// // [The number should be between 1 and 6].
// console.log(Math.floor(Math.random()*6)+1);
//
//
// //Create an object representing a car that stores the following properties for the
// // car: name, model, color.
// // Print the car’s name.
// console.log("HomeWork")
// let car = {
//     name:"Maruti",
//     model: "maruti-800",
//     color: "maroon"
// }
// console.log(car.name);
//
// //3. Create an object Person with their name, age and city.
// // Edit their city’s original value to change it to “New York”.
// // Add a new property country and set it to the United States.
//
// Person = {
//     name: "Peter Parker",
//     age:24,
//     city: "WashingtonDC"
// }
// Person.city = "NewYork";
// Person.country = "United States";
// console.log(Person);
//
//
//
//
//
//
