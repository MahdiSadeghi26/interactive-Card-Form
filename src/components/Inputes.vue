<script setup>
import { watch, ref } from 'vue';
import { useCardStore } from '@/stores/Card'

let cardState = useCardStore()
let maskedNumber = ref('')

const formatCardNumber = (event) => {
    let input = event.target.value;
    // Remove any non-digit characters from the input
    let formattedInput = input.replace(/\D/g, "");
    let maskedInput = "";

    // Apply the card number format
    for (let i = 0; i < formattedInput.length; i++) {
        if (i > 0 && i % 4 === 0) {
            maskedInput += " ";
        }
        maskedInput += formattedInput[i];
    }

    maskedNumber.value = maskedInput;
};

// Watch for changes in the maskedNumber and trim any extra spaces
watch(maskedNumber, (newValue) => {
    maskedNumber.value = newValue.trim();
    cardState.cardNumber = maskedNumber.value
});



</script>
<template>
    <div class="flex justify-center lg:w-[350px] md:w-[350px] w-auto">
        <form action="#" class="xl:w-full lg:w-full">
            <p class="lable">CARDHOLDER NAME</p>
            <input type="text" placeholder="e.g. Jane Applessed" class="bigInput !mb-5" v-model="cardState.cardHolder">
            <p class="lable">CARD NUMBER</p>
            <input type="text" placeholder="e.g. 1234 5678 9123 0000" class="bigInput " v-model="maskedNumber"
                maxlength="19" @input="formatCardNumber">
            <div class="w-full mt-8 flex">
                <!-- exp date -->
                <div class="w-1/2">
                    <p class="lable">EXP. DATE (MM/YY)</p>
                    <input type="text" class="smallInputs" placeholder="MM">
                    <input type="text" class="smallInputs ml-2" placeholder="YY">
                </div>
                <!-- cvc -->
                <div class="w-1/2 ">
                    <p class="lable">CVC</p>
                    <input type="text" class="smallInputs !w-full" placeholder="e.g. 123">
                </div>
            </div>
            <button
                class="w-full bg-darkViolet text-slate-50 mt-8 text-[17px] xl:p-4 md:p-3 lg:p-3 rounded-lg font-spaceMedium  p-2">Confirm</button>
        </form>
    </div>
</template>
