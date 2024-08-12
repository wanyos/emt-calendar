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
      <component :is="iconLeading"></component>
      {{ props.text }}
      <component :is="iconTrailing"></component>
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
  }
})
</script>

<style scoped>
.button {
  cursor: pointer;
  border: 1px solid rgb(88, 201, 224);
  border-radius: 10px;
  text-align: center;
  background-color: rgb(0, 0, 0, 0.6);
}

.button:hover {
  background-color: rgb(0, 0, 0, 0.3);
  border-bottom: 1px solid white;
}

.button:focus {
  background-color: rgb(0, 0, 0, 0.4);
}

.button:disabled {
  background-color: rgb(0, 0, 0, 0.2);
  cursor: not-allowed;
  pointer-events: none;
}
</style>
