<template>
  <div class="header__div-login">
    <Button v-if="!isLogin" class="button" text="SignUp" @click.prevent="showModalLogin(true)" />
    <Button v-if="!isLogin" class="button" text="SignIn" @click.prevent="showModalLogin(false)" />
    <Button v-if="isLogin" class="button" text="LogOut" @click.prevent="deleteUserInfo" />
  </div>
</template>

<script setup>
import Button from '@/components/global-components/Button.vue'
import { useUserInfo } from '@/stores/userInfoStore'
import { useModal } from '@/stores/modalStore'

const { isLogin, deleteUserInfo } = useUserInfo()
const { showModalLogin } = useModal()

console.log('login', isLogin)

</script>

<style lang="css" scoped>
.header__div-login {
  display: flex;
}

.button {
  margin-right: 10px;
  padding: 0;
}
</style>
