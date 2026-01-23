'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (iStart, iMain) {
    return [this.starterMenu[iStart], this.mainMenu[iMain]];
  },

  orderDelivery: function ({ iStart = 1, iMain = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[iStart]} and ${this.mainMenu[iMain]} will be delivered to ${address} at ${time}`,
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`,
    );
  },
};

// function if we don't know spesific parameter and destructing the object
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  iMain: 2,
  iStart: 2,
});

restaurant.orderDelivery({
  address: 'Jl. Lingkar Selatan',
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default Values
let { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested object destrc                     }
const {
  fri: { open: friOpen, close: friClose },
  sat: { open: satOpen, close: satClose },
  thu: { open: thuOpen, close: thuClose },
} = openingHours;
console.log(friOpen, friClose);
console.log(satOpen, satClose);
console.log(thuOpen, thuClose);

// Spread Operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const mergeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(mergeMenu);

// Iterable: arrays, strings, maps, sets, NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);

// Real world example
// const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt("Let's make pasta! Ingredient 2?"), prompt("Let's make pasta! Ingredient 3?")];
// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Gueiseppe'}
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

/*
//////////////////////////////////////////////////
// Destrcuturing Arrays
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
*/
/////////////////////////////////////////////////
