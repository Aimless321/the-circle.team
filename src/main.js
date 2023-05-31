import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import router from "./router";
import "./assets/main.css";

const pinia = createPinia();
const app = createApp(App);

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("username")) {
  console.log(window.location.pathname);

  localStorage.setItem("username", urlParams.get("username"));
  window.location.href = window.location.pathname;
}

app.use(pinia);
app.use(router);

app.mount("#app");
