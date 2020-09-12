let friends: any[] = ["Alex", 15, true];
let friends2: string[] = ["Alex", "Peter", "Bob"];
let friends3: (string | number | boolean)[] = ["Alex", 15, true];

//types for objects
let userData:{name:string; age:number; readyForCoding:boolean} = {
    name:"bob",
    age:12,
    readyForCoding:true
}

//customs type
type Identity =  {
    name: string;
    age:number;
    isMajeur:boolean;
    hobbies:string[];
};

const indentity: Identity = {
    name: "bob",
    age:15,
    isMajeur:false,
    hobbies:["footchball", "reading","gaming"],
}
const indentity2: Identity = {
    name: "richard",
    age:25,
    isMajeur:true,
    hobbies:["footchball", "reading","gaming"],
}