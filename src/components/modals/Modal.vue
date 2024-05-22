<template>
  <section class="section__modal">
    <div class="section__div-modal">
      <slot></slot>
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="css" scoped>
.modal__section {
  
}

.section__div-modal {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}
</style>
