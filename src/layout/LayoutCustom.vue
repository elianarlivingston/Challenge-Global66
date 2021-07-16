<template>
  <div class="custom-layout">
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </main>
    <NavbarBottom></NavbarBottom>
  </div>
</template>

<script>
import { NavbarBottom } from "../components/index";

export default {
  name: "LayoutCustom",
  components: { NavbarBottom },
};
</script>

<style scoped>
.custom-layout {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr;
}

main {
  width: 100%;
  height: 100%;
  padding: 2.25rem 2rem;
  max-width: var(--max-width);
  overflow-y: auto;
  background-color: var(--gray-100);
}
</style>
