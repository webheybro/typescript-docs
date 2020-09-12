function generics(data:any){
    return data;
}
console.log(generics("Alex"));
console.log(generics(15));
console.log(generics(true));


//Le type est defini après
function iddentity<T>(data:T){
    return data;
}

console.log(iddentity<string>("Alex"));
console.log(iddentity<number>(12));
console.log(iddentity<boolean>(true));

const myArray: Array<number> = [1,2,3];
myArray.push(6);

/*--------------------------------------------*/
/*--------------- CLASSES GENERICS -----------*/
/*--------------------------------------------*/
class MathFunction<T>{
    add: (x:T, y:T) => T;
    sub: (x:T, y:T) => T;
}

let myTotal = new MathFunction<number>();

myTotal.add = (x,y) => x+y;
myTotal.sub = (x,y) => x-y;
