const gameBoard = (function () {
    const spaces = document.querySelectorAll('.space');
    let rowOneArr = [];
    let rowTwoArr = [];
    let rowThreeArr = [];

   
    
    spaces.forEach((space) => {
        space.addEventListener('click', () => {
            const playRound = game(space);
            if(!space.innerText){
                playRound.playRound(space);
                checkRowWinner(space);
            } 
        })

        const checkRowWinner = (space) => {
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

            if(rowOneArr.length === 3 && !rowOneArr.includes('O')|| 
            rowTwoArr.length === 3 && !rowTwoArr.includes('O')|| 
             rowThreeArr.length === 3 && !rowThreeArr.includes('O')){
                
                console.log('Player 1 wins!');
                
            }else if(rowOneArr.length === 3 && !rowOneArr.includes('X')|| 
            rowTwoArr.length === 3 && !rowTwoArr.includes('X')|| 
             rowThreeArr.length === 3 && !rowThreeArr.includes('X')){

                console.log('Player 2 wins!');
             }
            
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

