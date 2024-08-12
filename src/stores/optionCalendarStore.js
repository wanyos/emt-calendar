import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useOptionsCalendarStore = defineStore('optionsCalendar', () => {
  // const options = ref([])
  const options = ref({})
  console.log('options store', options.value);

 const changes = computed(() => { return options.value });

// //  watch(options, newValue, oldValue, () => {
// //   console.log('options', options.value);
// //   console.log('newValue', newValue);
// //  });


  // const setOptions = (opt) => {
  //   options.value = opt
  //   console.log('options.value', options);
  // }

  return { options, changes }
})
