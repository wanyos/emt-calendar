<template>
  <section class="section-app main__second-color">
    <header class="header">
      <section class="header__messages">
        <p>{{ $route.name }}</p>
      </section>
    </header>

    <aside class="aside">
      <section class="aside__brand">
        <Icon :img-url="calendar" />
      </section>

      <SideBar />
    </aside>

    <main class="main">
      <router-view></router-view>
    </main>

    <footer class="footer">
      <p class="footer-cr">wanyos@copyright.com</p>
    </footer>
  </section>
</template>

<script setup>
import Icon from '@/components/icons/Icon.vue'
import calendar from '@/assets/img/calendar.svg'
import SideBar from '@/components/menu-sidebar/SideBar.vue'
</script>

<style scoped>
.section-app {
  max-width: 1940px;
  min-height: 100vh;
  margin: auto;
  display: grid;
  grid-template-columns: 16rem auto;
  grid-template-rows: 3rem auto 2rem;
}

.header {
  grid-column: 2 / 4;
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: auto;
}

.header__messages {
  display: flex;
  align-items: center;
  margin-left: 1em;
}

.aside {
  height: 100%;
  grid-column: 1 / 2;
  grid-row: 1 / 4;
  display: flex;
  flex-direction: column;
  border-right: 2px solid blue;
}

.aside__brand {
  border: 1px solid black;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main {
  grid-column: 2 / 4;
  grid-row: 2 / 3;
  background-color: rgb(0, 0, 0);
}

.footer {
  grid-column: 2 / 4;
  grid-row: 3 / 4;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
