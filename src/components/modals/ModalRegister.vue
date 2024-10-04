<template>
   <Modal>
    <template #default>
        <section class="section__modal">
            
        </section>

    </template>
   </Modal>
</template>

<script setup>
import Modal from '@/components/modals/Modal.vue'
import { useModal } from '@/stores/modalStore'
import { useUserInfo } from '@/stores/userInfoStore'
import { ref, watch, onMounted } from 'vue'

</script>

<style lang="css" scoped>
.section__modal {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

</style>