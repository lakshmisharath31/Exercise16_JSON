function makeLine(size){
  let arr=[];
  for(var i=0;i<size;i++){
  arr.push("#");
  }
  return arr.join('');
   }
  console.log(makeLine(5));

// Write your makeSquare function here:

function makeSquare(size){
  let arr1=[];
  for(var i=0;i<size;i++){
  arr1.push(makeLine(size));
  }
  return arr1.join('\n');
}
console.log(makeSquare(4));
// Write your makeRectangle function here:

function makeRectangle(width,height){
  arr2=[];
  for(var i=0;i<height;i++){
    
      arr2.push(makeLine(width));
    }return arr2.join('\n');
}
console.log(makeRectangle(5,3));