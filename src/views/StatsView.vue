<template>
  <main class="relative isolate">
    <!-- Background -->
    <div
      class="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
      aria-hidden="true"
    >
      <div
        class="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
        style="
          clip-path: polygon(
            73.6% 51.7%,
            91.7% 11.8%,
            100% 46.4%,
            97.4% 82.2%,
            92.5% 84.9%,
            75.7% 64%,
            55.3% 47.5%,
            46.5% 49.4%,
            45% 62.9%,
            50.3% 87.2%,
            21.3% 64.1%,
            0.1% 100%,
            5.4% 51.1%,
            21.4% 63.9%,
            58.9% 0.2%,
            73.6% 51.7%
          );
        "
      />
    </div>

    <!-- Header section -->
    <div class="px-6 pt-14 lg:px-8">
      <div class="mx-auto max-w-2xl pt-12 text-center sm:pt-16">
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Leaderboard
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">
          These are the gamers that made the most kills on our servers.
        </p>
        <div class="mt-8">
          <div class="sm:hidden">
            <label for="tabs" class="sr-only">Select a tab</label>
            <select
              id="tabs"
              name="tabs"
              class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              @change="overallSelected = !overallSelected"
            >
              <option :selected="!overallSelected">Last Month</option>
              <option :selected="overallSelected">Overall</option>
            </select>
          </div>
          <div class="hidden sm:block">
            <nav class="flex justify-center space-x-4" aria-label="Tabs">
              <a
                :aria-current="!overallSelected ? 'page' : undefined"
                :class="[
                  !overallSelected
                    ? 'bg-zinc-900/30 shadow-inner'
                    : 'text-white hover:text-gray-800',
                ]"
                class="rounded-md px-3 py-2 cursor-pointer"
                @click="overallSelected = false"
              >
                <p class="text-base font-semibold">
                  <span
                    class="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent"
                  >
                    Last Month
                  </span>
                </p>
              </a>
              <a
                :aria-current="overallSelected ? 'page' : undefined"
                :class="[
                  overallSelected
                    ? 'bg-zinc-900/30 shadow-inner'
                    : 'text-white hover:text-gray-800',
                ]"
                class="rounded-md px-3 py-2 cursor-pointer"
                @click="overallSelected = true"
              >
                <p class="text-base font-semibold">
                  <span
                    class="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent"
                  >
                    Overall
                  </span>
                </p>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <!-- Podium section -->
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <LeaderboardPodium :overall-selected="overallSelected" />
    </div>

    <!-- Personal stats section -->
    <div class="mx-auto mt-16 max-w-7xl px-6 sm:mt-16 lg:px-8">
      <div class="mx-auto lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Personal Stats
        </h2>
        <p v-if="!store.loggedIn" class="mt-6 text-lg leading-8 text-gray-300">
          Personal stats are available for our Patreon subscribers.
          <a class="text-blue-500" href="https://www.patreon.com/CircleGaming"
            >Subscribe here.</a
          >
          <br />
          Already subscribed?
          <a
            :href="`${apiUrl}/auth/discord`"
            class="ml-2 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
            >Sign in</a
          >
        </p>
        <PersonalStats v-else class="mt-8" />
      </div>
    </div>

    <!-- CTA Section -->
    <div>
      <div
        class="mx-auto max-w-4xl py-16 px-4 sm:px-6 sm:py-24 lg:flex lg:max-w-7xl lg:items-center lg:justify-between lg:px-8"
      >
        <h2 class="text-4xl font-bold tracking-tight text-gray-200 sm:text-4xl">
          <span class="block">Want to be part of The Circle?</span>
          <span
            class="-mb-1 block bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text pb-1 text-transparent"
            >Join us now.</span
          >
        </h2>
        <div class="mt-6 space-y-4 sm:flex sm:space-y-0 sm:space-x-5">
          <a
            href="https://discord.gg/the-circle"
            class="flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-3 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
            >Join Us</a
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "../store";
import PersonalStats from "../components/PersonalStats.vue";
import LeaderboardPodium from "../components/LeaderboardPodium.vue";

const apiUrl = import.meta.env.VITE_API_BASE_URL;
const overallSelected = ref(false);
const store = useStore();
</script>
