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

const person1 = new Person("Arif", 22, "male");
