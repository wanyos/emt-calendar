<template>
  <form action="" class="form" @submit.prevent="submitForm">
    <div class="form__div">
      <label for="selectType">Type</label>
      <select v-model="selectTypeCalendar" name="selectType">
        <option v-for="(item, index) in props.typeCalendar" :key="index" :value="item">
          {{ item }}
        </option>
      </select>
    </div>

    <div class="form__div">
      <label for="selectGroup">Group</label>
      <select v-model="selectGroup" name="selectGroup">
        <option v-for="(item, index) in props.typeGroup" :key="index" :value="item">
          {{ item }}
        </option>
      </select>
    </div>

    <div class="form__div">
      <label for="selectSub">SubGroup</label>
      <select v-model="selectSub" name="selectSub">
        <option v-for="(item, index) in props.typeSub" :key="index" :value="item">
          {{ item }}
        </option>
      </select>
    </div>

    <div class="form__div">
      <label for="selectYear">Year</label>
      <select v-model="selectYear" name="selectYear">
        <option v-for="(item, index) in props.typeYear" :key="index" :value="item">
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
import { ref } from 'vue'

const selectTypeCalendar = ref('')
const selectGroup = ref('')
const selectSub = ref('')
const selectYear = ref('')

const props = defineProps({
  typeCalendar: {
    type: Array,
    required: true
  },
  typeGroup: {
    type: Array,
    required: true
  },
  typeSub: {
    type: Array,
    required: true
  },
  typeYear: {
    type: Array,
    required: true
  }
})

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
  padding: 1em;
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
</style>
