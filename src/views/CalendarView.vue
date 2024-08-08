<template>
  <section class="section__calendar">
    <Month name="January" />
    <label for="">{{ options }}</label>
  </section>
</template>

<script setup>
// import Month from '@/components/Month.vue'
// import { getCalendar } from '@/calendars/createCalendar.js'
import { useOptionsCalendarStore } from '@/stores/optionCalendarStore.js'
import { nextTick, watch, computed } from 'vue'
import { storeToRefs } from 'pinia'
// import Day from '@/components/Day.vue'

const store = useOptionsCalendarStore()
const { options } = storeToRefs(store)

const opt = computed(() => options)

watch(options, (newValue, oldValue) => {
  console.log('options', options.value)
})
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
