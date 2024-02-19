// DOM Manipulation

// Event Propagation

window.addEventListener('click', function(){
        console.log('Window')
},false)

document.addEventListener('click', function(){
        console.log('Document')
},false)


document.querySelector('.div2').addEventListener('click', function(e){
        //e.stopPropagation()
        console.log('Div2')
},{once: true})

document.querySelector('.div1').addEventListener('click', function(){
        console.log('Div1')
},false)

document.querySelector('.button').addEventListener('click', function(e){
        e.preventDefault()
        console.log(e.target.innerText = 'Clicked!')
},false)