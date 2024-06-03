<template>
  <div class="header__div-login">
    <Button text="LogIn" :is-disabled="isLogin" @click.prevent="showModalLogin" />
    <Button text="LogOut" :is-disabled="!isLogin" @click.prevent="deleteUserInfo" />
  </div>
</template>

<script setup>
import Button from '@/components/global-components/Button.vue'
import { useUserInfo } from '@/stores/userInfoStore'
import { useModal } from '@/stores/modalStore'
import { computed } from 'vue'

const { user, deleteUserInfo } = useUserInfo()
const { showModalLogin } = useModal()

const isLogin = computed(() => user.id !== undefined)


</script>

<style lang="css" scoped>
.header__div-login {
  width: 11rem;
  display: flex;
  justify-content: space-between;
  margin-right: 1rem;
}
</style>
