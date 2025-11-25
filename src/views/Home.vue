<script setup>

import KHQR from "@/components/KHQR.vue";
</script>

<template>
  <div class="relative w-full xl:h-screen flex items-center justify-center overflow-hidden">
    <!--    Title-->
    <img src="@/assets/images/background/web-title-KHM.png" alt="Title" id="web_title_img" class="absolute xl:h-36 h-18 2xl:top-38 xl:top-44 top-16">

    <!--    Background-->
    <img src="@/assets/images/background/bg-main.webp" alt="background" class="w-full xl:h-full md:h-[30rem] h-96 object-cover image-class"/>

    <!--    Floating POS image-->
    <img src="@/assets/images/background/POS_image.webp" alt="POS system"
         class="absolute w-full xl:h-full md:h-[30rem] h-96 object-cover floating-element brightness-[85%] transition-all duration-300 ease-in-out"/>
  </div>

  <a class="bg-black/20 backdrop-blur-md hover:bg-blue-500 border border-white/30 cursor-pointer overflow-hidden flex items-center justify-center shadow-sm text-white h-12 w-12 rounded-full fixed bottom-18 right-4 hideBtn">
    <i class="pi pi-arrow-up text-2xl"></i>
  </a>

  <a title="Chat Bot"
     class="bg-black/20 backdrop-blur-md hover:bg-blue-500 border border-white/30 cursor-pointer overflow-hidden flex items-center justify-center shadow-sm text-white h-12 w-12 rounded-full fixed bottom-4 right-4 z-2 hover:scale-90 transition-all duration-300 ease-in-out"
     id="showBotBtn">
    <i class="pi pi-twitch text-2xl" id="botIcon"></i>
  </a>

  <div class="w-full">
    <div class="xl:px-16 px-4">
      <!--      Exchange Rate-->
      <section id="ExchangeRate" class="lg:py-18 py-16">
        <KHQR/>
      </section>
    </div>
  </div>
</template>

<style scoped>

</style>