<script setup>
import { ref } from 'vue'

let formFlag = ref(true);
let sucessFlag = ref(false)
</script>

<template>
  <!-- grid container -->
  <div class="grid lg:grid-cols-2 h-screen  ">
    <div class="flex xl:inline md:justify-center ">
      <!-- backgrounds -->
      <img src="/image/bg-main-desktop.png" alt="desktop backgrorund"
        class="lg:inline sm:hidden lg:row-span-2 w-3/5 h-screen ">
      <img src="/image/bg-main-mobile.png" alt="mobile background" class="lg:hidden sm:inline sm:w-full sm:h-[270px]">
      <!-- front card -->
      <div class="absolute xl:top-[17%] lg:top-[15%] xl:left-[12%] lg:left-[7%] md:top-[21%] md:left-[30%]  text-slate-50 font-spaceMedium z-20 ">
        <img src="image/bg-card-front.png" alt="card front" class="xl:w-[430px] lg:w-[370px] md:w-[300px]">
        <img src="image/card-logo.svg" alt="card logo" class="absolute xl:top-[10%] md:top-5 md:left-5 xl:left-[10%] lg:top-[10%] lg:left-[10%] md:w-[60px]">
        <p class="inline  absolute xl:bottom-[30%] md:bottom-[25%] md:text-lg md:left-10 xl:text-3xl  xl:left-[9%] tracking-widest lg:bottom-[29%] lg:left-[11%] lg:text-2xl">9591 6489 6389 101E</p>
        <!-- card holder name -->
        <p class="absolute lg:bottom-[10%] xl:left-[10%] md:left-[12%] md:bottom-[10%] md:text-sm">FELICA LEIRE</p>
        <span class="absolute md:right-[10%] md:bottom-[10%] text-sm">
          <p class="inline">09</p> / <p class="inline">00</p>
        </span>
      </div>
      <!-- back cart -->
      <div class="absolute lg:bottom-[15%]   xl:left-[17%] lg:left-[14%] xl:w-[430px] lg:w-[370px] md:w-[300px] md:bottom-[69%]">
        <img src="/image/bg-card-back.png" class="" alt="">
        <p
          class="absolute xl:top-[100px] font-spaceMedium tracking-wider xl:right-12 text-xl text-slate-50 lg:top-[85px] md:right-10 md:top-[42%] md:text-base ">
          000</p>
      </div>
    </div>
    <!-- inputs -->
    <div class="flex  items-center justify-center md:w-auto  ">
      <!-- success section (displays if everything is valid) -->
      <div class="flex flex-col items-center  xl:w-[400px]" v-if="sucessFlag">
        <img src="/image/icon-complete.svg" alt="completed">
        <p class="mt-8 text-3xl font-spaceSemiBold tracking-widest">THANK YOU!</p>
        <p class="tracking-wide text-darkGray mt-4 font-spaceMedium">We've added your card details</p>
        <button class="bg-darkViolet text-slate-50 font-spaceBold mt-5 w-full rounded-md p-4">Continue</button>
      </div>
      <div class="flex justify-center lg:w-[350px]">
        <form action="#" class="xl:w-[400px] lg:w-full" v-if="formFlag">
          <p class="lable">CARDHOLDER NAME</p>
          <input type="text" placeholder="e.g. Jane Applessed" class="bigInput !mb-5">
          <p class="lable">CARD NUMBER</p>
          <input type="text" placeholder="e.g. 1234 5678 9123 0000" class="bigInput">
          <div class="w-full mt-8 flex">
            <!-- exp date -->
            <div class="w-1/2">
              <p class="lable">EXP. DATE (MM/YY)</p>
              <input type="text" class="smallInputs" placeholder="MM">
              <input type="text" class="smallInputs ml-2" placeholder="YY">
            </div>
            <!-- cvc -->
            <div class="w-1/2">
              <p class="lable">CVC</p>
              <input type="text" class="smallInputs !w-full" placeholder="e.g. 123">
            </div>
          </div>
          <button
            class="w-full bg-darkViolet text-slate-50 mt-8 text-[17px] xl:p-4 lg:p-3 rounded-lg font-spaceMedium ">Confirm</button>
        </form>
      </div>

    </div>
  </div>
</template>

