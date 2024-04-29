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
    required: true
  }
})
</script>

<style lang="css" scoped>
.nav-ul {
  list-style: none;
  margin-top: 2em;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-item {
  border: 1px solid black;
  width: 90%;
  padding: 5px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 1em;
  text-decoration: none;
  border: none;
}

.nav-item:hover {
  background-color: #5d636a;
  border-bottom: 1px solid white;
  transition: 0.7s;
}
</style>
