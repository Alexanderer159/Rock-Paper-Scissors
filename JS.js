const choices = [`rock`,`paper`,`scissors`,`lizard`,`spock`];

const humanChoice = prompt(`rock, paper, scissors, lizard, or spock?`);

const machineChoice = Math.floor(Math.random()* 5);

const machineResult = choices[machineChoice];

const rules = {
    rock: [`scissors`, `lizard`],
    paper: [`rock`, `spock`],
    scissors: [`paper`, `lizard`],
    lizard: [`paper`, `spock`],
    spock: [`scissors`, `rock`]
};

console.log(`You chose ${humanChoice}`);
console.log(`Computer chose ${machineResult}`)

if (rules[humanChoice].includes(machineResult)){
    console.log(`Winner!`)
} else if(humanChoice === machineResult){
    console.log(`Tie!`)
} else {
    console.log(`Loser!`)
}

playGame(humanChoice)