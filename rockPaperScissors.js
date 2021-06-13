
function computerPlay(){
    let outComes = ["Rock", "Paper", "Scissors"];
    
    return outComes[Math.floor(Math.random() * 3)]
}

function play(conputerSelection, playerSelection){
    let result = null;
    let winner = null;
    let loser = null;
    if(conputerSelection().toLowerCase() == playerSelection.toLowerCase()){
        return "draw"
    }

    if(playerSelection.toLowerCase() == "rock" && conputerSelection().toLowerCase() == "scissors"){
        winner = playerSelection;
        loser = conputerSelection();
        result = "win";
    }else if(playerSelection.toLowerCase() == "paper" && conputerSelection().toLowerCase() == "rock"){
        winner = playerSelection;
        loser = conputerSelection();
        result = "win";
    }else if(playerSelection.toLowerCase() == "scissors" && conputerSelection().toLowerCase() == "paper"){
        winner = playerSelection;
        loser = conputerSelection();
        result = "win";
    }else{
        winner = conputerSelection();
        loser = playerSelection;
        result = "lose";
    }
    return  `You ${result}! ${winner} beats ${playerSelection}`
}

console.log(play(computerPlay, "rock"));