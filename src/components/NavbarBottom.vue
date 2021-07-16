<template>
  <aside class="navbar-bottom">
    <nav class="navbar-bottom__nav">
      <router-link to="/discover" v-slot="{ isActive }">
        <Button block :color="isActive ? 'primary' : 'secondary'">
          <template v-slot:iconLeft>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              class="bi bi-list-ul"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
              />
            </svg>
          </template>
          <span>All</span>
        </Button>
      </router-link>

      <router-link to="/favorite" v-slot="{ isActive }">
        <Button block :color="isActive ? 'primary' : 'secondary'">
          <template v-slot:iconLeft>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              class="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
              />
            </svg>
          </template>
          <span>Favorite</span>
        </Button>
      </router-link>
    </nav>
  </aside>
</template>

<script>
import { Button } from "./index";

export default {
  name: "NavbarBottom",
  components: { Button },
};
</script>

<style scoped>
nav a {
  display: flex;
  width: 100%;
}

.navbar-bottom {
  padding: 1.25em 2em;
  width: 100%;
  position: sticky;
  left: 0;
  bottom: 0;
  background-color: var(--gray-50);
  box-shadow: var(--shadow-lg);
}

.navbar-bottom__nav {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 0 auto;
  max-width: var(--max-width);
}
</style>
