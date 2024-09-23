<template>
  <div>
    <component
      :is="props.type"
      :to="props.to"
      :href="props.url"
      :class="props.customClass"
      :disabled="props.state"
      class="button"
    >
      <component :is="props.iconLeading" />
      <slot name="iconLeading"></slot>
      <span :class="props.customClassText">
        {{ props.text }}
      </span>
      <slot name="iconTrailing"></slot>
      <component :is="props.iconTrailing" />
    </component>
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    required: true
  },
  to: {
    type: [Object, Function],
    default: () => {}
  },
  text: {
    type: String,
    required: true
  },
  url: {
    type: String,
    default: undefined
  },
  state: {
    type: Boolean,
    default: false
  },
  customClass: {
    type: String,
    default: ''
  },
  iconLeading: {
    type: [Object, Function],
    default: () => {}
  },
  iconTrailing: {
    type: [Object, Function],
    default: () => {}
  },
  customClassText: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.button {
  cursor: pointer;
  border: 1px solid var(--border-main);
  border-radius: 10px;
  background-color: var(--button-background);
}

.button:hover {
  background-color: rgba(0, 0, 0, 0.7);
  border-bottom: 1px solid white;
}

.button:focus {
  border-bottom: 1px solid white;
}

.button:disabled {
  background-color: rgba(0, 0, 0, 0.2);
  cursor: not-allowed;
  pointer-events: none;
}
</style>
