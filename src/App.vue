<script setup>

import Thanks from '@/components/Thanks.vue'
import Inputes from '@/components/Inputes.vue'



</script>

<template>
  <!-- grid container -->
  <div class="grid grid-cols-1 justify-start w-full lg:grid-cols-2 h-screen sm:items-start  ">
    <div class="lg:inline flex  sm:justify-center  h-[300px]  md:h-auto w-auto">
      <!-- backgrounds -->
      <img src="/image/bg-main-desktop.png" alt="desktop backgrorund"
        class="lg:inline hidden lg:row-span-2 w-3/5 h-screen ">
      <img src="/image/bg-main-mobile.png" alt="mobile background"
        class="lg:hidden sm:inline w-full sm:h-[270px] h-[240px]">
      <!-- front card -->
      <div
        class="absolute xl:top-[17%] lg:top-[15%] xl:left-[12%] lg:left-[7%]  sm:top-[21%] top-[14.5%] md:left-[20%] sm:left-[25%] left-10  text-slate-50 font-spaceMedium z-20 ">
        <img src="image/bg-card-front.png" alt="card front"
          class="xl:w-[430px] lg:w-[370px] md:w-[300px] sm:w-[270px] w-[250px]">
        <img src="image/card-logo.svg" alt="card logo"
          class="absolute xl:top-[10%] top-5 md:w-[80px]  left-5 xl:left-[10%] lg:top-[10%] lg:left-[10%] sm:w-[60px] w-[50px]">
        <p
          class="inline  absolute xl:bottom-[30%] md:bottom-[25%] md:text-lg md:left-10 left-8  xl:text-[26px] bottom-[25%]   tracking-widest lg:bottom-[29%] lg:left-[11%] lg:text-2xl">
          0000 0000 0000 0000</p>
        <!-- card holder name -->
        <p class="absolute lg:bottom-[10%] xl:left-[10%] md:left-[12%] left-[10%] bottom-[10%] sm:text-sm text-xs">FELICA
          LEIRE</p>
        <span class="absolute md:right-[10%] md:bottom-[10%] text-sm bottom-[10%] right-8">
          <p class="inline">09</p> / <p class="inline">00</p>
        </span>
      </div>
      <!-- back cart -->
      <div
        class="absolute lg:bottom-[15%]   xl:left-[17%] lg:left-[14%] xl:w-[430px] lg:w-[370px] md:w-[300px] sm:left-[35%] right-[10%] w-[250px] md:bottom-[69%] sm:bottom-[75%] bottom-[78%]">
        <img src="/image/bg-card-back.png" class="" alt="">
        <p
          class="absolute xl:top-[100px] font-spaceMedium tracking-wider xl:right-12 lg:text-xl text-slate-50 lg:top-[85px] md:right-10 sm:right-8 sm:top-[42%] md:text-base sm:text-sm top-[54px] right-8 ">
          000</p>
      </div>
    </div>
    <!-- inputs -->
    <div class="flex  sm:items-center  w-full  justify-center md:w-11/12 -mt-32 md:m-auto  p-2 ">
      <Thanks></Thanks>
      <Inputes></Inputes>

    </div>
  </div>
</template>

