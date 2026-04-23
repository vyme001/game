//playPositions
const currPos = {
    user: undefined,
    pc: undefined,
};

//gameRules (key)winner:loser(value) pair
const posRules = {
    "rock":"scissors",
    "paper":"rock",
    "scissors":"paper",
};


//playerScore Board
const scores = {
    user: 0,
    pc : 0,
};


//((PC position Generator
function PCpos(){
    const positions = Object.keys(posRules);
    currPos.pc = positions[Math.floor(Math.random() * positions.length)];
};


//executes score assignment for user and pc
function posAssignment(inn) {
        currPos.user = inn;
        PCpos();
};

function messagePanel(msg){
//new message elemenets
    const mother = document.querySelector("#new-message")
    const pMsg = document.createElement("paragraph");
        pMsg.textContent = msg;
        mother.appendChild(pMsg);
        //the relsease/destruction of the new p property
        setTimeout(()=>{
            pMsg.remove();
        },3000); 
};

function scorePanel(target){
   const pc_scoreCard = document.querySelector("#pc-scoreCard");
   const usr_scoreCard = document.querySelector("#usr-scoreCard");

   //test logic 
   target === "pc" ? console.log('pc tagret') : console.log('usr target');;
}

//a create - catch and release function for notificationPanel messages
function notificationPanel(msg, target){
    messagePanel(msg);
    scorePanel(target);
}; 



//game functioning logic
function posLogic(){
    if(currPos.user === currPos.pc){
        console.log('tie');
        return;
    } else{
          Object.entries(posRules).find((posRule)=>{
            //pc wins round condition
        if(posRule[0] === currPos.pc && posRule[1] === currPos.user){
            scores.pc += 1;
                    notificationPanel(`pc: (${currPos.pc}) beats ${currPos.user}. Scores: [pc: ${scores.pc}, user: ${scores.user}]`, "pc");
            return;
            //user wins round condition
        } else if(posRule[0] === currPos.user && posRule[1] === currPos.pc){
            scores.user += 1;
            notificationPanel(`user: (${currPos.user}) beats ${currPos.pc}. Scores: [user: ${scores.user}, pc: ${scores.pc}]`, "usr")
            return;
        };
        return;
    });
         
    };
};



//USER buttons trigger function
const buttons = document.querySelectorAll("button");
buttons.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        posAssignment(e.target.value);
        posLogic();
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

    while(!Object.keys(posRules).includes(humanPosition)){

        if(humanPosition === undefined){
            humanPosition = prompt("Choose one: 'rock', 'paper', or 'scissors'.").toLowerCase();
        }else if(!Object.keys(posRules).includes(humanPosition)){
        humanPosition = prompt(`'${humanPosition}' is not invalid, try again!`).toLowerCase();
        }else{
            return;
        };
        }; 
    return humanPosition;
};


//Game logic engine
function gameEngine(currPos.pc, currPos.user){
    console.log(`cache (pc:[${currPos.pc}], user:[${currPos.user}])`);
    
    //removed the if block from out of the find beacuase it executed for each item; 3 arrays = 3 occurances
           if(currPos.pc === currPos.user){
            alert(`Tie: ${currPos.pc} and ${currPos.user}`);
            return;
        };
};
*/
  
    

/*
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