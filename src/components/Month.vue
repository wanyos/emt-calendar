<template>
  <section class="section__month">
    <div v-for="{ item, index } in weekdays" :key="index" class="section__month-weekdays">
      {{ item }}
    </div>
  </section>
</template>

<script setup>
const weekdays = ['L', 'M', 'X', 'J', 'V', 'S', 'D']
</script>

<style lang="css" scoped>
.section__month {
  border: 1px solid white;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
}

.section__month-weekdays {
    grid-template-rows: 1 / 2;
}
</style>
