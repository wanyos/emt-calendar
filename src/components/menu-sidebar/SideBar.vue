
<template>

  <div class="div__report">
    <Button type="router-link" :to="{ name: 'Report' }" text="Report" custom-class="px-12 py-2" />
  </div>

  <div class="div__menu">
    <LayoutSideBar :data-menu="getComponents" class="layout__side-bar"> </LayoutSideBar>

    <button @click="getDepartures()"> Pedir APi </button>

    <Item v-if="userStore.isLogin" class="item" :svg="report" title="Juan Jose Romero" subtitle="juan@romero.com" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import LayoutSideBar from '@/layouts/LayoutSideBar.vue'
import MainMenu from '@/components/menu-sidebar/MainMenu.vue'
import MenuCalendar from '@/components/menu-sidebar/MenuCalendar.vue'
import MenuMyCalendar from '@/components/menu-sidebar/MenuMyCalendar.vue'
import MenuSettings from './MenuSettings.vue'
import { useRoute } from 'vue-router'
import { useUserInfo } from '@/stores/userInfoStore.js'
import Button from '@/components/global-components/Button.vue'
import Item from '@/components/global-components/Item.vue'
import report from '@/assets/img/report.svg'
import DeparturesApi from '@/api/departuresApi.js'

const route = useRoute()
const userStore = useUserInfo();

const objComponents = {
  'Report': MainMenu,
  'Calendar': MenuCalendar,
  'My Calendar': MenuMyCalendar,
  'Settings': MenuSettings
}

const getComponents = computed(() => objComponents[route.name])

const getDepartures = async () => {
  const token = $cookies.get('usertoken')
   const dp = await DeparturesApi.getAllDepartures(token);
   console.log('res', dp);
}


</script>

<style lang="css" scoped>
.div__report {
  padding: 1em;
  margin: auto;
}

.layout__side-bar {
  background-color: transparent;
}

.div__menu {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.item {
 padding-bottom: 1em;
}
</style>
