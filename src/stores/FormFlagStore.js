import { defineStore } from "pinia";

export const useTormFlagStore=defineStore('formFlag',{
    state:()=>({
        isSubmited:false
    })
})