<template>
  <section>
    <nav>
      <header>
        <ul>
          <li><button class="btnMenu">MyCalendar</button></li>
          <li><button class="btnMenu">Calendar</button></li>
          <li><button class="btnMenu">Changes</button></li>
        </ul>
      </header>
      <ul>
        <li><button class="btnMenu">Help</button></li>
      </ul>
    </nav>

    <div class="login-container">
      <label for=""> Login </label>
      <button class="btnExit">Exit</button>
    </div>

  </section>
</template>

<script></script>

<style>

section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

nav {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid black;
}

ul {
  border: 1px solid black;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btnMenu {
  padding: 10px 20px;
}

.login-container {
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  position: relative;
  
}

.btnExit {
}
</style>
