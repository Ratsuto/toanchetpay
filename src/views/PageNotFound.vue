<script setup>

</script>

<template>
  <div class="h-screen text-gray-600 flex items-center justify-center bg-[#eef3fa]">
    <div class="flex flex-col items-center justify-center py-8 px-16 gap-6 border-none">
      <h1 class="text-2xl text-gray-500">Uh oh, Nothing Here!</h1>
      <img src="../assets/images/icons/logo-not-found.png" alt="logo" class="h-64"/>
      <h2 class="text-gray-500">Page does not exist.</h2>
      <router-link to="/home">
        <Button icon="pi pi-caret-left" label="Back to Home" class="bg-[#3e65c4] hover:bg-[#203262] border-none"></Button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>

</style>