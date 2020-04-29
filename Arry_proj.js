function myMove(){
    return Math.ceil(Math.random()*10);
}

let superChimpOne = {
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6,
    astronautID: 10,
    move: myMove()
    
};
    
let salamander = {
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5,
    astronautID: 1,
    move: myMove()
    
}; 
 
let superChimpTwo = {
    name: "Brad",
    species: "Chimpanzee",
    mass: 11,
    age: 6,
    astronautID: 5,
    move: myMove()
    
};  

let SuperBeagle = {
    name: "Leroy",
    species: "Beagle",
    mass: 14,
    age: 5,
    astronautID: 3,
    move: myMove()
    
};
  
let superTar = {
    name: "Almina",
    species: "Tardigrade",
    mass: 0.0000000001,
    age: 1,
    astronautID: 6,
    move: myMove()
};    
   //  let crew=[superChimpOne,salamander,superChimpTwo,SuperBeagle,superTar];
   
  // Code your crewReports function here:
let crew=[superChimpOne,salamander,superChimpTwo,SuperBeagle,superTar];
   
         function crewReports(crew){
             let index = Math.floor(Math.random()*crew.length);
                return `'${crew[index].name} is a ${crew[index].species}. They are ${crew[index].age} years old and ${crew[index].mass} kilograms. Their ID is ${crew[index].astronautID}.'`;
                  }
                  console.log(crewReports(crew));

 // Code your fitnessTest function here:
let arr=[superChimpOne,salamander,superChimpTwo,SuperBeagle,superTar];

          function fitnessTest(fitArray){
            
            let farray=[];
                 for (let i = 0; i < fitArray.length ; i++){
                    let step=0;
                    let count=0;
                         move=fitArray[i].move
                       while (step <=20){
                            count = count+1;
                            step = step + move;         
                            move = myMove();
                       }
                       farray.push(`'${fitArray[i].name} took ${count} turns to take 20 steps.'`);               
                 }
                 return farray;
                }
                     console.log(fitnessTest(arr));
                
// Code your objects and crew array here:


  
  