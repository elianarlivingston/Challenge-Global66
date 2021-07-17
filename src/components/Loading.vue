<template>
  <div class="loading">
      <figure>
          <img src="../assets/Loading.svg" alt="">
      </figure>
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style scoped>
.loading {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--gray-100);
}
.loading img {
    display: block;
    width: auto;
    height: auto;
    animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>