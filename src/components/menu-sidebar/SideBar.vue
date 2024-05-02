<template>
  <div class="div__report">
    <router-link class="nav-report" :to="{ name: 'Report' }">Report</router-link>
  </div>
  <LayoutSideBar :data-menu="getComponents"> </LayoutSideBar>
</template>

<script setup>
import { computed } from 'vue'
import LayoutSideBar from '@/layouts/LayoutSideBar.vue'
import MainMenu from '@/components/menu-sidebar/MainMenu.vue'
import MenuCalendar from '@/components/menu-sidebar/MenuCalendar.vue'
import MenuMyCalendar from '@/components/menu-sidebar/MenuMyCalendar.vue'
import MenuSettings from './MenuSettings.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const objComponents = {
  'Report': MainMenu,
  'Calendar': MenuCalendar,
  'My Calendar': MenuMyCalendar,
  'Settings': MenuSettings
}

const getComponents = computed(() => objComponents[route.name])
</script>

<style lang="css" scoped>
.div__report {
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-report {
  width: 90%;
  cursor: pointer;
  text-decoration: none;
  border: 1px solid blue;
  padding: 10px 15px;
  border-radius: 10px;
  text-align: center;
}

.nav-report:hover {
  background-color: rgb(0, 0, 0, 0.4);
  border-bottom: 1px solid white;
}
</style>
