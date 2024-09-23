<template>
  <Modal>
    <template #default>
      <section class="section__modal">
        <div class="section__modal-div">
          <section class="section__header">
            <label>{{ props.title }}</label>
            <button @click="closeModal">X</button>
          </section>

          <section class="section__form">
            <form action="" class="form">
              <div class="form__div">
                <label for="user">Email</label>
                <input
                  @focus="email = ''"
                  v-model="email"
                  type="email"
                  name="user"
                  autocomplete="off"
                />
              </div>

              <div class="form__div">
                <label for="password">Password</label>
                <input @focus="password = ''" v-model="password" type="password" name="password" />
              </div>

              <div class="div__button">
                <button @click.prevent="login">Sent</button>
                <button v-if="props.title === 'SignIn'" @click.prevent="loginGoogle">
                  <img class="icon" src="@/assets/img/icon-google.webp" />
                </button>

                <button v-if="props.title === 'SignIn'" @click.prevent="loginMicrosoft">
                  <img class="icon" src="@/assets/img/icon-microsoft.png" />
                </button>
              </div>

              <div v-if="userInfo.isErrorLogin && !closeError" class="div__error">
                <p>There was an error while logging in...</p>
              </div>
            </form>
          </section>
        </div>
      </section>
    </template>
  </Modal>
</template>

<script setup>
import Modal from '@/components/modals/Modal.vue'
import { useModal } from '@/stores/modalStore'
import { useUserInfo } from '@/stores/userInfoStore'
import { ref, watch, onMounted } from 'vue'
import { PublicClientApplication } from '@azure/msal-browser'
import AzureService from '../../firebase/azureService'

// onMounted(() => {
//   const azureService = new AzureService()
//   // eslint-disable-next-line no-undef
//   $msalInstance = new PublicClientApplication(azureService.getMsalConfig().value)
// })

const props = defineProps({
  title: {
    type: String,
    required: true
  }
})

const { closeModal } = useModal()
const userInfo = useUserInfo()
const { setSignUp, setSignIn, setSignInGoogle } = useUserInfo()

const email = ref('')
const password = ref('')
const closeError = ref(false)
// const account = ''

watch(
  () => userInfo.isLogin,
  (newVal) => {
    if (newVal) {
      closeModal()
    }
  }
)

watch(
  () => email.value,
  (newVal, oldVal) => {
    if (newVal === '' && oldVal !== '' && userInfo.isErrorLogin) {
      closeError.value = true
    }
  }
)

watch(
  () => password.value,
  (newVal, oldVal) => {
    if (newVal === '' && oldVal !== '' && userInfo.isErrorLogin) {
      closeError.value = true
    }
  }
)

const login = async () => {
  closeError.value = false
  props.title === 'SignUp' ? await setSignUp(email, password) : await setSignIn(email, password)
}
const loginGoogle = () => {
  setSignInGoogle()
}

// const loginMicrosoft = async () => {
//   await this.$msalInstance
//     .loginPopup({})
//     .then(() => {
//       // eslint-disable-next-line no-undef
//       const myAccounts = $msalInstance.getAllAccounts()
//       account = myAccounts[0]
//       // eslint-disable-next-line no-undef
//       $emitter.emit('login', account)
//     })
//     .catch((err) => {
//       // eslint-disable-next-line no-undef
//       console.log('error in microsoft login', err)
//     })
// }
</script>

<style lang="css" scoped>
.section__modal {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.section__modal-div {
  width: 30rem;
  border-radius: 10px;
  background-color: #0009;
  color: #ffffff;
}

.section__header {
  height: 3.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0009;
  padding: 20px;
}

.section__form {
  background-color: #0009;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2em;
  background: none;
}

.form__div {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.form__div label {
  margin-bottom: 0.5rem;
  background-color: #0009;
}

.form__div input {
  margin-bottom: 1rem;
  padding: 0.5rem 1em;
  border-radius: 5px;
  border: none;
  border-bottom: 2px solid #fff;
  color: #fff;
  background: var(--second-background);
  outline: none;
}

.section__modal-div button {
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: #ffffff;
  cursor: pointer;
}

.section__header button {
  background-color: #0009;
}

.section__header button:hover {
  background-color: #212223;
}

.div__button {
  display: flex;
  flex-direction: column;
}

.div__button button {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  width: 25px;
  margin-right: 10px;
}

.div__error {
  padding: 15px 0;
}

.div__error p {
  color: rgb(207, 53, 53);
  text-align: center;
  font-size: 18px;
}
</style>
