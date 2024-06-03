<template>
  <Modal>
    <template #default>
      <section class="section__modal">
        <div class="section__modal-div">

        <section class="section__header">
          <label>LOGIN</label>
          <button @click="closeModal">X</button>
        </section>

          <section class="section__form">
            <form action="" class="form">
              <div class="form__div">
                <label for="user">Email</label>
                <input type="email" name="user" v-model="email" />
              </div>

              <div class="form__div">
                <label for="password">Password</label>
                <input type="password" name="password" v-model="password" />
              </div>

              <button @click.prevent="setLogin">Sent</button>
            </form>
          </section>

        </div>
      </section>
    </template>
  </Modal>
</template>

<script setup>
import Modal from '@/components/modals/Modal.vue'
import { useModal } from '@/stores/modalStore';
import { setNewUser } from '@/stores/userInfoStore'
import { ref } from 'vue'


const { closeModal } = useModal()

const email = ref('')
const password = ref('')
const auth = getAuth();

const setLogin = () => {
 setNewUser(email, password) 
}

</script>

<style lang="css" scoped>
.section__modal {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(5px);
}

.section__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section__modal-div {
  margin-top: 5em;
  width: 40%;
  height: 30%;
  border-radius: 10px;
  box-shadow:
    0 15px 30px rgba(95, 82, 143, 0.3),
    0 8px 16px rgba(120, 102, 190, 0.1);
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 2rem;
}

.section__form {
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
}

.form__div {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.form__div label {
  margin-bottom: 0.5rem;
}

.form__div input {
  margin-bottom: 1rem;
  padding: 0.3rem;
  border-radius: 5px;
  border: none;
  background-color: #333333;
  color: #ffffff;
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
  background-color: #333333;
}


</style>
