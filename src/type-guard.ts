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
