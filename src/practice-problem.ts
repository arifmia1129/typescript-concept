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


// 3.You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.

// Write a TypeScript generic function that takes this array, a criterion , and returns a new array containing only the products that match the given criterion and value. Use a generic type parameter in the function signature to ensure type safety.

// interface Product {
//     id:number;
//     name:string;
//     price:number;
//     category:string
// };

// const products: Product[] = [
//     { id: 1, name: "Product 1", price: 10, category: "Category A" },
//     { id: 2, name: "Product 2", price: 20, category: "Category B" },
//     { id: 3, name: "Product 3", price: 30, category: "Category A" },
//     { id: 4, name: "Product 4", price: 40, category: "Category C" }
//   ];

// function filterArray<T, K extends keyof T> (products:T[], criterion:K, value:T[K]):T[] {
//     return products.filter(product => product[criterion] === value);
// } 

// console.log(filterArray(products, "category", "Category A"));

// 4. Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.


// type Products = [string, number, number][];

// const products:Products = [
//     ["alu", 100, 12],
//     ["begun", 200, 12],
//     ["kola", 300, 12],
//     ["lau", 400, 12],
// ]

// const totalCost =  (products:Products):number => {
//     let totalCost:number = 0;
//     for(const [name, price, quantity] of products) {
//         totalCost = totalCost + (price *  quantity);
//     }
//     return totalCost;
// }

// console.log(totalCost(products));


// 5. Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the even numbers in the array. How would you approach this problem and write code to solve it?

// const sumOfArr = (arr:number[]):number => {
//     let sum = 0;
//     for(const el of arr) {
//         if(el % 2 === 0) {
//             sum = sum + el;
//         }
//     }
//     return sum;
// }

// const arrNumber:number[] = [1, 2, 3, 4];

// console.log(sumOfArr(arrNumber));


// 6.Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.

// interface Person {
//     name:string;
//     age:number;
//     email:string;
// }

// const personArr:Person[] = [
//     {name:"Binu", age:21, email:"binu@gmail.com"},
//     {name:"Arif", age:22, email:"arif@gmail.com"},
//     {name:"Shahin", age:22, email:"shahin@gmail.com"}
// ]

// function findPerson(persons:Person[], email:string):Person | null {
//     const person = persons.find(person => person.email === email);

//     if(person) {
//         return person;
//     }else{
//         return null;
//     }
// }

// console.log(findPerson(personArr, "arif@gmail.com"));


// 7. Create a TypeScript program that declares an array of numbers. Use the spread  operator to pass the elements of the array as arguments to a function that finds the minimum and maximum values of the array. Use destructuring to assign the minimum and maximum values to separate variables, and log them to the console.

// const findMinMax = (...arr:number[]):number[]=>{
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);
//     return [min, max];
// }

// const arrNumber = [1, 2, 3, 4, 5,6];


// const [minNum, maxNum] = findMinMax(...arrNumber);


// console.log(`Minimum number is: ${minNum}\nMaximum number is:${maxNum}`);


// 8.Create a TypeScript program that declares a function that takes a string parameter with a literal type of "red", "green", or "blue", and an optional boolean parameter. If the boolean parameter is true, log the string parameter in uppercase. If the boolean parameter is false or not provided, log the string parameter in lowercase.

// type colors = "red" | "green" | "blue";

// const caseChange = (color:colors, isTrue:boolean):string =>{
//     if(isTrue) {
//         return color.toUpperCase();
//     }else{
//         return color.toLowerCase()
//     }
// }

// console.log(caseChange("red", false));



