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




  

  