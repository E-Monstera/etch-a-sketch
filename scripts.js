let size = 16;
const sketchPad = document.querySelector('.sketchy');   //used to set the dimensions of the sketchpad

//Set the grid to 16x16 by default
function populateGridDefault(){
    sketchPad.setAttribute('style', 'display: grid; grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr); border-style: solid;');
    let divs = 16 * 16;
    while (divs > 0){
        let content = document.createElement('div');
        content.classList.add('box');
        sketchPad.appendChild(content);
        console.log('this worked');
        divs--;
    }
}



//Adds the new class/color to the div
function updateDIV(e){
    console.log(e);
    let newColor = 'blue';
    this.style.backgroundColor = newColor;
}


//Update when adding sizes to the grid
function populateGrid(newSize){
    let newGrid = document.createElement('div');
    newGrid.style.cssText = 'display: grid; grid-template-columns: repeat(newSize, 1fr); grid-template-rows: repeat(newSize, 1fr); border-style: solid;';
    sketchPad.appendChild(newGrid);
}




populateGridDefault();
const divs = document.querySelectorAll('.box');
divs.forEach(box => box.addEventListener('mouseover', updateDIV));


//Add a class to the current div that sets it up as a grid w/ 16rows/columns
//Then create 16*16 divs to fill that grid - Add a class to these grids
//Then, create a CSS attribute using divClass:hover to add the effects