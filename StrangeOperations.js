"use strict";
console.log(5||2||7||undefined||3); //5
console.log(5&&undefined&&true); //undefined
console.log([]||7||4); //[]
console.log(''||7||4);//7
console.log(''==[]) //true
console.log([]==0); //true
console.log(0||7||4); //7
console.log(5+3+[]+7+1); //871