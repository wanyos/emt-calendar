<template>
  <section class="section-app">

    <header>

      <section>
        <label for="">Brand</label>
      </section>

      <section>
        <label for="">Messages</label>
      </section>

    </header>

    <aside>
      <nav>
        <ul>
          <li>
            <RouterLink to="/">Report</RouterLink>
            <RouterLink to="/calendar">Calendar</RouterLink>
            <RouterLink>My Calendar</RouterLink>
            <RouterLink>Settings</RouterLink>
          </li>
        </ul>
      </nav>
    </aside>

    <main>
      <label for="">main</label>
      <RouterView></RouterView>
    </main>

    <footer>
      <p>wanyos@copyright.com</p>
    </footer>
  </section>
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<style scoped>

.section-app {
  grid-template-columns: 150px auto;
  grid-template-rows: 50px auto 50px;
}

header {

}

</style>
