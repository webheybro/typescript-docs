let value = 30;
if(typeof value === "number") console.log("Value est un nombre !");

function foo(x: string | number):boolean{
    if(typeof x === "string"){
        return true;
    }else if(typeof x === "number"){
        return false;
    }
    return fail("x n'est ni un string ni un number !");
} 

//function qui ne renvoi rien (sauf msg throw)
const fail = (message:string):never => { 
    throw new Error(message);
}

foo(15);