
function checkFuel(level) {
    if (level > 100000){
      return 'green';
    } else if (level > 50000){
      return 'yellow';
    } else {
      return 'red';
    }
  }

  let fuelLevel = 200000;
  let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];



let parrotFood=function(fuel){
    let stolenFuel=0;
   if(checkFuel(fuel)==='green'){
     return stolenFuel=fuel-100001;
   }else  if(checkFuel(fuel)==='yellow'){
      return stolenFuel=fuel-50001;
   }else{
       return fuel;
   }
}
let stolenGoods=[];
let deckMops=function(arr){
newArray=['dilithium', 'gold', 'AE-35 unit', 'Legos', 'TI-89 calculator'];
for(i=0;i<arr.length;i++){
if(newArray.includes(arr[i])){
    stolenGoods.push(arr.splice(i,1,"thank you note",).toString());
    //console.log(stolenGoods);
}
}
return stolenGoods;
}
console.log(deckMops(cargoHold));
console.log(cargoHold);

function irs(fuelLevel,cargoHold){
    let arr=deckMops(cargoHold);
    return `Raided ${parrotFood(fuelLevel)} kg of fuel from the tanks, and stole ${arr[0]}and ${arr[1]} from the cargo hold."`;
  }