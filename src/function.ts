// normal function

function addNumbers(num1:number, num2:number):void {
    const sum = num1 + num2;
    console.log(`The sum is: ${sum}`);
};

// addNumbers(2, 2);


// arrow function
const minusNumber = (num1:number, num2:number):number =>{
    return num1 - num2;
}

console.log(minusNumber(4, 2));