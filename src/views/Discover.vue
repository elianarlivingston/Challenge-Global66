<template>
  <div class="flex flex-col gap-4">
    <Search />

    <ListPokemon />

    <EmptyList />
  </div>
</template>

<script>
import { Search, ListPokemon, EmptyList } from "../components/index";

export default {
  name: "Discover",
  components: { Search, ListPokemon, EmptyList },
};
</script>

<style></style>
