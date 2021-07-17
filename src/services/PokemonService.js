import http from '../utils/http'

const API_URL = import.meta.env.VITE_POKEMON_API_URL
const POKEMONS = `${API_URL}/pokemon`

export default class PokemonService {
    getAll(params) {
        return http.get(POKEMONS, params)
    }

    getOne(name) {
        return http.get(`${POKEMONS}/${name}`)
    }
}