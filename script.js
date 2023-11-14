const gameBoard = (function () {
    const spaces = document.querySelectorAll('.space');
    let rowOneArr = [];
    
    spaces.forEach((space) => {
        space.addEventListener('click', () => {
            const playRound = game(space);
            if(!space.innerText){
                playRound.playRound(space);
                checkRowOneWinner(space);
            } 
        })

        // const checkRowOneWinner = (space) => {
        //     if(space.classList.contains('row-1')){
        //         rowOneArr.push(space.innerText);
        //     }
        //     if(rowOneArr.length == 3){
        //         console.log(rowOneArr)
        //     }
        // }
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

