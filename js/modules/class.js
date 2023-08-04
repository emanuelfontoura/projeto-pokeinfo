export default class Pokemon{
    constructor(){
    }

    static async getPokemonInfoFetch(name){
        return await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .catch(error => console.log(error.message))
    }

    static async getPokemonAbilities(name){
        return await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then(respJson => respJson.abilities)
        .catch(error => console.log(error.message))
    }
}

export const selectPokemon = document.querySelector('[data-pokemon=selectPokemon]')