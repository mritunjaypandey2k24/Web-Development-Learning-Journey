
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    // console.log("clicked");
    // console.log(inp.value);

    let li = document.createElement("li");
    // li.innerHTML = inp.value;
    li.innerText = inp.value;
    // document.querySelector("ul").append(li);

    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");


    ul.appendChild(li);
    li.appendChild(delbtn);
    inp.value = "";

});




let delbtns = document.querySelectorAll(".delete");

// for(delbtn of delbtns){
//     delbtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }

//this event listeners like delbtn only apply to element which were their from start i.e in index.html and not work on element created in Javascript
//to apply them on the newly created element(here its li(created by js. delete doesmt work) we use Event Delegation
//We use bubbling phenomenon for event delegation we add the eventlistener/trigger to the parent element so when eventlistener trigger for child, parent elment get triggered

ul.addEventListener("click", function(event){
    // console.log("button clicked");
    // console.log(event.target);
    // console.log(event.target.nodeName);
    // if(event.target.nodeName == "BUTTON"){
    //     console.log("delete");
    // }else{
    //     console.log("dont delete");
    // }
    if(event.target.nodeName = "BUTTON"){

        let listItem =  event.target.parentElement;
        // console.log(listItem);
        // console.log("delete");
        listItem.remove();
        console.log("Deleted");
    }

})
