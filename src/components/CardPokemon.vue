<template>
  <article class="card">
    <div class="card__wrapper-image">
      <figure class="card__image">
        <img src="" alt="" />
      </figure>
    </div>

    <div class="card__content">
      <ul class="card__list">
        <li><span class="bold">Name:</span> <span>Valor</span></li>
        <li><span class="bold">Weight:</span> <span>Valor</span></li>
        <li><span class="bold">Height:</span> <span>Valor</span></li>
        <li><span class="bold">Types:</span> <span>Valor</span></li>
      </ul>

      <div class="flex justify-between items-center gap-4">
        <Button>Share to my friends</Button>
        <ButtonFavirite :favorite="favorite" />
      </div>
    </div>
  </article>
</template>

<script>
import { Button, ButtonFavorite  } from "./index";

export default {
  name: "CardPokemon",
  props: {
    pokemon: {
      type: Object,
      required: true,
      default: () => ({}),
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

.card__content {
  padding: 1.25rem 2rem;
  display: flex;
  height: 100%;
  flex-direction: column;
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
