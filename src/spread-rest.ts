// spread operator
const names1:string[] = ["Arif", "Binu"];
const names2:string[] = ["Nazrul", "Nurani"];

const [name1, name2] = names1;

console.log(name1, name2);

names1.push(...names2);

console.log(names1);

// rest parameter
const collectScore =(...score:number[])=>{
    let sum = 0;
    score.forEach(s => {
        sum = sum + s;
    })

    return sum;
}

console.log(collectScore(1, 2,3,4,5));
