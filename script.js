const gameBoard = (function () {
    const spaces = document.querySelectorAll('.space');

    spaces.forEach((space) => {
        space.addEventListener('click', () => {
            game.playRound();
        })
    })
})();

function players() {

    const playerX = {
        name: 'Player 1',
        symbol: 'X'
    }

    const playerO = {
        name: 'Player 2',
        symbol: 'O'
    }
    
    let activePlayer = playerX;

    const switchPlayers = (activePlayer) => {
        if(activePlayer.name == 'Player 1'){
            activePlayer = playerO;
        }else if(activePlayer.name == 'Player 2'){
            activePlayer = playerX;
        }
    }

    return {activePlayer, switchPlayers};

}

function game() {

    const playRound = (space) => {
        if(!space.innerText){
            space.innerText = `${activePlayer.symbol}`;
            players.switchPlayers();
        }
    }

    return { playRound };
    
}

