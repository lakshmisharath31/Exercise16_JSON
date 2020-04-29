let giraffe = {
  species: "Reticulated Giraffe",
  name: "Cynthia",
  weight: 1500,
  age: 15,
  diet: "leaves"
};

function birthday(animal) {
    animal.age = animal.age + 1;
    return animal;
}

console.log(giraffe.age);

birthday(giraffe);

console.log(giraffe.age);