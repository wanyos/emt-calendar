<template>
  <router-link class="nav-item" :to="{ name: 'Calendar' }">Calendar</router-link>
  <router-link class="nav-item" :to="{ name: 'My Calendar' }">My Calendar</router-link>
  <router-link class="nav-item" :to="{ name: 'Settings' }">Settings</router-link>
</template>

<script setup></script>

<style lang="css" scoped>
.nav-item {
  width: 90%;
  text-align: center;
  cursor: pointer;
  margin-bottom: 1em;
  text-decoration: none;
  border: none;
  border: 1px solid blue;
  padding: 10px 15px;
  border-radius: 10px;
}

.nav-item:hover {
  background-color: rgb(0, 0, 0, 0.4);
  border-bottom: 1px solid white;
}
</style>
