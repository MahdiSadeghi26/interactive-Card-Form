<script setup>
import { watch, ref } from 'vue';
import { useCardStore } from '@/stores/Card'
import { useFormStore } from '@/stores/Form'

// Inputes section flag (input fild and )
const formStore = useFormStore()
let cardState = useCardStore()
let maskedNumber = ref('')
let isFieldEmpty = ref(null)
const formatCardNumber = (event) => {
    console.log(event)
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

let blankFlag = ref(false)
let shortFlag = ref(false)

function errorBorder(event, min) {
    if (event.target.name == 'CardNumber' && !event.target.value) {
        event.target.classList.add('errorBorder')
        blankFlag.value = true;
    } else {
        event.target.classList.remove('errorBorder')
        blankFlag.value = false
    }
    if (event.target.name == 'CardNumber' && event.target.value.length < 16) {
        shortFlag.value = true
        event.target.classList.add('errorBorder')
    }
    else {
        event.target.classList.remove('errorBorder')
        shortFlag.value = false
    }
    if (!event.target.value || event.target.length < min) {
        event.target.classList.add('errorBorder')
    }
    else {
        event.target.classList.remove('errorBorder')
    }

}

let schema = {
    CardHolder: 'required|alpha_spaces|min:5',
    expMonth: 'required|numeric|min:2|min_value:01|max_value:12',
    expYear: 'required|numeric|min:2|min_value:23|max_value:30',
    cvc: 'required|numeric|min:2'
}

function submited() {
    
        formStore.isSubmited = true
    
}
</script>
<template>
    <div class="flex justify-center lg:w-[400px] md:w-[350px] w-auto">
        <transition-group leave-active-class="animate__animated animate__fadeOutUp" enter-active-class="animate__animated animate__fadeIn animate__delay-2s">
            <vee-form @submit="submited" :validation-schema="schema" v-if="!formStore.isSubmited"
                class="xl:w-full lg:w-full">

                <p class="lable">CARDHOLDER NAME</p>
                <vee-field type="text" name="CardHolder" :bails="false" v-slot="{ field, errors }">
                    <input @blur="errorBorder($event, 15)" type="text" placeholder="e.g. Jane Applessed"
                        :class="{ errorBorder: isFieldEmpty }" class="bigInput" v-model="cardState.cardHolder"
                        maxlength="15" v-bind="field" />
                    <transition-group enter-active-class="animate__animated animate__bounceIn"
                        leave-active-class="animate__animated animate__bounceOut">
                        <div class="errorMassage" v-for="error in errors" :key="error">
                            <p>{{ error }}</p>
                        </div>
                    </transition-group>
                </vee-field>
                <!-- cardNumber -->
                <p class="lable mt-7">CARD NUMBER</p>
                <input name="CardNumber" type="text" @blur="errorBorder" @input="formatCardNumber"
                    placeholder="e.g. 1234 5678 9123 0000" class="bigInput" v-model="maskedNumber" maxlength="19" />
                <transition-group name="card" enter-active-class="animate__animated animate__bounceIn"
                    leave-active-class="animate__animated animate__bounceOut">
                    <!-- validator Message -->
                    <p class="errorMassage" v-if="blankFlag">Can't ba blank</p>
                    <p class="errorMassage" v-if="shortFlag">Should be 16 characters</p>

                </transition-group>
                <div class="w-full mt-8 flex">
                    <!-- exp date -->
                    <div class="w-[60%] h-auto">
                        <p class="lable">EXP. DATE (MM/YY)</p>
                        <vee-field @blur="errorBorder($event, 2)" type="text" class="smallInputs" placeholder="MM"
                            v-model="cardState.expMonth" name="expMonth" maxLength="2" />
                        <vee-field @blur="errorBorder($event, 2)" type="text" class="smallInputs ml-2" placeholder="YY"
                            v-model="cardState.expYear" name="expYear" maxLength="2" />
                        <ErrorMessage class="errorMassage w-full !block !mb-1" name="expMonth" />
                        <ErrorMessage class="errorMassage w-full !inline" name="expYear" />
                    </div>

                    <!-- cvc -->
                    <div class="w-1/2 ">
                        <p class="lable">CVC</p>
                        <vee-field @blur="errorBorder" type="text" class="smallInputs !w-full" placeholder="e.g. 123"
                            v-model="cardState.cvc" name="cvc" maxLength="3" />
                        <ErrorMessage class="errorMassage w-full !block" name="cvc" />
                    </div>
                </div>
                <button type="submit"
                    class="w-full bg-darkViolet text-slate-50 mt-8 text-[17px] xl:p-4 md:p-3 lg:p-3 rounded-lg font-spaceMedium  p-2">Confirm</button>
            </vee-form>
        </transition-group>
    </div>
</template>
