<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';

const email = ref('');
const password = ref('');

const userStore = useUserStore();
const router = useRouter();

const login = () => {
  try {
    userStore.login({ email: email.value, password: password.value }, router);
    alert('Usuário logado com sucesso');
    router.push('/');
  } catch (error) {
    alert('Senha ou email inválidos');
  }
};
</script>

<template>
  <div class="auth-container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Senha" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style scoped>
.auth-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.auth-container h2 {
  text-align: center;
  margin-bottom: 1rem;
}

.auth-container form {
  display: flex;
  flex-direction: column;
}

.auth-container input {
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.auth-container button {
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #5d6424;
  color: white;
  cursor: pointer;
}

.auth-container button:hover {
  background-color: #4a4f1b;
}
</style>
