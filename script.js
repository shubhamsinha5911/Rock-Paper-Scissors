let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let choices = document.querySelectorAll(".choice");
let infoBox = document.querySelector(".info");
let playerScore = document.querySelector(".playerscore");
let computerScore = document.querySelector(".computerscore");
let loseBgm = document.querySelector(".losebgm");
let winBgm = document.querySelector(".winbgm");
let bgm = document.querySelector(".bgm");
let onOff = document.querySelector(".onoff");

let userScore = 0;
let compScore = 0;

const winner = (playerWin, userChoice, aiChoice) => {
    if (playerWin) {
        winBgm.play();
        userScore++;
        playerScore.innerText = userScore;
        infoBox.innerText = `You Won As Your ${userChoice} Beats Computer's ${aiChoice}.`;
        infoBox.style.backgroundColor = "green";
    } else {
        loseBgm.play();
        compScore++;
        computerScore.innerText = compScore;
        infoBox.innerText = `You Lost As Computer's ${aiChoice} Beats Your ${userChoice}.`;
        infoBox.style.backgroundColor = "red";
    }
}

bgm.volume = 0.5;


function toggleAudio() {
  if (bgm.paused) {
    bgm.play();
    onOff.textContent = "Music-On";
  } else {
    bgm.pause();
    onOff.textContent = "Music-Off";
  }
}

const compChoice = () => {
    const options = ["rock", "paper", "scissors"];
    let randomInd = Math.floor(Math.random() *3);
    return options[randomInd];
}

const drawGame = () => {
    console.log("game was draw");
    infoBox.innerText = "Game Was Draw! Play Again";
    infoBox.style.backgroundColor = "#262730";
}

const gameControl = (userChoice) => {
    console.log("user choice is", userChoice);
   const aiChoice = compChoice();
    console.log("Computer Choice is", aiChoice);

    if (userChoice === aiChoice) {
        drawGame();
    } else {
       let playerWin = true;
     if (userChoice === "rock") {
        //scissors, paper
        playerWin = aiChoice === "paper" ? false : true ;
    } else if (userChoice === "paper") {
        //rock, scissors 
        playerWin = aiChoice === "scissors" ? false : true ;
    } else {
        //paper, rock 
        playerWin = aiChoice === "rock" ? false : true;
    }
    winner(playerWin, userChoice, aiChoice);
}
    
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        gameControl(userChoice);
    })
})
