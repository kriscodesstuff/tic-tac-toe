const gameBoard = (function () {
    const spaces = document.querySelectorAll('.space');

    spaces.forEach((space) => {
        space.addEventListener('click', () => {
            const playRound = game(space);
            playRound.playRound(space);
        })
    })
})();

const players = () => {

    const player1 = {
        name: 'Player 1',
        symbol: 'X'
    }
    
    const player2 = {
        name: 'Player 2',
        symbol: 'O'
    }

    let activePlayer = player2;

    const switchPlayers = () => {
       return activePlayer == player2 ? activePlayer = player1 : activePlayer = player2;
    }


    return{switchPlayers}

}

const returnPlayers = players();



function game(space) {
    
    const playRound = (space) => {
        space.innerText = `${returnPlayers.switchPlayers().symbol}`;
    }

    

    return { playRound };
    
}

