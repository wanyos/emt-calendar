<template>
  <div class="div__report">
    <Button type="router-link" :to="{ name: 'Report' }" text="Report" custom-class="px-12 py-2" />
    <!-- <Icon :img-url="report" class="mr-5" /> -->
  </div>
  <LayoutSideBar :data-menu="getComponents" class="layout__side-bar"> </LayoutSideBar>
</template>

<script setup>
import { computed } from 'vue'
import LayoutSideBar from '@/layouts/LayoutSideBar.vue'
import MainMenu from '@/components/menu-sidebar/MainMenu.vue'
import MenuCalendar from '@/components/menu-sidebar/MenuCalendar.vue'
import MenuMyCalendar from '@/components/menu-sidebar/MenuMyCalendar.vue'
import MenuSettings from './MenuSettings.vue'
import { useRoute } from 'vue-router'
import Button from '@/components/global-components/Button.vue'
import Icon from '@/components/icons/Icon.vue'
import report from '@/assets/img/report.svg'

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

.layout__side-bar {
 background-color: transparent;
}
</style>
