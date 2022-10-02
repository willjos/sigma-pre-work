function getArray() {
  const userInput = prompt(
    "Please enter a set of numbers separated by commas."
  ).split(",");
  const numberArray = userInput.map((element) => Number(element));
  return numberArray;
}

function maxMin() {
  const array = getArray();
  let maxValue;
  let minValue;
  if (array[0] >= array[1]) {
    maxValue = array[0];
    minValue = array[1];
  } else {
    maxValue = array[1];
    minValue = array[0];
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxValue) {
      maxValue = array[i];
    }
    if (array[i] < minValue) {
      minValue = array[i];
    }
  }
  const maxMinArray = [minValue, maxValue];
  return maxMinArray;
}
console.log(maxMin());
