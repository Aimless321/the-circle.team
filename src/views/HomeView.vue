<template>
  <!-- Hero section -->
  <div class="relative">
    <div class="absolute inset-x-0 bottom-0 h-1/2" />
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="relative sm:overflow-hidden sm:rounded-2xl">
        <div class="absolute inset-0">
          <video
            muted
            autoplay
            loop
            class="h-full w-full object-cover"
            src="@/assets/hll-trailer.mp4"
          />
          <div
            class="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply"
          />
        </div>
        <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          <h1
            class="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span class="block text-white">The Circle</span>
          </h1>
          <p
            class="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl"
          >
            A gaming community primarily focused on competitive Hell Let Loose.
          </p>
          <div
            class="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center"
          >
            <a
              href="https://discord.gg/the-circle"
              class="flex items-center justify-center rounded-md border border-transparent bg-indigo-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
              >Join Us</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Stats section -->
  <div class="relative">
    <div
      class="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8"
    >
      <div class="relative pt-12">
        <h2 class="text-base font-semibold">
          <span
            class="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent"
            >About us</span
          >
        </h2>

        <p class="mt-5 text-lg text-gray-300">
          We are a relatively new community est. 2022 with the goal of creating
          an inclusive gaming community where everyone can feel welcomed and
          relocate the "fun" we so often lose when we try and play a competitive
          game.
        </p>
        <div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
          <p v-for="item in metrics" :key="item.id">
            <span class="block text-2xl font-bold text-gray-50">{{
              item.stat
            }}</span>
            <span class="mt-1 block text-base text-gray-300"
              ><span class="font-medium text-gray-50">{{ item.emphasis }}</span>
              {{ item.rest }}</span
            >
          </p>
        </div>
      </div>
      <div class="relative pt-12">
        <h2 class="text-base font-semibold">
          <span
            class="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent"
            >Schedule</span
          >
        </h2>

        <p class="mt-5 text-lg text-gray-300 mb-4">
          As a member of The Circle you can attend multiple events during the
          week to play Hell Let Loose in a more coordinated and more competitive
          way.
        </p>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
          <p class="text-gray-300 text-center">
            <span class="font-semibold text-gray-100 block">Monday</span>
            Internal Training
          </p>
          <p class="text-gray-300 text-center">
            <span class="font-semibold text-gray-100 block">Tuesday</span>
            PHX Training
          </p>
          <p class="text-gray-300 text-center">
            <span class="font-semibold text-gray-100 block">Wednesday</span>
            ARC Arena
          </p>
          <p class="text-gray-300 text-center">
            <span class="font-semibold text-gray-100 block">Thursday</span>
            Greyhounds Night
          </p>
          <p class="text-gray-300 text-center">
            <span class="font-semibold text-gray-100 block">Friday</span>
            Internal Scrim
          </p>
          <p class="text-gray-300 text-center">
            <span class="font-semibold text-gray-100 block">Sunday</span>
            Match day
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Alternating Feature Sections -->
  <div class="relative overflow-hidden pt-16 pb-32">
    <div class="relative">
      <div
        class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8"
      >
        <div
          class="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0"
        >
          <div>
            <div class="inline-flex items-center gap-2.5">
              <span
                class="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600"
              >
                <ServerStackIcon
                  class="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
              <h2 class="text-3xl font-bold tracking-tight text-gray-200">
                Public servers
              </h2>
            </div>
            <div class="mt-6">
              <p class="mt-4 text-lg text-gray-400">
                We run two public servers which are seeded daily. We have a lot
                of active server moderators which enforce the rules and keep our
                servers clean. As a member you will get a VIP slot on all of our
                servers.
              </p>
            </div>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 lg:mt-0">
          <div
            class="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0"
          >
            <img
              class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              src="@/assets/hll-servers.jpg"
              alt="The Circle servers in the Hell Let Loose server browser"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-24">
      <div
        class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8"
      >
        <div
          class="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0"
        >
          <div>
            <div class="inline-flex items-center gap-2.5">
              <span
                class="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600"
              >
                <UserGroupIcon class="h-6 w-6 text-white" aria-hidden="true" />
              </span>
              <h2 class="text-3xl font-bold tracking-tight text-gray-200">
                Active community
              </h2>
            </div>
            <div class="mt-6">
              <p class="mt-4 text-lg text-gray-400">
                Even though we're mainly focused on Hell Let Loose, there are a
                lot of different games that are being discussed and played on
                our discord.
              </p>
            </div>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
          <div
            class="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0"
          >
            <img
              class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
              src="@/assets/other-games.png"
              alt="Customer profile user interface"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- CTA Section -->
  <div class="bg-zinc-900">
    <div
      class="mx-auto max-w-4xl py-16 px-4 sm:px-6 sm:py-24 lg:flex lg:max-w-7xl lg:items-center lg:justify-between lg:px-8"
    >
      <h2 class="text-4xl font-bold tracking-tight text-gray-200 sm:text-4xl">
        <span class="block">Ready to get started?</span>
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
</template>

<script setup>
import { ServerStackIcon, UserGroupIcon } from "@heroicons/vue/24/outline";

const metrics = [
  {
    id: 1,
    stat: "150+",
    emphasis: "Members",
    rest: "have already joined us.",
  },
  {
    id: 2,
    stat: "25+",
    emphasis: "Matches",
    rest: "have been played.",
  },
];
</script>
