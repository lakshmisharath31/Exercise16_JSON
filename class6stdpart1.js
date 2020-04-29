let arr = [-2, 0, -10, -44, 5, 3, 0, 3];
function findMinValue(arr){
  let min= arr[0];
  for(i=1;i<arr.length;i++){
    if(arr[i]<min){
      min=arr[i];
    }
  }
  return min;
}
//console.log(findMinValue(arr));

// Code sortArray here:

function sortArray(array){
  let finalArray=[];
  for(i=0;i<array.length;i++){
finalArray.push(findMinValue(arr));
 // arr=arr.pop(findMinValue(arr));
  console.log(arr);
}return finalArray;
}
console.log(sortArray(arr));



//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];
