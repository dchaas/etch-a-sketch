// create a 16x16 grid of squares
let grid = []
const container = document.querySelector('.container');

for (let i=0; i<16; i++) {
    const block = document.createElement('div');
    block.textContent = `${i}`
    block.classList.add('grid');
    block.addEventListener('mouseover', hoverStyle);

    container.appendChild(block);
    grid.push(block);
}

function hoverStyle(event) {
    
    console.log('Moused over');
    console.log(event)
    console.log(event.target)
    event.target.classList.toggle('drawn');
}

//grid[0].addEventListener('mouseover', hoverStyle);