import Pokemon from "./modules/class.js";

const btnAbilities = document.querySelector('[data-pokemon=abilities]')
btnAbilities.addEventListener('click', handleClickAbilities)
async function handleClickAbilities(t){
    const pokemonAbilities = await new Pokemon('charizard').abilities
    console.log(new Pokemon('charizard'))
    console.log(pokemonAbilities)
}