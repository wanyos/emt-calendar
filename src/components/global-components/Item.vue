<template>
  <section class="section__main">
    <Icon :img-url="props.svg" />
    <div class="title">
      <p class="text-lg">{{ props.title }}</p>
      <p class="text-base">{{ props.subtitle }}</p>
    </div>
  </section>
</template>

<script setup>
import Icon from '@/components/icons/Icon.vue'

const props = defineProps({
  svg: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
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
