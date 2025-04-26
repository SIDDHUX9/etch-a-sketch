
createGrid(16);

function createGrid(size) {
    const container = document.getElementById('container');
    container.innerHTML = '';

    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener('mouseover', function () {
            square.style.backgroundColor = 'black';
        });

        container.appendChild(square);
    }
}

document.getElementById('blocksize').addEventListener('click', function () {
    const newSize = prompt('Enter number of squares per side (max 100):');
    createGrid(newSize);
});
