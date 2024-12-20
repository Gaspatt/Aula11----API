import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    users: [],
  }),
  actions: {
    register(userData) {
      this.users.push(userData);
      this.user = userData;
    },
    login(credentials, router) {
      const user = this.users.find(
        (user) => user.email === credentials.email && user.password === credentials.password
      );
      if (user) {
        this.user = user;
        alert('Usuário logado com sucesso');
        router.push('/');
      } else {
        throw new Error('Senha ou email inválidos');
      }
    },
    logout() {
      this.user = null;
    },
  },
});
