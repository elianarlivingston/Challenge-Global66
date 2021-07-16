<template>
  <button class="btn" :class="className" :disabled="disabled">
    <slot name="iconLeft"></slot>
    <slot></slot>
    <slot name="iconRight"></slot>
  </button>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
  name: 'Button',
  props: {
    onlyIcon: {
      type: Boolean,
      required: false,
      default: false,
    },
    color: {
      type: String,
      required: false,
      default: 'primary'
    },
    block: {
      type: Boolean,
      required: false,
      default: false,
    },
    classList: {
      type: String,
      required: false,
      default: ''
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    const COLORS = {
      'primary': 'btn--primary',
      'secondary': 'btn--secondary'
    }

    const className = computed(() => {
      const color = COLORS[props.color]
      const onlyIcon = props.onlyIcon ? 'btn--onlyicon' : ''
      const block = props.block ? 'btn--block' : ''
      const classes = props.classList

      return [color, onlyIcon, block, classes].join(' ')
    })
    
    return { className }
  }
}
</script>

<style scoped>
.btn {
  display: inline-flex;
  gap: .5rem;
  align-items: center;
  padding: .6em 1.25em;
  border: none;
  border-radius: var(--rounded-full);
  font-size: 1.125rem;
  line-height: 21.6px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
}

.btn--onlyicon {
  width: 2.8rem;
  height: 2.8rem;
  justify-content: center;
  padding: .58em;
}

.btn--block {
  display: flex;
  justify-content: center;
  width: 100%;
}

.btn--primary {
  background-color: var(--color-primary);
  color: var(--gray-100);
  transition: background .3s ease-in-out;
}

.btn--primary:hover,
.btn--primary:active {
  background-color: var(--color-primary-dark);
  transition: background .3s ease-in-out;
}

.btn--secondary {
  background-color: var(--gray-200);
  color: var(--gray-400);
  transition: background .3s ease-in-out;
}

.btn:disabled {
  background-color: var(--gray-400);
}
</style>