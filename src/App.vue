<template>
  <section class="section-app">
    <header class="header">
      <div class="header__div-messages">
        <p>{{ $route.name }}</p>
      </div>
      <Login />
    </header>

    <aside class="aside">
      <section class="aside__brand">
        <Icon :img-url="report" />
      </section>

      <SideBar />
    </aside>

    <Modal>
      <component :is="modalStore.modalComponent"></component>
    </Modal>

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
import report from '@/assets/img/report.svg'
import SideBar from '@/components/menu-sidebar/SideBar.vue'
import Login from '@/components/login/Login.vue'
import Modal from '@/components/modals/Modal.vue'
import { useModal } from '@/stores/modalStore.js'

const modalStore = useModal()

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
 display: flex;
 align-items: center;
 justify-content: space-between;
}

.header__messages {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__div-messages {
  margin-left: 1em;
}

.aside {
  height: 100%;
  grid-column: 1 / 2;
  grid-row: 1 / 4;
  display: flex;
  flex-direction: column;
  border-right: 2px solid rgb(88, 201, 224);
}

.aside__brand {
  border: 1px solid black;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
}

.main {
  grid-column: 2 / 4;
  grid-row: 2 / 3;
}

.footer {
  grid-column: 2 / 4;
  grid-row: 3 / 4;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
