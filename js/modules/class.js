export default class Pokemon{
    constructor(name){
        this.name = name
        this._objectInfos = this.fetchData()
    }

    async fetchData(){
        const objectResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/`+`${this.name}`)
        return await objectResponse.json()
    }

    async abilities(){
        await this._objectInfos
        return this._objectInfos.abilities
    }
}