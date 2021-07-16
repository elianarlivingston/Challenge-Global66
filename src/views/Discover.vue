<template>
  <div class="grid">
    <Search v-model="search" @submit="searchPokemon" />
    {{ error }}
    <div class="flex flex-col gap-4 container">
      <ListPokemon
        v-for="pokemon in pokemons?.results"
        :key="pokemon.name"
        :name="pokemon.name"
        @click="() => viewDetail(pokemon.name)"
      />

      <EmptyList v-if="error" />

      <Modal v-model="showModal">
        <CardPokemon :pokemon="pokemon" />
      </Modal>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

import {
  Search,
  ListPokemon,
  EmptyList,
  Modal,
  CardPokemon,
} from "../components/index";
import usePokemon from "../hooks/usePokemon";

export default {
  name: "Discover",
  components: { Search, ListPokemon, EmptyList, Modal, CardPokemon },
  setup() {
    const { pokemons, pokemon, getAllPokemons, getOnePokemon } = usePokemon();
    const search = ref("");
    const showModal = ref(false);
    const loading = ref(false);
    const error = ref(false);

    const viewDetail = async (name) => {
      await getOnePokemon(name);
      showModal.value = true;
    };

    const getAll = async () => {
      try {
        error.value = false;
        loading.value = true;

        await getAllPokemons();

        loading.value = false;
      } catch (error) {
        loading.value = false;
        error.value = true;
      }
    };

    const searchPokemon = async () => {
      if (!search.value) {
        await getAll();
        return;
      }

      try {
        error.value = false;
        loading.value = true;

        await getOnePokemon(search.value);
        pokemons.value = { results: [{ ...pokemon.value }] };

        loading.value = false;
      } catch (error) {
        console.log('ERROR AQUI')
        error.value = true;
        loading.value = false;
      }
    };

    onMounted(getAll);

    return {
      showModal,
      pokemons,
      pokemon,
      viewDetail,
      search,
      searchPokemon,
      loading, 
      error
    };
  },
};
</script>

<style scoped>
.grid {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
  gap: 1rem;
  background-color: var(--gray-100);
}
</style>
