<template>
  <section class="section__main">
    <slot name="iconLeading"></slot>
    <div class="title">
      <p class="text-lg">{{ props.title }}</p>
      <p class="text-base">{{ props.subtitle }}</p>
    </div>
    <slot name="iconTrailing"></slot>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
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

<style lang="css" scoped>
.section__main {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
