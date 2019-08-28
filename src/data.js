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

}
/*const sortByType  = () => {
  return 'example';
};
*/

