<template>
  <section class="section__month">
    <section class="section__title">
      <label> {{ props.name }} </label>
    </section>

    <section class="section__head">
      <article v-for="(weekday, index) in weekdays" :key="index" class="article__head-weekdays">
        {{ weekday }}
      </article>
    </section>

    <section class="section__body">
      <ul class="section__body-ul">
        <li v-for="(day, index) in props.days" :key="index" class="section__body-days">
          {{ day }}
           <!-- <component :is="day"></component> -->
        </li>

      </ul>
    </section>
  </section>
</template>

<script setup>
const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  days: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="css" scoped>




.section__month {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--month-background);
  border-radius: 10px;
  padding: 15px;
}

.section__title {
  margin: auto;
  background-color: var(--month-background);
  
}

.section__head {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 1fr;
  justify-items: center;
  background-color: var(--month-background);
 
}

.article__head-weekdays {
  width: 2em;
  height: 2em;
  font-size: 1em;
  display: flex;
  align-items: center;
  background-color: var(--month-background);
}


.section__body {
  background-color: var(--month-background);
}

.section__body-ul {
  padding: 0;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 10px;
  background-color: var(--month-background);
}

.section__body-days {
  border: 1px solid rgb(88, 201, 224);
  background-color: var(--second-background);
  text-align: center;
  font-size: 0.8em;
}
</style>
