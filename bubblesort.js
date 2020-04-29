//bubble sort
//let tamp;
 function bubble_sort(Array){
    for (i=0;i<Array.length;i++){
        let tamp;
             if(Array[i] > Array[i+1])
             {
                 temp=Array[i];
                 console.log(Array[i])
                 Array[i+1]=Array[i];
                 Array[i]=temp;
                 console.log(Array);

             }
         }
         return Array;
     }
console.log(bubble_sort([15,10,56,90]));



 