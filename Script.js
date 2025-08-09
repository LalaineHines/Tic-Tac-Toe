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

