// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

//Solution = ES5 arguments and for loop
function addAll(num) {
  /*   let args = Array.prototype.slice.call(arguments);
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total; */
  // Solution 2 = ES5 reduce
}

// Solution 2 = ES6 reduce/forEach and ...rest

function addAll(...num) {
  // Reduce
  //   return num.reduce((a, b) => a + b, 0);
  // foreEach
  /* 
  let total = 0;
  num.forEach((num) => (total += num));
  return total; */
}

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes(num) {
  let total = 0;

  function checkForPrime(i) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 2; i <= num; i++) {
    if (checkForPrime(i)) {
      total += i;
    }
  }
  return total;
}

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover value in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

// Solution 1: arguments, indexOf, filter
/* function seekAndDestroy(arr) {
  const args = Array.from(arguments);
  function filterArr(arr) {
    // Return true if Not in array
    return args.indexOf(arr) === -1;
  }
  return arr.filter(filterArr);
} */

// Solution 2: ...rest, filter & includes
function seekAndDestroy(arr, ...rest) {
  return arr.filter((val) => !rest.includes(val));
}

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(a) {
  /* const arr1 = [];
  const arr2 = [];

  a.forEach((val, i) => (val === -1 ? arr1.push(i) : arr2.push(val)));

  const sortArr = arr2.sort((a, b) => a - b);

  arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));

  return sortArr; */

  const sortedHeights = a.filter((val) => val !== -1).sort((a, b) => a - b);
  let sortedIndex = 0;
  return a.map((val) => (val === -1 ? val : sortedHeights[sortedIndex++]));
}

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(str) {
  let compare = str.charCodeAt(0);
  let missing;

  str.split('').map((_, i) => {
    if (str.charCodeAt(i) === compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });
  return missing;
}

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(arr) {
  /*  let evenSum = 0;
  let oddSum = 0;

  arr.forEach((num) => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));

    return [evenSum, oddSum]; */

  return arr.reduce(
    (acc, num) => {
      acc[num % 2 === 0 ? 0 : 1] += num;
      return acc;
    },
    [0, 0]
  );
}

const output = evenOddSums([50, 60, 60, 45, 71]);
console.log(output);
