const mongoose = require("mongoose");
main()
    .then((res)=> {
        console.log("connection successful")
    })
    .catch(err=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = mongoose.Schema({
    title: {
        type:String,
        required: true,

    },
    author: {
        type: String
    },
    price: {
        type:Number
    },
});


const Book = mongoose.model("Book",bookSchema);


let book1 = new Book({
    title:"Mathematics",
    author:"RD Sharma",
    price:500,

})

//     book1.save().then((res)=>{
//         console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });



// let book2 = new Book({
//     title:"Physics",
//     price:500,
//
// })
//
//
// book2.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });


let book2 = new Book({
    title:"How to kill a mockingbird",
    author:"Harper lee",
    price:"299",


})


book2.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});


