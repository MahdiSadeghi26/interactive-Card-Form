<script setup>
import { useFormStore } from '@/stores/Form'

// Inputes section flag (input fild and )
const formStore = useFormStore()

</script>
<template>
    <!-- success section (displays if everything is valid) -->
    <div class="flex flex-col items-center  xl:w-[400px]" v-show="formStore.isSubmited">
            <img src="/image/icon-complete.svg" alt="completed">
            <p class="mt-8 text-3xl font-spaceSemiBold tracking-widest">THANK YOU!</p>
            <p class="tracking-wide text-darkGray mt-4 font-spaceMedium">We've added your card details</p>
            <button @click="formStore.isSubmited=false"  class="bg-darkViolet text-slate-50 font-spaceBold mt-5 w-full rounded-md p-4">Continue</button>

        </div>
</template>

