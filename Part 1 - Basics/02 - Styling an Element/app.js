// DOM Manipulation

//Styling an element

//Single Element
const title = document.querySelector('#main-heading')
title.style.color = 'red'

//Multiple Elements

const listItems = document.querySelectorAll('.list-items')
for (i=0; i<listItems.length; i++){
    listItems[i].style.fontSize = '5rem'
}
