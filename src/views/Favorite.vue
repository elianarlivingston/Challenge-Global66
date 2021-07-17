<template>
  <div class="grid">
    <Search v-model="search" />

    <div class="flex flex-col gap-4 container">
      <ListPokemon
        v-for="pokemon in pokemonsFavorite"
        :key="pokemon.name"
        :name="pokemon.name"
        :favorite="pokemon.favorite"
        @favorite="() => toggleFavorite(pokemon)"
        @viewDetail="() => viewDetail(pokemon.name)"
      />

      <EmptyList v-if="pokemonsFavorite?.length === 0" />

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
import { ref, computed } from "vue";

import {
  Search,
  ListPokemon,
  EmptyList,
  Modal,
  CardPokemon,
} from "../components/index";
import usePokemon from "../hooks/usePokemon";

export default {
  name: "Favorite",
  components: { Search, ListPokemon, EmptyList, Modal, CardPokemon },
  setup() {
    const { pokemon, favorite, getOnePokemon, addFavorite, removeFavorite } =
      usePokemon();
    const search = ref("");
    const showModal = ref(false);

    const viewDetail = async (name) => {
      await getOnePokemon(name);
      showModal.value = true;
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

    const pokemonsFavorite = computed(() =>
      favorite.value.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.value.toLowerCase())
      )
    );

    return {
      showModal,
      viewDetail,
      pokemon,
      search,
      favorite,
      toggleFavorite,
      shared,
      pokemonsFavorite,
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
