// 1. Convert the following JavaScript array into a TypeScript tuple
// const userInfo = [101, "Ema", "John", true,  , "2023"];

// Solution-1:
// const userInfo:[number, string, string, boolean, undefined, string] = [101, "Ema", "John", true,  , "2023"];


// 2. Write a TypeScript function that takes in two arrays of numbers as parameters. The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.

// solution-2

// const compareElements =<T> (param1:Array<T>, param2:Array<T>):T[]=> {
//     let newArr:T[] = [];
//     param1.forEach(el => {
//         if(param2.includes(el)){
//             newArr.push(el);
//         }
//     })
//     return newArr;
// }

// console.log(compareElements<number>([1, 2, 3], [1, 2]));
