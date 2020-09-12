/*-------------------------------------------*/
/*---------------- Arrays -------------------*/
/*-------------------------------------------*/

interface IRepertory extends Array<number> {
    [index:number]: number; //[l'index des tableau est toujours un: number]: contien un nombre
}

const days: IRepertory = [1,2,3,4,5];
days.push(6);

console.log(days);


/*-------------------------------------------*/
/*------ Propriétés illimitées --------------*/
/*-------------------------------------------*/

//Permet de spécifié que l'objet à n propriétés 
//any permet de dire que ça peut être de n'importe quel type
//et la seule propriété obligatoire est sayHello

interface IObject {
    [index:string]: any; 
    sayHello: { (name:string): void }; //function
}

const myObject: IObject = {
    title:"Alexis",
    age:12,
    truc:"param",
    sayHello(name:string):void {
        console.log(`Bonjour a toi ${name}`);
    },
}