global.window = global;
global.assert = require('chai').assert;
require('../src/data/pokemon/pokemon.js');
require('../src/data.js')
require('./data.spec.js');


describe('filterTypes()', () => {

  const muestra = [
    {
      "name": "Bulbasaur",
      "type": [
        "Grass",
        "Poison"
      ]

    },
    {
      "name": "Charmander",
      "type": [
        "Fire"
      ]
    }
  ];
  
 
  it('Debería ser una función', () => {
    assert.equal(typeof window.filterTypes, 'function');
  });

  it('debería retornar "Charmander" al buscar tipo "fire"', () => {
    assert.deepEqual(window.filterTypes(muestra, 'Fire'),[{"name": "Charmander", "type": ["Fire"]}]);
  });
}),

describe('filterWeakness()', () => {

  const muestra = [
    {
      "name": "Bulbasaur",
      "weaknesses": [
        "Fire",
        "Ice",
        "Flying",
        "Psychic"
      ]

    },
    {
      "name": "Charmander",
      "weaknesses": [
        "Water",
        "Ground",
        "Rock"
      ]
    }
  ];
  
 
  it('Debería ser una función', () => {
    assert.equal(typeof window.filterWeakness, 'function');
  });

  it('debería retornar "Bulbasaur" al buscar debilidad "fire"', () => {
    assert.deepEqual(window.filterWeakness(muestra, 'Fire'),[{"name": "Bulbasaur", "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ]}]);
  });
}),
describe('filterEggs()', () => {

  const muestra = [
    {
      "name": "Ekans",
      "egg": "5 km"

    },
    {
      "name": "Charmander",
      "egg": "2 km"
      
    },
    {
      "name": "Caterpie",
      "egg": "2 km"
    }
  ];
  
 
  it('Debería ser una función', () => {
    assert.equal(typeof window.filterEggs, 'function');
  });

  it('debería retornar "Ekans" al buscar huevo de "5 km"', () => {
    assert.deepEqual(window.filterEggs(muestra, '5 km'),[{"name": "Ekans",  "egg": "5 km"}]);
  });
})