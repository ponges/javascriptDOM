// DOM Manipulation

// Event Listeners

const revealBtn = document.querySelector('.reveal-btn')

const hiddenContent = document.querySelector('.hidden-content')

function revealContent(){

        if (hiddenContent.classList.contains('reveal-btn')) {
                // removes class for element
                hiddenContent.classList.remove('reveal-btn')
                console.log('Hide Text')

        }else{
                // adds class to element show css reveeals txt
                hiddenContent.classList.add('reveal-btn')
        

        }

}

revealBtn.addEventListener('click',revealContent)