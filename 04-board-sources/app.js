const board = document.querySelector('#board')
const colors = ['red','orange','yellow','lime','aqua','purple']
const Squares_Number = 600

for (let i = 0; i < Squares_Number; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover',() =>
    setColor(square))

    square.addEventListener('mouseleave',() =>
    removeColor(square))


    board.append(square)
}

function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color} , 0 0 20px ${color}`
}

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #1d1d1d`
}

function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}


