const gameBoard = (() => {
    const board =['', '', '', '', '', '', '', '', ''];
    return {board}
})();

// Factory function: Creates players
const player =  (name, symbol) => {
    return {name, symbol}
};

const player1 = player('Player 1', 'X');
const player2 = player('Player 2', 'O');

// Play game and check winner
const playGame = (() => {
    const {board} = gameBoard;

    let symbol = '';
    let winningPlayer = '';
        // When spot is clicked push player's marker to the corresponding box position in the array
    const markSpot = (e) => {
        console.log('start symbol:', symbol);
        const targetArrayIndex = board[`${e.target.id}`]; console.log(e.target); // Sets the board square to the corresponding array index
        if (symbol === '') {
            symbol = player1.symbol; console.log(symbol);
            if (targetArrayIndex === '') {board.splice(`${e.target.id}`, 1, symbol)}; console.log(board);
        } else if (symbol === player1.symbol) {
            symbol = player2.symbol; console.loc(symbol);
            winningPlayer = player2.name;
            if (targetArrayIndex === '') {board.splice(`${e.target.id}`, 1, symbol)}; console.log(board);
        } else if (symbol === player2.symbol) {
            symbol = player1.symbol; console.log(symbol);
            winningPlayer = player1.name;
            if (targetArrayIndex === '') {board.splice(`${e.target.id}`, 1, symbol)}; console.log(board);
        }
        const {renderMoves} = renderAndReset;
        renderMoves();
        checkWinner();
    }

    function checkWinner() {
        if (board[0] === board[1] && board[1] === board[2] && board[0] !== '') {removeClick(); winner.textContent = `${winningPlayer} Wins!`; symbol = ''; return;}
        if (board[3] === board[4] && board[4] === board[5] && board[3] !== '') {removeClick(); winner.textContent = `${winningPlayer} Wins!`; symbol = ''; return;}
        if (board[6] === board[7] && board[7] === board[8] && board[6] !== '') {removeClick(); winner.textContent = `${winningPlayer} Wins!`; symbol = ''; return;}
        if (board[0] === board[3] && board[3] === board[6] && board[0] !== '') {removeClick(); winner.textContent = `${winningPlayer} Wins!`; symbol = ''; return;}
        if (board[1] === board[4] && board[4] === board[7] && board[1] !== '') {removeClick(); winner.textContent = `${winningPlayer} Wins!`; symbol = ''; return;}
        if (board[2] === board[5] && board[5] === board[8] && board[2] !== '') {removeClick(); winner.textContent = `${winningPlayer} Wins!`; symbol = ''; return;}
        if (board[0] === board[4] && board[4] === board[8] && board[0] !== '') {removeClick(); winner.textContent = `${winningPlayer} Wins!`; symbol = ''; return;}
        if (board[2] === board[4] && board[4] === board[6] && board[2] !== '') {removeClick(); winner.textContent = `${winningPlayer} Wins!`; symbol = ''; return;}
        if (board[0]!== '' && board[1] !== '' && board[2] !== '' && board[3] !== '' && board[4] !== '' && board[5] !== '' && board[6] !== '' && board[7] !== '' && board[8] !== '') {winningPlayer.textContent = "DRAW!"};
    }
    const spots = Array.from(document.getElementsByClassName('box'));

    function removeClick() {
        spots.forEach((box) => box.removeEventListener('click', markSpot)); // Removes click event listener
    }

    function addClick() {
        spots.forEach((box) => box.addEventListener('click', markSpot));
    }
    addClick();

    return {addClick}
})();

