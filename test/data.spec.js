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
    assert.deepEqual(window.filterTypes(muestra, 'Fire'), [{ "name": "Charmander", "type": ["Fire"] }]);
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
      assert.deepEqual(window.filterWeakness(muestra, 'Fire'), [{
        "name": "Bulbasaur", "weaknesses": [
          "Fire",
          "Ice",
          "Flying",
          "Psychic"
        ]
      }]);
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
      assert.deepEqual(window.filterEggs(muestra, '5 km'), [{ "name": "Ekans", "egg": "5 km" }]);
    });
  })

describe('orderSelector()', () => {

  const muestra = [
    {
      "name": "Bulbasaur",
      "id": 1

    },
    {
      "name": "Kakuna",
      "id": 14
    },
    {
      "name": "Charmander",
      "id": 4
    }

  ];
  it('Debería ser una función', () => {
    assert.equal(typeof window.orderSelector, 'function');
  });
  it('debería retornar "Bulbasaur", "Charmander" , "Kakuna" al ordenar por número descendente', () => {
    assert.deepEqual(window.orderSelector(muestra, 'numberDesc'), [{ "name": "Kakuna", "id": 14 },
    { "name": "Charmander", "id": 4 }, { "name": "Bulbasaur", "id": 1 }]);
  });
  it('debería retornar "Bulbasaur", "Charmander" , "Kakuna" al ordenar por número ascendente', () => {
    assert.deepEqual(window.orderSelector(muestra, 'numberAsc'), [{ "name": "Bulbasaur", "id": 1 },
    { "name": "Charmander", "id": 4 }, { "name": "Kakuna", "id": 14 }]);
  });
  it('debería retornar "Bulbasaur", "Charmander" , "Kakuna" al ordenar por alfabeto ascendente', () => {
    assert.deepEqual(window.orderSelector(muestra, 'alphaAsc'), [{ "name": "Bulbasaur", "id": 1 },
    { "name": "Charmander", "id": 4 }, { "name": "Kakuna", "id": 14 }]);
  });
  it('debería retornar "Kakuna", "Charmander" , "Bulbasaur" al ordenar por alfabeto descendente', () => {
    assert.deepEqual(window.orderSelector(muestra, 'alphaDesc'), [{ "name": "Kakuna", "id": 14 },
    { "name": "Charmander", "id": 4 }, { "name": "Bulbasaur", "id": 1 }]);
  });

})

describe('statsCalculation()', ()=>{

  const muestra = [

    {
      "name": "Weedle",
      "type": [
        "Bug"
      ],
      "egg": "2 km",
      "weaknesses": [
        "Fire"
      ]
      
    },
    {
      "name": "Pidgeotto",
      "type": [
        "Normal"
      ],
      "egg": "Not in Eggs",
      "weaknesses": [
        "Electric"
      ]
    }
  ];

  it('Debería ser una función', ()=>{
    assert.equal(typeof window.statsCalculation, 'function');
  });
  it('Debería retornar un 50% al indicar cuantos pokemon son de tipo normal', ()=>{
    assert.deepEqual(window.statsCalculation(muestra, "Normal"),50);
  });
  it('Debería retornar un 100% al indicar cuantos pokemon son débiles a Electric', ()=>{
    assert.deepEqual(window.statsCalculation(muestra, "Electric"),50);
  });
  it('Debería retornar un 50% al indicar cuantos pokemon no aparecen en huevos', ()=>{
    assert.deepEqual(window.statsCalculation(muestra, "Not in eggs"),50);
  });


});