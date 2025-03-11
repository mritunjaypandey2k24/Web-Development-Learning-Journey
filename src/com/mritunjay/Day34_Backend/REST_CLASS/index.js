const express = require("express");

const app = express();

const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views") );

app.use(express.static(path.join(__dirname,"public")));


let posts = [
    {
        username:"Mritunjay",
        content:"I Love Coding!"
    },
    {
        username:"jay",
        content:"Hardwork is important to achieve success"
    },
    {
        username:"Rahul",
        content: "Enjoy the journey, you will find your destination"
    }
];


app.get("/posts", (req,res)=>{
    // res.send("Server Working Well");
    res.render("index.ejs", {posts});
})

app.listen(port, ()=>{
    console.log("Listening to port: 8080");
});