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
  border: 1px solid white;
  display: inline-block;
  padding: 5px 15px;
  border: 1px solid var(--border-main);
  border-radius: 10px;
  text-align: center;
  background-color: var(--button-background);
}
</style>
