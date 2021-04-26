let userName = prompt("Enter your name :");

let userNameUpperCase = userName.toUpperCase();
let userNameLowerCase = userName.toLowerCase();

let firstLetter = userNameUpperCase.slice(0,1);
let total = userName.length;

alert("Hello " + firstLetter + userNameLowerCase.slice(0,total));






