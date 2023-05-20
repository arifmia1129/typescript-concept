// create class

class Person{
    name:string;
    age:number;
    gender:string;

    constructor(name:string, age:number, gender:string){
        this.name = name;
        this.age=age;
        this.gender= gender;
    }

}


// inheritance
class Employee extends Person{
    designation:string;
    salary:number;

    constructor(name:string, age:number, gender:string,designation:string, salary:number) {
        super(name, age, gender);
        this.designation = designation;
        this.salary = salary;
    }
}



const person1 = new Person("Arif", 22, "male");
const person2 = new Employee("Arif", 22, "male", "Developer", 2000000);
