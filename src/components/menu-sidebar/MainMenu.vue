<template>
  <section class="section-menu">
    <Button type="router-link" :to="{ name: 'Calendar' }" text="Calendar" customClass="px-14 py-2" class="nav-item" />
    <Button type="router-link" :to="{ name: 'My Calendar' }" text="My Calendar" customClass="px-10 py-2" class="nav-item" />
    <Button type="router-link" :to="{ name: 'Settings' }" text="Settings" customClass="px-14 py-2" class="nav-item" />
  </section>
</template>

<script setup>
import Button from '@/components/global-components/Button.vue';
</script>

<style lang="css" scoped>

.section-menu {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: none;
}

.nav-item {
  margin-top: 0.7em;
  margin-bottom: 0.7em;
  width: 100%;
  background: none;
  text-align: center;
}

</style>
