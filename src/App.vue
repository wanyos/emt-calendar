<template>
  <section class="section-app">
    <header class="header main__second-color">
      <section class="header__messages">
        <p>{{ $route.name }}</p>
      </section>
    </header>

    <aside class="aside main__second-color">
      <section class="aside__brand main__second-color">
        <Icon :img-url="calendar" />
      </section>

      <SideBar />
    </aside>

    <main class="main">
      <router-view></router-view>
    </main>

    <footer class="footer main__second-color">
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
  min-height: 100vh;
  display: grid;
  grid-template-columns: 16rem auto;
  grid-template-rows: 3rem auto 2rem;
  background-color: #3b4c5d;
}

.header {
  grid-column: 2 / 4;
  grid-row: 1 / 2;
  display: flex;
}

.header__messages {
  border: 2px solid black;
  display: flex;
  align-items: center;
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
  grid-row: 2 / 4;
}

.footer {
  grid-column: 2 / 4;
  grid-row: 3 / 4;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
