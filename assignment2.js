const INPUT= require('readline-sync');
// Code your transform function here:

//let word;

const oldScoreKey = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function transform(oldScoreKey){
  const newScoreKey={};
  for (const item in oldScoreKey) {
    for(let i=0;i<oldScoreKey[item].length;i++){
   newScoreKey[oldScoreKey[item][i].toLowerCase()] = Number(item);
    
    }   
}
return newScoreKey;

}


//Objects
let scorerObj1={
  Name:"Simple Score",
  Description:"Each letter is worth 1 point.",
  ScoreFunction: (word) => {
      let score = 0;
      for(let letter of word){
        score += 1;
      } 
      return score;
    }
};
let scorerObj2={
  Name:"Scrabble",
  Description:"The traditional scoring algorithm.",
  ScoreFunction: (word) => {
    let newScoreKey=transform(oldScoreKey);
      var sum =0;
    //let score = 0;
      for (let i = 0; i<word.length; i++) {
         letter = word[i];
        sum += newScoreKey[letter];
      }
      //console.log("final sum : "+sum)
    return (sum);
   }
};
let scorerObj3 = {
  Name:"Bonus Vowels",
  Description:"Vowels are 3 pts, consonants are 1 pt.",
  ScoreFunction: (word)=> {
    let letter;
    let score=0;
    let vowel=['a','i','e','o','u'];
      for(let letter of word.toLowerCase()){
        let i=0;
        if (vowel.includes(letter)){
        score += 3;
        }else{
      score=score+1;
      }
    } return score;
   }
};
let scoringAlgorithms = [scorerObj2,scorerObj1,scorerObj3];

function initialPrompt(){
  console.log("Welcome to the Scrabble score calculator! \n");
  let algorithmChoice=INPUT.question("Which scoring algorithm would you like to use?\n \n 0 - Scrabble: The traditional scoring algorithm.\n 1 - Simple Score: Each letter is worth 1 point.\n 2 - Bonus Vowels: Vowels are worth 3 pts, and consonants are 1 pt.\n \nEnter 0, 1, or 2: ");   
  return algorithmChoice;
 }
//main program
function runProgram(){
  let alog = Number(initialPrompt());
    if(alog == 1){
      console.log(`\nUsing algorithm: ${scoringAlgorithms[alog].Name}\n`)
      usrIpt(alog);
    } else if(alog == 2){
      console.log(`\nUsing algorithm: ${scoringAlgorithms[alog].Name} \n`)
      usrIpt(alog);
    } else {
      console.log(`\nUsing algorithm: ${scoringAlgorithms[0].Name} \n`)
      usrIpt(0);
    }
   
    function usrIpt(alog){
        let word = allLetter();     
        while(word != "stop") {
          console.log(`Score for '${word.charAt(0).toUpperCase() + word.slice(1)}' : ` + scoringAlgorithms[alog].ScoreFunction(word) +`\n`);
          word = allLetter();
        }
      return;
    }
    
    function allLetter(){
      var letters = /^[A-Za-z]+$/;
        let word = INPUT.question("Enter a word to be scored, or 'Stop' to quit: ");
        while(!word.match(letters)){
          console.log("\nInvalid Input, Please enter only character with no numeric or alphanumeric \n");
          word = INPUT.question("Enter a word to be scored, or 'Stop' to quit: ");
        }
        return word.toLowerCase();
      }
 }
 console.log(runProgram());
