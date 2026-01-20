'use strict';
// Scope
console.log('===Scope===');
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `Hey ${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear < 1996) {
      // Creating NEW variable with same name as outer scopes's variable
      const firstName = 'Steven';

      // Reassignment outer scope's variable
      output = 'NEW OUTPUT';

      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      console.log(add(3, 2));

      console.log(firstName);
    }
    console.log(millenial);
    console.log(output);
  }

  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);

// Hoisting and TDZ
console.log('===Hoisting and TDZ===');
//Variables
console.log(me);
//console.log(job);
//console.log(year);

var me = 'Jonas';
let job = 'Teacher';
const year = 1991;

// Functions
console.log(addDecl(2,3));
//console.log(addExpr(2,3));
console.log(addArrow);
//console.log(addArrow(2,3));
function addDecl(a,b){
  return a + b;
}

const addExpr = function(a,b){
  return a + b;
}

var addArrow = (a,b) => a + b;

// Example
console.log(numProducts);
if (!numProducts) deleteShopping();

var numProducts = 10;

function deleteShopping(){
  console.log('All products deleted');
}

var x =1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// This keyword
console.log('===This Keyword===');
console.log(this);

const calccAge = function(birthYear){
  console.log(2037 - birthYear);
  console.log(this);
}
calccAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
}

calcAgeArrow(1980);

const Jonas = {
  year: 1991,
  calcAge: function(){
    console.log(2037 - this.year)
  }
}
Jonas.calcAge()

const matilda = {
  year: 2017
}

matilda.calcAge = Jonas.calcAge;
console.log(Jonas)
console.log(matilda)
matilda.calcAge();

const f = Jonas.calcAge;
console.log(f);
f();
