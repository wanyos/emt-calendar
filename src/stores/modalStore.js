import { defineStore } from 'pinia'
import { ref, shallowRef, h } from 'vue'
import ModalLogin from '@/components/modals/ModalLogin.vue'

export const useModal = defineStore('useModal', () => {
  const showModal = ref(false)
  let modalComponent = shallowRef()

  const closeModal = () => {
    showModal.value = false
  }

  const showModalLogin = (signup) => {
    let titleModal = signup ? 'SignUp' : 'SignIn'
    const modal = h(ModalLogin, {
      title: titleModal
    })
    showModal.value = true
    modalComponent.value = modal
  }

  return { showModal, modalComponent, showModalLogin, closeModal }
})
