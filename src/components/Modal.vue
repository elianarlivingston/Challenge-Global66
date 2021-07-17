<template>
  <teleport to="#modals">
    <transition name="fade" appear mode="out-in">
      <div
        v-show="modelValue"
        role="dialog"
        :aria-modal="modelValue"
        class="modal-wrapper"
        @click="toggleModal"
      >
        <transition v-show="modelValue" name="scale" appear mode="in-out">
          <section class="modal" @click.stop>
            <header class="modal__header">
              <button
                aria-label="Close modal"
                @click="toggleModal"
                class="modal__btn-close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  class="bi bi-x-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
                  />
                </svg>
              </button>
            </header>

            <slot></slot>
          </section>
        </transition>
      </div>
    </transition>
  </teleport>
</template>

<script>
export default {
  name: "Modal",
  props: {
    modelValue: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props, { emit }) {
    const toggleModal = () => {
      const newValue = !props.modelValue;
      emit("update:modelValue", newValue);
    };

    return { toggleModal };
  },
};
</script>

<style scoped>
.modal-wrapper {
  width: 100%;
  height: 100vh;
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  padding: 2rem;
  background-color: var(--mask);
}

.modal {
  width: 100%;
  max-width: var(--max-width);
  height: 100%;
  max-height: var(--max-height);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
}

.modal__header {
  width: 100%;
  text-align: right;
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
}

.modal__btn-close svg {
  fill: var(--white);
}
</style>
