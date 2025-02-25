// let obj ={
//     a:undefined, //No error but in json it will give error as it does not have undefined
// }
//when we request to api the response is in JSON this response is in form of string
//
//JSON
//Accessing Data from JSON
// JSON.parse( data ) Method
// To parse a string data into a JS object
// JSON.stringify( json ) Method
// To parse a JS object data into JSON



// let jsonRes = '{"fact":"Many cats love having their forehead gently stroked.","length":52}';//This is my json response
// to get data we use
// JSON.parse( data ) Method
// To parse a string data into a JS object

// console.log(jsonRes);
// //convert to valid format
// let validRes = JSON.parse(jsonRes);
// console.log(validRes); //now it becomes a JS object
// console.log(validRes.fact);
//
// // JSON.stringify( json ) Method
// // To parse a JS object data into JSON
// //Convert JS object -> JSON
//
// let student = {
//     name:"Mritunjay",
//     College: "SPCE"
// }
//
// let jsonify = JSON.stringify(student);
// console.log(jsonify);

//8 Testing API requests
// Tools
// • Hoppscotch -> no need to download and signup
// • Postman -> to use it we have to download and signup

//9 Ajax
// Asynchronous JavaScript and XML
//hota to Asynchronous JavaScript and JSON but purana terminology hai isliye chala rahe hai



//10 Http Verbs
// Examples :
// • GET  jab hume koi information leni hoti hai to get use hota hai
// • POST   jab hum api data ke saath koi data post/ bhejna chahte hai
// • DELETE  for deleting something



//11.Status Codes
// Examples :
// • 200 - OKAY means sab thik hai
// • 404 - Not Found api exist nahi karta hai client side error
// • 400 - Bad Request
// • 500 - Internal Server Error server side error

//12  Add Information in URLs
// Query Strings
// https://www.google.com/search?q=harry.potter
// Key-> q
// Value -> harry+potter

// ?name=mritunjay&marks:95
//key is name and value is mritunjay


//13  Http headers  supply additional info in request as well as response
// header, value


//along with header we send metadata it is data about data


//14 Our First Request
// using Fetch
// fetch( url )

// let url = "https://catfact.ninja/fact";
// // let url = "https://catfact.ninja/fact2";//error
// fetch(url) //this return a promise in form of response
// .then((res)=>{
//     console.log(res);
//     // console.log(res.json());
//     // res.json().then((data)=>{
//     //     console.log(data);
//     // })
//
//     return res.json();
// })
//     .then((data)=>{
//         console.log("Data 1: ",data.fact);
//         return fetch(url);
//     })
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data2)=>{
//         console.log("Data 2: ",data2.fact);
//     })
//     .catch((err)=>{
//         console.log("ERROR: ",err);
// })
//
// console.log("I am Happy");

//15 Our First Request
// using Fetch with async/await

let url = "https://catfact.ninja/fact";
// let url = "https://catfact.ninja/fact4";

async function getFacts(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);

    }
    catch(err){
        console.log(err);
    }

    console.log("bye");

}

console.log(getFacts());












