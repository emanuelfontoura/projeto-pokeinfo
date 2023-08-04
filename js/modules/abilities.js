import Pokemon, { selectPokemon } from "./class.js";
export default function initAbilities(){
    const contentAbilities = document.querySelector('[data-pokemon=contentAbilities]')
    const btnAbilities = document.querySelector('[data-pokemon=abilities]')
    btnAbilities.addEventListener('click', handleClickAbilities)
    function handleClickAbilities(){
        const abilities = Pokemon.getPokemonAbilities(selectPokemon.value.toLowerCase())
        abilities.then(abilities => {
            abilities.forEach(ability => {
                contentAbilities.innerText += `${ability.ability.name}\n`
            })
        }).catch(() => {
            window.alert(`Um erro aconteceu. Verifique se escreveu o nome corretamente e tente de novo!`)
        })
    }
}