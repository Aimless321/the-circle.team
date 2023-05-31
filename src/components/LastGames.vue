<script setup>
import { toRef } from "vue";

const props = defineProps(["games"]);
const games = toRef(props, "games");

function getAllWeapons(game) {
  const weapons = Object.entries(game.weapons);
  weapons.sort();

  return weapons;
}
</script>

<template>
  <div
    v-if="games"
    class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg"
  >
    <table class="min-w-full divide-y divide-gray-300">
      <thead class="bg-white/10">
        <tr>
          <th
            scope="col"
            class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6"
          >
            Date
          </th>
          <th
            scope="col"
            class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6"
          >
            Playtime
          </th>
          <th
            scope="col"
            class="hidden px-3 py-3.5 text-left text-sm font-semibold text-white lg:table-cell"
          >
            Kills
          </th>
          <th
            scope="col"
            class="hidden px-3 py-3.5 text-left text-sm font-semibold text-white sm:table-cell"
          >
            Deaths
          </th>
          <th
            scope="col"
            class="px-3 py-3.5 text-left text-sm font-semibold text-white"
          >
            K/D
          </th>
          <th
            scope="col"
            class="px-3 py-3.5 text-left text-sm font-semibold text-white"
          >
            Kill Streak
          </th>
          <th
            scope="col"
            class="px-3 py-3.5 text-left text-sm font-semibold text-white"
          >
            KPM
          </th>
          <th
            scope="col"
            class="px-3 py-3.5 text-left text-sm font-semibold text-white"
          >
            DPM
          </th>
          <th
            scope="col"
            class="px-3 py-3.5 text-left text-sm font-semibold text-white"
          >
            Weapons
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100 bg-white/10">
        <tr v-for="game in games" :key="game.date">
          <td class="px-3 py-4 text-sm text-gray-100">
            {{ new Date(game.date).toLocaleDateString() }}
          </td>
          <td class="px-3 py-4 text-sm text-gray-100">
            {{ (game.gameLength / 60).toFixed(1) }} minutes
          </td>
          <td class="px-3 py-4 text-sm text-gray-100">{{ game.kills }}</td>
          <td class="px-3 py-4 text-sm text-gray-100">{{ game.deaths }}</td>
          <td class="px-3 py-4 text-sm text-gray-100">{{ game.KDRatio }}</td>
          <td class="px-3 py-4 text-sm text-gray-100">{{ game.killStreak }}</td>
          <td class="px-3 py-4 text-sm text-gray-100">
            {{ game.killsPerMinute }}
          </td>
          <td class="px-3 py-4 text-sm text-gray-100">
            {{ game.deathsPerMinute }}
          </td>
          <td class="px-3 py-4 text-sm text-gray-100">
            <ol>
              <li v-for="weapon in getAllWeapons(game)" :key="weapon[0]">
                {{ weapon[0] }}: {{ weapon[1] }}
              </li>
            </ol>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
th,
td {
  @apply text-center;
}
</style>
