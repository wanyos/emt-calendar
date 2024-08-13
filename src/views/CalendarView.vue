<template>
  <section class="section__calendar">

    <Month v-for="(item, index) in months" :key="index" :name=item.nameM :days="item.tDays" />
   
  </section>
</template>

<script setup>
import Month from '@/components/calendar/Month.vue'
import { getCalendar } from '@/calendars/createCalendar.js'
import { useOptionsCalendarStore } from '@/stores/optionCalendarStore.js'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue';

let nowYear = ref(new Date().getFullYear());

const storeOptions = useOptionsCalendarStore();
const { getOptions, getValor, valor } = storeToRefs(storeOptions);

console.log('valor', valor);
console.log('computed', getValor.value);

const getYear = computed(() => { return (getOptions.value === undefined) ? nowYear : getOptions.value });
const months = computed(() => getCalendar(2024) );

// console.log('computed year: ', getYear.value);
// console.log('nowYear', nowYear.value);

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
