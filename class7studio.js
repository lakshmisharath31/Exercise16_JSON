// Code your selectRandomEntry function here:

let idNumbers = [291, 414, 503, 599, 796, 890];

function selectRandomEntry(array){
  let index=Math.floor(Math.random()*array.length);
  return array[index];
}
//console.log(selectRandomEntry(idNumbers));

 

// Code your buildCrewArray function here:
let newCrew=[];
while (idNumbers.length > 3) {
  if (!(newCrew.includes(selectRandomEntry(idNumbers)))) {
    newCrew.push(Number(idNumbers.splice(idNumbers.indexOf(selectRandomEntry(idNumbers)), 1)));
  }
}
console.log(newCrew);

// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

function buildCrewArray(animals,newCrew){

let choosenAstroID=[];
for(let i=0;i<newCrew.length;i++){

    for(j=0;j<animals.length;j++){
    
        if(newCrew[i]== animals[j].astronautID){
            choosenAstroID.push(animals[j].name);
           
            }
          console.log(choosenAstroID) 

    }
    
    
  }

return `${choosenAstroID[0]},${choosenAstroID[1]},and ${choosenAstroID[2]} are going to space!`;
}


console.log(buildCrewArray(animals,newCrew))
//return `${choosenAstroID[0]},${choosenAstroID[1]},and ${choosenAstroID[2]} are going to space!`;


// Code your template literal and console.log statements:

//`${choosenAstroID[0]},${choosenAstroID[1]},and ${choosenAstroID[2]} are going to space!`;
