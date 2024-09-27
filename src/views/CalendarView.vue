<template>
  <section class="section__header">
    <HeaderCalendar />
  </section>
  <section class="section__calendar">
    <Month v-for="(item, index) in months" :key="index" :name="item.nameM" :days="item.tDays" />
  </section>
</template>

<script setup>
import HeaderCalendar from '../components/global-components/HeaderCalendar.vue'
import Month from '@/components/calendar/Month.vue'
import { getCalendar } from '@/calendars/createCalendar.js'
import { useOptionsCalendarStore } from '@/stores/optionCalendarStore.js'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const storeOptions = useOptionsCalendarStore()
const { getYear } = storeToRefs(storeOptions)
const months = computed(() => getCalendar(getYear.value))
</script>

<style scoped lang="css">
.section__header {
  margin-top: 1em;
}

.section__calendar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 15px;
  margin: 20px;
}
</style>
