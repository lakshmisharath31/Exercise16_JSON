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
  const newScoreKey = {};
  for (const [letterValue, letterArr] of Object.entries(oldScoreKey)) {
    for (const letter of letterArr) {
      newScoreKey[letter.toLowerCase()] = letterValue;
    }
  }
  return newScoreKey;
}

console.log(transform(oldScoreKey));


function bonusVowelsScore(word){
    
    let letter ;
    let score =0;
     word=word.toLowerCase();
     for( let i=0;i<word.length;i++){

      if (word[i].match('a','e','i','o','u')){
      score += 3;
      }else{
     score=score+1;
    }
   return score;
}
 
}console.log(bonusVowelsScore('sam'));
  