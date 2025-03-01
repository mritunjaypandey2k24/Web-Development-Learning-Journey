
// const sum = (a,b)=>{
//     return a+b;
// }
//
// const mul = (a,b)=>{
//     return a*b;
// }
//
// const g = 9.8;
// const PI = 3.14;
//
// // module.exports = "hello";
// // let obj = {
// //     sum:sum,
// //     mul:mul,
// //     g:g,
// //     PI:PI
// // }
// //
// // module.exports = obj;
//
// module.exports ={
//     sum:sum,
//     mul:mul,
//     g:g,
//     PI:PI
// }

//OR

// module.exports.sum = (a,b)=>a+b;
//
// module.exports.mul = (a,b)=>a*b;
// module.exports.g = 9.8;
// module.exports.PI = 3.14;

//OR
// exports.sum = (a,b)=>a+b;
// exports.mul = (a,b)=>a*b;
// exports.g = 9.8;
// exports.PI = 3.14;

//BUT
// exports = 5  this is wrong;

/// for using import we have to export
export const sum = (a,b)=>{
    return a+b;
}

export const mul = (a,b)=>{
    return a*b;
}

export const g = 9.8;
export const PI = 3.14;