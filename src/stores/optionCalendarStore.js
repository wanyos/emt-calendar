import { defineStore } from 'pinia'
import { ref, computed, reactive } from 'vue'

export const useOptionsCalendarStore = defineStore('optionsCalendar', () => {
  const options = ref({})
  const valor = ref(9);

 const getOptions = computed(() => options.value );
 const getValor = computed(() => valor.value + 2);

  const setOptions = (opt) => {
    options.value = {
      type: opt.type,
      group: opt.group,
      subgroup: opt.subgroup,
      year: opt.year
    }
    console.log('options store', options.value);
  }

  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { getOptions, getValor, valor, setOptions }
})
