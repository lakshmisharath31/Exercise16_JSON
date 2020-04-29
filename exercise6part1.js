// Code your anonymous function here` :

/*let practice = function(str){
    //et str=[];
    //sush(str.split()tr1.p);
    for(let i=0;i<=str.length-1;i++){
      //console.log(str.length)
      //console.log(typeof str[i]);
    
    if(typeof str[i] =="string"){
      return "ARRR!";
      
    }else if((typeof str[i]) === "number"){
      
        return  str[i]*str[i]*str[i];
        
      }else{
        return str[i];
      }
  }
  };
  //console.log(practice(4));
  */
  // Complete the map method here:
  
       let array=['Elocution',21,'clean teeth',100,'',true];
       //console.log(typeof array[1])
       let practice = function(arr){
        for(let i = 0;i<=arr.length-1;i++){
            
            if(typeof arr[i] == "number"){
                console.log(arr[i]*arr[i]*arr[i]);
            }
            else if(typeof arr[i] == "string"){
                console.log("ARRR!")
            } else {
                console.log(arr[i])
            }
            
            
            //console.log(typeof arr[i])
        }

        //console.log(typeof arr[4])

       };

       //console.log(test(array));

       let newarray=array.map(practice);
       console.log(array);
       console.log(newarray);
       