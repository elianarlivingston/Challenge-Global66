<template>
  <div class="loading">
    <figure>
      <img src="../assets/Loading.svg" alt="" />
    </figure>
  </div>
</template>

<script>
export default {
  name: "Spinner",
};
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
}
.loading figure {
  width: 60px;
  height: 60px;
}
.loading img {
  display: block;
  width: 100%;
  height: 100%;
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