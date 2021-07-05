// Array Literal

const pokemonTeam = [
  'Charizard',
  'Mimikyu',
  'Dragapult',
  'Torterra',
  'Pikachu',
  'Mewtwo',
];

// Copy array with 'spread' operator

const pokemonCopy = [...pokemonTeam];

//console.log(pokemonCopy);

// String to array
const pokemonStrings = [...'pikachu'];

//console.log(pokemonStrings);

// Remove duplicates

const duplicates = [...'abcdeefgahijkbope'];
const noDuplicates = [...new Set(duplicates)];

// console.log(noDuplicates);

// Array constructor
//Empty Array
const empty = new Array();

// Preallocate
const a = new Array(10);
//console.log(a);

const preallocate = new Array(1, 2, 3, 4, 5, 6, 'testing, testing');

//console.log(preallocate);

// Array.of()
const single = Array.of(3);
//console.log(single);

//Array Methods

//forEach()
const myArray = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;

myArray.forEach((value) => {
  sum += value;
});

//console.log(sum);

myArray.forEach((value, index, myArray) => {
  myArray[index] = value + 1;
});

//console.log(myArray);

//map()

const mapArray = [1, 2, 5];
const cuadradoArray = mapArray.map((m) => m * m);
//console.log(cuadradoArray);
const mapped = mapArray.map((m) => {
  return { [m]: m }; // computed property
});
//console.log(mapped);

//filter()
const numbers = [2, 5, 28, 68, 45, 25, 235, 9, 132, 5, 2];
const oddNumbers = numbers.filter((number) => number % 2 > 0);
//console.log(oddNumbers);

//find() and findIndex()
const numberArray = [1, 2, 3];
const index = numberArray.findIndex((x) => x > 2);
//console.log(index);
const founded = numberArray.find((x) => x > 2);
//console.log(founded);

//every() and some()
const aarray = [1, 2, 3, 4, 5];
const allLessThan10 = aarray.every((x) => x < 10);
//console.log(allLessThan10);
const someMoreThan4 = aarray.some((x) => x > 4);
//console.log(someMoreThan4);
