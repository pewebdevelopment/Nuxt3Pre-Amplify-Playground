import { Auth } from "aws-amplify";
import { defineStore } from "pinia";

export const state = () => ({
  isAuthenticated: false,
  user: null,
});

// export const mutations = {
//   set(state, user) {
//     state.isAuthenticated = !!user;
//     state.user = user;
//   },
// };

const getters = {};

export const actions = {
  async load() {
    try {
      const userfromAmplify = await Auth.currentAuthenticatedUser();
      this.user = userfromAmplify;
      return user;
    } catch (error) {
      this.user = null;
    }
  },

  async register({ email, password }) {
    const user = await Auth.signUp({
      username: email,
      password,
    });
    return user;
  },

  async confirmRegistration({ email, code }) {
    return await Auth.confirmSignUp(email, code);
  },

  async login({ email, password }) {
    const userfromAmplify = await Auth.signIn(email, password);
    this.user = userfromAmplify;
    return user;
  },

  async logout() {
    await Auth.signOut();
    this.user = null;
  },
};

export const useAuthStore = defineStore("authStore", {
  state,
  getters,
  actions,
});
