let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg-result");
const userScoreCounter = document.querySelector("#user-score");
const compScoreCounter = document.querySelector("#comp-score");

const gencompChoice = () => {
    const options = ["rock", "paper", "scissors"]
   const randomIdx =  Math.floor(Math.random() * 3);
  return options[randomIdx]
}

const drawGame = (userChoice, compChoice) => {
    console.log("Game drawn")
    msg.innerText = `game drawn. your ${userChoice} draws ${compChoice}`;
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScoreCounter.innerText = userScore;
        msg.innerText = `You Win!!.  your ${userChoice} beats ${compChoice}`;

    }else{
        compScore++;
        compScoreCounter.innerText = compScore;
        msg.innerText = `You lose!. ${compChoice} beats your ${userChoice}`;
    }
    
}

const playGame = (userChoice) => {
    console.log("user choice =", userChoice)
    // computer choice 
    const compChoice = gencompChoice()
    console.log("comp choice =", compChoice)

    if(userChoice === compChoice){
        drawGame(userChoice, compChoice);
    }else{
        let userWin = true
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
      showWinner(userWin, userChoice, compChoice);
    }
}



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    })
})