var body = document.querySelector('body');
var container = document.createElement('div');
container.setAttribute('id',  'container');
body.appendChild(container);
container.style = 'width: 25rem; height: 25rem;';

// start of function for Grid 

function createDivs(num) {
for (let i = 0; i < num; i++) {

  var numberOfSides = 100/Math.sqrt(num);
    
    var div = document.createElement('div');
    div.setAttribute('class', 'squares');
    container.appendChild(div);
    div.style = `width: ${numberOfSides}% ;height: ${numberOfSides}% ; background-color: #fff; outline: 1px solid green`;
       
  };
  
}
//end of function for drawing grid
window.onload = createDivs(256);

// background color change on click
var colorChanges = document.querySelectorAll('.squares');

colorChanges.forEach((colorChange) => {
    colorChange.addEventListener('click', () => {
        colorChange.style.background = '#000';
    })
    colorChange.addEventListener('dblclick', () => {
        colorChange.style.background = '#fff'
    })
});

//reset button start
var reset = document.createElement('button');
reset.textContent = 'RESET';
body.appendChild(reset);
reset.setAttribute('id', 'reset');

reset.addEventListener('click', () => {
  var resetGrid = document.querySelectorAll('.squares');
    
    resetGrid.forEach((clearGrid) => {
      clearGrid.style.background = '#fff';
    })
});
//reset button end