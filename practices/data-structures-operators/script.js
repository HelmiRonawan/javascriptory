'use strict';

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order(iStart, iMain) {
    return [this.starterMenu[iStart], this.mainMenu[iMain]];
  },

  orderDelivery({ iStart = 1, iMain = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[iStart]} and ${this.mainMenu[iMain]} will be delivered to ${address} at ${time}`,
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`,
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(
      `Here is your delicious pizza with main ingredient ${mainIngredient} and other side ingredient ${otherIngredients} as a complement `,
    );
  },
};
// Operatons for Sets usefull
const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil'
])

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic'
])

const commonFoods = italianFoods.difference(mexicanFoods)
console.log('Intersection:', commonFoods);
console.log([...commonFoods]);

const italianMexicanFusion = italianFoods.union(mexicanFoods)
console.log('Union:',italianMexicanFusion);

const uniqueItalianFoods = italianFoods.difference(mexicanFoods)
console.log('Difference Italian:', uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('Difference Mexican:', uniqueMexicanFoods);

const uniqueItalianAndMexicanFoods = italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianAndMexicanFoods);

console.log(italianFoods.isDisjointFrom(mexicanFoods));

/*
// Sets
const orderSet = new Set([
  'Pasta', 
  'Pizza', 
  'Pizza',
  'Risotto', 
  'Pasta'])

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet){
  console.log(`Ordered ${order}`);
}

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);
console.log(new Set('jonasschemedtmann').size);

// Looping Objects: Keys, Vales, and Entries
// Property NAMES
const properties = Object.keys(openingHours)

let openStr = `We are open on ${properties.length} days: `
for(const day of properties){
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours)
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
for (const [key,{open, close}] of entries){
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// Optional chain
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// With optional chaining
console.log(restaurant.openingHours.mon?.open ?? 'Not valid');
console.log(restaurant.openingHours?.thu?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
console.log('===Opening Days===');
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0,1) || "Method does not exist");
console.log(restaurant.orderRisotto?.(0,1) || "Method does not exist");

// Arrays
const users = [
  {
    name: 'Jonas',
    email: 'hello@jonas.io'
  }
]

console.log(users[0]?.name ?? 'User array empty');


//////////////////////////////////////////////////
// For of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

for(const item of menu) console.log(item);

for(const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);


const rest1 ={
  name: 'Capri',
  // numGuests: 20
  numGuests: 0
};

const rest2 ={
  name: 'La Piaza',
  owner: 'Giovanni Rossi'
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// Nullis assignment operator
rest1.numGuests ??= 10
rest2.numGuests ??= 10

// And assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

// Nullish Coalescing Operator
// Nullish: null and undefined (NOT 0 or '')
restaurant.numGuests = 0;
const guests = restaurant.numGuests ?? 10;
console.log(guests);


//Short circuit
console.log('--- OR ---');
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
const guests2 = restaurant.numGuests || 10;
console.log(guests1, guests2);

console.log('--- AND ---');
if(restaurant.orderPizza){
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'ham', 'spinach')


// 1) Destructuring
// Rest pattern
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// Spread, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// Rest, because on LEFT side of =
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat: saturday, ...weekDays } = { ...restaurant.openingHours };
console.log(saturday, weekDays);

// 2) Function
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5,3,7,2);
add(8,2,5,3,2,1,4);

const x = [23, 5, 7]
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');


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
