<template>
  <div class="grid">
    <Search v-model="search" @submit="searchPokemon" />

    <div class="flex flex-col gap-4 container">
      <template v-if="searchList?.length > 0">
        <ListPokemon
          v-for="pokemon in searchList"
          :key="pokemon.name"
          :name="pokemon.name"
          :favorite="pokemon.favorite"
          @favorite="() => toggleFavorite(pokemon)"
          @viewDetail="() => viewDetail(pokemon.name)"
        />
      </template>

      <template v-else>
        <ListPokemon
          v-for="pokemon in pokemons?.results"
          :key="pokemon.name"
          :name="pokemon.name"
          :favorite="pokemon.favorite"
          @favorite="() => toggleFavorite(pokemon)"
          @viewDetail="() => viewDetail(pokemon.name)"
        />
      </template>

      <Spinner v-if="loading" />

      <EmptyList v-if="error" />

      <Modal v-model="showModal">
        <CardPokemon
          :pokemon="pokemon"
          @shared="shared"
          @favorite="() => toggleFavorite(pokemon)"
        />
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
  Spinner,
} from "../components/index";
import usePokemon from "../hooks/usePokemon";

export default {
  name: "Discover",
  components: { Search, ListPokemon, EmptyList, Modal, CardPokemon, Spinner },
  setup() {
    const {
      pokemons,
      pokemon,
      favorite,
      getAllPokemons,
      getOnePokemon,
      addFavorite,
      removeFavorite,
    } = usePokemon();
    const search = ref("");
    const searchList = ref([]);
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
        searchList.value = [];
        return;
      }

      try {
        error.value = false;
        loading.value = true;

        await getOnePokemon(search.value);
        searchList.value = [{ ...pokemon.value }];

        console.log(searchList.value);

        loading.value = false;
      } catch (error) {
        error.value = true;
        loading.value = false;
      }
    };

    const toggleFavorite = (pokemon) => {
      const isFavorite = favorite.value.some((el) => el.name === pokemon.name);

      if (isFavorite) {
        removeFavorite(pokemon);
      } else {
        addFavorite(pokemon);
      }
    };

    const shared = (pokemon) => {
      const type = pokemon?.types?.map((type) => type.type.name).join(", ");
      const array = [
        `Name: ${pokemon?.name}`,
        `Weight: ${pokemon?.weight}`,
        `Height: ${pokemon?.height}`,
        `Types: ${type}`,
      ];

      const input = document.createElement("input");

      input.setAttribute("value", array.join(", "));
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    };

    onMounted(getAll);

    return {
      showModal,
      viewDetail,
      pokemons,
      pokemon,
      search,
      searchPokemon,
      searchList,
      loading,
      error,
      toggleFavorite,
      shared,
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
