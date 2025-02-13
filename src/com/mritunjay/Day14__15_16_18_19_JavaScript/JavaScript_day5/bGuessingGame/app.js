const max  = prompt("Enter the maximum number");


const  random = Math.floor(Math.random()*max)+1;

let guess = prompt("Guess the number");

while(guess != "quit"){
    if(guess == random ){
        console.log("Congrats!! you are right! random number was: ",random);
        break;
    }else if(guess < random){
        guess = prompt("hint: your guess was too small, Please try again");

    }else{
        guess  = prompt("hint: you guess was too large, please try again");
    }
}
if(guess === "quit"){
    console.log("User quit");
}
