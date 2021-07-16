<template>
  <form @submit.prevent="emit('submit', $event.target.value)">
    <div class="search">
      <span class="search__icon" aria-hidden>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
          />
        </svg>
      </span>
      <input
        type="search"
        placeholder="Search"
        class="search__input"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: "Search",
  props: {
    modelValue: String,
  },
  setup(props, { emit }) {
    return { emit };
  },
};
</script>

<style scoped>
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none;
}

form {
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 1.5rem;
  padding-bottom: 0;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--gray-100);
}

.search {
  width: 100%;
  font-size: 1rem;
  padding: 0.75em;
  border: 1px solid transparent;
  border-radius: var(--rounded);
  background-color: var(--gray-50);
  box-shadow: var(--shadow);
  display: flex;
  gap: 1rem;
  align-items: center;
  transition: border 0.3s ease-in-out;
  max-width: var(--max-width);
  margin: 0 auto;
}

.search:focus-within {
  border-color: var(--gray-400);
  transition: border 0.3s ease-in-out;
}

.search__icon svg {
  fill: var(--gray-400);
}

.search__input {
  font-size: inherit;
  padding: 0;
  margin: 0;
  display: flex;
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  color: var(--gray-600);
}

.search__input::placeholder {
  color: var(--gray-400);
}
</style>
