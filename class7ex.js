let superChimpOne = {
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6,
    astronautID: 10,
    move: function(){
      return Math.ceil(Math.randam()*10);
    }
};
    
let salamander = {
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5,
    astronautID: 1,
    move: function(){
      return Math.ceil(Math.randam()*10);
    }
} ; 
 
let superChimpTwo = {
    name: "Brad",
    species: "Chimpanzee",
    mass: 11,
    age: 6,
    astronautID: 5,
    move: function(){
      return Math.ceil(Math.randam()*10);
    }
};  

let SuperBeagle = {
    name: "Leroy",
    species: "Beagle",
    mass: 14,
    age: 5,
    astronautID: 3,
    move: function(){
      return Math.ceil(Math.randam()*10);
    }
};
  
let superTar = {
    name: "Almina",
    species: "Tardigrade",
    mass: 0.0000000001,
    age: 1,
    astronautID: 6,
    move: function(){
      return Math.ceil(Math.randam()*10);
      
    }
};    
   //  let crew=[superChimpOne,salamander,superChimpTwo,SuperBeagle,superTar];
   
  // Code your crewReports function here:
let crew=[superChimpOne,salamander,superChimpTwo,SuperBeagle,superTar];
   
         function crewReports(object){
            // let index = Math.floor(Math.random()*crew.length);
                return `'${object[index].name} is a ${object[index].species}. They are ${object[index].age} years old and ${object[index].mass} kilograms. Their ID is ${object[index].astronautID}.'`;
                  }
                  //console.log(crewReports(crew));

 // Code your fitnessTest function here:
let arr=[superChimpOne,salamander,superChimpTwo,SuperBeagle,superTar];

          function fitnessTest(fitArray){
            let turn=0;
            let step;
            finalTurns=[];
                 for (let i = 0; i < fitArray.length ; i++){
                       while (step < 20){
                           step= fitArray[i].move ;        
                           turn =step+turn;
                        console.log(step);
                          console.log(turn);
                          //finalTurns.push(`'${fitArray.name} took ${turns} turns to take 20 steps.'`);
                       }
                    }return `'${fitArray.name} took ${turn} turns to take 20 steps.'`;
                }
                     console.log(fitnessTest(arr));
                
// Code your objects and crew array here:


  
  