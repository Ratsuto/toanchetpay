<script setup>
import {ref} from 'vue';

const icons = ref([
      {index: 1, name: "ACLEDA"},
      {index: 2, name: "KHQR"},
      {index: 3, name: "VISA"},
      {index: 4, name: "MASTER"},
      {index: 5, name: "PromptPay"},
      {index: 6, name: "VietQR"},
      {index: 7, name: "LAPNet"},
      {index: 8, name: "Roam QR"},
      {index: 9, name: "JPQR"},
    ]
);

</script>

<template>
  <div class="flex flex-col gap-2 text-[#0d275e] dark:text-white" data-aos="fade-up">
    <h2 class="lg:text-[56px] text-[25px] font-bold keyId6">KHQR</h2>
    <p class="lg:text-3xl text-[20px] dark:text-gray-400 keyId7">Display QR</p>
  </div>

  <div class="grid grid-cols-5 lg:grid-cols-9 gap-4 py-8 items-center">
    <div v-for="icon in icons" :key="icon" class="flex flex-col gap-2 items-center">
      <img :src="`../src/assets/images/khqr-section/icon-${icon.index}.png`" class="h-12 xl:h-24" :alt="icon.index">
      <p class="xl:text-lg text-sm">
        {{ icon.name }}
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>