// of guard
type DataType = number | string;

const checkDataType = (param:DataType):DataType=>{
    if(typeof param === "number"){
        return param;
    }
    return param;
}

console.log(checkDataType(23));
console.log(checkDataType("Hello World"));
