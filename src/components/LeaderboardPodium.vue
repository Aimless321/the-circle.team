<template>
  <div
    class="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end"
    v-if="selectedLeaderboard"
  >
    <div
      class="sm:w-3/4 order-2 lg:order-none lg:w-full lg:max-w-sm lg:flex-none"
    >
      <div class="flex flex-col items-center">
        <img
          class="inline-block h-14 w-14 rounded-md"
          :src="selectedLeaderboard[1].steamInfo.avatarmedium"
          alt=""
        />
        <h1 class="text-3xl text-white text-center mt-4">
          {{ selectedLeaderboard[1].steamInfo.PersonaName }}
        </h1>
      </div>

      <div
        class="mt-12 flex flex-col-reverse justify-between items-center gap-x-16 gap-y-8 rounded-2xl bg-[#a7a7ad]/70 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse lg:w-full lg:max-w-sm lg:flex-none lg:flex-col lg:gap-y-24"
      >
        <div>
          <p class="text-3xl font-bold text-white">
            {{ selectedLeaderboard[1].totalKills }}
          </p>
          <span class="text-center w-full block text-gray-300">Kills</span>
          <p class="text-2xl font-semibold text-center mt-4 text-white">
            {{ selectedLeaderboard[1].gameCount }}
          </p>
          <span class="text-sm text-center w-full block text-gray-300"
            >Games</span
          >
        </div>

        <p class="text-3xl font-bold text-white">#2</p>
      </div>
    </div>
    <div
      class="sm:w-3/4 order-1 lg:order-none lg:w-full lg:max-w-sm lg:flex-none"
    >
      <div class="flex flex-col items-center">
        <img
          class="inline-block h-14 w-14 rounded-md"
          :src="selectedLeaderboard[0].steamInfo.avatarmedium"
          alt=""
        />
        <h1 class="text-3xl text-white text-center mt-4">
          {{ selectedLeaderboard[0].steamInfo.PersonaName }}
        </h1>
      </div>
      <div
        class="mt-12 flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl items-center bg-[#d6af36]/70 p-8 sm:flex-row-reverse lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:gap-y-44"
      >
        <div>
          <p class="text-3xl font-bold text-white">
            {{ selectedLeaderboard[0].totalKills }}
          </p>
          <span class="text-center w-full block text-gray-300">Kills</span>
          <p class="text-2xl font-semibold text-center mt-4 text-white">
            {{ selectedLeaderboard[0].gameCount }}
          </p>
          <span class="text-sm text-center w-full block text-gray-300"
            >Games</span
          >
        </div>

        <p class="text-3xl font-bold text-white">#1</p>
      </div>
    </div>
    <div
      class="sm:w-3/4 order-3 lg:order-none lg:w-full lg:max-w-sm lg:flex-none"
    >
      <div class="flex flex-col items-center">
        <img
          class="inline-block h-14 w-14 rounded-md"
          :src="selectedLeaderboard[2].steamInfo.avatarmedium"
          alt=""
        />
        <h1 class="text-3xl text-white text-center mt-4">
          {{ selectedLeaderboard[2].steamInfo.PersonaName }}
        </h1>
      </div>
      <div
        class="mt-12 flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl items-center bg-[#a77044]/70 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse lg:w-full lg:max-w-none lg:flex-auto lg:flex-col"
      >
        <div>
          <p class="text-3xl font-bold text-white">
            {{ selectedLeaderboard[2].totalKills }}
          </p>
          <span class="text-center w-full block text-gray-300">Kills</span>
          <p class="text-2xl font-semibold text-center mt-4 text-white">
            {{ selectedLeaderboard[2].gameCount }}
          </p>
          <span class="text-sm text-center w-full block text-gray-300"
            >Games</span
          >
        </div>

        <p class="text-3xl font-bold text-white">#3</p>
      </div>
    </div>
  </div>

  <div
    v-if="selectedPersonal && selectedPersonal.rank > 3"
    class="grid place-content-center relative isolate"
  >
    <div
      class="absolute inset-x-0 -top-20 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
      aria-hidden="true"
    >
      <div
        class="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
        style="clip-path: circle()"
      />
    </div>

    <div
      class="shadow w-full px-4 py-2 rounded-lg md:mt-8 md:mx-0 bg-white/20 flex items-center gap-4"
    >
      <img
        class="h-14 w-14 rounded-md"
        :src="selectedPersonal.steamInfo.avatarmedium"
        alt=""
      />

      <div class="flex flex-col items-center gap-2">
        <h1 class="text-3xl text-white text-center">
          {{ selectedPersonal.steamInfo.PersonaName }}
        </h1>
        <div class="flex justify-evenly w-full items-center">
          <div>
            <p class="text-2xl font-semibold text-center text-white leading-none">
              {{ selectedPersonal.totalKills }}
            </p>
            <span class="text-sm text-center w-full block text-gray-300 leading-none">Kills</span>
          </div>
          <div>
            <p class="text-2xl font-semibold text-center text-white leading-none">
              {{ selectedPersonal.gameCount }}
            </p>
            <span class="text-sm text-center w-full block text-gray-300 leading-none">
              Games
            </span>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-end">
        <span class="text-sm text-center w-full block text-gray-300">Rank</span>
        <p class="text-3xl font-bold text-center text-white">
          #{{ selectedPersonal.rank }}
        </p>
      </div>
    </div>
  </div>
  <p v-else class="leading-8 text-gray-300">
    Sign In or link your SteamID to your account on our
    <a
      class="text-blue-500"
      href="https://discord.gg/the-circle"
      target="_blank"
      >Discord</a
    >
    to see your own stats.
  </p>
</template>

<script setup>
import { computed, reactive, ref } from "vue";

const props = defineProps(["overallSelected"]);

const leaderboardAvailable = ref(true);
const apiUrl = import.meta.env.VITE_API_BASE_URL;
const leaderboardUrl = `${apiUrl}/stats/leaderboard`;
const leaderboards = reactive({
  lastMonth: null,
  personalLastMonth: null,
  overall: null,
  personalOverall: null,
});

const selectedLeaderboard = computed(() => {
  return props.overallSelected ? leaderboards.overall : leaderboards.lastMonth;
});

const selectedPersonal = computed(() => {
  return props.overallSelected
    ? leaderboards.personalOverall
    : leaderboards.personalLastMonth;
});

fetch(leaderboardUrl, { credentials: "include" })
  .then((resp) => {
    if (resp.status === 200) {
      return resp.json();
    }

    if (resp.status === 401) {
      leaderboardAvailable.value = false;
      return;
    }

    throw new Error("Something went wrong");
  })
  .then((data) => {
    Object.assign(leaderboards, data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
</script>
