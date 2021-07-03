const Pokemon = {
  name: '',
  generation: -1,
  type: '',
};
console.log(Pokemon.__proto__);
const charizard = {};
charizard.__proto__ = Pokemon;
console.log(charizard.__proto__);

// Object Literal

// Empty Object
const empty = {};

const PokemonLiteral = {
  name: '',
  number: -1,
  generation: 1,
  type: '',
};

// Objects with new
const PokemonNew = new Object();

// Object.create()
let PokemonCreate = Object.create({
  name: 'Charizard',
  number: 6,
  generation: 1,
  type: 'fire',
});

//Empty Object
const emptyCreate = Object.create(null); // Does not inherit prototype
const emptyPrototype = Object.create(Object.prototype); // Like {} or new Object()

// console.log(empty.__proto__);
// console.log(emptyCreate.__proto__);
// console.log(emptyPrototype.__proto__);

// Inheritance
// Create object with specified prototypes

let pikachu = Object.create(PokemonLiteral);
// console.log(pikachu);

//Needs assign the properties
pikachu.number = 25;
pikachu.name = 'pikachu';
pikachu.generation = 1;
pikachu.type = 'electric';

// console.log(pikachu);
// console.log(PokemonLiteral);

// delete pikachu.type;

//console.log(pikachu);

// Assigning properies by default to object

// With assign
let mew;
mew = Object.assign({}, PokemonLiteral, mew);
mew.name = 'Mew';
//console.log(mew);

// Spread operator
let mewTwo;
mewTwo = { ...PokemonLiteral, name: 'mewtwo' };
// console.log(mewTwo);

// Object with method
// const PokemonAttack = {
//   attack: function () {
//     return this.power * 2;
//   },
//   power: 1,
// };

// Shorthand
const PokemonAttack = {
  attack() {
    return this.power * 2;
  },
  power: 1,
};

//console.log(PokemonAttack.attack());

//Getters and Setters
const PokemonGetSet = {
  name: 'pokemon',
  get getName() {
    return this.name;
  },
  set setName(value) {
    this.name = value;
  },
};

//console.log(PokemonGetSet.getName);
//PokemonGetSet.setName = 'Ditto';
//console.log(PokemonGetSet.name);

const ditto = Object.create(PokemonGetSet);
//console.log(ditto.getName);
ditto.setName = 'Alakazam';
//console.log(ditto.getName);
