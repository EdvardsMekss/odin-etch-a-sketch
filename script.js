function generateGrid(width, height){
    let sketchPad = document.getElementById('sketch-pad')
    while(!isOverflown(sketchPad)){
        let newDiv = document.createElement('div');
            newDiv.classList.add('new-div');
            newDiv.style.width = width + 'px';
            newDiv.style.height = height + 'px';
            document.getElementById('sketch-pad').appendChild(newDiv);
    }
    sketchPad.removeChild(sketchPad.lastElementChild);
}

function clearGrid(){
    let parent = document.getElementById('sketch-pad');
    while(parent.firstChild){
        parent.firstChild.remove();
    }
}

function isOverflown(sketchPad) {
    return sketchPad.scrollHeight > sketchPad.clientHeight || sketchPad.scrollWidth > sketchPad.clientWidth;
  }

function addEventToDivs(){
    let mouseOver = false;
    let mouseDown = false;
    const newDivs = document.getElementsByClassName('new-div');
    for(const div of newDivs){
        div.addEventListener('mouseover', ()=>{
            mouseOver = true;
            ifBothTrigger(div);
        })
        div.addEventListener('mousedown', ()=>{
            mouseDown = true;
            ifBothTrigger(div);
        })
        div.addEventListener('mouseup', ()=>{
            mouseDown = false;
            ifBothTrigger(div);
        })
    }
    function ifBothTrigger(div) {
        if (mouseOver && mouseDown) {
          changeColor(div);
        }
      }
      
    
    function changeColor(div){
        if (mouseDown === true && mouseOver === true) {
            div.style.backgroundColor = currentColor;
        }
        }
    
}

let newGridButton = document.getElementById('new-pad-btn');
newGridButton.addEventListener('click', () =>{
    let widthInput = document.getElementById('width-input').value;
    let width = parseInt(widthInput);
    let heightInput = document.getElementById('height-input').value;
    let height = parseInt(heightInput);

    if(isNaN(width) || isNaN(height)){
        alert('Invalid input! Try again!')
    }
    else {
        if(document.getElementById('sketch-pad').firstChild){
            clearGrid();
        }
        generateGrid(width, height);
        addEventToDivs();
    }
    
});

var colorPickers = document.getElementsByClassName("color-picker");
var currentColor;

for (var i = 0; i < colorPickers.length; i++) {
  colorPickers[i].addEventListener("click", function() {
    currentColor = this.value;
    for (var j = 0; j < colorPickers.length; j++) {
        colorPickers[j].classList.remove("active");
        colorPickers[j].classList.remove("active-white");
    }
    if(currentColor === "white") this.classList.add("active-white");
    else this.classList.add("active");
  });
}


