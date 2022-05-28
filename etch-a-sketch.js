// create a 16x16 grid of squares
let grid = []
const container = document.querySelector('.container');
for (let i=0; i<16; i++) {
    const block = document.createElement('div');
    block.textContent = `${i}`
    block.classList.add('grid');
    container.appendChild(block);
    grid.push(block);
}

//function hoverStylin