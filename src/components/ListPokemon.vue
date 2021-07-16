<template>
  <li class="list">
      <span>{{ name }}</span>
      <ButtonFavorite :favorite="favorite" />
  </li>
</template>

<script>
import { ButtonFavorite } from './index'

export default {
    name: 'ListPokemon',
    props: {
        name: String,
        favorite: Boolean
    },
    components: { ButtonFavorite }
}
</script>

<style scoped>
.list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    font-size: 22px;
    color: var(--gray-600);
    padding: .4em .4em .4em 1em;
    border-radius: var(--rounded);
    background-color: var(--gray-50);
}
</style>