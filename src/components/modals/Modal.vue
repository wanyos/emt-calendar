<template>
  <section v-if="modalStore.showModal" class="section__modal">
    <slot></slot>
  </section>
</template>
<script setup>
import { useModal } from '@/stores/modalStore.js'

const modalStore = useModal()
</script>

<style lang="css" scoped>
.section__modal {
  position: fixed;
  min-width: 100vw;
  min-height: 100vh;
  backdrop-filter: blur(4px);
}
</style>
