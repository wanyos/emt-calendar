<template>
  <section class="section__calendar">

    <Month v-for="(item, index) in months" :key="index" :name=item.nameM :days="item.tDays" />
   
  </section>
</template>

<script setup>
import Month from '@/components/calendar/Month.vue'
import { getCalendar } from '@/calendars/createCalendar.js'
import { useOptionsCalendarStore } from '@/stores/optionCalendarStore.js'
import { nextTick, watch, computed } from 'vue'
import { storeToRefs } from 'pinia'


const store = useOptionsCalendarStore()
console.log('options pos', store.options);

const months = getCalendar(2024);
// console.log('year', months);


</script>

<style scoped lang="css">
.section__calendar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 15px;
  margin: 20px;
  background: none;
}
</style>
