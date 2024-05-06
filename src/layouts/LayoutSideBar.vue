<template>
  <nav class="aside__nav">
    <ul class="nav-ul">
      <slot>
        <component :is="props.dataMenu"></component>
      </slot>
    </ul>
  </nav>
</template>

<script setup>
const props = defineProps({
  dataMenu: {
    type: Object,
    default: null
  }
})
</script>

<style lang="css" scoped>
.nav-ul {
  list-style: none;
  margin-top: 1em;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
