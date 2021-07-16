<template>
  <main>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </main>
</template>

<script>
export default {
  name: "LayoutDefault",
};
</script>

<style scoped>
main {
  width: 100%;
  height: 100vh;
  padding: 2.25rem 2rem;
  max-width: var(--max-width);
  background-color: var(--gray-100);
}
</style>
