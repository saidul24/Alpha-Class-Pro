
const homeSection = document.getElementById('home')
const playGroundSection = document.getElementById('play-ground')
const homePlayButton = document.getElementById('home-play-btn')

homePlayButton.addEventListener('click', function (){
    // 1. hidden the home section , 
    homeSection.classList.add('hidden');

    // 2. show the play ground section
    playGroundSection.classList.remove('hidden')
})