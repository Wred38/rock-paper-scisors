function getComputerChoice(){
    let number
    number = Math.floor(Math.random() * 3 + 1);
    if (number == 1){
        return 'rock'
    }
    else if (number == 2){
        return 'paper'
    }
    else if (number == 3){
        return 'scisors'
    }
}

function playRound(playerSelection, computerSelection){
    pSelect = playerSelection.toString().toLowerCase()
    cSelect = computerSelection
    if (pSelect == 'rock' & cSelect == 'rock'){
        return "It's a tie! Both played rock"
        
    }
    else if (pSelect == 'scisors' && cSelect == 'scisors'){
        return "It's a tie! Both played scisors"
    }
    else if (pSelect == 'paper' && cSelect == 'paper'){
        return "It's a tie! Both played paper"
    }
    else if (pSelect == 'rock' && cSelect == 'scisors'){
        return "You WON! Rock beats scisors"
    }
    else if (pSelect == 'scisors' && cSelect == 'paper'){
        return "You WON! Scisors beat paper"
    }
    else if (pSelect == 'paper' && cSelect == 'rock'){
        return "You WON! Paper beats rock"
    }
    else if (pSelect == 'rock' && cSelect == 'paper'){
        return "You LOST! Paper beats rock"
    }
    else if (pSelect == 'scisors' && cSelect == 'rock'){
        return "You LOST! Rock beats scisors"
    }
    else if (pSelect == 'paper' && cSelect == 'scisors'){
        return "You LOST! Scisors beats paper"
    }
    else{
        return 'Something went wrong'
    }
}

function game(){
    let player = 0
    let computer = 0
    let tie = 0
    for (i=0; i<5; i++){
        let play = playRound(prompt('Enter your choice'), getComputerChoice())
        console.log(play)
        if (play.slice(4,5) == 'W'){
            player++
        }
        else if (play.slice(4,5) == 'L'){
            computer++
        }
        else if (play == 'Something went wrong'){
            i--
        }
        else {
            tie++
        }

    }
    console.log('Player: '+ player)
    console.log('Computer: '+ computer)
    console.log('Ties: '+ tie)
}

console.log(game())