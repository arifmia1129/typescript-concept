type PersonType = {
    name:string;
    age:number;
    gender:'male'|'female'|'other';
    isMarried:boolean
}

type PersonKeyofType = keyof PersonType;

const personInfo:PersonType = {
    name:"Arif",
    age:22,
    gender:"male",
    isMarried:true
}

const personKey:PersonKeyofType = "name";

console.log(personInfo[personKey]);
