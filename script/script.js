var body = document.querySelector('body');
var container = document.createElement('div');

container.setAttribute('id',  'container');
body.appendChild(container);

const createSquares = (num) => {
  
  for (let i = 0; i < (num * num); i++) { 
    var div = document.createElement('div');
    div.setAttribute('class', 'squares');
    container.appendChild(div);
    div.style = `width: ${100/num}% ;height: ${100/num}% ; background-color: #fff; outline: 1px solid #555`;    
  };
} 


window.onload = createSquares(16);

const section = document.createElement('div');
const input = document.createElement('input');
const enterBtn = document.createElement('button');
const resetBtn = document.createElement('button');

const userInput = () => {
  
  section.setAttribute('id', 'userInputSection')
  body.appendChild(section);

  const inputSection = document.createElement('div');
  inputSection.setAttribute('id', 'inputSection')
  section.appendChild(inputSection);

  const inputLabel = document.createElement('label');
  inputLabel.setAttribute('id', 'label');
  inputLabel.textContent = 'Number of sides:';
  inputSection.appendChild(inputLabel);

  input.setAttribute('id', 'input');
  inputSection.appendChild(input);

  enterBtn.setAttribute('id', 'enterBtn')
  enterBtn.textContent = 'Enter';
  enterBtn.setAttribute('type', 'submit')
  inputSection.appendChild(enterBtn);
  
  resetBtn.setAttribute('id', 'resetBtn')
  resetBtn.textContent = 'Reset';
  inputSection.appendChild(resetBtn);

  const changeSquares = () => {
    const num = input.value;
    while (container.firstChild) {
      container.removeChild(container.firstChild)
    }
    if (num <= 100) {
      createSquares(num)
    } else {
      alert('Number should be < 100');
      createSquares(16)
    }
  }
  
  enterBtn.addEventListener('click', changeSquares)
}
userInput()

const changeSquareColors = () => {

  const squares = document.querySelectorAll('.squares');
  squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
      
      function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      square.style.background = getRandomColor();
    })
  })
}

changeSquareColors()

enterBtn.addEventListener('click', changeSquareColors)

const resetSquares = () => {
    const squares = document.querySelectorAll('.squares');
    squares.forEach((square) => {
      square.style.background = '#fff';
    })

};

resetBtn.addEventListener('click', resetSquares)