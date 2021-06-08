
function computerPlay(){
    let outComes = ["Rock", "Paper", "Scissors"];
    
    return outComes[Math.floor(Math.random() * 3)]
}

console.log(computerPlay());