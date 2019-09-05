
//Hicimos global la data en data/pokemon.js y aquí creamos la variable 
//que almacenará los objetos pokemon y sus atributos.
const pokemons = window.POKEMON.pokemon;
for(let i=0; i<pokemons.length;i++){

  //Div de clase columna, cada tarjeta corresponderá a una columna dentro de la fila
  let columnCard = document.createElement("div");
  columnCard.className = "column";
  //Crearemos una etiqueta <a> que envolverá la tarjeta, para poder llamar la apertura
  //de un modal con href
  /*
  let linkModal = document.createElement("a");
  linkModal.href = */
  
  //Le indicamos que cree un elemento div en nuestro HTML que contendrá toda la info
  let cards = document.createElement("div");
  //Aquí le diremos que tome la clase "cards" de css
  cards.className =  "cards";
  //Le entregaremos un id
  cards.id = "cards";

  let pokemonName = document.createElement("h4");
  //Para rellenar el elemento h4, al ser una etiqueta de texto utilizamos textContent 
  //para asignarle su contenido
  //En pokemon.js "name"=""
  pokemonName.textContent = pokemons[i].name;
  
  //Creamos el elemento img que conteneŕa la imagen de cada pokemon
  let pokemonPhoto = document.createElement("img");
  //Le decimos que en este elemento HTML su source(src="") será lo que contiene
  //el elemento img:'' dentro de la data, según sea el índice.
  //En pokemon.js "img"=""

  pokemonPhoto.src = pokemons[i].img;

  let pokemonNumber = document.createElement("h3");
  //En pokemon.js "num"=""  
  pokemonNumber.textContent = pokemons[i].num;

  let rowType = document.createElement("div");
  rowType.className = "row";
  rowType.id = "rowType";
  let columnType1 = document.createElement("div");
  columnType1.className = "column";
  let columnType2 = document.createElement("div");
  columnType2.className = "column";
  //Tiene uno o dos tipos
  //Ideal sería hacer un if, que si tiene un tipo entonces cree un label y de acuerdo
  //sea el tipo, será la clase que tomará (para que sean de colores distintos) y si son
  //dos tipos entones que cree dos label.
  let pokemonType1 = document.createElement("h1");
  pokemonType1.textContent = pokemons[i].type[0];
  let pokemonType2 = document.createElement("h1");
  pokemonType2.textContent = pokemons[i].type[1];

    columnType1.appendChild(pokemonType1);
    columnType2.appendChild(pokemonType2);
    rowType.appendChild(columnType1);
    rowType.appendChild(columnType2);
    cards.appendChild(pokemonName);
    cards.appendChild(pokemonPhoto);
    cards.appendChild(pokemonNumber);
    cards.appendChild(rowType);

    columnCard.appendChild(cards);

    //Mostrar tarjeta en el contenedor especificado
    document.getElementById("root").appendChild(columnCard).innerHTML; 
  }

}

const selectorType = document.getElementById("filterType");
selectorType.addEventListener("change", showByType);

<<<<<<< HEAD
=======
function showByType()
{
  let selectedType = selectorType.options[selectorType.selectedIndex].value;
  let filterResult = window.filterTypes(pokemons, selectedType);
  document.getElementById("root").innerHTML="";

  for(let i=0; i<filterResult.length; i++){
    console.log(filterResult);
      //Div de clase columna, cada tarjeta corresponderá a una columna dentro de la fila
  let columnCard = document.createElement("div");
  columnCard.className = "column";
  //Crearemos una etiqueta <a> que envolverá la tarjeta, para poder llamar la apertura
  //de un modal con href
  /*
  let linkModal = document.createElement("a");
  linkModal.href = */
  
  //Le indicamos que cree un elemento div en nuestro HTML que contendrá toda la info
  let cards = document.createElement("div");
  //Aquí le diremos que tome la clase "cards" de css
  cards.className =  "cards";
  //Le entregaremos un id
  cards.id = "cards";

  let pokemonName = document.createElement("h4");
  //Para rellenar el elemento h4, al ser una etiqueta de texto utilizamos textContent 
  //para asignarle su contenido
  //En pokemon.js "name"=""
  pokemonName.textContent = filterResult[i].name;
  
  //Creamos el elemento img que conteneŕa la imagen de cada pokemon
  let pokemonPhoto = document.createElement("img");
  //Le decimos que en este elemento HTML su source(src="") será lo que contiene
  //el elemento img:'' dentro de la data, según sea el índice.
  //En pokemon.js "img"=""

  pokemonPhoto.src = filterResult[i].img;

  let pokemonNumber = document.createElement("h3");
  //En pokemon.js "num"=""  
  pokemonNumber.textContent = filterResult[i].num;

  let rowType = document.createElement("div");
  rowType.className = "row";
  rowType.id = "rowType";
  let columnType1 = document.createElement("div");
  columnType1.className = "column";
  let columnType2 = document.createElement("div");
  columnType2.className = "column";
  //Tiene uno o dos tipos
  //Ideal sería hacer un if, que si tiene un tipo entonces cree un label y de acuerdo
  //sea el tipo, será la clase que tomará (para que sean de colores distintos) y si son
  //dos tipos entones que cree dos label.
  let pokemonType1 = document.createElement("h1");
  pokemonType1.textContent = filterResult[i].type[0];
  let pokemonType2 = document.createElement("h1");
  pokemonType2.textContent = filterResult[i].type[1];

    columnType1.appendChild(pokemonType1);
    columnType2.appendChild(pokemonType2);
    rowType.appendChild(columnType1);
    rowType.appendChild(columnType2);
    cards.appendChild(pokemonName);
    cards.appendChild(pokemonPhoto);
    cards.appendChild(pokemonNumber);
    cards.appendChild(rowType);

    columnCard.appendChild(cards);

    //Mostrar tarjeta en el contenedor especificado
    document.getElementById("root").appendChild(columnCard).innerHTML; 

}
  }


>>>>>>> b92c1bec346f7e77d1f7600294346e6d484a9dea
