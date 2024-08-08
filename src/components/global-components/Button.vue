<template>
  <div>
    <button class="button">
      {{ props.text }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  isDisabled: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.button {
  cursor: pointer;
  border: 1px solid blue;
  padding: 10px 15px;
  border-radius: 10px;
  text-align: center;
  background-color: transparent;
}

.button:hover {
  background-color: rgb(0, 0, 0, 0.4);
  border-bottom: 1px solid white;
}

.button:focus {
  background-color: rgb(0, 0, 0, 0.4);
}

.button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
}
</style>
