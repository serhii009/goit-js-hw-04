



function makeArray(firstArray, secondArray, maxLength) {
  let everyArray = [...firstArray, ...secondArray];

  if (everyArray.length > maxLength) {
    return everyArray.slice(0, maxLength);
  } else {
    return everyArray;
  }
}


// Перевірка
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); 
// ["Mango", "Poly", "Ajax"]

console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); 
// ["Mango", "Poly", "Houston", "Ajax"]

console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); 
// ["Mango", "Ajax", "Chelsea"]

console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); 
// ["Earth", "Jupiter"]

console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); 
// ["Earth", "Jupiter", "Neptune", "Uranus"]

console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); 
// []