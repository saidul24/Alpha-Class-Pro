
// const homeSection = document.getElementById('home')
// const playGroundSection = document.getElementById('play-ground')
// const homePlayButton = document.getElementById('home-play-btn')

// homePlayButton.addEventListener('click', function (){
//     // 1. hidden the home section , 
//     homeSection.classList.add('hidden');

//     // 2. show the play ground section
//     playGroundSection.classList.remove('hidden')
// })

function continueGame() {
    // generate random alphabet
    const randomAlphabet = getRandomAlphabet();
    console.log("i got a random num ", randomAlphabet);

    // set randomly generated alphabet and show display
    const currentAlphabetElement = document.getElementById('current-alpha');
    currentAlphabetElement.innerText = randomAlphabet
    // set background color 
    setHighlightAlphabet(randomAlphabet)

}

function play() {
    hideElementById('home');
    showElementById('play-ground')
    continueGame()
}
