<template>
  <article>
    <img :src="props.imgUrl" :class="props.size" alt="image screen" />
  </article>
</template>

<script setup>
const props = defineProps({
  imgUrl: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'h-6 w-6'
  }
})
</script>
