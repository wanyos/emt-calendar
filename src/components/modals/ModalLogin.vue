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
                <input v-model="email" type="email" name="user" autocomplete="off" />
              </div>

              <div class="form__div">
                <label for="password">Password</label>
                <input v-model="password" type="password" name="password" />
              </div>

              <div class="div__button">
                <button @click.prevent="login">Sent</button>
                <button @click.prevent="loginGoogle">
                  <img class="icon" src="@/assets/img/icon-google.webp" />
                </button>
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
import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  }
})

const { closeModal } = useModal()
const { setSignUp, setSignIn, setSignInGoogle } = useUserInfo()

const email = ref('')
const password = ref('')

const login = () => {
  props.title === 'SignUp' ? setSignUp(email, password) : setSignIn(email, password)
  closeModal()
}
const loginGoogle = () => {
  setSignInGoogle()
  closeModal()
}
</script>

<style lang="css" scoped>
.section__modal {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.section__modal-div {
  width: 25rem;
  border-radius: 10px;
  /* box-shadow:
    0 15px 30px rgba(95, 82, 143, 0.3),
    0 8px 16px rgba(120, 102, 190, 0.1); */
  background-color: #0009;
  color: #ffffff;
}

.section__header {
  width: 90%;
  margin: auto;
  height: 2.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0009;
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
  padding: 0.1rem 1em;
  border-radius: 5px;
  border: none;
  border-bottom: 2px solid #fff;
  color: #fff;
  background: #3d3a3a;
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
</style>
