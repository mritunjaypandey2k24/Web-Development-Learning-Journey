 //1. Axios: Library to make HTTP requests

//  let url = "https://catfact.ninja/fact";
// let url2 = "https://dog.ceo/api/breeds/image/random";

//instead of fetch we use axios.get(url)
 //why to use axios when we have fetch method?
 //in fetch when we get response it is readable stream but is not exact json data
 // .so we had to parse that data but in axios we get direct response in json

 // let btn = document.querySelector("button");
 //
 // btn.addEventListener("click",async ()=>{
 //     // console.log("Button was clicked");
 //     let fact = await getFacts();
 //     console.log(fact);
 //
 //     let p = document.querySelector("p");
 //     p.innerText  = fact;
 // })
 // let para = document.a
 // async function getFacts() {
 //
 //     try{
 //         let res = await axios.get(url);
 //         // console.log(res);
 //         // console.log(res.data);
 //         // console.log(res.data.fact);
 //         return res.data.fact;
 //     }
 //     catch(err){
 //         // console.log(err);
 //         return "No fact found";
 //     }
 //
 // }

 // console.log(getFacts());


 // let btn = document.querySelector("button");
 //
 // btn.addEventListener("click",async ()=>{
 //     let link = await getImage()
 //     // console.log(link);
 //     let img = document.querySelector("img");
 //     // img.src = link //Or;
 //     img.setAttribute("src",link);
 //     console.log(link);
 // })
 //
 // async function getImage() {
 //
 //     try{
 //         let res = await axios.get(url2);
 //         // console.log(res);
 //         // console.log(res.data.message);
 //
 //         return res.data.message;
 //     }
 //     catch(err){
 //         // console.log(err);
 //         return "No Image found";
 //     }

     //Free api has their own limits for minutes

 // }

 //Axios
 // Sending Headers using axios
//
//  let url = "https://icanhazdadjoke.com/";
//
// async function getJokes(){
//     try{
//         const config = { headers:{Accept: "application/json"}};
//         let res = await axios.get(url, config);
//         // console.log(res);
//         console.log(res.data);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// console.log(getJokes());

//Axios
 // Updating Query Strings
 //http://universities.hipolabs.com/search?name=middle
 //here query is name and it value is middle

 let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
    // console.log("button was clicked");
    let country = document.querySelector("input").value;
    // console.log(country);
    getColleges(country);
})


async function getColleges(country){
    try{
        let res = await axios.get(url+country);
        console.log(res.data);
    }
    catch(err){
        console.log(err);
        return [];
    }

}
// console.log(getColleges());










