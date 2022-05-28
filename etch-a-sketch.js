const resetBtn = document.querySelector("#reset");
const PIXELS = 800;
const container = document.querySelector('.container');

resetBtn.addEventListener('click',() => {
    let gridSize = parseInt(prompt('How big do you want the grid? Enter rows: (max 100) ',''));
    if (gridSize>100) {
        gridSize=100;
        alert('Grid too large, defaulting to max size of 100');
    } 
    drawBoard(gridSize);
});

function drawBoard(size) {
    // create a 16x16 grid of squares
    let grid = []
    // remove all children node before repeating
    removeChildren(container);


    for (let i=0; i<size*size; i++) {
        const block = document.createElement('div');
        //block.textContent = `${i}`
        block.classList.add('grid');
        block.addEventListener('mouseover', hoverStyle);

        // resize the container to maintain 960x960px
        container.style.gridTemplateColumns = `repeat(${size},${Math.round(PIXELS/size)}px)`;
        container.style.gridTemplateRows = `repeat(${size},${Math.round(PIXELS/size)}px)`;
        container.appendChild(block);
        grid.push(block);
    }
}

drawBoard(4);

function hoverStyle(event) {
    
    console.log('Moused over');
    console.log(event)
    console.log(event.target)
    event.target.classList.add('drawn');
}

function removeChildren(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}