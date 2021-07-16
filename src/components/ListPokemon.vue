<template>
  <li class="list" @click="emit('click', $event)">
    <span>{{ name }}</span>

    <ButtonFavorite :favorite="favorite" />
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
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  font-size: 22px;
  color: var(--gray-600);
  padding: 0.4em 0.4em 0.4em 1em;
  border-radius: var(--rounded);
  background-color: var(--gray-50);
}
</style>
