<<<<<<< HEAD
// filtrado de la lista de pokemon por tipo 
const pokemons = window.POKEMON.pokemon;
window.pokemonList=pokemonList 
=======
 const pokemonList = window.POKEMON.pokemon;
 window.pokemonList = pokemonList;
 /*filtPo:(dataFil, condition)=>{
        const filterPoke = dataFil.filter(element => {
            return element.type.includes(condition) === true
          })
          return filterPoke;
        } */

//Filtrar por Tipo
const filterTypes = (pokemonList, selectedType) => {
  const resultType = pokemonList.filter(Element => {
      return Element.type.includes(selectedType);
  });
  return resultType;
}
window.filterTypes = filterTypes;


>>>>>>> b92c1bec346f7e77d1f7600294346e6d484a9dea

const filterByType=(pokemonList, selectType)=>{
    const resultType=(pokemonList,filter(Element=>{
        return Element.Type.includes(selectType);

    });
    window.filterByTypes=filterByTypes;
}
    
     
        
    