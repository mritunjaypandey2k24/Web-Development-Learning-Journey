//form event

let form = document.querySelector("form");


// form.addEventListener("submit",function(){
//     // console.log("form submitted");
//     alert("form submitted");
// })

//Prevent default events// here we prevent page getting redirected to "/action"
//
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     alert("form submitted");
// })

// //Extracting Form Data
//
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//
//     let inp = document.querySelector("input");
//     console.log(inp); //it return  element input but not its value
//     console.dir(inp);
//     console.log(inp.innerText); //doesnt gives the inputs value
//     console.log(inp.value); //prints the value typed inside the input
// })

//more data exteact

// form.addEventListener("submit",function(event) {
//     event.preventDefault();
//
//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");
//
//     console.log(user.value);
//     console.log(pass.value);
//
//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// })

//here we use querySelector to select the internal element of form for tracking
// but their is another way as well i.e tracking internal element of form through form

form.addEventListener("submit", function(event){
    event.preventDefault();
    console.dir(form); //getting form object in which we can see many properties
    //their is element object properties which is a collection containing all the elements like input of user and pass anf button
    console.log(form.elements);
    console.log(form.elements[0]);
    console.log(form.elements[1]);

    let user = this.elements[0];//here this is form as form is calling addeventListener
    let pass = this.elements[1];

    console.log(user.value);
    console.log(pass.value);

});