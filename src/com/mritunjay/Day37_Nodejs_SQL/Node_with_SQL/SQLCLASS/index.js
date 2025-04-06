// const { faker } = require('@faker-js/faker');
//
// const mysql = require('mysql2');
//
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'my_app',
//     password: 'Mritunjay@24'
// });

// let q = "SHOW TABLES";
//
// try{
//     connection.query(q,(err,result)=>{
//         if(err) throw err;
//         console.log(result);
//         console.log(result.length);
//         console.log(result[0]);
//         console.log(result[1]);
//     })
// } catch (err){
//     console.log(err);
// }
//
// connection.end();


// let getRandomUser=()=> {
//     return {
//         id: faker.string.uuid(),
//         username: faker.internet.username(), // before version 9.1.0, use userName()
//         email: faker.internet.email(),
//         password: faker.internet.password(),
//     };
// }

// console.log(getRandomUser());


//5.INSERT New data

// let q = "INSERT INTO user (id,username,email,password) VALUES ?";
// let users = [["123","123_newuser","abc@gmail.com","abc"],
//     ["123b","123_newuserb","abc@gmail.comb","abcb"]];
// try{
//     connection.query(q,[users],(err,result)=>{
//         if(err) throw err;
//         console.log(result);
//     })
// } catch (err){
//     console.log(err);
// }
//
// connection.end();

//6.INSERT IN BULK USING FAKER
//
// let getRandomUser=()=> {
//     return [
//         faker.string.uuid(),
//         faker.internet.username(), // before version 9.1.0, use userName()
//         faker.internet.email(),
//         faker.internet.password(),
//     ];
// }
//
//
//
// let q = "INSERT INTO user (id,username,email,password) VALUES ?";
// let data = [];
//
// for(let i=1; i<=100; i++){
//     data.push(getRandomUser());
// }
//
// try{
//     connection.query(q,[data],(err,result)=>{
//         if(err) throw err;
//         console.log(result);
//     })
// } catch (err){
//     console.log(err);
// }
//
// connection.end();


//7. Home Route
//Making an app that shows all user info, edit username and delete user from database
const { faker } = require('@faker-js/faker');

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'my_app',
    password: 'Mritunjay@24'
});

const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));



//Home Page route
app.get("/",(req,res)=>{
    let q = `SELECT COUNT(*) FROM user`;
    try{
    connection.query(q,(err,result)=>{
        if(err) throw err;
        let count = result[0]["COUNT(*)"];
        res.render("home.ejs", {count});
    })
    } catch (err){
        console.log(err);
        res.send("Some error in database");
    }

});

//Show user info route

app.get("/user",(req,res)=>{
    let q = `SELECT * FROM user`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            res.render("users.ejs",{result});
        })
    } catch (err){
        console.log(err);
        res.send("Some error in database");
    }

})


//11. Edit Route



app.get("/user/:id/edit",(req,res)=>{
    let {id} = req.params;

    let q = `SELECT * FROM user WHERE id='${id}'`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let user = result[0];
            res.render("edit.ejs",{user});
        })
    } catch (err){
        console.log(err);
        res.send("Some error in database");
    }

});


//Edit or Update username in DB route

app.patch("/user/:id",(req,res)=>{

    let {id} = req.params;
    let {password:formPass, username:newUsername} = req.body;

    let q = `SELECT * FROM user WHERE id='${id}'`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let user = result[0];
            if(formPass !== user.password){
                res.send("Wrong Password");
            }
            else{
                let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
                connection.query(q2,(err,result)=>{
                    if(err)throw err;
                    res.redirect("/user");
                });
            }
        })
    } catch (err){
        console.log(err);
        res.send("Some error in database");
    }
});







app.listen("8080",()=>{
    console.log("server is listening to 8080");
})


