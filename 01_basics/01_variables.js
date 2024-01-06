const accountId = 144553
let accountEmail = "kru@gmail.com"
var accountPassword = "123"
accountCity = "Anand"
let accountState;

// accountId = 2     This is not allowed as we have declared it constant 


accountEmail = "kru@hotmail.com"
accountPassword = "456"
accountCity = "VVN"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);