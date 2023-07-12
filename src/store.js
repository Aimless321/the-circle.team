import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({ loggedIn: localStorage.getItem("username") }),
  actions: {
    login() {
      this.loggedIn = true;
    },
    logout() {
      localStorage.removeItem("username");
      this.loggedIn = false;

      const apiUrl = import.meta.env.VITE_API_BASE_URL;
      fetch(`${apiUrl}/logout`, { credentials: "include" });
    },
  },
});
