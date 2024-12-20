import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    users: [],
  }),
  actions: {
    register(userData, router) {
      this.users.push(userData);
      this.user = userData;
      alert('Conta criada com sucesso');
      router.push('/login');
    },
    login(credentials, router) {
      const user = this.users.find(
        (user) => user.email === credentials.email && user.password === credentials.password
      );
      if (user) {
        this.user = user;
      } else {
        throw new Error('Senha ou email inválidos');
      }
    },
    logout() {
      this.user = null;
    },
  },
});
