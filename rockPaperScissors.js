
function computerPlay(){
    let outComes = ["Rock", "Paper", "Scissors"];
    
    return outComes[Math.floor(Math.random() * 3)]
}

function play(conputerSelection, playerSelection){
    let result;
    let winner;
    let loser ;
    let test = conputerSelection()

    if(test.toLowerCase() == playerSelection.toLowerCase()){
        console.log(test)
        console.log(playerSelection)
        return "draw"
    }

    if(playerSelection.toLowerCase() == "rock" 
        && test.toLowerCase() == "scissors"){
        winner = playerSelection;
        loser = test;
        result = "win";
    }else if(playerSelection.toLowerCase() == "paper" 
        && test.toLowerCase() == "rock"){
        winner = playerSelection;
        loser = test;
        result = "win";
    }else if(playerSelection.toLowerCase() == "scissors" 
        && test.toLowerCase() == "paper"){
        winner = playerSelection;
        loser = test;
        result = "win";
    }else{
        winner = test;
        loser = playerSelection;
        result = "lose";
    }
    //console.log("post if com: " + conputerSelection().toLowerCase());
    //console.log("post if player: " + playerSelection.toLowerCase());

    return  `You ${result}! ${winner} beats ${loser}`
}

console.log(play(computerPlay, "paper"));