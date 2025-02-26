

 let url = "http://universities.hipolabs.com/search?name=india";
let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
    // console.log("button was clicked");
    let statename = document.querySelector("input").value;
    // console.log(country);
    let collegesArr = await getColleges();
    console.log(collegesArr);
    show(collegesArr,statename);
})

 function show(collArr,statename){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of collArr){

        console.log(col.name);
        console.log(col["state-province"]);
        if(col["state-province"] === statename){
            let li = document.createElement("li");
            li.innerText = col.name;
            list.appendChild(li);
        }


    }
 }


async function getColleges(){
    try{
        let res = await axios.get(url);
        // console.log(res.data);
        return res.data;
    }
    catch(err){
        console.log(err);
        return [];
    }

}
// console.log(getColleges());










