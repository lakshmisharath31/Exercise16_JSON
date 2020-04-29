function makeLine(size){
  let str='';
  for(var i=0;i<size;i++){
  str=str+'#';
  }
  return str;
   }
  //console.log(makeLine(10));

// Paste your makeSpaceLine function here:
function numS(spaces){
  let str="";
  for(i=0;i<spaces;i++){
  str=" "+str;
  }return str;
}
function makeSpaceLine(numSpaces,numChars){
  var x=makeLine(numChars);
  var y=numS(numSpaces);
  let str = y+x+y;
  return str;
}

// Paste your makeIsoscelesTriangle function here:
function triangle(height){
  let triangle='';
  for(let i=0;i<height;i++){
    triangle += (makeSpaceLine(height-i-1,2*i+1)+'\n')
  }
  return triangle.slice(0,-1);
}
  //console.log(triangle(5));
  //reverse function
 function reverse(l){
   return l.split("").reverse().join('');
 }


// Code your makeDiamond function here:

function makeDiamond(height){
  let isoTriangle=triangle(height);
  isoTriangle+=('\n'+reverse(isoTriangle.slice()));
  return isoTriangle;
}console.log(makeDiamond(5));
  




  
 