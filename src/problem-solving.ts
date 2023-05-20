// 1. Create a function that takes an array of numbers as input and returns the sum of all the numbers in the array. Make sure to define the types for the input parameter and return value.

const sumOfArr = (arr:Array<number>):number => {
  return arr.reduce((accumulator, current)=>{
    return accumulator + current;
  },0)
}

console.log(sumOfArr([1, 2, 3]));
