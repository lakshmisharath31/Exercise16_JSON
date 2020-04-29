const INPUT= require('readline-sync');
function allLetter(){
    var letters = /^[A-Za-z]+$/;
    let word = INPUT.question("Enter a word to be scored, or 'Stop' to quit: ");
      while(!word.match(letters)){
        console.log("Invalid Input, Please enter only character with no numeric or alphanumeric");
        word = INPUT.question("Enter a word to be scored, or 'Stop' to quit: ");
      }
      return word;
    }

console.log(allLetter());