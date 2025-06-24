/**
 * You can assume that `n` is an integer.
 * @param {number} n
 * @returns {number} the sum of all integers from 1 to n, inclusive
 * @returns `0` if n is 0 or negative
 */
export function sumToN(n) {
  if (typeof n !== "number"){ 
    return NaN;
  }

  if (n <= 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * @param {number} n
 * @returns {number} the product of all integers from 1 to n, inclusive
 * @returns `NaN` if n is not a number
 * @returns `undefined` if n is negative
 * @returns `1` if n is 0
 */
export function factorial(n) {
  // TODO
  if (typeof n !== "number") {
    return NaN;
  }
  if (n < 0) {
    return undefined;
  }
  if (n === 0){
    return 1;
  }
  let product = 1;
  for (let i=1; i <= n; i++){
    product = product * i;
  }
  return product;
}

/**
 * @param {number} n
 * @returns {number[]} an array of integers from 1 to n, inclusive
 * @returns `null` if n is not a number
 * @returns `[]` if n is 0 or negative
 */
export function buildNArray(n) {
  // TODO
    if (typeof n !== "number"){
    return null;
  }

    if (n <= 0){
    return [];
  }

  let numbers = [];
  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }

  return numbers;  
}

/**
 * @param {string[]} strings
 * @returns {string} the longest string in `strings`
 */
export function getLongestString(strings) {
  // TODO
  const longestString = strings.reduce((longestSoFar, currentString) => {
    if (currentString.length > longestSoFar.length) {
      return currentString;
      } else {
        return longestSoFar;
      }
      }, "");
      return longestString;
}

/**
 * @param {boolean[]} attendance - `true` means a student is present, `false` means a student is absent
 * @returns {number} the number of students present
 */
export function countPresent(attendance) {
  // TODO
  let presentCount = 0;
  for (const isPresent of attendance) {
    if (isPresent === true) {
      presentCount++;
    }
  }
  return presentCount;
}

/**
 * In DNA strings, the symbols `A` and `T` are complements of each other,
 * and the symbols `C` and `G` are complements of each other.
 * A complementary strand is a string formed by the complement
 * of each nucleobase in the original string.
 *
 * @param {string} dna - a string of the symbols `A`, `T`, `C`, or `G`
 * @returns {string} the complementary DNA strand
 * @returns `null` if `dna` is not a string
 */
export function complementDNA(dna) {
  // TODO
  if (typeof dna !== 'string') {
    return null;
  }

  let complementaryStrand = '';

  for (const base of dna) {
    switch (base) {
      case 'A':
        complementaryStrand += 'T';
        break;
      case 'T':
        complementaryStrand += 'A';
        break;
      case 'C':
        complementaryStrand += 'G';
        break;
      case 'G':
        complementaryStrand += 'C';
        break;
    }
  }

  return complementaryStrand;
}
