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
          Our Servers
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">
          We currently have 2 public Hell Let Loose servers hosted in the UK.<br />
          They are actively moderated and we run them with a lot of love.
        </p>
      </div>
    </div>

    <!-- Content section -->
    <div class="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <div
          class="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2"
        >
          <div class="grid place-content-center">
            <a href="https://www.battlemetrics.com/servers/hll/14183491">
              <img class="rounded-md"
                src="https://cdn.battlemetrics.com/b/horizontal500x80px/14183491.png?foreground=%23eeeeee&background=%2318181b&lines=%234f46e5&linkColor=%23d1d5db&chartColor=%237e22ce"
              />
            </a>
          </div>
          <div class="grid place-content-center">
            <a href="https://www.battlemetrics.com/servers/hll/16527891">
              <img class="rounded-md"
                src="https://cdn.battlemetrics.com/b/horizontal500x80px/16527891.png?foreground=%23EEEEEE&background=%2318181b&lines=%234f46e5&linkColor=%23d1d5db&chartColor=%237e22ce"
              />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Image section -->
    <div class="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
      <img
        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80"
        alt=""
        class="aspect-[9/4] w-full object-cover xl:rounded-3xl"
      />
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
