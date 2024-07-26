const sizeBtn = document.getElementById('sizeBtn'); // button that change the size
const gridContainer = document.getElementById('gridContainer'); // where the grids gonna be

let size // Higher scope variable

function createGrids() {
    if (size <= 64) { // conditional statement to avoid a value higher than 64
        // Clear existing items
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild); // remove existing grid to run another one
        }
    
        // Create new grid items
        for (let i = 0; i < size; i++) { // create the rows 
            const rows = document.createElement('div');
            rows.classList.add('rows');
            gridContainer.appendChild(rows);
            console.log(`${size} is an int number`);
    
            for (let j = 0; j < size; j++) { // create the columns
                const cols = document.createElement('div');
                cols.classList.add('cols');
                rows.appendChild(cols);

                // this event listener act like a hover property in css to avoid when the user leave the mouse in the item the style dissapear
                cols.addEventListener('mouseover', function() {
                    cols.style.backgroundColor = 'black';
                });
                cols.addEventListener('mouseleave', function () {
                    cols.style.backgroundColor = 'black';
                });
            }             
        }
    } else {
        alert('Error: Size exceeds the limit.'); // error alert if the value is higher than 64
    }
    

}

function sizeChange() {    
    size = parseInt(prompt('Set the size that you wish', 4));
    
    if (Number.isNaN(size) == true) { // check if the value of the prompt 'size' isn't a number and print an error
        alert(`The input isn't a number`);
        console.error(`${size} isn't a int number`);
    }
    else {
        createGrids(); // else the value is a number run the rest of the code
    }
}

sizeBtn.addEventListener('click', sizeChange)