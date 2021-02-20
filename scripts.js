let size = 16;
let newColor = 'blue';
const sketchPad = document.querySelector('.sketchy');       //used to set the dimensions of the sketchpad
const colorPicker = document.querySelector('#pixelColor');  //Constant for the color picker
const blackButton = document.querySelector('#blackButton'); //Constant for button that changes the pixels black
const clearButton = document.querySelector('#clearButton'); //Constant for the clear button
const rangeSlider = document.querySelector('#pixelRange');        //Constant for the slider



//Set the grid to 16x16 by default
function populateGrid(pixels){
        sketchPad.setAttribute('style', 'display: grid; grid-template-columns: repeat('+pixels+', 1fr); grid-template-rows: repeat('+pixels+', 1fr); border-style: solid;');
    let divs = pixels * pixels;
    while (divs > 0){
        let content = document.createElement('div');
        content.classList.add('box');
        sketchPad.appendChild(content);
        divs--;
    }
    const newDivs = document.querySelectorAll('.box');
    newDivs.forEach(box => box.addEventListener('mouseover', updateDIV));
}


//Triggered by the event listener to change the color of the pixels
function colorChange(e){
    newColor = this.value;
}


//
function changeToBlack(){
    newColor = '#000000';
}

function clearGrid(){ 
    let clear = 'white';
    divs.forEach((div) => {
        div.style.backgroundColor = clear;
        console.log("nope");
    });
    // divs.forEach(div => div.backgroundColor = clear);
}

//Adds the new class/color to the div
function updateDIV(e){
    // console.log(e);
    this.style.backgroundColor = newColor;
}


//Update when adding sizes to the grid
function updateTable(e){
    console.log(this.value);
    sketchPad.innerHTML = "";
    populateGrid(this.value);
    // let newGrid = document.createElement('div');
    // newGrid.style.cssText = 'display: grid; grid-template-columns: repeat(newSize, 1fr); grid-template-rows: repeat(newSize, 1fr); border-style: solid;';
    // sketchPad.appendChild(newGrid);
}



//Populate the grid with a 16x16 grid
populateGrid(16);

//Set the color of the pixels
colorPicker.addEventListener('change', colorChange);
blackButton.addEventListener('click', changeToBlack);
clearButton.addEventListener('click', clearGrid);


//Slider
rangeSlider.addEventListener('change', updateTable);

//Add a class to the current div that sets it up as a grid w/ 16rows/columns
//Then create 16*16 divs to fill that grid - Add a class to these grids
//Then, create a CSS attribute using divClass:hover to add the effects