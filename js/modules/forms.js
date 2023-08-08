import Pokemon, { selectPokemon } from "./class.js";
export default function initForms(){
    const btnAllActions = document.querySelector('[data-pokemon=btnAllActions]')
    const imageForms = document.querySelector('[data-pokemon=imageForms]')
    let intervalNewSpritesArray = null
    btnAllActions.addEventListener('click', handleClickForms) 

    function handleClickForms(){
        const forms = Pokemon.getPokemonForms(selectPokemon.value.toLowerCase())
        forms.then(forms => {
            let index = 0
            let spritesArray = []
            let newSpritesArray = []
            fetchForms(forms[0].url, index, spritesArray, newSpritesArray)
        }).catch(() => {
            console.log('UM ERRO ACONTECEU AO BUSCAR OS SPRITES DO POKEMON! VERIFIQUE O NOME E TENTE NOVAMENTE!')
            imageForms.classList.remove('activeImageForms')
        })
    }

    function fetchForms(url, index, spritesArray, newSpritesArray){
        fetch(url)
        .then(resp => resp.json())
        .then(respJson => {
            spritesArray = Object.values(respJson.sprites)
            newSpritesArray = spritesArray.filter(sprite => {
                return sprite !== null
            })
            imageForms.classList.add('activeImageForms')
            imageForms.src = newSpritesArray[0]
            intervalForms(newSpritesArray, index)
        })
    }

    function intervalForms(newSpritesArray, index){
        clearInterval(intervalNewSpritesArray)
        intervalNewSpritesArray = setInterval(() => {
            if(index < newSpritesArray.length-1){
                imageForms.src = newSpritesArray[index]
            }else{
                index = 0
            }
            index++
        }, 500)
    }

    return handleClickForms
}