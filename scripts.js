let newColor = '#F9BF7C';   //Sets a default color value
let rainbow = false;    //This is a flag to 
const sketchPad = document.querySelector('.sketchy');       //used to set the dimensions of the sketchpad
const colorPicker = document.querySelector('#pixelColor');  //Constant for the color picker
const blackButton = document.querySelector('#blackButton'); //Constant for button that changes the pixels black
const clearButton = document.querySelector('#clearButton'); //Constant for the clear button
const rangeSlider = document.querySelector('#pixelRange');        //Constant for the slider
const rainbowButton = document.querySelector('#rainbowButton'); //Constant for the rainbow button



//Set the 'pixel' sizes/number within the grid by creating as many divs as needed for the specific dimensions
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
    rainbow = false;
}


//Changes the background color of the hover event to black.
function changeToBlack(){
    newColor = '#000000';
    rainbow = false;
}


//Use a random number generator to choose a random color for the pixel
function rainbowChange(){
    let colorNum1 = getRandomInt(255);
    let colorNum2 = getRandomInt(255);
    let colorNum3 = getRandomInt(255);
    newColor = 'rgb('+colorNum1+', '+colorNum2+', '+colorNum3+')';
    rainbow = true;
}

//Random int function for the rainbow pixels
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//Clears the grid by setting the background to white
function clearGrid(){ 
    let clear = 'white';
    const newDivs = document.querySelectorAll('.box');
    newDivs.forEach((div) => {
        div.style.backgroundColor = clear;
    });
}

//Adds the new class/color to the div. If rainbow is true, then a random color is generated for each hover effect
function updateDIV(e){
    console.log(e);
    if (rainbow){
        rainbowChange();
    }
    this.style.backgroundColor = newColor;
}


//Update when adding sizes to the grid
function updateTable(e){
    console.log(this.value);
    sketchPad.innerHTML = "";
    populateGrid(this.value);
}



//Populate the grid with a 16x16 default grid.
populateGrid(16);

//Event listeners for each of the buttons
colorPicker.addEventListener('change', colorChange);
blackButton.addEventListener('click', changeToBlack);
clearButton.addEventListener('click', clearGrid);
rainbowButton.addEventListener('click', rainbowChange);

//Slider event listener
rangeSlider.addEventListener('change', updateTable);
