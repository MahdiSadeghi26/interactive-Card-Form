import { defineStore } from "pinia";

export const useCardStore=defineStore('Card',{
    state:()=>({
        cardNumber:'',
        cardHolder:'',
        expMonth:'',
        expYear:''
    }),
    
})