// Get all buttons
const buttons = document.getElementsByClassName('cell');
// Initialize the current player
let currentPlayer = 'X';
// Add event listener to each button
for (let button of buttons) {
    button.addEventListener('click', function () {
        // Check if the button is empty
        if (this.innerText === '') {
            // Set the button text to the current player
            this.innerText = currentPlayer;
            setTimeout(() => {
                // Check if the current player has won
                if (checkWinner()) {
                    alert(`${currentPlayer} wins!`);
                    // Reset the game
                    resetGame();
                } else if (isDraw()) {
                    alert('It\'s a draw!');
                    // Reset the game
                    resetGame();
                } else {
                    // Switch the current player
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                    // Update the player span
                    document.getElementById('player').innerText = currentPlayer;
                }
            }, 0);
        }
    });
}

function checkWinner() {
    // Define the winning combinations
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    // Check if any of the winning combinations are met
    return winningCombos.some(combo => {
        const [a, b, c] = combo;
        // Check if the buttons have the same text and are not empty
        return buttons[a].innerText !== '' &&
            buttons[a].innerText === buttons[b].innerText &&
            buttons[a].innerText === buttons[c].innerText;
    });
}

// function checkWinner() {
//     // Check rows
//     for (let i = 0; i < 3; i++) {
//         if (buttons[i * 3].innerText !== '' &&
//             buttons[i * 3].innerText === buttons[i * 3 + 1].innerText &&
//             buttons[i * 3].innerText === buttons[i * 3 + 2].innerText) {
//             return true;
//         }
//     }
//     // Check columns
//     for (let i = 0; i < 3; i++) {
//         if (buttons[i].innerText !== '' &&
//             buttons[i].innerText === buttons[i + 3].innerText &&
//             buttons[i].innerText === buttons[i + 6].innerText) {
//             return true;
//         }
//     }
//     // Check diagonals
//     if (buttons[0].innerText !== '' &&
//         buttons[0].innerText === buttons[4].innerText &&
//         buttons[0].innerText === buttons[8].innerText) {
//         return true;
//     }
//     if (buttons[2].innerText !== '' &&
//         buttons[2].innerText === buttons[4].innerText &&
//         buttons[2].innerText === buttons[6].innerText) {
//         return true;
//     }
//     return false;
// }

function isDraw() {
    // Check if all buttons are filled
    for (let button of buttons) {
        if (button.innerText === '') {
            return false;
        }
    }
    return true;
}

function resetGame() {
    for (let button of buttons) {
        button.innerText = '';
    }
    currentPlayer = 'X';
    // Update the player span
    document.getElementById('player').innerText = currentPlayer;
}