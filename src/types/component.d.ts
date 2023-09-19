import PhoneCodeForm from '@/views/Login/components/PhoneCodeForm.vue'

declare module 'vue' {
  interface GlobalComponents {
    PhoneCodeForm: typeof PhoneCodeForm
  }
}
