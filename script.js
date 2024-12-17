const colors = [
    '#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#A833FF',
    '#33FFA8', '#FFC300', '#C70039', '#581845', '#DAF7A6',
    '#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1',
    '#034F84', '#F7786B', '#79C753', '#FFCC33', '#FF6F61'
];

const gridContainer = document.getElementById('gridContainer');

// Generate 20 random numbers for the grid (1 to 20 in random order)
const numbers = Array.from({ length: 20 }, (_, i) => i + 1).sort(() => Math.random() - 0.5);

// Track the number of clicks
let clickCount = 0;

// Create grid items
colors.forEach((color, index) => {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.style.backgroundColor = color;
    gridItem.textContent = numbers[index]; // Assign random numbers
    gridItem.dataset.number = numbers[index];

    // Add click functionality
    gridItem.addEventListener('click', () => {
        if (!gridItem.classList.contains('clicked')) {
            gridItem.classList.add('clicked');
            gridItem.style.backgroundColor = '#000'; // Reveal the number with black background
            clickCount++;

            // Lock the grid after all cells are clicked
            if (clickCount === colors.length) {
                gridContainer.classList.add('locked');
                alert("Game Over! All numbers have been revealed.");
            }
        }
    });

    gridContainer.appendChild(gridItem);
});
