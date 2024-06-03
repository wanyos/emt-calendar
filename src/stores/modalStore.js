import { defineStore } from 'pinia'
import { ref } from 'vue'
import ModalLogin from '@/components/modals/ModalLogin.vue'

export const useModal = defineStore('useModal', () => {
  const showModal = ref(false)
  const modalComponent = ref()  

  const closeModal = () => {
    showModal.value = false
  }

  const showModalLogin = () => {
    showModal.value = true
    modalComponent.value = ModalLogin
  }

  return { showModal, modalComponent, showModalLogin, closeModal }
})
