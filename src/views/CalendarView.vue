<template>
  <section class="section__calendar">
    <Month name="January" />
  </section>
</template>

<script setup>
import Month from '@/components/calendar/Month.vue'
// import Day from '@/components/calendar/Day.vue'
</script>

<style scoped lang="css">
.section__calendar {
  border: 2px solid white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;
}
</style>
