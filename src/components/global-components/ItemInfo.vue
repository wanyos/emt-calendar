<template>
  <section class="section__main">
    <label> {{ props.title }} </label>
    <label class="ml-2"> {{ props.message }} </label>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  message: {
    type: String,
    default: ''
  }
})
</script>

<style lang="css" scoped>
.section__main {
  display: inline-block;
  padding: 5px 15px;
  text-align: center;
  border-bottom: 1px solid var(--border-main);
}

.section__main label {
  color: var(--ntp-logo-color);
}
</style>
