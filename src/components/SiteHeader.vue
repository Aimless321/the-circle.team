<template>
  <header>
    <Popover class="relative">
      <div
        class="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link to="/">
            <span class="sr-only">The Circle</span>
            <img
              class="h-8 w-auto sm:h-10"
              src="@/assets/circle-640-transparent.png"
              alt="The Circle logo"
            />
          </router-link>
        </div>
        <div class="-my-2 -mr-2 md:hidden">
          <PopoverButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-zinc-800 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Open menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden space-x-10 md:flex">
          <router-link
            to="/"
            class="text-base font-medium text-gray-200 hover:text-gray-300"
          >
            Home
          </router-link>
          <router-link
            to="/servers"
            class="text-base font-medium text-gray-200 hover:text-gray-300"
          >
            Servers
          </router-link>
          <router-link
            to="/stats"
            class="text-base font-medium text-gray-200 hover:text-gray-300"
          >
            Stats
          </router-link>
        </PopoverGroup>
        <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <a
            v-if="!store.loggedIn"
            :href="`${apiUrl}/auth/discord`"
            class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
            >Sign in</a
          >
          <Menu v-else as="div" class="relative ml-3">
            <div>
              <MenuButton
                class="flex text-gray-400 text-sm items-end focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span class="sr-only">Open user menu</span>
                Logged in as:&nbsp;
                <span class="text-gray-200">{{ getUsername() }}</span>
                <ChevronDownIcon class="h-4 w-4 text-gray-300 ml-2" />
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-zinc-900/90 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem>
                  <a
                    @click="logout()"
                    class="block px-4 py-2 text-sm text-white cursor-pointer"
                  >
                    Logout
                  </a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
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
                <router-link
                  to="/"
                  class="text-base font-medium text-gray-200 hover:text-gray-300"
                >
                  Home
                </router-link>
                <router-link
                  to="/servers"
                  class="text-base font-medium text-gray-200 hover:text-gray-300"
                >
                  Servers
                </router-link>
                <router-link
                  to="/stats"
                  class="text-base font-medium text-gray-200 hover:text-gray-300"
                >
                  Stats
                </router-link>
              </div>
              <div class="mt-6">
                <a
                  v-if="!store.loggedIn"
                  :href="`${apiUrl}/auth/discord`"
                  class="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                  >Sign in</a
                >
                <p v-else class="text-gray-400">
                  Logged in as:
                  <span class="text-gray-200">{{ getUsername() }}</span>
                </p>
              </div>
              <div class="mt-2">
                <a
                  @click="logout()"
                  class="block text-white cursor-pointer"
                >
                  Logout
                </a>
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
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { useStore } from "../store";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/vue/24/outline";

const apiUrl = import.meta.env.VITE_API_BASE_URL;
const store = useStore();

function getUsername() {
  return localStorage.getItem("username");
}

function logout() {
  store.logout();
}
</script>
