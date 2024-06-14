// Primitive 

// 7 types : string, Number, Boolean, null, undefined, symbol, bigint 

const score =100
const scoreValue =100.3

const isLoggedIn = false 
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')



// console.log(id === anotherId);

// const bigNumber =392473484973n

//Reference (Non primitive)

//Array, Object, Functions

const heros = ["bilal", "wahaj", "muneeb"] // Array

//Object
let myObj = {
    name:"Areesha",
    age:22,
}

// Function
const myFunction = function(){
    console.log("Hello World")
}
// console.log(typeof heros)


//**************Memory***************////
// 2 types of Memory
// Stack memory
// Heap memory

// Primitive DataTypes using Stack Memory
// Non Primitive DataTypes using Heap Memory

let myYoutubename = "Areeshadotcom"

let anotherName = myYoutubename
anotherName = "Chai or Code"

console.log(anotherName)
console.log(myYoutubename)

let userOne= {
    email : "user@google.com",
    upi : "user@ybl"
}

let usertwo = userOne

usertwo.email = "areesha@google.com"

console.log(userOne.email);
console.log(usertwo.email);