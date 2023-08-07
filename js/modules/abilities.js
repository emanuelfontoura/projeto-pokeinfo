import Pokemon, { selectPokemon } from "./class.js";
export default function initAbilities(){
    const contentAbilities = document.querySelector('[data-pokemon=contentAbilities]')
    const btnAbilities = document.querySelector('[data-pokemon=btnAbilities]')
    btnAbilities.addEventListener('click', handleClickAbilities)

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
            window.alert(`Um erro aconteceu. Verifique se escreveu o nome corretamente e tente de novo!`)
        })
    }
}