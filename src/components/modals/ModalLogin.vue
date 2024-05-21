<template>
  <Modal :show="toggleModal">
    <section class="section__modal"></section>
  </Modal>
</template>

<script setup>
import Modal from '@/components/modals/Modal.vue'
import { useModal } from '@/stores/modalStore.js'

const { toggleModal } = useModal()
</script>

<style lang="css" scoped>
.section__modal {

}
</style>
