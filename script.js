function startNewGame() {
    console.log("New Game Started!");
    // Logic to shuffle the tiles
}

function clickTile(row, col) {
    console.log(`Tile clicked: ${row}, ${col}`);
    // Add movement logic here
}

function clickTile(row, col) {
    const clickedTile = document.getElementById(`cell${row}${col}`);
    const emptyTile = document.querySelector('.empty');

    // Swap the empty and clicked tiles
    if (clickedTile && emptyTile) {
        // Swap classes
        [clickedTile.className, emptyTile.className] = [emptyTile.className, clickedTile.className];
    }
}

const gridSize = 3;
const tiles = [...Array(gridSize * gridSize).keys()].slice(0, -1); // Array with 8 tiles
tiles.push(null); // Add empty tile