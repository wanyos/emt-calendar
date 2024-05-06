// example use name the route in application
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCurrentPagesStore = defineStore('currentPages', () => {
  const namePage = ref('')

  const getNamePage = computed(() => namePage)

  const setNamePage = (name) => {
    namePage.value = name
  }

  return { getNamePage, setNamePage }
})
