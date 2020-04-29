// Code parts 1 - 3 here:

class CrewCandidate{
    constructor(name,mass,scores,newscore){
      this.name=name;
      this.mass=mass;
      this.scores=scores;
    
      this.addScore=function(newscore){
        return scores.push(newscore);
      };
      
      this.average = function(){
        let sum=0;
        for (let i=0;i<scores.length;i++){
          
          let newsum = sum+scores[i];
          sum = newsum;
        }
           return Math.round(sum/scores.length*10)/10;
         
      };
      
      this.status=function(){    
        if(this.average() >= 90){
          return "Accepted";
        }
        if(this.average() >= 80 && this.average() <= 89 ){
          return "Reserved";
        }
        if(this.average() >= 70 && this.average()<= 79){
          return "Probationary";
        }
        if(this.average()<70){
          return "Rejected";
        }
      };
  
   
    }   
  }  
    
  
  
  let Bear=new CrewCandidate("Bubha",135,[88,85,90]);
  
  let Maltese=new CrewCandidate("Merry",1.5,[93,88,97]);
  let Gator=new CrewCandidate("Glad",225,[75,78,62]);
  
  //console.log(Bear);
  //console.log(Maltese);
  //console.log(Gator);
  console.log(Bear.addScore(83));
  console.log(Bear.scores);
  //console.log(Bear);
  console.log(Maltese.average());
  console.log(`'${Bear.name} earned an average test score of ${Bear.average()} % and has a status of ${Bear.status()}.'`);
  console.log(`'${Maltese.name} earned an average test score of ${Maltese.average()} % and has a status of ${Maltese.status()}.'`);
  console.log(`'${Gator.name} earned an average test score of ${Gator.average()} % and has a status of ${Gator.status()}.'`);
  
  
  
  // Code part 4 here:
  