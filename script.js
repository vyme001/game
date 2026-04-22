//playPositions
currPositions = {
    user: undefined,
    pc: undefined,
};


//playerScore Board
const scores = {
    PCsScore : 0,
    usersScore: 0,
};


//gameRules (key)winner:loser(value) pair
const positionRules = {
    "rock":"scissors",
    "scissors":"paper",
    "paper":"rock",
};


//((PC position Generator
function PCposition(){
    const positions = Object.keys(positionRules);
    currPositions.pc = positions[Math.floor(Math.random() * positions.length)];
};



//USER position listener
const buttons = document.querySelectorAll("button");
buttons.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        currPositions.user = e.target.value;
        const pcPosition = PCposition();
        PCposition();
        console.log(currPositions);
        });
})



/*

//humanPosition Processor
const generateUserPosition = function(){
    let humanPosition = document.querySelectorAll("button").forEach((btn)=>{
        btn.addEventListener("click",(e)=>{
            console.log(e.target.value);
        });
    });

    while(!Object.keys(positionRules).includes(humanPosition)){

        if(humanPosition === undefined){
            humanPosition = prompt("Choose one: 'rock', 'paper', or 'scissors'.").toLowerCase();
        }else if(!Object.keys(positionRules).includes(humanPosition)){
        humanPosition = prompt(`'${humanPosition}' is not invalid, try again!`).toLowerCase();
        }else{
            return;
        };
        }; 
    return humanPosition;
};


//Game logic engine
function gameEngine(PCposition, UserPosition){
    console.log(`cache (pc:[${PCposition}], user:[${UserPosition}])`);
    
    //removed the if block from out of the find beacuase it executed for each item; 3 arrays = 3 occurances
           if(PCposition === UserPosition){
            alert(`Tie: ${PCposition} and ${UserPosition}`);
            return;
        };

    Object.entries(positionRules).find((positionPair)=>{
        if(positionPair[0] === PCposition && positionPair[1] === UserPosition){
            PCsScore += 1;
            alert(`pc: (${PCposition}) beats ${UserPosition}. Scores: [pc: ${PCsScore}, user: ${usersScore}]`);
            return;
        } else if(positionPair[0] === UserPosition && positionPair[1] === PCposition){
            usersScore += 1;
            alert(`user: (${UserPosition}) beats ${PCposition}. Scores: [user: ${usersScore}, pc: ${PCsScore}]`);
            return;
        };
        return;
    });
    };


//while no player has gained 5 points;
// generate player position values
// giving  those player positions to the gameEngine Fx

while(scores.PCsScore != 5 && scores.usersScore != 5){
try {
    const pcsCurrentPosition = generatePCposition();
    const usersCurrentPosition = generateUserPosition();
    gameEngine(pcsCurrentPosition, usersCurrentPosition);
} catch (e) {
    // console.log(e.message);
};
};

//Declare the winner in a alert once either players score reaches the Number value 5
if(scores.PCsScore === 5 || scores.usersScore === 5){
  scores.PCsScore > scores.usersScore ? alert(`pc wins! score [${scores.PCsScore} to ${scores.usersScore}]`) : alert(`user wins! score [${scores.usersScore} to ${scores.PCsScore}]`);
};

*/