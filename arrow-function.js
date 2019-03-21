import { DH_CHECK_P_NOT_SAFE_PRIME } from "constants";

var user = {
    name: 'Shad',
    sayHi: () => {
        console.log(arguments); //return global window
        console.log(`Hi I'm ${this.name}`); //name undefined, arrow function doesn't bind this 
    },
    sayHiAlt() {
        console.log(arguments); //list all the arguments passed, it's a ES5 normal function
        console.log(`Hi I'm ${name}`); // normal function binds to this keyword
    }
};

user.sayHiAlt(1, 2, 3);