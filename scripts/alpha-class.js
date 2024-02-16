
// const homeSection = document.getElementById('home')
// const playGroundSection = document.getElementById('play-ground')
// const homePlayButton = document.getElementById('home-play-btn')

// homePlayButton.addEventListener('click', function (){
//     // 1. hidden the home section , 
//     homeSection.classList.add('hidden');

//     // 2. show the play ground section
//     playGroundSection.classList.remove('hidden')
// })




function handleKeyboardButtonPress(event) {
    const userPressed = event.key;
    // console.log("user pressed", userPressed);

    // stop the game if press "Escape"
    if (userPressed === 'Escape') {
        gameOver()
    }

    // current Alphabet 
    const currentAlphabetElement = document.getElementById('current-alpha')
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    // console.log(userPressed, currentAlphabet);


    // Cheek  Match or not 

    if (userPressed === expectedAlphabet) {
        // console.log(" your The won");


        // Update Score
        // 1. get current score
        const currentScore = getElementNumberById('current-score')

        // 2. increase the score 1
        const newScore = currentScore + 1;

        // 3. show update score display
        document.getElementById('current-score').innerText = newScore;

        // new round
        continueGame()
        removeBackgroundColorById(expectedAlphabet)
    }

    else {
        // console.log("You lose your lfe");
        // Step 1. get the current life number
        const currentLife = getElementNumberById('current-life')

        // Step 1. reduce the life count 
        const newLife = currentLife - 1;

        // Step 2. display the update life count
        document.getElementById('current-life').innerText = newLife;

        if (newLife === 0) {
            // console.log('Game over');
            gameOver();
        }

    }
}

// capture keyboard press
document.addEventListener('keyup', handleKeyboardButtonPress);



function continueGame() {
    // generate random alphabet
    const randomAlphabet = getRandomAlphabet();
    // console.log("i got a random num ", randomAlphabet);

    // set randomly generated alphabet and show display
    const currentAlphabetElement = document.getElementById('current-alpha');
    currentAlphabetElement.innerText = randomAlphabet
    // set background color 
    setHighlightAlphabet(randomAlphabet)
}

function play() {

    // hide everything and show only play ground
    hideElementById('home');
    showElementById('play-ground')
    hideElementById('final-score')
    continueGame()

    // reset score and life
    setTextElementById2('current-life', 5);
    setTextElementById2('current-score', 0);

}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');

    // update final score
    // get the final score
    const lastScore = document.getElementById('current-score');
    // console.log(lastScore);
    setTextElementById('last-score', lastScore);

    // clear the last selected alphabet 
    const currentAlphabet = getElementTextById('current-alpha');
    removeBackgroundColorById(currentAlphabet)
}



