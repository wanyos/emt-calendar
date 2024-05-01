<template>
  <form class="form" @submit.prevent="submitForm">
    <div class="form__div">
      <label for="selectType">Type</label>
      <select v-model="selectTypeCalendar" @change="setTypeGroup">
        <option v-for="(item, index) in calendar" :key="index" :value="item">
          {{ item }}
        </option>
      </select>
    </div>

    <div class="form__div">
      <label for="selectGroup">Group</label>
      <select v-model="selectGroup" @change="setTypeGroup">
        <option v-for="(item, index) in group" :key="index" :value="item">
          {{ item }}
        </option>
      </select>
    </div>

    <div v-if="showSubgroup" class="form__div">
      <label for="selectSub">SubGroup</label>
      <select v-model="selectSub" name="selectSub">
        <option v-for="(item, index) in sub" :key="index" :value="item">
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
          <option v-for="(item, index) in subRefuerzoN" :key="index" :value="item">
            {{ item }}
          </option>
        </select>
      </div>

      <div class="section__div-radio">
        <input id="radioL" v-model="radioSelect" type="radio" name="option" value="letter" />
        <label for="radioL" :class="labelClasses('letter')">Letter</label>
        <select v-model="selectLetter" :disabled="radioSelect === 'number'">
          <option v-for="(item, index) in subRefuerzoL" :key="index" :value="item">
            {{ item }}
          </option>
        </select>
      </div>
    </section>

    <div class="form__div">
      <label for="selectYear">Year</label>
      <select v-model="selectYear" name="selectYear">
        <option v-for="(item, index) in years" :key="index" :value="item">
          {{ item }}
        </option>
      </select>
    </div>

    <div class="form__div">
      <button type="submit">Search</button>
    </div>
  </form>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import constants from '@/constants/dataFormCalendar.js'

const selectTypeCalendar = ref('')
const selectGroup = ref('')
const selectSub = ref('')
const selectYear = ref('')
const selectNumber = ref('')
const selectLetter = ref('')

const calendar = ref([])
const group = ref([])
const sub = ref([])
const years = ref([])
const subRefuerzoN = ref([])
const subRefuerzoL = ref([])

const showSubgroup = ref(true)
const showRefuerzo = ref(false)
const radioSelect = ref('number')

onMounted(() => {
  calendar.value = constants.typeCalendar
  group.value = constants.groupFive
  sub.value = constants.subH
  years.value = constants.years
  subRefuerzoN.value = constants.subRefuerzoN
  subRefuerzoL.value = constants.subRefuerzoL
})

const labelClasses = (value) => {
  const classes = computed(() => {
    return radioSelect.value === value ? '' : 'form__disabled-label'
  })
  return classes.value
}

const typeCalendarConfig = {
  'Conductor': {
    group: constants.groupFive,
    sub: constants.subH,
    showRefuerzo: false,
    showSubgroup: true
  },
  'Conductor-Buho': {
    group: constants.groupFive,
    sub: constants.subH,
    showRefuerzo: false,
    showSubgroup: true
  },
  'GruaDSM-Noche': { group: constants.groupThree, showRefuerzo: false, showSubgroup: false },
  'ParkingDSM-100': { group: constants.groupTen, showRefuerzo: false, showSubgroup: false },
  'ParkingDSM-50': { group: constants.groupTwelve, showRefuerzo: false, showSubgroup: false },
  'Refuerzo-Nocturno': { group: constants.groupTwo, showRefuerzo: true, showSubgroup: false },
  'GruaDSM': {
    group: constants.groupFive,
    sub: getArrayGruaDSM(selectGroup.value),
    showRefuerzo: false,
    showSubgroup: true
  },
  'Inspector': {
    group: constants.groupFive,
    sub: constants.subJ,
    showRefuerzo: false,
    showSubgroup: true
  },
  'Inspector-Noche': {
    group: constants.groupFive,
    sub: constants.subJ,
    showRefuerzo: false,
    showSubgroup: true
  },
  'Grua': { group: constants.groupFive, sub: constants.subC, showRefuerzo: false, showSubgroup: true }
}

const setTypeGroup = () => {
  const config = typeCalendarConfig[selectTypeCalendar.value]
  if (config) {
    group.value = config.group
    showSubgroup.value = config.showSubgroup
    showRefuerzo.value = config.showRefuerzo
    sub.value = config.sub || null
  }
}

/**
 * Existen 50 subgrupos, dependiendo de la seleccion del select grupo
 * se calculan el resto para incluirlos en el select de subgrupo
 * @param {*} select_value
 */
function getArrayGruaDSM(selectValue) {
  const array = []
  let valor = parseInt(selectValue)
  array.push(valor) // hay que incluir como primer número el mismo que el grupo
  for (let a = 0; a < 9; a++) {
    valor += 5
    array.push(valor.toString())
  }
  return array
}

const submitForm = () => {
  console.log('valor', selectTypeCalendar)
  console.log('valor', selectGroup)
  console.log('valor', selectSub)
  console.log('valor', selectYear)
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
  background-color: lightslategrey;
}

.form__div button {
  border: 1px solid blue;
  padding: 10px 15px;
  border-radius: 10px;
}

.form__div button:hover {
  background-color: #5d636a;
  border-bottom: 1px solid white;
  transition: 0.7s;
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

.form__disabled-label {
  color: gray;
}
</style>
