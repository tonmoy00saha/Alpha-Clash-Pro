function continueGame(){
    //step 1: generate a random alphabet
    const alpha = getARandomAlphabet();
    //show the randomly generated alphabet
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText=alpha;
    //set background color
    changeKeyColor(alpha);
   
}
function play(){
    //hide the home screen
    // 1. to hide the screen add the hidden class
    hideELementbyID('home-screen');
    displayElementbyID('play-ground');
    continueGame();
    // show the playground
}