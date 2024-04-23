<template>
  <main class="main-container">

    <aside class="menu-container">
      <section class="titulo icon">
        <h1>Calendar</h1>
        <Icon :svg="calendar" class="icon" />
      </section>
      <Report />
    </aside>

    <RouterView />
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Icon from './components/icons/Icon.vue'
import calendar from './assets/img/calendar.svg'
import Report from './components/Report.vue';
</script>

<style scoped>

.menu-container {
  border: 1px solid black;
  max-width: 15%;
  height: 100vh;
}

.titulo {
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.icon {
  margin-left: 5px;
}
</style>
