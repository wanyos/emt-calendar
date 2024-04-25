<template>
  <section class="section-app">

    <header class="header">
      <section class="header__brand">
        <Brand />
      </section>

      <section class="header__messages">
        <p>Messages</p>
      </section>
    </header>

    <aside class="aside">
      <nav class="aside__nav">
        <ul class="nav--ul">
          <router-link class="nav--item" to="/">Report</router-link>
          <router-link class="nav--item" to="/calendar">Calendar</router-link>
          <router-link class="nav--item" to="/my_calendar">My Calendar</router-link>
          <router-link class="nav--item" to="/settings">Settings</router-link>
        </ul>
      </nav>
    </aside>

    <main class="main">
      <router-view></router-view>
    </main>

    <footer class="footer">
      <p class="footer--cr">wanyos@copyright.com</p>
    </footer>
  </section>
</template>

<script setup>
import Brand from '@/components/Brand.vue'
</script>

<style scoped>
.section-app {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 4rem auto 4rem;
  gap: 1rem;
}

.header {
  grid-column: 1 / 4;
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: auto;
}

.header__brand {
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 25px lightgrey;
}

.header__messages {
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 25px lightgrey;
  padding: 10px;
}

.aside {
  height: 90vh;
  grid-column: 1 / 2;
  grid-row: 2 / 4;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 25px lightgrey;
}

.nav--ul {
  list-style: none;
  margin-top: 2em;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav--item {
  border: 1px solid black;
  width: 90%;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 1em;
  text-decoration: none;
  border-radius: 10px;
}

.nav--item:hover {
  background-color: aliceblue;
}

.main {
  height: 100%;
  grid-column: 2 / 4;
  grid-row: 2 / 4;
  box-shadow: 0px 0px 25px lightgrey;
  padding: 10px;
}

.footer {
  grid-column: 2 / 4;
  grid-row: 3 / 4;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 25px lightgrey;
}

</style>
