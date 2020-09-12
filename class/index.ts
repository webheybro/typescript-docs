//Utiliser plutot une interface plutot qu'une classe
//voir fin du fichier
class UserProfile {
    name:string;
    age:number;
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
}
//Heritage
class AdvencedUserProfile extends UserProfile {
    hobbies:string[];
    color:string;
    constructor(name:string, age:number, hobbies:string[], color: string){
        super(name, age) //penser a mettre les paramêtres
        this.hobbies = hobbies;
        this.color = color;
    }
}

const userOne = new AdvencedUserProfile('mika', 12, ['poute', 'pouteu'], "red");



//VERSION PLUS COURTE
class UserProfileV2 {
    constructor(public name:string, public age:number){}
}
class AdvencedUserProfileV2 extends UserProfileV2 {
    constructor(name:string, age:number, public hobbies:string[], public color: string){
        super(name, age) //penser a mettre les paramêtres
    }
}
const userTwo = new AdvencedUserProfileV2('mika', 12, ['poute', 'pouteu'], "red");



/*-------------------------------------------*/
/*----VERSION PLUS COURTE WITH FUNCTIONS-----*/
/*-------------------------------------------*/
class UserProfileV3 {
    //Evidement les décalrations public sont accessible depuis l'extérieur de la classe
    //et évidement que les privates non
    //par contre il peut être récupérer via une fonction
    constructor(public name:string, public age:number, private _password:string="mon password", public newName:string){}
    //permet de récupérer les informations passées en paramètres.
    //pas super explicite mais 
    //let keys = Object.keys(this) -> ça correspond aux this techniquement déclarés pour name et age (this.name = name;) 
    //logiquement dans le constructeur sauf que la avec les "public" ils n'y sont pas clairement présents. Mais c'esst tout comme
    displayInfos(){
        let keys = Object.keys(this); 
        for(let value of keys) console.log(this[value]);
    }

    //GET ET SET OBLIGATOIRE POUR INTERRAGIR SUR UNE VARIABLE PRIVATE
    //avec le get pas besoin d'ajouter les parenthèses quand on l'appel     
    get password(): string{ 
        return this._password;
    }
    //avec set on comprend lors de la demande de modification qu'on fait appel à cette fonction
    set password(newPw: string){
        this._password = newPw;
    }

    static sayHello = () => console.log("Hello");
    sayWorld =() => console.log("WORLD")
}

const userTree = new UserProfileV3('Gérard', 22, "new pwd", "justinbridou");
const userFour = new UserProfileV3('Arnaud', 25, "new pwd", "miche");
userTree.displayInfos();

 //Attetion ici on modifie pas directement la variable
 //Mais on fait appel à la fonction set password
userTree.password = "kksdf1424sdf1";

console.log(userTree.password);
console.log("--------------");
userFour.displayInfos();

console.log("--------------");


UserProfileV3.sayHello();
userTree.sayWorld();

console.log("--------------");



/*-------------------------------------------*/
/*----------INFOS SUR LES CLASSES -----------*/
/*-------------------------------------------*/

//----> PRIVATE AND PROTECTED

//PRIVATE N'est pas accessible via get dans une classe extend
//Du coup on peut la changer en PROTECTED Pour que ça marche


//----> ABSTRACT

//si une classe est précédé par ABSTRACT alors celle ci ne pourra pas être appelée
//Il faudra forcément passée par une classe enfant extends


/*-------------------------------------------*/
/*----------CLASSES + INTERFACE -------------*/
/*-------------------------------------------*/
//23

interface IUser {
    name: string;
    age:number;
}

class myProfil implements IUser {
    constructor(public name:string, public age:number, public color:string){}
}

const user1 = new myProfil("mimi",19,"rouge");

console.log(user1.color)