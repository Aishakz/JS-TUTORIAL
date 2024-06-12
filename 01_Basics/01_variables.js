const accountId = 14333489
let accountEmail = "areeshakz@google.com"
var accountPassword = "12455"
accountCity = "Hyderabad"
let accountState;
// accountId = 2 // not allowed

accountEmail = "hchc@hx.com"
accountPassword = "21212212"
accountCity= "karachi"

console.log(accountId);

// Prefer not to use var 
// because of issue in block scope and functional scope

console.table([ accountId, accountEmail, accountPassword, accountCity, accountState])