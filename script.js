function generateGrid(width, height){
    for(let i=0; i<width; i++){
        for(let j=0; j<height; j++){
            let newDiv = document.createElement('div');
            newDiv.style.cssText = 'min-width: 10px; min-height: 10px; border: grey 1px solid;';
            document.getElementById('sketch-pad').appendChild(newDiv);
        }
    }
}

function clearGrid(){
    let parent = document.getElementById('sketch-pad');
    while(parent.firstChild){
        parent.firstChild.remove();
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
    }
    
});