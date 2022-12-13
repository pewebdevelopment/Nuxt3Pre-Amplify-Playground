import Vue from "vue";

import { useMainStore } from "@stores/main.js";

const store = useMainStore();

class AuthService {
  constructor(store) {
    this.$store = store;
  }

  get isAuthenticated() {
    return this.$store.state.auth.isAuthenticated;
  }

  get user() {
    return this.$store.state.auth.user;
  }

  get email() {
    if (!this.user) return;
    return this.user.attributes.email;
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const { $store } = useNuxtApp;

  return {
    async authServiceFunction({ store }) {
      const authService = new AuthService(store);
      Vue.prototype.$auth = authService;
      Vue.$auth = authService;
      await store.dispatch("auth/load");
    },
  };
});

// export default async ({ store }) => {
//   const authService = new AuthService(store);
//   Vue.prototype.$auth = authService;
//   Vue.$auth = authService;
//   await store.dispatch("auth/load");
// };
