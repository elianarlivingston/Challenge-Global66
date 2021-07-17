<template>
  <li class="list">
    <span @click="emit('viewDetail', $event)">{{ name }}</span>

    <ButtonFavorite :favorite="favorite" @click="emit('favorite', $event)" />
  </li>
</template>

<script>
import { ButtonFavorite } from "./index";

export default {
  name: "ListPokemon",
  props: {
    name: {
      type: String,
      required: true,
    },
    favorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  components: { ButtonFavorite },
  setup(props, { emit }) {
    return { emit };
  },
};
</script>

<style scoped>
.list {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 22px;
  color: var(--gray-600);
  padding: 0.4em 0.4em 0.4em 1em;
  border-radius: var(--rounded);
  background-color: var(--gray-50);
}
.list span {
  flex-grow: 1;
  cursor: pointer;
}
</style>
