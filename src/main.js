
//Hicimos global la data en data/pokemon.js y aquí creamos la variable 
//que almacenará los objetos pokemon y sus propiedades.
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



//Le entregamos a la variable selectorType el id del selector del cual obtendremos
//el value seleccionado por el usuario
const selectorType = document.getElementById("filterType");
//Le agregamos un evento tipo "change", esto significa que cada vez que el elemento de 
//id "filterType" cambie de value, se ejecutará la función showByType
selectorType.addEventListener("change", showByType);

<<<<<<< HEAD
=======

>>>>>>> 72fca06c7adcf6b5173db1546b776f983a9ab9e1
function showByType()
{
  //Le entregamos a la variable selectedType el valor que ha sido seleccionado desde el html

  let selectedType = selectorType.options[selectorType.selectedIndex].value;
  //Aquí decimos que en filterResult, se almacenará el resultado de la ejecución de la 
  //función filterTypes. En este momento ya se encuentran todos los pokemons que cumplen
  //con el criterio de filtrado
  let filterResult = window.filterTypes(pokemons, selectedType);
  //Como la primera acción del DOM dentro de la web es mostrar todos los elementos de 
  //pokemon.js en vista tarjetas dentro de un div, le indicamos a este que se vacíe para
  //recibir dentro de él los resultados del filtrado
  document.getElementById("root").innerHTML="";

  //Ahora como tenemos los resultados en una variable, deberemos recorrer uno a uno los pokemons
  //para mostrarlos, del mismo modo que en el primer for donde mostramos todos los pokemons.
  //La diferencia es que en vez de referirnos a pokemon.type,.name,.etc nos referiremos a 
  //filterResult.name filterResult.img filterResult.number filterResult.type
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


  const weaknessType = document.getElementById("filterWeakness");
  weaknessType.addEventListener("change",showByWeaknees);
  
  function showByWeaknees()
  {
    let weaknessselected = weaknessType.options[weaknessType.selectedIndex].value;
    let filterResult = window.filterWeakness(pokemons, weaknessselected);
    document.getElementById("root").innerHTML="";

    for(let i=0; i<filterResult.length; i++){
      console.log(filterResult);
        //Div de clase columna, cada tarjeta corresponderá a una columna dentro de la fila
    let columnCard = document.createElement("div");
    columnCard.className = "column";
    //Crearemos una etiqueta <a> que envolverá la tarjeta, para poder llamar la apertura
    //de un modal con href
    
    let linkModal = document.createElement("a");
    linkModal.href = 'nada'; 

    
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
    let columnType3 = document.createElement("div");
    columnType3.className = "column";
    let columnType4 = document.createElement("div");
    columnType.className = "column";
    //Tiene uno o dos tipos
    //Ideal sería hacer un if, que si tiene un tipo entonces cree un label y de acuerdo
    //sea el tipo, será la clase que tomará (para que sean de colores distintos) y si son
    //dos tipos entones que cree dos label.
    let pokemonType1 = document.createElement("h1");
    pokemonType1.textContent = filterResult[i].type[0];
    let pokemonType2 = document.createElement("h1");
    pokemonType2.textContent = filterResult[i].type[1];
    
    let pokemonType3 = document.createElement("h1");
    pokemonType1.textContent = filterResult[i].weaknesses[0];
    let pokemonType4 = document.createElement("h1");
    pokemonType2.textContent = filterResult[i].weaknesses[1];

      columnType1.appendChild(pokemonType1);
      columnType2.appendChild(pokemonType2);
      columnType3.appendChild(pokemonType3);
      columnType4.appendChild(pokemonType4);
      rowType.appendChild(columnType1);
      rowType.appendChild(columnType2);
      rowType.appendChild(columnType3);
      rowType.appendChild(columnType4);
      cards.appendChild(pokemonName);
      cards.appendChild(pokemonPhoto);
      cards.appendChild(pokemonNumber);
      cards.appendChild(rowType);
  
      columnCard.appendChild(cards);
  
      //Mostrar tarjeta en el contenedor especificado
      document.getElementById("root").appendChild(columnCard).innerHTML; 
  
  }
    }
    
=======

