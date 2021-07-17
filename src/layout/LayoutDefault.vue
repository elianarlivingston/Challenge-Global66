<template>
  <div class="default-layout">
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "LayoutDefault",
};
</script>

<style scoped>
.default-layout {
  background-color: var(--gray-100);
}
main {
  width: 100%;
  height: 100vh;
  padding: 2.25rem 2rem;
  max-width: var(--max-width);
  margin: 0 auto;
}
@media (min-width: 640px) {
  main {
    padding: 0;
  }
}
</style>
