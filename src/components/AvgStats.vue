<script setup>
import { toRefs } from "vue";

const props = defineProps(["avgStats"]);
const { avgStats } = toRefs(props);
</script>

<template>
  <div v-if="avgStats">
    <dl class="rounded-lg bg-white/10 shadow-lg sm:grid sm:grid-cols-5">
      <div
        class="flex flex-col border-b border-gray-900/20 p-6 text-center sm:border-0 sm:border-r-2"
      >
        <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-200">
          Kills
        </dt>
        <dd class="order-1 text-5xl font-bold tracking-tight gradient-text">
          {{ avgStats.kills.toFixed(1) || "0.0" }}
        </dd>
      </div>
      <div
        class="flex flex-col border-b border-gray-900/20 p-6 text-center sm:border-0 sm:border-r-2"
      >
        <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-200">
          Deaths
        </dt>
        <dd class="order-1 text-5xl font-bold tracking-tight gradient-text">
          {{ avgStats.deaths.toFixed(1) || "0.0" }}
        </dd>
      </div>
      <div
        class="flex flex-col border-b border-gray-900/20 p-6 text-center sm:border-0 sm:border-r-2"
      >
        <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-200">
          K/D
        </dt>
        <dd class="order-1 text-5xl font-bold tracking-tight gradient-text">
          {{ avgStats.KDRatio.toFixed(1) || "0.0" }}
        </dd>
      </div>
      <div
        class="flex flex-col border-b border-gray-900/20 p-6 text-center sm:border-0 sm:border-r-2"
      >
        <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-200">
          Kills per minute
        </dt>
        <dd class="order-1 text-5xl font-bold tracking-tight gradient-text">
          {{ avgStats.killsPerMinute.toFixed(1) || "0.0" }}
        </dd>
      </div>
      <div
        class="flex flex-col border-gray-900/20 p-6 text-center sm:border-0"
      >
        <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-200">
          Deaths per minute
        </dt>
        <dd class="order-1 text-5xl font-bold tracking-tight gradient-text">
          {{ avgStats.deathsPerMinute.toFixed(1) || "0.0" }}
        </dd>
      </div>
    </dl>
  </div>
</template>

<style scoped>
.gradient-text {
  @apply bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent;
}
</style>