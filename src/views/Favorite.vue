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

      <template v-else-if="favorite?.length > 0 && !search">
        <ListPokemon
          v-for="pokemon in favorite"
          :key="pokemon.name"
          :name="pokemon.name"
          :favorite="pokemon.favorite"
          @favorite="() => toggleFavorite(pokemon)"
          @viewDetail="() => viewDetail(pokemon.name)"
        />
      </template>

      <EmptyList
        v-if="(searchList?.length < 1 && search) || favorite?.length < 1"
      />

      <Spinner v-if="loading" />

      <Modal v-model="showModal">
        <CardPokemon
          :pokemon="pokemon"
          @favorite="() => toggleFavorite(pokemon)"
        />
      </Modal>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";

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
  name: "Favorite",
  components: { Search, ListPokemon, EmptyList, Modal, CardPokemon, Spinner },
  setup() {
    const { pokemon, favorite, getOnePokemon, addFavorite, removeFavorite } =
      usePokemon();
    const search = ref("");
    const searchList = ref([]);
    const showModal = ref(false);
    const loading = ref(false);
    const error = ref(false);

    const viewDetail = async (name) => {
      await getOnePokemon(name);
      showModal.value = true;
    };

    const searchPokemon = async () => {
      if (!search.value) {
        searchList.value = [];
        return;
      }

      try {
        error.value = false;
        loading.value = true;

        const pokemonOnly = favorite.value.find(
          (el) => el.name === search.value
        );
        searchList.value = pokemonOnly ? [pokemonOnly] : [];

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

    return {
      showModal,
      viewDetail,
      pokemon,
      search,
      searchPokemon,
      searchList,
      loading,
      error,
      favorite,
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
