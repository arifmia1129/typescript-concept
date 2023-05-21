// 1. Create a function that takes an array of numbers as input and returns the sum of all the numbers in the array. Make sure to define the types for the input parameter and return value.

// const sumOfArr = (arr:Array<number>):number => {
//   return arr.reduce((accumulator, current)=>{
//     return accumulator + current;
//   },0)
// }

// console.log(sumOfArr([1, 2, 3]));


// 2.Define an interface called Person that has the following properties: name (string), age (number), and email (string). Create an object based on this interface and print out its properties.

// interface IPerson{
//     name:string;
//     age:number;
//     email:string
// }

// const person:IPerson = {
//     name:"Arif",
//     age:21,
//     email:"arif.vtti@gmail.com"
// }

// console.log(person);


// 3. Write a function called calculateArea that takes the length and width of a rectangle as parameters and returns its area. Define the types for the input parameters and return value.

// function calculateArea (length:number, width:number):number{
//     return length * width;
// }

// console.log(calculateArea(2, 3));


// 4. Implement a generic function called reverseArray that takes an array of any type and returns the reversed version of the array. Test it with different types of arrays (e.g., numbers, strings) to ensure it works correctly.

// const reverseArr =<T> (arr:T[]):T[] => {
//     let newArr = [];
//     for(let i = arr.length-1; i >= 0; i--){
//         newArr.push(arr[i]);
//     }
//     return newArr;
// } 


// console.log(reverseArr(["arif", "binu"]));


// 5. Create a generic interface called Repository that represents a generic data repository. It should have methods like getAll, getById, create, update, and delete. Define the types for the methods and create a class that implements this interface.

// interface IRepository<T, U, X, Y,Z> {
//     getAll():T;
//     getById():U;
//     create():X;
//     update():Y;
//     delete():Z;
// }


// class RestApi implements IRepository<Array<object>, object, object, object, object> {
//     getAll(){
//         return [
//             {name:"Arif"}
//         ]
//     };
//     getById():object{
//         return {
//             success:true
//         }
//     };
//     create():object{
//         return {
//             success:true
//         }
//     };
//     update():object{
//         return {
//             success:true
//         }
//     };
//     delete():object{
//         return {
//             success:true
//         }
//     };
// }



//6. Define a type alias called Coordinates that represents the latitude and longitude of a location. It should be an object with latitude and longitude properties, both of which are numbers. Create a variable of type Coordinates and assign some sample values to it.

// type Coordinates = {
//     latitude:number;
//     longitude:number;
// }

// const location1:Coordinates = {
//     latitude:12233.99,
//     longitude:2293933.33
// }


// 7.Define an enum called Color with values representing different colors (e.g., Red, Green, Blue). Create a function that takes a Color value as input and prints out a corresponding message (e.g., "You selected Red").

// type Color = "Red" | "Green" | "Blue";

// function checkColor(color:Color) {
//     console.log(`Your selected color is: ${color}`);
// }

// checkColor("Red");

// 8. Create a base class called Shape with a method calculateArea that returns the area of the shape. Extend this class to create subclasses for specific shapes like Rectangle and Circle. Implement the calculateArea method in each subclass and test it with different dimensions.

// class Shape {
//     calculateArea(height:number, width:number):number{
//         return height * width;
//     }
// }

// class SquareAre extends Shape {
//     calculateArea(a:number): number {
//         return a * a;
//     }
// }

// 9. Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes objects of type Car and Driver and returns an object with the combined properties of both types.

// interface Car{
//     make:string;
//     model:string;
//     year:number;
// }

// interface Driver{
//     name:string;
//     licenseNumber:string;
// }

// const combineInfo = (carInfo:object, driverInfo:object):object => {
//     return {...carInfo, ...driverInfo};
// }

// const carInfo:Car = {
//     make:"Toyoto",
//     model:"2015-n",
//     year:2016
// };

// const driverInfo:Driver = {
//     name:"Arif",
//     licenseNumber:"arif-123"
// }

// console.log(combineInfo(carInfo, driverInfo));


