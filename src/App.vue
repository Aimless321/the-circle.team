<script setup>
import { RouterView } from "vue-router";
import SiteHeader from "./components/SiteHeader.vue";
</script>

<template>
  <div class="bg-zinc-900">
    <SiteHeader />

    <main>
      <RouterView />
    </main>
  </div>
</template>
