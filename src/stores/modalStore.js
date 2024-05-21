import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModal = defineStore('useModal', () => {
  const showModal = ref(false)

  const toggleModal = () => {
    showModal.value = !showModal.value
    console.log('store', showModal.value)
  }

  return { showModal, toggleModal }
})
