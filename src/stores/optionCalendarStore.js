import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import constants from '@/constants/dataFormCalendar.js'

export const useOptionsCalendarStore = defineStore('optionsCalendar', () => {
  let options = ref({})
  let nowYear = new Date().getFullYear();

const getType = computed(() => options.value.type === undefined ? constants.typeCalendar[0] : options.value.type );
const getGroup = computed(() => options.value.group === undefined ? constants.groupFive[0] : options.value.group );
const getSubgroup = computed(() => options.value.subgroup === undefined ? constants.groupFive[0] : options.value.subgroup ); 
const getYear = computed(() => options.value.year === undefined ? nowYear : parseInt(options.value.year));

  const setOptions = (opt) => {
    options.value = {
      type: opt.type,
      group: opt.group,
      subgroup: opt.subgroup,
      year: opt.year
    }
  }


  return { getType, getGroup, getSubgroup, getYear, setOptions }
})

