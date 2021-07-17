<template>
  <article class="empty-card">
    <h1 class="empty-card__title">Uh-oh!</h1>

    <p class="empty-card__text">You look lost on your journey!</p>

    <router-link to="/discover">
      <Button>Go back home</Button>
    </router-link>
  </article>
</template>

<script>
import { Button } from "./index";

export default {
  name: "EmptyList",
  components: { Button },
};
</script>

<style scoped>
.empty-card {
  text-align: center;
}
.empty-card__title {
  font-size: 36px;
  font-weight: bold;
  line-height: 43.2px;
  color: var(--gray-600);
}
.empty-card__text {
  font-size: 20px;
  line-height: 30px;
  color: var(--gray-500);
  text-align: center;
}
</style>
