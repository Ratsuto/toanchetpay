<script setup>

import Home from "@/views/Home.vue";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <header>
    <NavBar/>
  </header>

  <main class="w-full bg-[#f5f5f7] dark:bg-black min-h-screen">
    <Home/>
  </main>
</template>

<style scoped>

</style>
