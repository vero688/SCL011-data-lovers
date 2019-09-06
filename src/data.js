 const pokemonList = window.POKEMON.pokemon;
 window.pokemonList = pokemonList;
const filterTypes = (pokemonList, selectedType) => {
  const resultType = pokemonList.filter(Element => {
      return Element.type.includes(selectedType);
  });
  return resultType;
}
window.filterTypes = filterTypes;

//filtrado por debilidad
window.pokemonList = pokemonList;
    const filterWeakness =(pokemonList,weaknessType) =>{
    const weakness =pokemonList.filter(Element =>{
        return Element.type.includes(weaknessType);
    });
    return weakness;
    console.log("weaknessType")
}
window.filterWeakness = filterWeakness;


     
        
    