
 const pokemonList = window.POKEMON.pokemon;
 window.pokemonList = pokemonList;
 /*filtPo:(dataFil, condition)=>{
        const filterPoke = dataFil.filter(element => {
            return element.type.includes(condition) === true
          })
          return filterPoke;
        } */

//Filtrar por Tipo
//Recibe dos parámetos: 1.La lista de pokemons y 2. El 'type' que se ha seleccionado
const filterTypes = (pokemonList, selectedType) => {
  //.filter() crea un nuevo array compuesto por los elementos que cumplen
  //el criterio de búsqueda, en este caso crearía un arreglo de todos los pokemons
  //que cumplan con el 'type' seleccionado.
  //trabajamos con 'Element' a modo genérico, en este caso el elemento será la variable
  //donde se encuentra
  const resultType = pokemonList.filter(Element => {
    //retornará todo elemento donde se encuentre dentro de su array de tipo 'type' según
    //sea el value seleccionado en el selectBox (html estático)
      return Element.type.includes(selectedType);
  });
  //retorna el valor de la función filtrar
  return resultType;
}
//hacemos FilterTypes de modo global para llamarla desde main.js
window.filterTypes = filterTypes;


window.pokemonList = pokemonList;
  //filtrar por Debilidad 
  //Recibe dos parámetos: 1.La lista de pokemons y 2. El 'type' que se ha seleccionado
    const filterWeakness =(pokemonList,weaknessType) =>{
      //.filter() crea un nuevo array compuesto por los elementos que cumplen
  //el criterio de búsqueda, en este caso crearía un arreglo de todos los pokemons
  //que cumplan con el 'type' seleccionado.
  //trabajamos con 'Element' a modo genérico, en este caso el elemento será la variable
  //donde se encuentra
    const weakness =pokemonList.filter(Element =>{
        //retornará todo elemento donde se encuentre dentro de su array de tipo 'type' según
    //sea el value seleccionado en el selectBox (html estático)
        return Element.weaknesses.includes(weaknessType);
    });
     //retorna el valor de la función filtrar
    return weakness;
  }
  //hacemos FilterTypes de modo global para llamarla desde main.js
window.filterWeakness = filterWeakness;

const ordenList = window.POKEMON.pokemon;

   const ordenList2 = (data,sortDe, sortOrd) =>{
  const ordenResult = datos.orden ((a,b) =>{
    bringBack [sortDe].CompareList(b[sortDe]);
  })
  Console.log("ordenlist");
  if (sortOrd === "asc") {
    return Element.name.includes(ordenResult);
  }
  if (sortDe ==="desc"){
    
  }
}
    window.ordenLtist = ordenList; 
        
    