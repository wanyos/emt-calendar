import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useOptionsCalendarStore = defineStore('optionsCalendar', () => {
  const options = ref([])

  const setOptions = (opt) => {
    options.value = opt
    console.log('update', options.value)
  }

  return { setOptions, options }
})
