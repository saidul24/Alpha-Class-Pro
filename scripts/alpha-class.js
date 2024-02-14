
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

    // current Alphabet 
    const currentAlphabetElement = document.getElementById('current-alpha')
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    console.log( userPressed , currentAlphabet);


    // Cheek  Match or not 

    if(userPressed === expectedAlphabet){
        console.log(" your The won");


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
    
    else{
        console.log("You lose your lfe");
        // Step 1. get the current life number
        const currentLife = getElementNumberById('current-life')

        // Step 1. reduce the life count 
        const newLife = currentLife - 1;

        // Step 2. display the update life count
        document.getElementById('current-life').innerText = newLife;

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
    hideElementById('home');
    showElementById('play-ground')
    continueGame()
}


