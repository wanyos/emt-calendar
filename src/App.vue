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
            <router-link to="/">Report</router-link>
            <router-link to="/calendar">Calendar</router-link>
            <!-- <router-link>My Calendar</router-link>
            <router-link>Settings</router-link> -->
          </li>
        </ul>
      </nav>
    </aside>

    <main>
      <label for="">main</label>
      <router-view></router-view>
    </main>

    <footer>
      <p>wanyos@copyright.com</p>
    </footer>

  </section>

</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<style scoped>

.section-app {
  border: 1px solid red;
  height: 100vh;
  grid-template-columns: 150px auto;
  grid-template-rows: 50px auto 50px;
}

header {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  border: 1px solid black;
}

aside {
  grid-column: 1 / 2;
  grid-row: 2 / 4;
  height: 100vh;
  border: 1px solid blue;
}

footer {
  grid-column: 2 / 4;
  grid-row: 2 / 3;
  border: 1px solid black;
}

</style>
