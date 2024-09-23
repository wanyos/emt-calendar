<template>
  <section class="section-app">
    <header class="header">
      <section class="section-messages">
        <div class="section__messages-title">
          <div v-if="$route.name === 'Calendar'">
            <ItemInfo class="mx-2" title="Type:" :message="getType" />
            <ItemInfo class="mx-2" title="Group:" :message="getGroup" />
            <ItemInfo class="mx-2" title="Subgroup:" :message="getSubgroup" />
            <ItemInfo class="mx-2" title="Year:" :message="getYear" />
          </div>
        </div>
      </section>
      <Login />
    </header>

    <aside class="aside">
      <section class="aside__brand">
        <v-icon :name="getNameIcon" scale="2" />
        <div class="section__messages-route">
          <p>{{ $route.name }}</p>
        </div>
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
// import Icon from '@/components/icons/Icon.vue'
// import logo from '@/assets/logo.ico'
import SideBar from '@/components/menu-sidebar/SideBar.vue'
import Login from '@/components/login/Login.vue'
import Modal from '@/components/modals/Modal.vue'
import ItemInfo from '@/components/global-components/ItemInfo.vue'
import { useModal } from '@/stores/modalStore.js'
import { useOptionsCalendarStore } from '@/stores/optionCalendarStore.js'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const modalStore = useModal()
const optionCalendarStore = useOptionsCalendarStore()
const { getYear, getType, getGroup, getSubgroup } = storeToRefs(optionCalendarStore)

const router = useRoute()

const getNameIcon = computed(() => {
  // console.log('rouer', router.fullPath)
  // console.log('name', router.name)
  if (router.name === 'Report') {
    return 'md-calendarmonth-twotone'
  } else if (router.name === 'Calendar') {
    return 'md-calendarmonth-twotone'
  }
  // return 'md-calendarmonth-twotone'
})
</script>

<style scoped>
.section-app {
  min-height: 100vh;
  background-color: var(--main-background);
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

.section__messages-route p {
  font-size: large;
  color: var(--ntp-logo-color);
  text-align: center;
  padding: 0 15px;
  width: 9em;
}

.header__messages {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.section-messages {
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
}

.section__messages-title {
  margin: auto;
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
