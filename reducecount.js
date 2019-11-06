//Problem statement
//Given an Array of strings, use Array#reduce to create an object 
//that contains the number of times each string occured in the array.

var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

function countWords(arr) {
  return arr.reduce(function(countMap, word) {
    countMap[word] = (countMap[word] + 1 ) || 1;
    return countMap
  }, {}) 
}
console.log(countWords(inputWords))