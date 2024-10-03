<template>
  <form class="form" @submit.prevent="submitForm">
    <div class="fixed-top">
      <div class="form__div">
        <label for="selectType">Type</label>
        <select v-model="selectTypeCalendar">
          <option v-for="(item, index) in calendar" :key="index">
            {{ item }}
          </option>
        </select>
      </div>

      <div class="form__div">
        <label for="selectGroup">Group</label>
        <select v-model="selectGroup">
          <option v-for="(item, index) in group" :key="index">
            {{ item }}
          </option>
        </select>
      </div>
    </div>

      <div v-if="showSubgroup" class="form__div">
        <label for="selectSub">SubGroup</label>
        <select v-model="selectSub" name="selectSub">
          <option v-for="(item, index) in sub" :key="index">
            {{ item }}
          </option>
        </select>
      </div>

      <section v-if="showRefuerzo" class="form__div">
        <div class="section__div-radio">
          <input
            id="radioN"
            v-model="radioSelect"
            type="radio"
            name="option"
            value="number"
            checked
          />
          <label for="radioN" :class="labelClasses('number')">Number</label>
          <select v-model="selectNumber" :disabled="radioSelect === 'letter'">
            <option v-for="(item, index) in subRefuerzoN" :key="index">
              {{ item }}
            </option>
          </select>
        </div>

        <div class="section__div-radio">
          <input id="radioL" v-model="radioSelect" type="radio" name="option" value="letter" />
          <label for="radioL" :class="labelClasses('letter')">Letter</label>
          <select v-model="selectLetter" :disabled="radioSelect === 'number'">
            <option v-for="(item, index) in subRefuerzoL" :key="index">
              {{ item }}
            </option>
          </select>
        </div>
      </section>

    <div class="fixed-bottom">
      <div class="form__div">
        <label for="selectYear">Year</label>
        <select v-model="selectYear" name="selectYear">
          <option v-for="(item, index) in years" :key="index">
            {{ item }}
          </option>
        </select>
      </div>
      <div class="form__div-button">
        <Button type="button" text="Search" custom-class="px-4 py-1" @click="submitForm()" />
      </div>
    </div>

  </form>
</template>

<script setup>
import Button from '@/components/global-components/Button.vue'
import { ref, onMounted, computed, watch } from 'vue'
import constants from '@/constants/dataFormCalendar.js'
import { useOptionsCalendarStore } from '@/stores/optionCalendarStore'

let nowYear = new Date().getFullYear()

const calendar = ref([])
const group = ref([])
const sub = ref([])
const years = ref([])
const subRefuerzoN = ref([])
const subRefuerzoL = ref([])

const selectTypeCalendar = ref('')
const selectGroup = ref('')
const selectSub = ref('')
const selectYear = ref('')
const selectNumber = ref('')
const selectLetter = ref('')

onMounted(() => {
  calendar.value = constants.TYPE_CALENDAR
  group.value = constants.GROUP_FIVE
  sub.value = constants.SUB_H
  years.value = constants.YEARS
  subRefuerzoN.value = constants.SUB_REFUERZO_N
  subRefuerzoL.value = constants.SUB_REFUERZO_L

  selectTypeCalendar.value = constants.TYPE_CALENDAR.CONDUCTOR
  selectGroup.value = constants.GROUP_FIVE[0]
  selectSub.value = constants.SUB_H[0]
  selectYear.value = nowYear
})

const calendarStore = useOptionsCalendarStore()
const radioSelect = ref('number')


watch(selectTypeCalendar, (newValue) => {
  calendarStore.setTypeCalendar(newValue)
})

const showSubgroup = computed(() => {
  const validTypes = ['Conductor', 'Conductor-Buho', 'Inspector', 'Inspector-Noche', 'Grua', 'GruaDSM']; 
  return validTypes.includes(calendarStore.calendar_select); 
});

const showRefuerzo = computed(() => {
  const validTypes = ['Refuerzo-Nocturno']; 
  return validTypes.includes(calendarStore.calendar_select); 
});


const labelClasses = (value) => {
  const classes = computed(() => {
    return radioSelect.value === value ? '' : 'form__disabled-label'
  })
  return classes.value
}

/**
 * Existen 50 subgrupos, dependiendo de la seleccion del select grupo
 * se calculan el resto para incluirlos en el select de subgrupo
 * @param {*} select_value
 */
// function getArrayGruaDSM(selectValue) {
//   const array = []
//   let valor = parseInt(selectValue)
//   array.push(valor) // hay que incluir como primer número el mismo que el grupo
//   for (let a = 0; a < 9; a++) {
//     valor += 5
//     array.push(valor.toString())
//   }
//   return array
// }

const submitForm = () => {
  const opt = {
    type: selectTypeCalendar.value,
    group: selectGroup.value,
    subgroup: selectSub.value,
    year: selectYear.value
  }
  calendarStore.setOptions(opt)
}
</script>

<style scoped lang="css">
.form {
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
}

.form__div {
  padding: 0.5em 2em;
  display: flex;
  flex-direction: column;
}

.form__div select {
  margin-top: 5px;
  padding: 5px;
  border-radius: 5px;
  background-color: var(--second-background);
  cursor: pointer;
}

.form__div-button {
  padding: 1em;
  display: flex;
  justify-content: center;
}


.flexible__section {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
}

.section__div-radio label {
  margin-left: 5px;
}

.section__div-radio select {
  margin-left: 7px;
  font-size: 15px;
}
</style>
