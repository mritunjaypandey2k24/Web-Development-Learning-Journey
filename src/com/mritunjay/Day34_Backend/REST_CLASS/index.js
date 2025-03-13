const express = require("express");

const app = express();

const port = 8080;
const path = require("path");

const {v4: uuidv4} = require("uuid");

const methodOverride = require("method-override");
app.use(methodOverride('_method'));

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views") );

app.use(express.static(path.join(__dirname,"public")));


let posts = [
    {
        id: uuidv4(),
        username:"Mritunjay",
        content:"I Love Coding!"
    },
    {
        id:uuidv4(),
        username:"jay",
        content:"Hardwork is important to achieve success"
    },
    {
        id:uuidv4(),
        username:"Rahul",
        content: "Enjoy the journey, you will find your destination"
    }
];


app.get("/posts", (req,res)=>{
    // res.send("Server Working Well");
    res.render("index.ejs", {posts});
})

//add new post

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/posts",(req,res)=>{
    let {username,content} = req.body;
    let id = uuidv4();
    posts.push({id,username,content});
    // console.log(req.body);
    // res.send("post req working");
    res.redirect("/posts");
});


app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    // console.log(id);
    let post = posts.find((p)=>id === p.id);
    // console.log(post);
    // res.send("request working");
    res.render("show.ejs",{post});
})

//To update any post use patch request

app.patch("/posts/:id", (req,res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    // console.log(newContent);
    // console.log(id);
    let post = posts.find((p)=> id===p.id);
    post.content = newContent;
    console.log(post);
    // res.send("patch request working");
    res.redirect("/posts");
})


//Edit route



app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id===p.id);
    res.render("edit.ejs",{post});

})


//delete route

app.delete("/posts/:id",(req,res)=>{
    let {id}  = req.params;
    // let post = posts.find((p)=>id===p.id);
    posts = posts.filter((p)=>id !== p.id);  //add all the posts in posts that dont have the same id i.e removing post with that id
    // res.send("delete Success");
    res.redirect("/posts");




});

app.listen(port, ()=>{
    console.log("Listening to port: 8080");
});