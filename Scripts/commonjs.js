function hideELementbyID(elementID)
{
    document.getElementById(elementID).classList.add("hidden");
}
function displayElementbyID(elementID)
{
    document.getElementById(elementID).classList.remove("hidden");
}
function getARandomAlphabet(){
    //get or create an alphabet array
    const alphabetstring = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets= alphabetstring.split('');
    //get a random index 0 to 25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    console.log(alphabets[index]);
    return alphabets[index];
}
function changeKeyColor(elementID)
{
    document.getElementById(elementID).classList.add('bg-orange-400');
}
function removeKeyColor(elementID)
{
    document.getElementById(elementID).classList.remove('bg-orange-400');
}