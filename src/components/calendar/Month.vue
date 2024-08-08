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

    <div class="div__separate"></div>

    <section class="section__body">
      <ul class="section__body-ul">
        <!-- <li v-for="(day, index) in props.days" :key="index" class="section__body-days">
          <component :is="day"></component>
        </li> -->
        <div class="section__body-days">1</div>
        <div class="section__body-days">2</div>
        <div class="section__body-days">3</div>
        <div class="section__body-days">4</div>
        <div class="section__body-days">5</div>
        <div class="section__body-days">6</div>
        <div class="section__body-days">7</div>
        <div class="section__body-days">8</div>
        <div class="section__body-days">9</div>

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
  border: 2px solid blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.section__title {
  margin: auto;
}

.section__head {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 1fr;
  justify-items: center;
}

.article__head-weekdays {
  width: 2em;
  height: 2em;
  font-size: 1em;
  display: flex;
  align-items: center;
}

.div__separate {
  border: 1px solid blue;
  width: 95%;
  grid-column: 1 / 8;
  height: 5px;
  margin: auto;
}

.section__body {

}

.section__body-ul {
  padding: 0;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 10px;
}

.section__body-days {
  border: 1px solid red;
  text-align: center;
  font-size: 0.8em;
}
</style>
