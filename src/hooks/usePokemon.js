import { computed, ref, watch } from "@vue/runtime-dom";
import storage from '../utils/storage'
import PokemonService from "../services/PokemonService";

const pokemons = ref({})
const pokemon = ref({})
const favorite = ref(storage.get('favorite') || [])

const pokemonService = new PokemonService()

export default function usePokemon() {
    const getAllPokemons = async (params) => {
        pokemons.value = await pokemonService.getAll(params)
    }

    const getOnePokemon = async (name) => {
        pokemon.value = await pokemonService.getOne(name)
    }

    const addFavorite = (pokemon) => {
        const isFavorite = favorite.value.some((el => el.name === pokemon.name))
        if(!isFavorite) {
            const newArrayFavorite = [...favorite.value, {...pokemon, favorite: true}]
            
            favorite.value = newArrayFavorite
            storage.set('favorite', newArrayFavorite)
        }
    }

    const removeFavorite = (pokemon) => {
        const newArrayFavorite = favorite.value.filter((el => el.name !== pokemon.name))

        favorite.value = newArrayFavorite
        storage.set('favorite', newArrayFavorite)
    }

    const _pokemons = computed(() => {
        const newArrayResults = pokemons.value?.results?.map(pokemon => {
            const isFavorite = favorite.value.some(el => el.name === pokemon.name)
            return { ...pokemon, favorite: isFavorite }
        })

        return { ...pokemons.value, results: newArrayResults }
    })
    
    const _pokemon = computed(() => {
        if(Object.keys(pokemon.value).length === 0) return {}

        const isFavorite = favorite.value.some(el => el.name === pokemon.value.name)

        return { ...pokemon.value, favorite: isFavorite }
    })

    return {
        pokemons: _pokemons,
        pokemon: _pokemon,
        favorite,
        getAllPokemons,
        getOnePokemon,
        addFavorite,
        removeFavorite
    }
}