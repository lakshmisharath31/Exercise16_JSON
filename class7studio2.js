
/*// Code your orbitCircumference function here:

function orbitCircumference(orbitRadius){
  let circumference= Math.round(2*Math.PI*orbitRadius);
  return circumference;
}
//console.log(orbitCircumference(2000))

// Code your missionDuration function here:
function missionDuration(orbit,orbitRadius=2000,orbitSpeed=28000){
   let time =Math.round(((3*orbitCircumference(orbitRadius))/orbitSpeed)*100)/100;
  return time;
}
//console.log(missionDuration(3,2000,28000))

`'The mission will travel ${orbitCircumference(2000)} km around the planet, and it will take ${missionDuration(3,2000,28000)} hours to complete.'`;


// Copy/paste your selectRandomEntry function here:
let crew = [candidateA,candidateC,candidateE];

function selectRandomEntry(arr){
  let astronautID= Math.floor(Math.random()*arr.length);
 console.log(astronautID);
  return astronautID;
  //console.log(astronautID);
}
console.log(selectRandomEntry(crew));
//`'The mission will travel ${orbitCircumference} km around the planet, and it will take ${missionDuration} hours to complete.'`;


// Code your oxygenExpended function here:
/*
function oxygenExpended(arr,orbitRadius,speed){
  let duration=missionDuration(3,orbitRadius,speed);
  let o2Used=Math.round(selectRandomEntry().o2Used(missionDuration)*10000)/10000;
  return `${austronaut.name} will perform the spacewalk,which will last ${duration} hours and require ${o2Used} kg of oxygen.`
}
*/
// Candidate data & crew array.
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

let crew = [candidateA,candidateC,candidateE];
// Code your orbitCircumference function here:

function orbitCircumference(orbitRadius){
  let circumference= Math.round(2*Math.PI*orbitRadius);
  //console.log(circumference);
  return circumference;
}
//console.log(orbitCircumference(2000))

// Code your missionDuration function here:

function missionDuration(orbit,orbitRadius=2000,orbitSpeed=28000){
   let time = Math.round(((orbit*orbitCircumference(orbitRadius))/orbitSpeed)*100)/100;
 // console.log(time);
  return time;
}
//console.log(missionDuration(3,2000,28000))

console.log(`'The mission will travel ${orbitCircumference(2000)} km around the planet, and it will take ${missionDuration(3,2000,28000)} hours to complete.'`);


// Copy/paste your selectRandomEntry function here:
//let crew = [candidateA,candidateC,candidateE];

function selectRandomEntry(arr){
  let index= Math.floor(Math.random()*arr.length);
 //console.log(astronautID);
  return arr[index];
}
console.log(selectRandomEntry(crew));

// Code your oxygenExpended function here:

function oxygenExpended(crew,orbitRadius,orbitSpeed){
 let austronaut = selectRandomEntry(crew);
  console.log(austronaut);
  let duration=missionDuration(3,orbitRadius,orbitSpeed);
  console.log(duration);
  let o2Used = Math.round(selectRandomEntry(crew).o2Used(duration)*1000)/1000;
  console.log(o2Used);
  return `${austronaut.name} will perform the spacewalk,which will last ${duration} hours and require ${o2Used} kg of oxygen.`;
}
console.log(oxygenExpended(crew,2000,28000));
