<template>
  <section class="section__calendar">

    <Month v-for="(item, index) in months" :key="index" :name=item />
   
  </section>
</template>

<script setup>
import Month from '@/components/calendar/Month.vue'
import { getCalendar } from '@/calendars/createCalendar.js'
import { useOptionsCalendarStore } from '@/stores/optionCalendarStore.js'
import { nextTick, watch, computed } from 'vue'
import { storeToRefs } from 'pinia'
// import Day from '@/components/Day.vue'

const store = useOptionsCalendarStore()
const { options } = storeToRefs(store)
const months = ["Jannuary", "February", "March", "April"]

const opt = computed(() => options)

const cl = getCalendar(2024);
console.log('year', cl);

watch(options, (newValue, oldValue) => {
  console.log('options', options.value)
})
</script>

<style scoped lang="css">
.section__calendar {

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;
  margin: 20px;
}
</style>
