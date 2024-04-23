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

<template>
  <section class="section-app">

    <header>

      <section>
        <label for="">Brand</label>
      </section>

      <section>
        <label for="">Messages</label>
      </section>

    </header>

    <aside>
      <nav>
        <ul>
          <li>
            <RouterLink to="/">Report</RouterLink>
            <RouterLink to="/calendar">Calendar</RouterLink>
            <RouterLink>My Calendar</RouterLink>
            <RouterLink>Settings</RouterLink>
          </li>
        </ul>
      </nav>
    </aside>

    <main>
      <label for="">main</label>
      <RouterView></RouterView>
    </main>

    <footer>
      <p>wanyos@copyright.com</p>
    </footer>
  </section>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Icon from './components/icons/Icon.vue'
import calendar from './assets/img/calendar.svg'
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <h1>hello app</h1>
  <RouterView />
</template>

<style scoped></style>
