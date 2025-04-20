const playGame = () =>{
    
const choices = [`rock`,`paper`,`scissors`,`lizard`,`spock`];

const humanChoice = prompt(`rock, paper, scissors, lizard, or spock?`);

const humanResult = humanChoice.toLowerCase()

const machineChoice = Math.floor(Math.random()* 5);

const machineResult = choices[machineChoice];

const rules = {
    rock: [`scissors`, `lizard`],
    paper: [`rock`, `spock`],
    scissors: [`paper`, `lizard`],
    lizard: [`paper`, `spock`],
    spock: [`scissors`, `rock`]
};

document.getElementById("humanResult").innerHTML = `You chose ${humanResult}`;
document.getElementById("machineResult").innerHTML = `Computer chose ${machineResult}`;

if (rules[humanResult].includes(machineResult)){
    document.getElementById("result").innerHTML = `Winner!`;
} else if(humanResult === machineResult){
    document.getElementById("result").innerHTML = `Tie!`;
} else {
    document.getElementById("result").innerHTML = `Loser!`;
}
}