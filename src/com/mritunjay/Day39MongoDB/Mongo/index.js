const mongoose = require("mongoose");

main()
    .then((res)=> {
        console.log("connection successful")
    })
    .catch(err=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User",userSchema);
// const Employee = mongoose.model("Employee",userSchema);

// const user1 = new User({
//     name:"Adam",
//     email:"adam@yahoo.in",
//     age:48,
// });
//
// user1.save();

// const user2 = new User({
//     name:"eve",
//     email:"eve@gmail.com",
//     age:48,
// })
//
// user2.save()
//     .then((res)=>{
//     console.log(res);
// })
//     .catch((err)=>{
//         console.log(err);
//     });

// User.insertMany([
//     {name:"tony",email:"tony@gmail.com",age:50},
//     {name:"Peter",email:"peter@gmail.com",age:29},
//     {name:"Bruce",email:"bruce@batman.com",age:40}
// ]).then((res)=>{
//     console.log(res);
// });

//Find

// User.find({}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// User.find({age:{$gt:48}}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// User.find({}).then((res)=>{
//     console.log(res[0].name);
// }).catch((err)=>{
//     console.log(err);
// });

// User.findOne({age:{$gt:47}}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// User.findOne({_id:"67f82e4b321258597b027e27"}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

//findById
// User.findById("67f82e4b321258597b027e27").then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

//UpdateOne
// User.updateOne({name:"Bruce"},{age:49}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

//UpdateMany
// User.updateMany({age:{$gt:48}},{age:55}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

//findOneAndUpdate
// User.findOneAndUpdate({name:"Bruce"},{age:35}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// findOneAndUpdate with option
// User.findOneAndUpdate({name:"Bruce"},{age:42},{new:true}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// findByIdAndUpdate
// User.findByIdAndUpdate("67f82e4b321258597b027e27",{age:29},{new:true}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

//Delete Bruce
// User.deleteOne({name:"Bruce"}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// Delete age =48

// User.deleteMany({age:48}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

//findByIdAndDelete
User.findByIdAndDelete("67f82e4b321258597b027e26").then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})