<template>
  <article class="card">
    <div class="card__wrapper-image">
      <figure class="card__image">
        <img :src="pokemon?.sprites?.front_default" :alt="pokemon?.name" />
      </figure>
    </div>

    <div class="card__content">
      <ul class="card__list">
        <li>
          <span class="bold">Name:</span> <span>{{ pokemon?.name }}</span>
        </li>
        <li>
          <span class="bold">Weight:</span> <span>{{ pokemon?.weight }}</span>
        </li>
        <li>
          <span class="bold">Height:</span> <span>{{ pokemon?.height }}</span>
        </li>
        <li>
          <span class="bold">Types:</span>
          <span>{{
            pokemon?.types?.map((type) => type.type.name).join(", ")
          }}</span>
        </li>
      </ul>

      <div class="flex justify-between items-center gap-4">
        <Button>Share to my friends</Button>
        <ButtonFavorite :favorite="favorite" />
      </div>
    </div>
  </article>
</template>

<script>
import { Button, ButtonFavorite } from "./index";

export default {
  name: "CardPokemon",
  props: {
    pokemon: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    favorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  components: { Button, ButtonFavorite },
};
</script>

<style scoped>
.card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: var(--rounded);
  background-color: var(--gray-50);
  overflow: hidden;
}

.card__wrapper-image {
  height: 100%;
  max-height: var(--background-pokemon-size);
  background-image: url("../assets/Background.png");
  display: flex;
  justify-content: center;
  align-items: center;
}

.card__image {
  width: var(--pokemon-size);
  height: var(--pokemon-size);
}

img {
  width: 100%;
  height: 100%;
}

.card__content {
  padding: 1.25rem 2rem;
  display: flex;
  height: 100%;
  flex-direction: column;
  text-transform: capitalize;
  color: var(--gray-500);
}

.card__list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.card__list li {
  padding: 0.75em;
  font-size: 18px;
  border-bottom: 1px solid var(--gray-300);
}

.card__list li:first-child {
  padding-top: 0;
}
</style>
