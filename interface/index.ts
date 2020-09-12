/*-------------------------------------------*/
/*---------------- Interface ----------------*/
/*-------------------------------------------*/

interface IPersonId { //I pour interface
    //readonly name:string; //impossible à modifier
    name:string; //impossible à modifier
    color?:string; //optionnel
    age:number; 
}

let user1 : IPersonId = {
    name:"bob",
    color:"red",
    age:18
}

function hello(person:IPersonId) {
    console.log(`Bonjour ${person.name} color : ${person.color}`)
}

user1.color = "green";
hello(user1)


/*-------------------------------------------*/
/*---------------- Héritages ----------------*/
/*-------------------------------------------*/




//Héritage with Extends
interface IPersonWithPower extends IPersonId {
    power:string,
    level:number
}

let userWithPower: IPersonWithPower = {
    name:"bob",
    color:"red",
    age:18,
    power:"Fire Weather",
    level:2560
}

//permet de définir le format de user3
const user3 = <IPersonWithPower>{};






/*----------------------------------------------*/
/*--------Functions - Interface ----------------*/
/*----------------------------------------------*/

//function interface
interface IHello {
    (name: string, age?:number):void;
}

const sayHello:IHello = (name, age = 20) => {
    console.log (`Bonjour ${name} age : ${age}`)
}

const bestFriend: IHello = name => name;

sayHello("Alexis");
console.log(`L'ami d'alexis s'appelle ${bestFriend("Justine")}.`)