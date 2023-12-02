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
   
   
    
    spaces.forEach((space) => {
        space.addEventListener('click', () => {
            const playGame = game(space,allArrays);
            if(!space.innerText){
                playGame.playRound(space);
                playGame.checkWinner(space, allArrays);
            } 
        })

        
    
    })

    resetBtn.addEventListener('click', () => playGame.resetGame(spaces));

    
   
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



function game(space,allArrays) {

    
    
    const playRound = (space) => {
        space.innerText = `${returnPlayers.switchPlayers().symbol}`; 
       
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

        const displayWinner = (arr) => {
            if(arr.length === 3 && !arr.includes('O')){
                console.log('Player 1 wins!');
            }else if(arr.length === 3 && !arr.includes('X')){
                console.log('Player 2 wins!');
            }
        }

       displayWinner(allArrays.rowOneArr)
       displayWinner(allArrays.rowTwoArr);
       displayWinner(allArrays.rowThreeArr);
       displayWinner(allArrays.columnOneArr);
       displayWinner(allArrays.columnTwoArr);
       displayWinner(allArrays.columnThreeArr);
       displayWinner(allArrays.diagonalLeftArr);
       displayWinner(allArrays.diagonalRightArr);
        
    }

    const resetGame = (spaces) => {
    
        spaces.forEach((space) => {
            space.innerText = '';
        })
    }

    

    
    

    return { playRound, resetGame, checkWinner };
    
}

