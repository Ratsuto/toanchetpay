<script setup>

</script>

<template>
  <header class="fixed w-full z-10">
    <!--    Desktop-->
    <nav class="w-full 2xl:flex hidden items-center justify-between transition-all duration-300 ease-in-out px-16 pt-4 font-light">
      <div class="w-133 flex justify-start">
        <router-link to="home">
          <img src="@/assets/images/bank-logo/logo-acleda-white.png" alt="logo" class="h-9 w-auto logo dark:hidden"/>
          <img src="@/assets/images/bank-logo/logo-acleda-white.png" alt="logo" class="h-9 w-auto hidden dark:block">
        </router-link>
      </div>

      <div class="w-full flex justify-center items-center content-header">
        <div class="flex items-center justify-center gap-4 transition-all duration-300 ease-in-out rounded-full bg-black/20 backdrop-blur-sm px-2 text-white">

          <div class="group py-1 relative h-full">
            <div class="flex items-center gap-2 py-1 px-3 group-hover:text-blue-500 rounded-full w-full h-full content-item">
              <span class="">Products & Services</span>
              <i class="pi pi-angle-down text-sm"></i>
            </div>

            <div class="max-h-0 group-hover:max-h-96 transition-all duration-300 ease-in-out flex flex-col z-10 mt-1 absolute bg-black/70 w-56 rounded-xl shadow-md overflow-hidden content-menu">
              <a href="#" target="" class="px-3 py-1.5 hover:bg-blue-800/40 backdrop-blur-lg hover:text-white">
                <span class="">KHQR</span>
              </a>
            </div>
          </div>

          <div class="group py-1 relative h-full">
            <div class="flex items-center gap-2 py-1 px-3 group-hover:text-blue-500 rounded-full w-full h-full content-item">
              <span class="">Management</span>
              <i class="pi pi-angle-down text-sm"></i>
            </div>

            <div class="max-h-0 group-hover:max-h-96 transition-all duration-300 ease-in-out flex flex-col z-10 mt-1 absolute bg-black/70 w-56 rounded-xl shadow-md overflow-hidden content-menu">
              <a href="#" target="" class="px-3 py-1.5 hover:bg-blue-800/40 backdrop-blur-lg hover:text-white">
                <span class="">KHQR</span>
              </a>
            </div>
          </div>

          <div class="group py-1 relative h-full">
            <div class="flex items-center gap-2 py-1 px-3 group-hover:text-blue-500 rounded-full w-full h-full content-item">
              <span class="">Integration</span>
              <i class="pi pi-angle-down text-sm"></i>
            </div>

            <div class="max-h-0 group-hover:max-h-96 transition-all duration-300 ease-in-out flex flex-col z-10 mt-1 absolute bg-black/70 w-56 rounded-xl shadow-md overflow-hidden content-menu">
              <a href="#" target="" class="px-3 py-1.5 hover:bg-blue-800/40 backdrop-blur-lg hover:text-white">
                <span class="">KHQR</span>
              </a>
            </div>
          </div>

          <div class="group py-1 relative h-full">
            <div class="flex items-center gap-1 py-1 px-3 group-hover:text-blue-500 rounded-full w-full h-full content-item">
              <span id="mode-icon">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 28 28" stroke="currentColor">
                  <path d="M7.5 8.5C7.5 7.94772 7.94772 7.5 8.5 7.5H19.5C20.0523 7.5 20.5 7.94772 20.5 8.5V16.5C20.5 17.0523 20.0523 17.5 19.5 17.5H8.5C7.94772 17.5 7.5 17.0523 7.5 16.5V8.5Z" stroke="currentColor"></path>
                  <path d="M7.5 8.5C7.5 7.94772 7.94772 7.5 8.5 7.5H19.5C20.0523 7.5 20.5 7.94772 20.5 8.5V14.5C20.5 15.0523 20.0523 15.5 19.5 15.5H8.5C7.94772 15.5 7.5 15.0523 7.5 14.5V8.5Z" stroke="currentColor"></path>
                  <path d="M16.5 20.5V17.5H11.5V20.5M16.5 20.5H11.5M16.5 20.5H17.5M11.5 20.5H10.5" stroke="currentColor" stroke-linecap="round"></path>
                </svg>
              </span>
              <i class="pi pi-angle-down text-sm"></i>
            </div>

            <div class="max-h-0 group-hover:max-h-96 transition-all duration-300 ease-in-out flex flex-col z-10 mt-1 absolute right-0 bg-black/70 w-32 rounded-xl shadow-md overflow-hidden content-menu">
              <a id="systemBtn"
                 class="transition-all duration-200 hover:bg-blue-800/40 backdrop-blur-lg hover:text-white flex items-center gap-2 px-2 py-1 cursor-pointer"
                 title="System">
                <!-- Computer Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 28 28" stroke="currentColor">
                  <path d="M7.5 8.5C7.5 7.94772 7.94772 7.5 8.5 7.5H19.5C20.0523 7.5 20.5 7.94772 20.5 8.5V16.5C20.5 17.0523 20.0523 17.5 19.5 17.5H8.5C7.94772 17.5 7.5 17.0523 7.5 16.5V8.5Z" stroke="currentColor"></path>
                  <path d="M7.5 8.5C7.5 7.94772 7.94772 7.5 8.5 7.5H19.5C20.0523 7.5 20.5 7.94772 20.5 8.5V14.5C20.5 15.0523 20.0523 15.5 19.5 15.5H8.5C7.94772 15.5 7.5 15.0523 7.5 14.5V8.5Z" stroke="currentColor"></path>
                  <path d="M16.5 20.5V17.5H11.5V20.5M16.5 20.5H11.5M16.5 20.5H17.5M11.5 20.5H10.5" stroke="currentColor" stroke-linecap="round"></path>
                </svg>
                Auto
              </a>

              <a id="lightBtn"
                 class="transition-all duration-200 hover:bg-blue-800/40 backdrop-blur-lg hover:text-white flex items-center gap-2 px-2 py-1 cursor-pointer"
                 title="Light">
                <!-- Sun Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 28 28" stroke="currentColor">
                  <circle cx="14" cy="14" r="3.5" stroke="currentColor"></circle>
                  <path d="M14 8.5V6.5" stroke="currentColor" stroke-linecap="round"></path>
                  <path d="M17.889 10.1115L19.3032 8.69727" stroke="currentColor" stroke-linecap="round"></path>
                  <path d="M19.5 14L21.5 14" stroke="currentColor" stroke-linecap="round"></path>
                  <path d="M17.889 17.8885L19.3032 19.3027" stroke="currentColor" stroke-linecap="round"></path>
                  <path d="M14 21.5V19.5" stroke="currentColor" stroke-linecap="round"></path>
                  <path d="M8.69663 19.3029L10.1108 17.8887" stroke="currentColor" stroke-linecap="round"></path>
                  <path d="M6.5 14L8.5 14" stroke="currentColor" stroke-linecap="round"></path>
                  <path d="M8.69663 8.69711L10.1108 10.1113" stroke="currentColor" stroke-linecap="round"></path>
                </svg>
                Light
              </a>

              <a id="darkBtn"
                 class="transition-all duration-200 hover:bg-blue-800/40 backdrop-blur-lg hover:text-white flex items-center gap-2 px-2 py-1 cursor-pointer"
                 title="Dark">
                <!-- Moon Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 28 28" stroke="currentColor">
                  <path d="M10.5 9.99914C10.5 14.1413 13.8579 17.4991 18 17.4991C19.0332 17.4991 20.0176 17.2902 20.9132 16.9123C19.7761 19.6075 17.109 21.4991 14 21.4991C9.85786 21.4991 6.5 18.1413 6.5 13.9991C6.5 10.8902 8.39167 8.22304 11.0868 7.08594C10.7089 7.98159 10.5 8.96597 10.5 9.99914Z" stroke="currentColor" stroke-linejoin="round"></path>
                  <path d="M16.3561 6.50754L16.5 5.5L16.6439 6.50754C16.7068 6.94752 17.0525 7.29321 17.4925 7.35607L18.5 7.5L17.4925 7.64393C17.0525 7.70679 16.7068 8.05248 16.6439 8.49246L16.5 9.5L16.3561 8.49246C16.2932 8.05248 15.9475 7.70679 15.5075 7.64393L14.5 7.5L15.5075 7.35607C15.9475 7.29321 16.2932 6.94752 16.3561 6.50754Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M20.3561 11.5075L20.5 10.5L20.6439 11.5075C20.7068 11.9475 21.0525 12.2932 21.4925 12.3561L22.5 12.5L21.4925 12.6439C21.0525 12.7068 20.7068 13.0525 20.6439 13.4925L20.5 14.5L20.3561 13.4925C20.2932 13.0525 19.9475 12.7068 19.5075 12.6439L18.5 12.5L19.5075 12.3561C19.9475 12.2932 20.2932 11.9475 20.3561 11.5075Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                Dark
              </a>
            </div>
          </div>

        </div>
      </div>

      <div class="w-auto flex justify-end">
        <div class="flex items-center justify-center gap-4">
          <div class="group relative text-white language-div">
            <a class="flex items-center gap-2 cursor-pointer dark:text-white" id="select-language">
              <img src="@/assets/images/language-icons/KHM.png" alt="logo" class="h-5 w-5 rounded-full">
              KH
            </a>
            <div class="w-28 mt-2 bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden flex flex-col group-menu text-sm absolute right-0 hidden">
              <a class="flex items-center gap-2 px-3 py-2 hover:bg-blue-500 group-item cursor-pointer" id="">
                <img src="@/assets/images/language-icons/KHM.png" alt="logo" class="h-5 w-5 rounded-full">
                Khmer
              </a>
            </div>
          </div>

          <a href="#" id="apply_now" class="w-30 text-center px-4 py-1.5 bg-blue-800/10 backdrop-blur-md rounded-full ring-1 ring-blue-800 hover:bg-blue-800/40 text-white">
            <span class="keyId63">Apply Now</span>
          </a>

          <a href="#" target="_blank" class="w-32 text-center px-4 py-1.5 bg-blue-500 ring-1 ring-blue-500 hover:bg-blue-600 rounded-full text-white">
            <i class="pi pi-user pr-2"></i>
            <span class="keyId64">Login</span>
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>

</style>