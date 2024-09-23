<template>
  <form class="form" @submit.prevent="submitForm">
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
  </form>
  <p>{{ getOptions }}</p>
</template>

<script setup>
import Button from '@/components/global-components/Button.vue'
import { ref, onMounted, computed } from 'vue'
import constants from '@/constants/dataFormCalendar.js'
import { useOptionsCalendarStore } from '@/stores/optionCalendarStore'
import { storeToRefs } from 'pinia'

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

const storeOptions = useOptionsCalendarStore()
const { getOptions } = storeToRefs(storeOptions)
const { setOptions } = storeOptions

const showSubgroup = ref(true)
const showRefuerzo = ref(false)
const radioSelect = ref('number')

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
  setOptions(opt)
}
</script>

<style scoped lang="css">
.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

.form__div select:hover {
}

.form__div-button {
  padding: 1em;
  display: flex;
  justify-content: center;
}

.section__div-radio {
  display: flex;
  justify-content: center;
  align-items: center;
}

.section__div-radio label {
  margin-left: 5px;
}

.section__div-radio select {
  margin-left: 7px;
  font-size: 15px;
}
</style>
