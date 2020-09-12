

const myFunction = ():void => {
    console.log("Ne retourne rien");
}

const boolboool = ():boolean => {
    return true;
}

const addition = (nombre1:number, nombre2:number):number => {
    const result = nombre1 + nombre2;
    console.log(result);
    return result;
}


console.log(addition(2,5)); //return 7 et console.log 7