const gameChoices = [`rock`,`paper`,`scissors`,`lizard`,`spock`];

const gameRules = {
    rock: [`scissors`, `lizard`],
    paper: [`rock`, `spock`],
    scissors: [`paper`, `lizard`],
    lizard: [`paper`, `spock`],
    spock: [`scissors`, `rock`]
};

const getHumanChoice = () =>{
    return document.getElementById("humanChoice").value;
}

const getMachineChoice = () =>{
    const machineChoice = Math.floor(Math.random() * gameChoices.length);
    return gameChoices[machineChoice];
}

const displayResults= (humanChoice, machineChoice, result) => {
    document.getElementById("humanResult").innerHTML = `You chose ${humanChoice}  >`;
    document.getElementById("machineResult").innerHTML = `Computer chose ${machineChoice}  >`;
    document.getElementById("result").innerHTML = result;
}

const getResults=(humanChoice, machineChoice) =>{
    if (gameRules[humanChoice].includes(machineChoice)){
        return `Winner!`;
    } else if(humanChoice === machineChoice){
        return `Tie!`;
    } else {
        return `Loser!`;
    }
}

const playGame = () =>{
    const humanChoice = getHumanChoice();
    const machineChoice = getMachineChoice(); 
    const result = getResults(humanChoice, machineChoice);
displayResults(humanChoice, machineChoice, result);
}