

//button click functionality
const buttons = document.querySelectorAll("button");
buttons.forEach((btn)=>{
   btn.addEventListener("click",(e)=>{
    console.log(e.target.value);
   })
});

//playerScore Board
let PCsScore = 0;
let usersScore = 0;


//gamRules (key)winner:loser(value)
const positionRules = {
    "rock":"scissors",
    "scissors":"paper",
    "paper":"rock",
};


