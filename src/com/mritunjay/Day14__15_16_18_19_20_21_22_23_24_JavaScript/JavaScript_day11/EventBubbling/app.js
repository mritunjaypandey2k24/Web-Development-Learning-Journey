
let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

//
// div.addEventListener("click", function(){
//     console.log("div was clicked");
// });
//
// ul.addEventListener("click",function(){
//     console.log("ul was clicked");
// })
//
// for(li of lis){
//     li.addEventListener("click", function(){
//         console.log("li was clicked");
//     });
// }

//Yahanpe jab hum child wale element ko trigger karte hai to uske parent wale events bhi trigger honge
//ise event bubbling kehte hain
// Event bubbling ko rokne ke liye
// event.stopPropagation use karte hain




div.addEventListener("click", function(){
    console.log("div was clicked");
});

ul.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("ul was clicked");
})

for(li of lis){
    li.addEventListener("click", function(event){
        event.stopPropagation();
        console.log("li was clicked");
    });
}