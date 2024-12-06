/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a < b) {
    if (b < c) {
      return c;
    }
    return b;
  }
  if (a < c) {
    return c;
  }
  return a;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a && (a === b || a === c || b === c);
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const tens = Math.floor(num / 10);
  let result = '';
  for (let i = 0; i < tens; i += 1) {
    result += 'X';
  }
  let ones = num % 10;
  if (ones === 9) {
    result += 'IX';
    ones -= 9;
  } else if (ones >= 5) {
    result += 'V';
    ones -= 5;
  } else if (ones === 4) {
    result += 'IV';
    ones = 0;
  }
  for (let i = 0; i < ones; i += 1) {
    result += 'I';
  }
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    if (result.length > 0) {
      result = `${result} `;
    }
    switch (numberStr[i]) {
      case '0':
        result += 'zero';
        break;
      case '1':
        result += 'one';
        break;
      case '2':
        result += 'two';
        break;
      case '3':
        result += 'three';
        break;
      case '4':
        result += 'four';
        break;
      case '5':
        result += 'five';
        break;
      case '6':
        result += 'six';
        break;
      case '7':
        result += 'seven';
        break;
      case '8':
        result += 'eight';
        break;
      case '9':
        result += 'nine';
        break;
      case '-':
        result += 'minus';
        break;
      default:
        result += 'point';
    }
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let result = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      result = i;
      break;
    }
  }
  return result;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let numb = num;
  while (numb > 9) {
    if (numb % 10 === digit) {
      return true;
    }
    numb = Math.round(numb / 10);
  }
  return numb === digit;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (arr.length === 0) return -1;
  for (let i = 1; i < arr.length - 1; i += 1) {
    let sumStart = 0;
    let sumEnd = 0;
    for (let j = 0; j < arr.length; j += 1) {
      if (j < i) {
        sumStart += arr[j];
      } else if (j > i) {
        sumEnd += arr[j];
      } else {
        sumStart += arr[j];
        sumEnd += arr[j];
      }
    }
    if (sumStart === sumEnd) {
      return i;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  let direction = 'right';
  let row = 0;
  let column = 0;
  const result = new Array(size);
  for (let i = 0; i < size; i += 1) {
    result[i] = new Array(size);
  }
  for (let i = 1; i < size ** 2 + 1; i += 1) {
    result[row][column] = i;
    switch (direction) {
      case 'right':
        if (column === size - 1 || result[row][column + 1] !== undefined) {
          direction = 'bottom';
          row += 1;
        } else {
          column += 1;
        }
        break;
      case 'bottom':
        if (row === size - 1 || result[row + 1][column] !== undefined) {
          direction = 'left';
          column -= 1;
        } else {
          row += 1;
        }
        break;
      case 'left':
        if (column === 0 || result[row][column - 1] !== undefined) {
          direction = 'top';
          row -= 1;
        } else {
          column -= 1;
        }
        break;
      case 'top':
        if (row === 0 || result[row - 1][column] !== undefined) {
          direction = 'right';
          column += 1;
        } else {
          row -= 1;
        }
        break;
      default:
        break;
    }
  }
  return result;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const result = new Array(matrix[0].length);
  for (let i = 0; i < result.length; i += 1) {
    result[i] = new Array(matrix.length);
  }
  let column = result.length - 1;
  for (let i = 0; i < result.length; i += 1) {
    for (let j = 0; j < matrix[0].length; j += 1) {
      result[j][column] = matrix[i][j];
    }
    column -= 1;
  }
  const matr = matrix;
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[0].length; j += 1) {
      matr[i][j] = result[i][j];
    }
  }
  return matr;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const middleIndex = Math.floor((arr.length - 1) / 2);
  let leftArr = new Array(middleIndex);
  let rightArr = new Array(arr.length - middleIndex - 1);
  let indexRight = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (i <= middleIndex) {
      leftArr[i] = arr[i];
    } else {
      rightArr[indexRight] = arr[i];
      indexRight += 1;
    }
  }
  if (leftArr.length > 1) {
    leftArr = sortByAsc(leftArr);
    rightArr = sortByAsc(rightArr);
  }
  const mergeArr = new Array(arr.length);
  let indexLeft = 0;
  indexRight = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (
      leftArr[indexLeft] < rightArr[indexRight] ||
      indexRight === rightArr.length
    ) {
      mergeArr[i] = leftArr[indexLeft];
      indexLeft += 1;
    } else {
      mergeArr[i] = rightArr[indexRight];
      indexRight += 1;
    }
  }
  const arrChanged = arr;
  for (let i = 0; i < arr.length; i += 1) {
    arrChanged[i] = mergeArr[i];
  }
  return arrChanged;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let result = [str];
  for (let ind = 0; ind < iterations; ind += 1) {
    let odds = '';
    let evens = '';
    const strLast = result[result.length - 1];
    for (let i = 0; i < str.length; i += 2) {
      evens += strLast[i];
      odds += !strLast[i + 1] ? '' : strLast[i + 1];
    }
    if (evens + odds === str) break;
    result = [...result, evens + odds];
  }
  return result[iterations % result.length];
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const arr = [];
  let numb = number;
  while (numb > 9) {
    arr.push(numb % 10);
    numb = Math.floor(numb / 10);
  }
  arr.push(numb);
  arr.reverse();
  let index = arr.length - 1;
  let isSwapped = false;
  while (!isSwapped && index > 0) {
    index -= 1;
    for (let i = arr.length - 1; i > index; i -= 1) {
      if (arr[i] > arr[index]) {
        [arr[index], arr[i]] = [arr[i], arr[index]];
        isSwapped = true;
        break;
      }
    }
  }
  const startArr = [];
  for (let i = 0; i < index + 1; i += 1) {
    startArr.push(arr[i]);
  }
  const endArr = [];
  for (let i = index + 1; i < arr.length; i += 1) {
    endArr.push(arr[i]);
  }
  return isSwapped
    ? +[...startArr, ...sortByAsc(endArr)].map((el) => `${el}`).join('')
    : number;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
