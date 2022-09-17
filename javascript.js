
function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    if (random == 1) {
        return 'Rock'
    }
    else if (random == 2) {
        return 'Paper'
    }
    else {
        return 'Scisors'
    }
}
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection == 'rock' && computerSelection == 'Rock') {
        return 'Tie!'
    }
    else if (playerSelection == 'paper' && computerSelection == 'Paper') {
        return 'Tie!'
    }
    else if (playerSelection == 'scisors' && computerSelection == 'Scisors') {
        return 'Tie!'
    }
    else if (playerSelection == 'rock' && computerSelection == 'Scisors') {
        return 'You Win! Rock beats Scisors'
    }
    else if (playerSelection == 'paper' && computerSelection == 'Rock') {
        return 'You Win! Paper beats Rock'
    }
    else if (playerSelection == 'scisors' && computerSelection == 'Paper') {
        return 'You Win! Scisors beats Paper'
    }
    else if (playerSelection == 'rock' && computerSelection == 'Paper') {
        return 'You Lose! Paper beats Rock'
    }
    else if (playerSelection == 'paper' && computerSelection == 'Scisors') {
        return 'You Lose! Scisors beats Paper'
    }
    else if (playerSelection == 'scisors' && computerSelection == 'Rock') {
        return 'You Lose! Rock beats Scisors'
    }
    else {
        return 'OOPSY! Something went wrong'
    }
}

function game() {
    let playerScore = 0
    let computerScore = 0
    let round
    let playerChoice
    for (let i = 0; i < 5; i++) {
        playerChoice = prompt('Enter your choice: ')
        round = playRound(playerChoice, getComputerChoice())
        if (round.slice(4, 5) == 'L') {
            computerScore++
        }
        else if (round.slice(4, 5) == 'W') {
            playerScore++
        }
        else if (round == 'OOPSY! Something went wrong') {
            i--
            continue
        }
        console.log(playerScore, computerScore)
    }

    if (playerScore == computerScore) {
        console.log(`Tie! Both got ${playerScore} points`)
        return `Tie! Both got ${playerScore} points`
    }
    else if (playerScore > computerScore) {
        console.log(`You Won! It was ${playerScore} vs ${computerScore}`)
        return `You Won! It was ${playerScore} vs ${computerScore}`
    }
    else {
        console.log(`You Lost! It was ${playerScore} vs ${computerScore}`)
        return `You Lost! It was ${playerScore} vs ${computerScore}`
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => {
    if (document.getElementById('computer').textContent == 5 || document.getElementById('person').textContent == 5) {
        document.getElementsByClassName('message').textContent = 'Start game by clicking a button of your choice.';
        document.getElementById('computer').textContent = '0';
        document.getElementById('person').textContent = '0';
    };
    round = (playRound(button.id, getComputerChoice()))
    let computerPara
    let computerScore
    let playerPara
    let playerScore
    let message
    message = document.querySelector('.message')
    if (round.slice(4, 5) == 'L') {
        computerPara = document.getElementById('computer');
        computerScore = computerPara.textContent;
        computerScore = Number(computerScore) + 1;
        computerPara.textContent = computerScore;
        if (computerPara.textContent == 5) {
            message.textContent = `You Lost! You: ${document.getElementById('person').textContent} Computer: ${computerScore}`
        }
        else {
            message.textContent = round;
        }
    }
    else if (round.slice(4, 5) == 'W') {
        playerPara = document.getElementById('person');
        playerScore = playerPara.textContent;
        playerScore = Number(playerScore) + 1;
        playerPara.textContent = playerScore;
        if (playerPara.textContent == 5) {
            message.textContent = `You Won! You: ${playerScore} Computer: ${document.getElementById('computer').textContent}`
        }
        else {
            message.textContent = round;
        }
    }

    else{
        message.textContent = round;
    }
    //else if (round == 'OOPSY! Something went wrong') {
    //    i--
    //    continue
    //}
}));
