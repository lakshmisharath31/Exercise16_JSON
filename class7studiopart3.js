// Code your crewMass function here:

/*function crewMass(){
let crewmass= Math.round(candidateB.mass+candidateD.mass+candidateF.mass)*10/10;
console.log(crewmass);
return crewmass;
}
*/
// Code your fuelRequired function here:


// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
    'name':'Gordon Shumway',
    'species':'alf',
    'mass':90,
    'o2Used':function(hrs){return 0.035*hrs},
    'astronautID':414
  };
  let candidateB = {
    'name':'Lassie',
    'species':'dog',
    'mass':19.1,
    'o2Used':function(hrs){return 0.030*hrs},
    'astronautID':503
  };
  let candidateC = {
    'name':'Jonsey',
    'species':'cat',
    'mass':3.6,
    'o2Used':function(hrs){return 0.022*hrs},
    'astronautID':796
  };
  let candidateD = {
    'name':'Paddington',
    'species':'bear',
    'mass':31.8,
    'o2Used':function(hrs){return 0.047*hrs},
    'astronautID':291
  };
  let candidateE = {
    'name':'Pete',
    'species':'tortoise',
    'mass':417,
    'o2Used':function(hrs){return 0.010*hrs},
    'astronautID':599
  };
  let candidateF = {
    'name':'Hugs',
    'species':'ball python',
    'mass':2.3,
    'o2Used':function(hrs){return 0.018*hrs},
    'astronautID':890
  };
  
  let crew = [candidateA,candidateB,candidateD,candidateF];
       
  function selectCrewMember(crew){
    let selectedCrew=Math.floor(Math.random()*crew.length);
    //console.log(selectedCrew);
    return selectedCrew;
  }
  console.log(selectCrewMember(crew));
  
  function crewMass(crew){
    let crewmass=0;
    for(let i=0;i<crew.length;i++){
       crewmass =crewmass+crew[i].mass;
    }
    
  return Math.round(crewmass*10)/10;
  }
  console.log("total Crew Mass "+ crewMass(crew));
  
  function fuelRequired(){
    let uncrewdRkt = 75000;
    let ExtraFuel = 200;
    let NormlFuel = 100;
    
    //let totalMass=crewMass(crew)+uncrewdRkt;
    let Fuel = ((crewMass(crew)+uncrewdRkt)*9.5);
    //console.log(Fuel);
    for(let i=0;i<crew.length;i++){
    if(crew[i].species == 'dog'||crew[i].species=='cat'){
      
        Fuel = Fuel+ExtraFuel;

    }else{
        Fuel = Fuel+NormlFuel;
    }
    
      //console.log(Fuel)
    
  }
  //totalMass=totalMass+100;
  
  return Math.ceil(Fuel);
  }
  console.log(fuelRequired());
  
  console.log(`The mission has a launch mass of ${crewMass(crew)} kg and requires ${fuelRequired()} kg of fuel.`);
  
  
  