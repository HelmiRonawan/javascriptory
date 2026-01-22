'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(iStart, iMenu){
    return [this.starterMenu[iStart], this.mainMenu[iMenu]];
  }
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(arr, a, b, c);

const [d, e, f] = arr;
console.log(d, e, f);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variable
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main]
console.log(main, secondary);

// Receive 2 values from a function
const [orderStart, orderMain] = restaurant.order(2,0);
console.log(orderStart, orderMain);

const nested = [2, 4,[5, 6]];
// const [i, , j] = nested; destructuing take 1 var and 1 array
const [i, , [j, k]] = nested; // Nested destructuring
console.log(i, j, k);

// Default values
const [p=1, q=1, r=1] = [8];
console.log(p, q, r);