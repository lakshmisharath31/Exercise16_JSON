function randomFromArray(arr){
    let index=Math.floor(Math.random()*arr.length);
    return arr[index];
   }
   //console.log(randomFromArray(['Fox','Turtle','Cat','Hippo','Dog']));
   
   
   //TODO: Export the randomFromArray function.
   module.exports=randomFromArray;