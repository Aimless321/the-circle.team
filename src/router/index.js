import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ServersView from "../views/ServersView.vue";
import StatsView from "../views/StatsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/servers",
      name: "servers",
      component: ServersView,
    },
    {
      path: "/stats",
      name: "stats",
      component: StatsView,
    },
  ],
});

export default router;
