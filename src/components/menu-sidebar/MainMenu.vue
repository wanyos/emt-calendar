<template>
  <router-link class="nav-item" :to="{ name: 'Calendar' }">Calendar</router-link>
  <router-link class="nav-item" :to="{ name: 'My calendar' }">My Calendar</router-link>
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
  background-color: #5d636a;
  border-bottom: 1px solid white;
  transition: 0.7s;
}
</style>
