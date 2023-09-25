<script setup>
import Thanks from '@/components/Thanks.vue';
import Inputes from '@/components/Inputes.vue';
import CardFront from '@/components/CardFront.vue'
import CardBack from '@/components/CardBack.vue'

import { useFormStore } from '@/stores/Form'

// Inputes section flag (input fild and )
const formStore = useFormStore().isSubmited
// card state




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
      <CardFront></CardFront>
      <!-- back cart -->
      <CardBack></CardBack>
    </div>
    <!-- inputs -->
    <div class="flex  sm:items-center  w-full  justify-center md:w-11/12 -mt-32 md:m-auto  p-2 ">
      <Thanks v-if="formStore.isSubmited"></Thanks>
      <Inputes v-if="!formStore.isSubmited"></Inputes>

    </div>
  </div>
</template>

