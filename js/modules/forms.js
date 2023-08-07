import Pokemon, { selectPokemon } from "./class.js";
export default function initForms(){
    const contentForms = document.querySelector('[data-pokemon=contentForms]')
    const btnForms = document.querySelector('[data-pokemon=btnForms]')
    btnForms.addEventListener('click', handleClickForms) 

    function handleClickForms(){
        const forms = Pokemon.getPokemonForms(selectPokemon.value.toLowerCase())
        forms.then(forms => {
            console.log(forms[0].url)
            fetchForms(forms[0].url)
        }).catch(() => {
            window.alert(`Um erro aconteceu. Verifique se escreveu o nome corretamente e tente de novo!`)
        })
    }

    async function fetchForms(url){
        fetch(url)
        .then(resp => resp.json())
        .then(respJson => {
            console.log(respJson)
        })
    }
}