import { ref } from "@vue/runtime-dom";
import PokemonService from "../services/PokemonService";

const pokemons = ref({})
const pokemon = ref({})

const pokemonService = new PokemonService()

export default function usePokemon() {
    const getAllPokemons = async (params) => {
        pokemons.value = await pokemonService.getAll(params)
    }

    const getOnePokemon = async (name) => {
        pokemon.value = await pokemonService.getOne(name)
    }

    return {
        pokemons,
        pokemon,
        getAllPokemons,
        getOnePokemon
    }
}