// singleton
// koi bhi constructor jisse hum banaty hn tw ek singleton object banta hai
// jb bhi hum literals ke tarah declare krty hn tw singleton nh banta
// curly brases he object kehlaty hn
// objects m symbol dataType [square breses] m declare hoty hn 

// object.create
// object literals

const mySym = Symbol("key1")

const JSuser = {
    name: "Areesha",
    "fullNAme":"Areesha Khalid",
    [mySym] :"myKey1",
    age: "19",
    email: "areesha189@google.com",
    location :"Hyderabad",
    isLoggedIn: false,
    lastLoginDAys: ["Monday","Saturday"]
}

// console.log(JSuser.email)
// console.log(JSuser["email"])
// console.log(JSuser.fullNAme)
// console.log(JSuser["fullNAme"])
// console.log(JSuser[mySym])

JSuser.email = "areesha239@chatgpt.com" // change value
// Object.freeze(JSuser) //locked value
//chatgpt tk tw value print hui usk bad microsoft value is wja sa print nh hui k hum n usko uper he propagat kr diya yani freeze kr diya
JSuser.email = "areesha239@microsoft.com"
// console.log(JSuser);

JSuser.greeting  = function(){
    console.log("Hello JS user")
}
JSuser.greetingTwo  = function(){
    console.log(`Hello JS user,${this.name}`)
}

console.log(JSuser.greeting());
console.log(JSuser.greetingTwo());