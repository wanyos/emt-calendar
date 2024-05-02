import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useOptionsCalendarStore = defineStore('optionsCalenadar', () => {
  const options = ref([])

  const setOptions = (opt) => {
    options.value = opt
  }

  return { setOptions, options }
})
