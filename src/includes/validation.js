import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage, configure } from "vee-validate";
import { required , min ,alpha_spaces, numeric ,min_value , max_value } from "@vee-validate/rules";
export default {
  install(app) {
    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
    app.component('ErrorMessage',ErrorMessage)

    defineRule('required', required);
    defineRule('min', min);
    defineRule('alpha_spaces', alpha_spaces);
    defineRule('numeric', numeric);
    defineRule('min_value', min_value);
    defineRule('max_value', max_value);

    configure({
      generateMessage:(ctx)=>{
        const messages = {
          required:`${ctx.field} Can't be blank`,
          min:`The ${ctx.field}is too Short.`,
          alpha_spaces:`This field Onlay Takes Alphabetic and Spaces`,
          numeric:`This ${ctx.field} Takes only numeric values. `,
          min_value:`Month minumum 01 year minimum 23`,
          max_value:`for month maximum 12 and year 30 `

        }
        const message=messages[ctx.rule.name] ? messages[ctx.rule.name] : `The field ${ctx.field} is invalid.`;
        return message;
      }
    })

  },
};
