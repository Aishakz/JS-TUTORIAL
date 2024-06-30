//Def
function sayMyName() {
    console.log("A");
    console.log("R");
    console.log("E");
    console.log("E");
    console.log("S");
    console.log("H");
    console.log("A");
}
// console.log(sayMyName())
// sayMyName()   //Basic execution

// function addTwoNumber(number1, number2){ // parameters
//     console.log(number1 + number2)
// }

// addTwoNumber(3 ,8) // arguments

function addTwoNumber(number1, number2){
    // let result = number1 + number2
    // return result
    return number1+ number2
}

const result = addTwoNumber(3 ,8) 
// console.log("Result: ", result);

function loginUserMessage(username = "esha"){
    // if(username === undefined){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("areesha"))