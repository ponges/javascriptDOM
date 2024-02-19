// DOM Manipulation

// Event Listeners

// element.addEventListener("click", function)

const button2 = document.querySelector('.btn-2')

function alertBtn(){
        alert('I also love Javascript!!')
}

button2.addEventListener("click", alertBtn)

// MouseOver

const newBackgroundColor = document.querySelector('.box-3')

function changeBackgroundColor(){
        newBackgroundColor.style.backgroundColor = 'blue'
}

newBackgroundColor.addEventListener("mouseover", changeBackgroundColor)