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
   
    
    spaces.forEach((space) => {
        space.addEventListener('click', () => {
            const playGame = game(space,allArrays);
            if(!space.innerText){
                playGame.playRound(space);
                playGame.checkWinner(space, allArrays);
            } 
        })
    })

    if(resetBtn){
        resetBtn.addEventListener('click', () => playGame.resetGame(spaces,allArrays));
    }
   
   
})();




const players = () => {

    const form = document.querySelector('form');
    const playerOneLabel = document.querySelector('#player-1-label');
    const playerTwoLabel = document.querySelector('#player-2-label');
    const playerOneSelection = document.querySelector('#player-1');
    const playerTwoSelection = document.querySelector('#player-2');


    const player1 = {
        name:'Player One',
        symbol: 'X'
    }
    
    const player2 = {
        name: 'Player Two',
        symbol: 'O'
    }

    // if(form){
    //     form.onSubmit = () => {
    //         localStorage.setItem('playerOneSelection', playerOneSelection.value)
    //     }
    // }

    // console.log(player1);

    

    let activePlayer = player2;

    const switchPlayers = () => {
       return activePlayer == player2 ? activePlayer = player1 : activePlayer = player2;
    }


    return{switchPlayers}

}

const returnPlayers = players();



function game(space,allArrays,spaces) {

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

    const resetGame = (spaces,allArrays) => {

        for(let arr in allArrays) {
            allArrays[arr] = [];
        }
    
        spaces.forEach((space) => {
            space.innerText = '';
        })
    }

    

    
    

    return { playRound, resetGame, checkWinner };
    
}

