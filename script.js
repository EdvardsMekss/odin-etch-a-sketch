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
            div.style.backgroundColor = 'blue';
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
