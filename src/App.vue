<script setup>

</script>

<template>
  <!-- grid container -->
  <div class="lg:grid lg:grid-cols-2 h-screen overflow-hidden ">
    <div class="">
      <!-- backgrounds -->
      <img src="/image/bg-main-desktop.png" alt="desktop backgrorund" class="xl:inline sm:hidden xl:row-span-2 w-3/5  ">
      <img src="/image/bg-main-mobile.png" alt="mobile background" class="xl:hidden">
      <!-- front card -->
      <div class="absolute xl:top-[17%] xl:left-[12%] text-slate-50 font-spaceMedium">
        <img src="image/bg-card-front.png" alt="card front" class="w-[430px]" >
        <img src="image/card-logo.svg" alt="card logo" class="xl:absolute xl:top-[10%] xl:left-[7%]">
        <p class="inline  absolute xl:bottom-[30%] xl:text-3xl  xl:left-[9%] tracking-widest">9591 6489 6389 101E</p>
        <!-- card holder name -->
        <p class="absolute xl:bottom-[10%] xl:left-[10%]">FELICA LEIRE</p>
        <span class="absolute xl:right-[10%] xl:bottom-[10%]"><p class="inline">09</p> / <p class="inline">00</p></span>
      </div>
      <!-- back cart -->
      <div class="absolute xl:bottom-[45%] xl:left-[17%] xl:w-[430px]">
        <img src="/image/bg-card-back.png" class="xl:absolute " alt="">
        <p class="absolute xl:top-[100px] font-spaceMedium tracking-wider xl:right-12 text-xl text-slate-50">000</p>
      </div>
    </div>
    <div class="xl:flex justify-center items-center">
      <!-- inputs -->
      <div class="bg-green-400 xl:w-[400px] h-auto text-darkPurple font-spaceBold">
        <!-- card holder -->
        <p>CARD HOLDER</p>
        
      </div>
    </div>
  </div>
</template>

