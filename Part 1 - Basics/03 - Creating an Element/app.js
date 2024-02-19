// DOM Manipulation

//Creating Elements

const ul = document.querySelector('ul')
const li = document.querySelector('li')

//Adding an element

ul.append(li)

//Modifying the text

li.innerText = 'X-Men'

// Modifying Attributes and Classes

// Adding class attribute
li.classList.add('list-items')

// Removing class attribute
li.classList.remove('list-items')

// Setting id
li.setAttribute('id', 'main-heading')

//Remove Attribute
li.removeAttribute('id')

// Check if element contains class
console.log(li.classList.contains('list-items'))

// Remove Elements
li.remove()