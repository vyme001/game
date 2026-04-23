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
    if(scores.user === 5 || scores.pc === 5){
        notificationPanel("End of Game")
        return;
    };
        currPos.user = inn;
        PCpos();
};

function messagePanel(msg){
//new message elemenets
    const mother = document.querySelector("#new-message");
    const pMsg = document.createElement("paragraph");
            pMsg.id = "p1";

        if(Array.from(mother.childNodes).length > 0){
            const popIt = document.getElementById("p1");
            popIt.remove();
            pMsg.textContent = msg;
            mother.appendChild(pMsg);
            return;
        };
    

        pMsg.textContent = msg;
        mother.appendChild(pMsg);
};

function scorePanel(target){
    //update scores

   target === "pc" ? scores.pc += 1 : target === "user" ? scores.user += 1 : null;

   const pc_scoreCard = document.querySelector("#pc_scoreCard");
   //direct assignment
    pc_scoreCard.textContent = scores.pc;
   const usr_scoreCard = document.querySelector("#user_scoreCard");
   //direct assignment
   usr_scoreCard.textContent = scores.user;
};

//a create - catch and release function for notificationPanel messages
function notificationPanel(msg, target){
    messagePanel(msg);
    scorePanel(target);
}; 



//game functioning logic
function posLogic(e){
    if(currPos.user === currPos.pc){
        notificationPanel("Tie!");
        return;
    } else{
          Object.entries(posRules).find((posRule)=>{
            //pc wins round condition
        if(posRule[0] === currPos.pc && posRule[1] === currPos.user){
                    notificationPanel(`${currPos.pc} beats ${currPos.user}.`, "pc");
            return;
            //user wins round condition
        } else if(posRule[0] === currPos.user && posRule[1] === currPos.pc){
            notificationPanel(`${currPos.user} beats ${currPos.pc}`, "user")
            return;
        };
    });
    };
};


//USER buttons trigger function
const buttons = document.querySelectorAll("button");
    buttons.forEach((btn)=>{
                btn.addEventListener("click",(e)=>{
                posAssignment(e.target.value);
                posLogic(e);
                checkValue()
            })
        });

function checkValue(){
    if([...Object.values(scores)].includes(5)){
        buttons.forEach(btn => btn.disabled = true)
        notificationPanel(`Game Over; winner ${scores.pc > scores.user ? "pc" : "user"}`)
    };
};
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