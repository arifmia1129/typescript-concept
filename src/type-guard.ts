// of guard
type DataType = number | string;

const checkDataType = (param:DataType):DataType=>{
    if(typeof param === "number"){
        return param;
    }
    return param;
}

// console.log(checkDataType(23));
// console.log(checkDataType("Hello World"));

type JobLess = {
    name:string;
    phone:string;
}

type JobHolder = {
    name:string;
    phone:string;
    salary:number
}

const checkInfo = (info:JobHolder | JobLess) => {
    if("phone" in info || "salary" in info) {
        console.log("This person is job holder");
        
    }else{
        console.log("This person is job less");
        
    }
}

const personInfo1:JobHolder = {
    name:"Arif", 
    phone:"01849676331",
    salary:10000
}

checkInfo(personInfo1);


class C1 {
    position:string;

    constructor(position:string){
        this.position = position;
    }

    showPosition() {
        console.log(`Position is: ${this.position}`);
        
    }
}

class C2 extends C1 {
    salary:number;

    constructor(position:string, salary:number) {
        super(position);
        this.salary = salary;
    }

    showPositionWithSalary() {
        console.log(`Position: ${this.position}, Salary: ${this.salary}`);
        
    }
}

const i1 = new C1("Developer");
const i2 = new C2("Developer", 1000000);


function checkInstance (param:any) {
    if(param instanceof C1){
        param.showPosition();
    } else if(param instanceof C2){
        param.showPositionWithSalary;
    }
}
