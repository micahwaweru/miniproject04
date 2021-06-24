//var guessWord= ['H','e','l','l','o'];
var textArea = document.querySelector('#text-area');
var startButton = document.querySelector('#startButton');
var guessWord='hello';

//use keypresses to match the value of the guessword
//if keypress = any letter of guessword then display matched letter



function keyDownAction(){
    var x = /h,e,l,o/;
    var y = x.test(guessWord);
    

    console.log(y)
}

keyDownAction();








//localStorage.setItem('guessWord', JSON.stringify(guessWord));

//start the game by clicking on a button




//function wordMatch(){

//}


//textArea.addEventListener('keypress', )