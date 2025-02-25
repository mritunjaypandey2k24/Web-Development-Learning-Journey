//Async Functions
// async & await Keywords

//1. Async Keyword
// Creates an Async,Function -> returns a promise on which we can use .then() and .catch() method

// async function greet(){
//     // return "hello";  //returns a promise
// }
//
// console.log(greet());//if I comment the return statement still the promise is returned but promise result is undefined

//on normal execution state is fulfilled  but if their is a error the promise returned but state is rejected state

// async function greet(){
//     // throw " weak connection!"; //it throws  an error as throw is used for error
//     throw " 404 page not found!"; //it throws  an error as throw is used for error
//     return "hello";
// }
//
// console.log(greet());
//
// greet()
// .then((result)=>{
//     console.log("promise was resolved");
//     console.log("result was : ",result);
// })
// .catch((error)=>{
//     console.log("promise was rejected with err :", error);
// })
//
// //making arrow function async
//
// let demo = async ()=>{
//     return 5; //promise is returned
// }
// console.log(demo());

//2.Await Keyword
// pauses the execution of its surrounding async function until the promise is settled
// (resolved or rejected)


// function getNum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let nums = Math.floor(Math.random()*10)+1;
//             console.log(nums);
//             resolve();
//         }, 1000);
//
//     })
// }
//
// async function demo(){
//     await getNum(); //await can be used only inside async function
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// }
//
// console.log(demo());

let h1 = document.querySelector("h1");
function changeColor(color,delay, ){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            if(num >5){
                reject("promise rejected");
            }

            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve("Color Changed");
        },delay);
    })
}

// changeColor("red",1000)
//     .then(()=>{
//         console.log("Red color was completed");
//         return changeColor("green",1000);
//     })
//     .then(()=>{
//         console.log("green color was completed");
//         return changeColor("blue",1000);
//     })
//     .then(()=>{
//         console.log("blue color was printed");
//     });

//compare to above the code become small with help of async and await keyword

async function demo(){
    try{
        await changeColor("red",1000);
        await changeColor("blue",1000);
        await changeColor("green",1000);
        await changeColor("purple",1000);
    }
    catch(err){
        console.log("error caught");
        console.log(err);
    }


//Await Keyword
// Handling Rejections with Await using try and catch
    let a = 5;
    console.log(a);
    console.log("new number is : ",a+5);
}

demo();




