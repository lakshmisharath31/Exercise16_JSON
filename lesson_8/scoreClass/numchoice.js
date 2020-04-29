function launchOutput(num){
    let output='';
    if(num % 2 === 0){
      if(num % 2 === 0 && num % 3 === 0){
        if(num % 2 == 0 && num % 3 == 0 && num % 5 ==0 ){
            output ='LaunchCode Rocks!';
            return output;
        }
        output = 'LaunchCode!';
        return output;
      }else if(num % 2 === 0 && num % 5 === 0){
        output = 'Launch Rocks!';
            return output;
      }   
      output = 'Launch';
      return output;
    }else if(num % 3 === 0){
        if(num % 3 === 0 && num % 5 === 0 ){
            output = 'Code Rock!';
            return output;
        }
      output = 'Code!';
      return output;
    }else if(num%5 === 0){
      output ='Rocks!'
      return output;
    
    
  }else if(num % 2 !== 0 && num % 3 !== 0 && num % 5 !==0 ){
  output+='Rutabagas! That doesnt work.';
  return output;
  }
  return output;
  }
  
  
  console.log(launchOutput(10))