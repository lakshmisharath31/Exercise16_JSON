function makeLine(size){
  let str='';
  for(var i=0;i<size;i++){
  str=str+'#';
  }
  return str;
   }
  //console.log(makeLine(10));
  

// Code your makeDownwardStairs function here:

function makeDownwardStairs(heigth){
  for(let i=1;i<heigth;i++){
      console.log(makeLine(i));
  }
    return makeLine(heigth);
}
console.log(makeDownwardStairs(5));

// Code your makeSpaceLine function here:
function numS(spaces){
  let str="";
  for(i=0;i<spaces;i++){
  str=" "+str;
  }return str;
}
//console.log(numSpaces(3));

function makeSpaceLine(numSpaces,numChars){
  var x=makeLine(numChars);
  var y=numS(numSpaces);
  let str = y+x+y;
  return str;
}
console.log(makeSpaceLine(3,5));

// Code your makeIsoscelesTriangle function here:

function makeIsoscelesTriangle(height){

  for (var i = 0; i < height; i++) {
   var str = '';
    for (var j = 1; j <height-i; j++) {
    str=numS(j);
    }
    for (var k = 1; k <= (2*i+1); k++) {
      str = str + '#';
    }
    console.log(str);
  }return numS(height);
}console.log(makeIsoscelesTriangle(5));