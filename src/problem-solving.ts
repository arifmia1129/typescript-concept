// 1. Create a function that takes an array of numbers as input and returns the sum of all the numbers in the array. Make sure to define the types for the input parameter and return value.

// const sumOfArr = (arr:Array<number>):number => {
//   return arr.reduce((accumulator, current)=>{
//     return accumulator + current;
//   },0)
// }

// console.log(sumOfArr([1, 2, 3]));


// 2.Define an interface called Person that has the following properties: name (string), age (number), and email (string). Create an object based on this interface and print out its properties.

interface Person{
    name:string;
    age:number;
    email:string
}

const person = {
    name:"Arif",
    age:21,
    email:"arif.vtti@gmail.com"
}

console.log(person);

