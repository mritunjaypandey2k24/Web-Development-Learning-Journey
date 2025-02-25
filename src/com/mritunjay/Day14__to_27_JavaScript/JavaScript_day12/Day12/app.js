// //1.Call Stack
//
// function hello(){
//     console.log("inside hello function");
//     console.log("hello")
// }
// // hello() //function call
//
// function demo(){
//     console.log("calling hello function")
//     hello();
// }
//
// console.log("calling demo function");
// demo();
// console.log("done, bye!");
//
// //Visualising call stack
//
// function one(){
//     return 1;
// }
//
// function two(){
//     return one()+one();
// }
//
// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }
//
// three(); //function call

//BreakPoints
//in the source of dev tool in top there is app.jas where we can add break point
// at line we want and then press on step into to check each step and  observe the call stack
//which function is there at tha point of time

// JS is Single Threaded ek time pe code ki ek chij hi chalegi
// ek time pe ek kaam hota hai multiple kaam nahi hota same time me

//
// let a =24;
// console.log(a);
// let b=10;
// console.log(b);
// console.log(a+b);
//
// //eg: Js -> req to API-> API send the response// is response ke aane me time lagta hai so JS ko wait karna chahiye kya uska and tabtak uske niche ke code ko rok ke?
// // JS-> send data from form to Database -> DB stores it and tell if it was saved or there was an error
// //so large data DB takes time to add it.
// //will JS wait  till DB or API take their time to response
// //then the JS will stop and features of page will not work
// //SO TO DEAL WITH SINGLE THREADED NATURE
// //wE USE CallBacks: this func are arhument in other function OR use setTimeout
// // piece of code will execute after some time
//
// setTimeout(()=>{
//     console.log("Mritunjay");
// },2000);
//
// setTimeout(()=>{
//     console.log("Hello There");
// },2000);
//
// console.log("Hello....");

//if JS is single threaded then how it can perfom task of wait and also run the next line after the timeout
// reason: waiting ka kaam JS nahi karwata wo browser karwata hai and wo C++ me likha hua hai joki multi-threaded hai
//
//Synchronous nature: ek ke baad ek jo line of code wo run kar raha hai
//Asynchronous nature: jab ek line of code kuch der baad execute ho even though bake code ke wo pehle hai like setTimeout to use Asynchronous nature kehta hai

//Here we saw Asynchronous nature of JS


//Callback Hell
//
// let h1 = document.querySelector("h1");
//
// function changeColor(color,delay, nextColorChange){
//     setTimeout(()=>{
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     },delay);
//
//
// }

// setTimeout(()=>{
//     changeColor("red");
// },1000);
//
// setTimeout(()=>{
//     changeColor("blue");
// },2000);
//
// setTimeout(()=>{
//     changeColor("orange");
// },2000);

// changeColor("red",1000, ()=>{
//     changeColor("orange",1000, ()=>{
//         changeColor("blue",1000,()=>{
//             changeColor("cyan",1000,()=>{});
//             changeColor("magenta",1000);
//         });
//     });
// });//this callback nesting is called callback hell;

// changeColor("orange",2000);
// changeColor("blue",3000);

//to save our selfs from callback hell we have promises,async, await

//Promises
// The Promise object represents the eventual completion (or failure) of an asynchronous operation
// and its resulting value.


// function savetoDb(data, success, failure){
//
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//
//     if(internetSpeed > 4){
//         // console.log("your data was saved",data);
//         success();
//     }
//     else{
//         // console.log("weak connection. data not saved");
//         failure();
//     }
// }
//     // Welcome to CALLBACK hell ->
// savetoDb("Mritunjay Pandey",
//     ()=>{
//         console.log("Success: your data was saved");
//         savetoDb("Hello there",()=>{
//             console.log("Success2: your data2 saved");
//             savetoDb("Howdy@!!!",()=>{
//                 console.log("Success3!, data3 saved");
//             }, ()=>{
//                 console.log("failure3: weak connection");
//             })
//         }, ()=>{
//             console.log("failure: weak connection. data2 not saved");
//         })
//     },()=>{
//         console.log("failure: weak connection, data not saved");
//     }
//     );//Confusing code hai chill next step me confusion khatam ho sab understand ho

//Promises
// The Promise object represents the eventual completion (or failure) of an asynchronous operation
// and its resulting value.

// Promises ek object hai
// isme do chije hai resolve(success wala callback)  and reject(failure wala)


function savetoDb(data){

     return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("Success:data was saved");
        }else{
            reject("failure: weak connection");
        }
    });
}

// console.log(savetoDb("Mritunjay"));

//Promises methods
// .then() & .catch()
//if the promise was resolved(success) and we want to perform some work after success we use .then()
// else if promise was rejected(failure) and we want to perform some work after failure we use .catch()
// catch promise ke reject hone ke error ko catch karta hai

// let request = savetoDb("Mritunjay Pandey"); //req is promise object here
// // console.log(request);
// request.then(()=>{
//     console.log("promise was resolved");
//     console.log(request);
// })
//     .catch(()=>{
//         console.log("promise was rejected");
//         console.log(request);
//     })

// savetoDb("Hello there").then(()=>{
//     console.log("promise was resolved");
//
// })
//     .catch(()=>{
//         console.log("promise was rejected");
//
//     })

//Promises : Promise chaining
//improved version of callback where we saved data i.e callback savetoDb if previous savedata call was success

// savetoDb("Hello there")
//
//     .then(()=>{
//     console.log("data1 saved.");
//     return savetoDb("Hello World");
//
// })
//
//     .then(()=>{
//     console.log("Data2 was saved");
//     return savetoDb("Mritunjay");
// })
//
//     .then(()=>{
//         console.log("data 3 saved");
//     })
//
//     .catch(()=>{
//         console.log("promise was rejected");
//
//     });

//Promises
// promises are rejected and resolved with some data (valid results or errors)

// savetoDb("Hello there")
//
//     .then((result)=>{
//         console.log("data1 saved.");
//         console.log("result of promise:",result);
//         return savetoDb("Hello World");
//
//     })
//
//     .then((result)=>{
//         console.log("Data2 was saved");
//         console.log("result of promise:", result);
//         return savetoDb("Mritunjay");
//     })
//
//     .then((result)=>{
//         console.log("data 3 saved");
//         console.log("result of promise:",result);
//     })
//
//     .catch((error)=>{
//         console.log("promise was rejected");
//         console.log("error: ",error);
//
//     });

//Promises
//lets apply promises to our callback hell


let h1 = document.querySelector("h1");

// function changeColor(color,delay, nextColorChange){
//     setTimeout(()=>{
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     },delay);
// }

// changeColor("red",1000, ()=>{
//     changeColor("orange",1000, ()=>{
//         changeColor("blue",1000,()=>{
//             changeColor("cyan",1000,()=>{});
//             changeColor("magenta",1000);
//         });
//     });
// });

function changeColor(color,delay, ){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("Color Changed");
        },delay);
    })
}

// let requestPromise = changeColor("red",1000);
//
// console.log(requestPromise);
//
// requestPromise = changeColor("green",5000);
//
// console.log(requestPromise);

changeColor("red",1000)
    .then(()=>{
        console.log("Red color was completed");
        return changeColor("green",1000);
    })
    .then(()=>{
        console.log("green color was completed");
        return changeColor("blue",1000);
    })
    .then(()=>{
        console.log("blue color was printed");
    });













