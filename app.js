const sizeBtn = document.getElementById('sizeBtn'); // button that change the size
// const rainbowModeBtn = document.getElementById('rainbowMode'); // button to enable the rainbow mode
const resetBtn = document.getElementById('resetBtn'); // button to reset the grids
const gridContainer = document.getElementById('gridContainer'); // where the grids gonna be

// Higher scope variables
let size 

function createGrids() {
    if (size <= 100) { // conditional statement to avoid a value higher than 64
        // Clear existing items
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild); // remove existing grid to run another one
        }
    
        // Create new grid items
        for (let i = 0; i < size; i++) { // create the rows 
            const rows = document.createElement('div');
            rows.classList.add('rows');
            gridContainer.appendChild(rows);
    
            for (let j = 0; j < size; j++) { // create the columns
                const cols = document.createElement('div');
                cols.classList.add('cols');
                rows.appendChild(cols);

                // this event listener act like a hover property in css to avoid when the user leave the mouse in the item the style dissapear
                cols.addEventListener('mouseover', function() {
                    const rainbow = rainbowMode()
                    cols.style.backgroundColor = rainbow
                });
                // cols.addEventListener('mouseleave', function () {
                //     cols.style.backgroundColor = 'black';
                // });
            }             
        }
    } else {
        alert('Error: Size exceeds the limit.'); // error alert if the value is higher than 64
    }
    

}

function rainbowMode(Lenght = 6) {
    const hexLetters = 'abcdef0123456789'.toUpperCase();
    let result = '#';
    for (let i = 0; i < Lenght; i++) {
        result += hexLetters.charAt(Math.floor(Math.random() * hexLetters.length));
      } 
      return result;
     // probably i need to do the changes inside the create grids function
}

function sizeChange() {    
    size = parseInt(prompt('Please enter the grid size (between 1 and 100):', 16));
    
    if (Number.isNaN(size) == true || size < 1 || size > 64) { // check if the value of the prompt 'size' isn't a number and print an error
        alert(`Invalid input. Please enter a number between 1 and 64.`);
        console.error(`${size} isn't a int number`);
    }else {
        createGrids(); // else the value is a number run the rest of the code
    }
}

function resetx() {
    return createGrids();
}

sizeBtn.addEventListener('click', sizeChange);
resetBtn.addEventListener('click', resetx);
rainbowModeBtn.addEventListener('click', createGrids, rainbowMode)