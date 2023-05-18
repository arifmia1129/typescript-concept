type GenericArray<T> = Array<T>;

const myStringArr:GenericArray<string> = ["Arif", "Binu"];
const myNumberArr:GenericArray<number> = [1, 2, 3];

type Info = {
    name:string;
    age:number;
};

const ourInfo:GenericArray<Info> = [
    {name:"Arif", age:22},
    {name:"Binu", age:21}
]

// generic in tuple
type TupleGen<x,Y> = [x, Y];

const tupleArr1:TupleGen<string, number> = ["Arif", 123];
const tupleArr2:TupleGen<number, boolean> = [123, true];

// generic in function
const printInfo = <T, Q> (param1:T, param2:Q):void => {
    console.log(`Param-1: ${param1}, Param-2: ${param2}`);
}

printInfo<string, number>("Arif", 112864);
printInfo<string, boolean>("Diploam In Computer Engineering", true);

// generic in interface
interface IMe<T> {
    name:string;
    age:T,
    isMarried:boolean
};

const me:IMe<number> = {
    name:"Arif",
    age:22,
    isMarried:true
}

const wife:IMe<string> ={
    name:"Binu",
    age:"22y",
    isMarried:true
}