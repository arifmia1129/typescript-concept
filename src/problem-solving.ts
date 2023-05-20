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

interface IRepository<T, U, X, Y,Z> {
    getAll():T;
    getById():U;
    create():X;
    update():Y;
    delete():Z;
}


class RestApi implements IRepository<Array<object>, object, object, object, object> {
    getAll(){
        return [
            {name:"Arif"}
        ]
    };
    getById():object{
        return {
            success:true
        }
    };
    create():object{
        return {
            success:true
        }
    };
    update():object{
        return {
            success:true
        }
    };
    delete():object{
        return {
            success:true
        }
    };
}


