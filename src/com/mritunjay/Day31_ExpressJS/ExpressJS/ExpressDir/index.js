const express = require("express");
const app = express();

// console.dir(app);

// listen is the most used method
//it listen to incoming request

//2. Getting Started with Express

//*Ports are the logical endpoints of a network
// connection that is used to exchange information
// between a web server and a web client.

//we are making our first server


let port = 8080; //or 3000 for custom servers

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});

//3. Handling requests and sending response

//app.use

// app.use((req,res)=>{
//     console.log("request recieved");
// });


//4. Sending a response
//we will see req and res objects

//The request which was send was text-based but Express convert or parse it as object

// app.use((req,res)=>{
//
//     // console.log(req);
//     console.log("request recieved");
//     // res.send("This is a basic response");
//     // res.send({
//     //     fruit:"apple",
//     //     color:"red"
//     // });
//     let code = "<h1>Fruits</h1>" +
//         "<ul><li>apple</li><li>Banana</li><li>Orange</li></ul>";
//     res.send(code);
// })


//5. Routing
//it is process of selecting a path for traffic in a network or between or across multiple networks.

//app.use listens to all requests but app.get listen for particular route
//we can send only one response for one path but for different path we can send diff res
//it can be a string or html or other


app.get("/", (req,res)=>{
    res.send("Hello I am root path");
});

// app.get("/apple",(req,res)=>{
//     res.send("you contacted apple path");
// });
//
// app.get("/orange",(req,res)=>{
//     res.send("Your contacted orange path");
// });
//but if we try https://localhost:8080/peach it can get that as we didnt made anything for it
//so if user send for any different path we can use standard response

// app.get("*",(req,res)=>{
//     res.send("this path does not exist");
// });
//
// //using Post
// app.post("/",(req,res)=>{
//     res.send("you sent a post request to root");
// });

//Nodemon
//To automatically restart server with code changes

 
//As in facebook or insta their might me millions of user but not for each user their is seperate route
//instead their is a variable which changes according to user

//7 Path Parameters
app.get("/:username/:id", (req,res)=>{
    // console.log(req.params);
    let {username, id} = req.params;
    let code = `<h1>Welcome to the page of ${username}</h1>`
    res.send(code);
});

//8. Query Strings

//http://localhost:8080/search?q=apple&color=red

app.get("/search",(req,res)=>{
    // console.log(req.query);
    let {q} = req.query;
    if(!q){
        res.send("<h1>Nothing Searched</h1>")
    }
    // res.send(`This are the search results for the query: ${q}`);
    res.send(`<h1>This are the search results for the query: ${q}</h1>`);
})

//http://localhost:8080/search?q=apple


