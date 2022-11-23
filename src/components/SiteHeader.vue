<template>
  <header>
    <Popover class="relative">
      <div
        class="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span class="sr-only">The Circle</span>
            <img
              class="h-8 w-auto sm:h-10"
              src="@/assets/circle-640-transparent.png"
              alt=""
            />
          </a>
        </div>
        <!--        <div class="-my-2 -mr-2 md:hidden">-->
        <!--          <PopoverButton-->
        <!--            class="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-zinc-800 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"-->
        <!--          >-->
        <!--            <span class="sr-only">Open menu</span>-->
        <!--            <Bars3Icon class="h-6 w-6" aria-hidden="true" />-->
        <!--          </PopoverButton>-->
        <!--        </div>-->
        <!--        <PopoverGroup as="nav" class="hidden space-x-10 md:flex">-->
        <!--          <a-->
        <!--            href="#"-->
        <!--            class="text-base font-medium text-gray-200 hover:text-gray-900"-->
        <!--          >-->
        <!--            Servers-->
        <!--          </a>-->
        <!--          <a-->
        <!--            href="#"-->
        <!--            class="text-base font-medium text-gray-200 hover:text-gray-900"-->
        <!--          >-->
        <!--            Personal Stats-->
        <!--          </a>-->
        <!--        </PopoverGroup>-->
        <!--        <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">-->
        <!--          <a-->
        <!--            href="#"-->
        <!--            class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"-->
        <!--            >Sign in</a-->
        <!--          >-->
        <!--        </div>-->
      </div>

      <transition
        enter-active-class="duration-200 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <PopoverPanel
          focus
          class="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
        >
          <div
            class="divide-y-2 divide-zinc-700 rounded-lg bg-zinc-800 shadow-lg ring-1 ring-black ring-opacity-5"
          >
            <div class="px-5 pt-5 pb-6">
              <div class="flex items-center justify-between">
                <div>
                  <img
                    class="h-8 w-auto"
                    src="@/assets/circle-640-transparent.png"
                    alt="The Circle"
                  />
                </div>
                <div class="-mr-2">
                  <PopoverButton
                    class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-zinc-700 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span class="sr-only">Close menu</span>
                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
            </div>
            <div class="py-6 px-5">
              <div class="grid grid-cols-2 gap-4">
                <a
                  href="#"
                  class="text-base font-medium text-gray-200 hover:text-gray-700"
                >
                  Servers
                </a>
                <a
                  href="#"
                  class="text-base font-medium text-gray-200 hover:text-gray-700"
                >
                  Personal Stats
                </a>
              </div>
              <div class="mt-6">
                <a
                  href="#"
                  class="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                  >Sign in</a
                >
              </div>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </header>
</template>

<script setup>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
</script>
