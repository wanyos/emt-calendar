<template>
  <main class="main-container">

    <aside class="side-bar">
      <header class="titulo icon">
        <h1>Calendar</h1>
        <Icon :svg="calendar" class="icon" />
      </header>

      <section class="section-nav">
        <nav class="nav">

          <section class="section-tipo">
            <label for="calendar">Tipo Calendario</label>
            <select id="tc" name="tipo">
              <option value="0">----</option>
              <option value="1">Conductor</option>
              <option value="2">Inspector</option>
              <option value="3">Inspector noche</option>
            </select>
          </section>


          <section class="section-select">
            <label for="grupo">Grupo</label>
            <select id="gr" name="grupo">
              <option value="0">----</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </section>

          <section class="section-select">
            <label for="subgrupo">Subgrupo</label>
            <select id="sb" name="grupo">
              <option value="0">----</option>
              <option value="1">A</option>
              <option value="2">B</option>
              <option value="3">C</option>
            </select>
          </section>

          <section class="section-select">
            <label for="year">Year</label>
            <select id="ye" name="year">
              <option value="0">----</option>
              <option value="1">2020</option>
              <option value="2">2021</option>
              <option value="3">2022</option>
            </select>
          </section>

          <div class="div-btn">
            <button>Search</button>
          </div>

        </nav>
      </section>
    </aside>

    <RouterView />
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Icon from './components/icons/Icon.vue'
import calendar from './assets/img/calendar.svg'
</script>

<style scoped>

.side-bar {
  border: 1px solid black;
  height: 100vh;
  overflow: hidden;
  width: 20%;
}

.titulo {
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2);
}

.icon {
  margin-left: 5px;
}

.nav {
  font-family: 'Courier New', Courier, monospace;
}

.section-nav {
  width: 100%;
  margin-top: 20px;
}

.section-select {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
}

.section-select label {
  font-family: 'Courier New', Courier, monospace;
  margin-left: auto;
  margin-right: auto;
}

.section-select select {
  width: 80px;
  padding: 4px;
  text-align: center;
}

.section-tipo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-tipo label {
  padding: 10px;
}

.section-tipo select {
  width: 80%;
  text-align: center;
  padding: 3px;
  margin-bottom: 40px;
}

.div-btn {
  margin-top: 50px;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
}

.div-btn button {
  padding: 10px 30px;
  border-radius: 10%;
  cursor: pointer;
}

.div-btn button:hover {
  background-color: lightskyblue;
}

</style>
