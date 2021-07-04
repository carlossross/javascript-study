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
