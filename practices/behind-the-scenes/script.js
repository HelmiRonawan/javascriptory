'use strict';

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
