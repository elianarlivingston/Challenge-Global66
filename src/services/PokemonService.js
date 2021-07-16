import http from '../utils/http'

// const API_URL = import.meta.env.POKEMON_API_URL
const API_URL = 'https://pokeapi.co/api/v2'
const POKEMONS = `${API_URL}/pokemon`

export default class PokemonService {
    getAll(params) {
        return http.get(POKEMONS, params)
    }

    getOne(name) {
        return http.get(`${POKEMONS}/${name}`)
    }
}