// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a, b) {
  if (a > b)
    return a;
  else return b;
}
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words) {
  let w = 0, pos;
  if (words.length == 0)
    return null;
  else if (words.length == 1)
    return words[0];

  else {
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > w && words[i].includes(" ")) {
        w = words[i].length;
        pos = i;
      }
    }
    return words[i];
  }
}
// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++)
    sum += numbers[i];
  return sum;
}


function add(arr) {
  if (arr.length == 0)
    return 0;
  let isZero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      isZero = 1;
      break;
    }
  }
  if (isZero == 0)
    return 0;
  if (typeof (arr) == "object")
    console.error("error");
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof (arr[i]) == "number")
      sum += arr[i];
    else if (typeof (arr[i]) == "string")
      sum += arr[i].length;
    else if (typeof (arr[i]) == "boolean") {
      if (arr[i] == true)
        sum += 1;
    }
  }

  return sum;

}
// Progression #4: Calculate the average

// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(arr) {
  if (arr.length == 0)
    return null;
  else {
    let sum = add(arr);
    return (sum / arr.length);
  }
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(arr) {
  if (arr.length == 0)
    return null;
  let sum = add(arr);
  return (sum / arr.length);
}

//bonus
function avg(arr) {
  if (arr.length == 0)
    return null;
  let sum = add(arr);
  let aveg = (sum / arr.length);
  return aveg;

}
// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
function uniqueArray(arr) {
  if (arr.length == 0)
    return null;
  let uarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (uarr.indexOf(arr[i]) == -1)
      uarr.push(arr[i]);
  }
  return uarr;
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function searchElement(arr, word) {
  if (arr.length == 0)
    return null;
  for (let i = 0; i < arr.length; i++)
    if (arr[i] == word)
      return true;
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];

function howManyTimesElementRepeated(arr, word) {
  if (arr.length == 0)
    return 0;
  let wc = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == word)
      wc++;
  }
  if (wc == 1)
    return 1;
  else if (wc == 0)
    return 0;
  else
    return wc;
}
//bonus

function maximumProduct(matrix) {
  let max = 1;
  let r = matrix.length;
  let c = matrix[0].length;
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (!((j + 1 >= c) || (j + 2 >= c) || (j + 3 >= c))) {
        let temp = matrix[i][j] + matrix[i][j + 1] + matrix[i][j + 2] + matrix[i][j + 3];
        if (temp > max)
          max = temp;
      }
    }
  }

  for (let j = 0; j < c; j++) {
    for (let i = 0; i < r; i++) {
      if (!((i + 1 >= r) || (i + 2 >= r) || (i + 3 >= r))) {
        let temp = matrix[i][j] + matrix[i][j + 1] + matrix[i][j + 2] + matrix[i][j + 3];
        if (temp > max)
          max = temp;
      }
    }
  }
  return max;
}