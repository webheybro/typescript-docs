function logConstruct(constructorFunction: Function){
    console.log(constructorFunction);
}

@logConstruct
class Identity {
    constructor(){
        console.log("alex");
    }
}

new Identity();

function printProperty(properties:Function) {
    properties.prototype.print = function () {
        console.log(this);
    }
}

@printProperty
class Games {
    rts= "C&C";
    rpg= "WoW";
}

const game = new Games();
(<any>game).print();