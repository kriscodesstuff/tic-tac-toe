const gameBoard = (function () {
    const spaces = document.querySelectorAll('.space');
    let rowOneArr = [];
    let rowTwoArr = [];
    let rowThreeArr = [];
    let columnOneArr = [];
    let columnTwoArr = [];
    let columnThreeArr = [];
    let diagonalLeftArr = [];
    let diagonalRightArr = [];

   
    
    spaces.forEach((space) => {
        space.addEventListener('click', () => {
            const playRound = game(space);
            if(!space.innerText){
                playRound.playRound(space);
                checkWinner(space);
            } 
        })

        const checkWinner = (space) => {

            switch(space.dataset.row){
               case '1' :
                rowOneArr.push(space.innerText);
                break;
               case '2' :
                rowTwoArr.push(space.innerText);
                break;
               case '3' :
                rowThreeArr.push(space.innerText);
                break;
            }

            switch(space.dataset.column) {
                case '1' :
                    columnOneArr.push(space.innerText);
                    break;
                case '2' :
                    columnTwoArr.push(space.innerText);
                    break;
                case '3' :
                    columnThreeArr.push(space.innerText);
                    break;
            }

            switch(space.dataset.diagonal) {
                case 'left' :
                    diagonalLeftArr.push(space.innerText);
                    break;
                case 'right' :
                    diagonalRightArr.push(space.innerText);
                    break;
                case 'left-right' :
                    diagonalLeftArr.push(space.innerText);
                    diagonalRightArr.push(space.innerText);
                    break;
            }

            const displayWinner = (arr) => {
                if(arr.length === 3 && !arr.includes('O')){
                    console.log('Player 1 wins!');
                }else if(arr.length === 3 && !arr.includes('X')){
                    console.log('Player 2 wins!');
                }
            }

           displayWinner(rowOneArr)
           displayWinner(rowTwoArr);
           displayWinner(rowThreeArr);
           displayWinner(columnOneArr);
           displayWinner(columnTwoArr);
           displayWinner(columnThreeArr);
           displayWinner(diagonalLeftArr);
           displayWinner(diagonalRightArr);
            
        }

        
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

