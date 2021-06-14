
function computerPlay(){
    let outComes = ["Rock", "Paper", "Scissors"];
    
    return outComes[Math.floor(Math.random() * 3)]
}

function play(conputerSelection, playerSelection){
    let result;
    let winner;
    let loser;
    let test = conputerSelection()

    if(test.toLowerCase() == playerSelection.toLowerCase()){
        return null;
    }

    if(playerSelection.toLowerCase() == "rock" 
        && test.toLowerCase() == "scissors"){
        winner = playerSelection;
        loser = test;
        result = true;
    }else if(playerSelection.toLowerCase() == "paper" 
        && test.toLowerCase() == "rock"){
        winner = playerSelection;
        loser = test;
        result = true;
    }else if(playerSelection.toLowerCase() == "scissors" 
        && test.toLowerCase() == "paper"){
        winner = playerSelection;
        loser = test;
        result = true;
    }else{
        winner = test;
        loser = playerSelection;
        result = false;
    }
    //console.log("post if com: " + conputerSelection().toLowerCase());
    //console.log("post if player: " + playerSelection.toLowerCase());

    return  result;
}

function game(play, numGames){
    let test = {wins: 0, loeses: 0};
    for(let i = 0; i < numGames - 1; ++i){
        let test = window.prompt("Rock Paper Scissors?")
        if(play(computerPlay, test)){
            ++test.wins;
        }else if(!play(computerPlay, test)){
            ++test.loeses;
        }else{
            continue;
        }
    }
    return test.toString();
    
}

console.log(game(play, 5));