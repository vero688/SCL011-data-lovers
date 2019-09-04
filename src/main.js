//Hicimos global la data en data/pokemon.js y aquí creamos la variable 
//que almacenará los objetos pokemon y sus atributos.
const pokemons = window.POKEMON.pokemon;
for(let i=0; i<pokemons.length;i++){
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


  //Tiene uno o dos tipos
  //Ideal sería hacer un if, que si tiene un tipo entonces cree un label y de acuerdo
  //sea el tipo, será la clase que tomará (para que sean de colores distintos) y si son
  //dos tipos entones que cree dos label.
  let pokemonType = document.createElement("h1");
  pokemonType.textContent = pokemons[i].type[0];
  let pokemonType2 = document.createElement("h1");
  pokemonType2.textContent = pokemons[i].type[1];

    cards.appendChild(pokemonName);
    cards.appendChild(pokemonPhoto);
    cards.appendChild(pokemonNumber);
    cards.appendChild(pokemonType);
    cards.appendChild(pokemonType2);

    //Mostrar tarjeta en el contenedor especificado
    document.getElementById("root").appendChild(cards).innerHTML;   

}



