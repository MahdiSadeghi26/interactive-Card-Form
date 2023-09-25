<script setup>
import { useCardStore } from '@/stores/Card'
let cardState = useCardStore();


</script>

<template>
  <div
    class="absolute xl:top-[17%] lg:top-[15%] xl:left-[12%] lg:left-[7%]  sm:top-[21%] top-[14.5%] md:left-[20%] sm:left-[25%]  left-10  text-slate-50 font-spaceMedium z-20 ">
    <img src="image/bg-card-front.png" alt="card front"
      class="xl:w-[430px] lg:w-[370px] md:w-[300px] sm:w-[270px] w-[250px]">
    <img src="image/card-logo.svg" alt="card logo"
      class="absolute xl:top-[10%] top-5 md:w-[80px]  left-5 xl:left-[10%] lg:top-[10%] lg:left-[10%] sm:w-[60px] w-[50px]">
    <p
      class="inline  absolute xl:bottom-[30%] md:bottom-[25%] md:text-lg md:left-10 left-8  xl:text-[26px] bottom-[25%]    tracking-widest lg:bottom-[29%] lg:left-[11%] lg:text-2xl">
      {{ !cardState.cardNumber ? '0000 0000 0000 0000' : cardState.cardNumber }} </p>
    <!-- card holder name -->
    <p class="absolute lg:bottom-[10%] xl:left-[10%] md:left-[12%] left-[10%] bottom-[10%] sm:text-sm text-xs">{{
      !cardState.cardHolder ? 'FELICA LEIRE' : cardState.cardHolder }}</p>
    <span class="absolute md:right-[10%] md:bottom-[10%] text-sm bottom-[10%] right-8">
      <p class="inline">09</p> / <p class="inline">00</p>
    </span>
  </div>
</template>