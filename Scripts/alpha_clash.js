function handleKeyBoardButtonPress(event){
    const currentAlphabet = document.getElementById('current-alphabet');
    if(event.key==='Escape')
        {
            gameover();
        }
   if(event.key===currentAlphabet.innerText.toLowerCase())
    {
        // update score
        // 1. get the current score
        // 2. increase the score by 1
        // 3. show the update score
        const currentScoreElement = document.getElementById('current-score');
        const currentScore = parseInt(currentScoreElement.innerText);
        const newScore = currentScore+1;
        currentScoreElement.innerText=newScore;
        // start a new round
        removeKeyColor(event.key);
        continueGame();
    }
    else
    {
       const currentLifeElement = document.getElementById('current-life');
       const currentLife = parseInt(currentLifeElement.innerText);
       const newLife = currentLife-1;
       currentLifeElement.innerText= newLife;
       if(newLife===0)
        {
            gameover();
        }
    }

}
// capture key press
document.addEventListener('keyup',handleKeyBoardButtonPress);

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
function gameover(){
    hideELementbyID('play-ground');
    displayElementbyID('score');
    //update final score
    document.getElementById('final-score').innerText=document.getElementById('current-score').innerText;
    //clear the last selected alphabet highlight
    const currentAlphabet = document.getElementById('current-alphabet').innerText.toLowerCase();
    removeKeyColor(currentAlphabet);

}
function playAgain()
{
    //hide everything only show the playground
    document.getElementById('current-life').innerHTML=5;
    document.getElementById('current-score').innerText=0;
    hideELementbyID('score');
    displayElementbyID('play-ground');
    continueGame();
}