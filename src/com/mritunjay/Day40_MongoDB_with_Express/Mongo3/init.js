const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main().then(()=>{
    console.log("Connection Successful");
}).catch((err)=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}


let allChats = [
    {
        from:"Arjun",
        to:"karan",
        msg:"Hey, do you have my textbooks?",
        created_at: new Date(),
    },

    {
        from:"Raman",
        to:"shreya",
        msg:"Hey, did you complete the given assignment?",
        created_at: new Date(),
    },

    {
        from:"Ramya",
        to:"Raj",
        msg:"Is college open tomorrow?",
        created_at: new Date(),
    },

    {
        from:"siya",
        to:"rahul",
        msg:"did u completed the math assignment?",
        created_at: new Date(),
    }
];

Chat.insertMany(allChats);

