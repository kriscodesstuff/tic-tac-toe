const gameBoard = (function () {
    const spaces = document.querySelectorAll('.space');
    const allArrays = {
        rowOneArr : [],
        rowTwoArr : [],
        rowThreeArr : [],
        columnOneArr : [],
        columnTwoArr : [],
        columnThreeArr : [],
        diagonalLeftArr : [],
        diagonalRightArr : [],
    }

   
    
    const resetBtn = document.querySelector('#reset-btn');
    const playGame = game(undefined,allArrays,spaces);
    const playAgainBtn = document.querySelector('#play-again');
    
    spaces.forEach((space) => {
        space.addEventListener('click', () => {
            const playGame = game(space,allArrays);
            if(!space.innerText){
                playGame.playRound(space);
                playGame.checkWinner(space, allArrays);
            } 
        })
    })
    

    resetBtn.addEventListener('click', () => playGame.resetGame(spaces,allArrays));

    playAgainBtn.addEventListener('click', () => playGame.resetGame(spaces,allArrays));
   
})();




const players = () => {

    const startBtn = document.querySelector('#start-btn');
    const playerSelectionModal = document.querySelector('#player-selection-modal');
    const playerOneName = document.querySelector('#player-1');
    const playerTwoName = document.querySelector('#player-2');

    startBtn.addEventListener('click',(e) => {
        playerSelectionModal.classList.add('hidden');
        player1.name = playerOneName.value ? playerOneName.value : 'Player One'
        player2.name = playerTwoName.value ? playerTwoName.value : 'Player Two';
        document.querySelector('#player-1-header').innerText = `${player1.name}`;
        document.querySelector('#player-2-header').innerText = `${player2.name}`;

    });


    const player1 = {
        symbol: 'X',
    }
    
    const player2 = {
        symbol: 'O',
    }

    const returnPlayerOneName = () => {
        return player1.name;
    }
    
    const returnPlayerTwoName = () => {
        return player2.name;
    }

    let activePlayer = player2;


    const switchPlayers = () => {
       return activePlayer == player2 ? activePlayer = player1 : activePlayer = player2;
    }


    return{switchPlayers,returnPlayerOneName,returnPlayerTwoName }

}

const returnPlayers = players();



function game() {

    const winnerModal =  document.querySelector('.winner-modal');
    const winnerModalText = document.querySelector('.winner-modal p');

    const playRound = (space) => {
        space.innerText = `${returnPlayers.switchPlayers().symbol}`; 
        space.style.color = `${space.innerText === 'O' ? '#35A2E1' : 'black'}`;
    }
    
    const checkWinner = (space, allArrays) => {

        switch(space.dataset.row){
           case '1' :
            allArrays.rowOneArr.push(space.innerText);
            break;
           case '2' :
            allArrays.rowTwoArr.push(space.innerText);
            break;
           case '3' :
            allArrays.rowThreeArr.push(space.innerText);
            break;
        }

        switch(space.dataset.column) {
            case '1' :
                allArrays.columnOneArr.push(space.innerText);
                break;
            case '2' :
                allArrays.columnTwoArr.push(space.innerText);
                break;
            case '3' :
                allArrays.columnThreeArr.push(space.innerText);
                break;
        }

        switch(space.dataset.diagonal) {
            case 'left' :
                allArrays.diagonalLeftArr.push(space.innerText);
                break;
            case 'right' :
                allArrays.diagonalRightArr.push(space.innerText);
                break;
            case 'left-right' :
                allArrays.diagonalLeftArr.push(space.innerText);
                allArrays.diagonalRightArr.push(space.innerText);
                break;
        }

  

        const displayWinner = (arr, s) => {

            const spaces = document.querySelectorAll('.space');
            spacesArr = Array.from(spaces);
            const displayTie = spacesArr.every(space => space.innerText);

            if(displayTie){
                winnerModal.classList.remove('hidden');
                winnerModalText.innerText = 'Tie';
            }
        
            if(arr.length === 3 && !arr.includes('O')){
                winnerModal.classList.remove('hidden');
                winnerModalText.innerText = `${returnPlayers.returnPlayerOneName()} wins!`;
            }else if(arr.length === 3 && !arr.includes('X')){
                winnerModal.classList.remove('hidden');
                winnerModalText.innerText = `${returnPlayers.returnPlayerTwoName()} wins!`;
            }
        }

       displayWinner(allArrays.rowOneArr);
       displayWinner(allArrays.rowTwoArr);
       displayWinner(allArrays.rowThreeArr);
       displayWinner(allArrays.columnOneArr);
       displayWinner(allArrays.columnTwoArr);
       displayWinner(allArrays.columnThreeArr);
       displayWinner(allArrays.diagonalLeftArr);
       displayWinner(allArrays.diagonalRightArr);
        
    }

    const resetGame = (spaces,allArrays) => {

        for(let arr in allArrays) {
            allArrays[arr] = [];
        }
    
        spaces.forEach((space) => {
            space.innerText = '';
        })

        winnerModal.classList.add('hidden');

        
    }

    

    
    

    return { playRound, resetGame, checkWinner, winnerModal };
    
}

