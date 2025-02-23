//Step 1: Starting the game when user press key and changinig the h2 tag to level
let gameSeq = [];
let userSeq = [];
let Highest = [0];

let btns = ["yellow","red","purple","green"];

let started = false;
let level =0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started");
        started = true;

        levelUp();
    }
});

//Step2: make random button flash when user press key at start

function gameFlash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userFlash");

    setTimeout(function (){
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    //random btn choose
    let ranIdx = Math.floor(Math.random()*4);
    let randColor = btns[ranIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    // console.log(ranIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    // console.log("curr level = ",level);

    // let idx = level-1;


    if(userSeq[idx] === gameSeq[idx]){
        // console.log("same value");

        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);

        }

    }else{
        Highest.push(level);
        h2.innerHTML = `Game Over! Your Score was <b>${level-1}</b> <br> Highest Score was <b>${Math.max(...Highest)-1}</b> <br>Press any key to start`;

        document.querySelector("body").style.backgroundColor = "red";

        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },250)
        reset();
    }
}

function btnPress(){
    // console.log("btn was pressed"); we want to know which btn was pressed/ used this
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor =btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);

}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
