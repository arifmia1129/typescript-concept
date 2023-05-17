const user:{
    readonly id:number;
    name:string;
    age:number;
    sex?:string
} ={
    id:123,
    name:"Arif",
    age:22,
    sex:"Male"
}

const {id, sex} = user;