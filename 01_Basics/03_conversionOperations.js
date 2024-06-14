let score = true

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)

// console.log(typeof valueInNumber);
// console.log(valueInNumber);

//Notes
// "33"=> 33
// "33abc"=> NAN (Not of numbers)
// true => 1; false=>0;

let isLoggedIn = "Areesha"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)

//Notes
// 1 => true; 0=>False
//""=>False
//"areesha"=>true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(typeof stringNumber)
// console.log(stringNumber)

// ***********Operations************
let value = 3
let negValue = -value
// console.log(negValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2%2);
// console.log(2/2);

//** Basic Conversion **//

let str1 = "hello"
let str2 = " Areesha"

let str3 = str1+ str2
// console.log(str3)

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log((3 +4) * 5 % 3)

//Readability is tooo Important 

//**Tricky Conversion *//

// console.log(+true);
// console.log(+"")

//****______ ****//

let num1, num2, num3 

num1 = num2 =num3 = 2+2

let gameCounter = 100 
gameCounter++;
// console.log(gameCounter)

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

//Link to study
//https://en.wikipedia.org/wiki/Type_conversion#:~:text=In%20computer%20science%2C%20type%20conversion,a%20string%2C%20and%20vice%20versa.