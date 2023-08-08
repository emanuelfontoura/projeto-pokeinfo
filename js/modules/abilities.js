import Pokemon, { selectPokemon } from "./class.js";
export default function initAbilities(){
    const contentAbilities = document.querySelector('[data-pokemon=contentAbilities]')
    const btnAllActions = document.querySelector('[data-pokemon=btnAllActions]')
    btnAllActions.addEventListener('click', handleClickAbilities)

    function handleClickAbilities(){
        contentAbilities.innerText = ''
        const abilities = Pokemon.getPokemonAbilities(selectPokemon.value.toLowerCase())
        abilities.then(abilities => {
            abilities.forEach(ability => {
                if(!(contentAbilities.innerText.includes(ability.ability.name))){
                    contentAbilities.innerText += `${ability.ability.name}\n`
                }
            })
        }).catch(() => {
            console.log('UM ERRO ACONTECEU AO BUSCAR AS HABILIDADES DO POKEMON! VERIFIQUE O NOME E TENTE NOVAMENTE!')
        })
    }
}