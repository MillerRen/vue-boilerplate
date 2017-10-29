import Vue from 'vue'
import VeeValidate, {Validator} from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN'

Validator.addLocale(zh)

Vue.use(VeeValidate, {
  locale: 'zh_CN'
})
