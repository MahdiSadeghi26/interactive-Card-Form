import { defineStore } from "pinia";

export  const useFormStore=defineStore('Form',{
    state:()=>({
        isSubmited:false
    })
})