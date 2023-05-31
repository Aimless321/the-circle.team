<template>
  <p v-if="!statsAvailable" class="text-lg leading-8 text-gray-300">
    Personal stats are only available for our Patreon subscribers.
    <a class="text-blue-500" href="https://www.patreon.com/CircleGaming">
      Subscribe here.
    </a>
  </p>

  <div v-else class="relative isolate">
    <AvgStats :avg-stats="stats.publicAvg" />
    <LastGames class="mt-12" :games="stats.publicGames" />

    <div
      class="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
      aria-hidden="true"
    >
      <div
        class="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
        style="
          clip-path: polygon(
            48.56% 20.98%,
            63.1% 33.48%,
            76.18% 16.35%,
            97.4% 82.2%,
            92.5% 84.9%,
            61.44% 93.39%,
            39.59% 61.59%,
            26.62% 108.31%,
            81.95% 116.22%,
            41.35% 51.69%,
            23.57% 84.05%,
            0.1% 100%,
            5.4% 51.1%,
            11.46% 39.17%,
            18.99% 21.34%,
            37.94% 17.26%
          );
        "
      />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import AvgStats from "./AvgStats.vue";
import LastGames from "./LastGames.vue";

const statsAvailable = ref(true);
const apiUrl = import.meta.env.VITE_API_BASE_URL;
const statsUrl = `${apiUrl}/stats/self`;
const stats = reactive({
  steamInfo: null,
  publicAvg: null,
  publicGames: null,
});

fetch(statsUrl, { credentials: "include" })
  .then((resp) => {
    if (resp.status === 200) {
      return resp.json();
    }

    if (resp.status === 401) {
      statsAvailable.value = false;
      return;
    }

    throw new Error("Something went wrong");
  })
  .then((data) => {
    Object.assign(stats, data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
</script>
