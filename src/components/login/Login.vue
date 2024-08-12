<template>
  <div class="header__div-login">
    <Button v-if="!userInfo.isLogin" class="button" type="button" text="SignUp" customClass="px-4 py-1" @click.prevent="showModalLogin(true)" />
    <Button v-if="!userInfo.isLogin" class="button" type="button" text="SignIn" customClass="px-4 py-1" @click.prevent="showModalLogin(false)" />
    <Button v-if="userInfo.isLogin" class="button" type="button" text="LogOut" customClass="px-4 py-1" @click.prevent="userInfo.setSignOut" />
  </div>
</template>

<script setup>
import Button from '@/components/global-components/Button.vue'
import { useUserInfo } from '@/stores/userInfoStore'
import { useModal } from '@/stores/modalStore'
import { computed } from 'vue';

const userInfo = useUserInfo()
const { showModalLogin } = useModal()

</script>

<style lang="css" scoped>
.header__div-login {
  display: flex;
  justify-content: end;
  align-items: center;
  margin-right: 15px;
}

.button {
  margin-right: 10px;
}

.ownClass {
  
}

</style>
