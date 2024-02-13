
// click to hidden function

function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

// click to show function
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}



function getRandomAlphabet(){
    // get or create on alphabet array
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const array = alpha.toLocaleLowerCase().split('')

    // console.log(array);

    // get random index between 0 - 25;
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber)

    const random = array[index]
    return random

    // console.log(random);
}

function setHighlightAlphabet(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-400')
}
