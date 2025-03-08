//2. Using EJS

const express = require("express");
const app = express();

const port = 8080;

app.set("view engine","ejs");  //Here view means the template so view engine means vo chij jo humare template ko dikhane ke kaam-
//ayega i.e jo template ko render karega wo hai ejs

app.get("/",(req,res)=>{
    // res.send("This is home");
    res.render("home.ejs");  //"home" is also ok
});

//here express by default when run res.render it search for views folder and in that it search the home.ejs


app.get("/hello",(req,res)=>{
    res.send("hello");
})

//now the problem arrise if i start server outside of this directory it search for view directory their and not inside here
//so we use app.set for this

const path = require("path");
app.set("views",path.join(__dirname, "/views")); //here __dirname is the current working direc of index.js
//and in that dir we search for views dir



//Interpolation Syntax
//Interpolation refers to embedding expressions into marked up text.
//let name ="mritunjay";
// `This is ${name}`
//here we embedding name variable
//In ejs we embed javascript code or logic

//5 Passing data to EJS//i.e databse se koi data aaye to use pass kaise karen

app.get("/rolldice",(req,res)=>{
    let diceValue = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceValue});
})


//6. Instagram EJS
// Create a basic template for instagram page based on following route :
// /ig/:username

//
// app.get("/ig/:username",(req,res)=>{
//     let {username} = req.params;
//     // console.log(username);
//     res.render("instagram.ejs",{username});
// });


//7. Condition Statements in EJS
//Adding conditions inside EJS
//Lets say in roll dice page if we get 6 we want to roll dice again
//we use <% %> for adding the conditional statement can be seen in rolldice.ejs


// app.get("/ig/:username",(req,res)=>{
//     const follower = ["adam","bob","Steve","miachel"];
//     let {username} = req.params;
//     // console.log(username);
//     res.render("instagram.ejs",{username, follower});
// });



//9 Instagram page with EJS




app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    // console.log(data);
    if(data){
        res.render("instagram.ejs",{data });
    }
    else{
        res.render("error.ejs");
    }

});

//10 includes -> way to create sub templates inside an ejs template





app.listen(port,()=>{
    console.log( `listening on port ${port}`);
});
