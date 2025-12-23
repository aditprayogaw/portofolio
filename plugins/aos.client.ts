// plugins/aos.client.ts
import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    AOS.init({
      duration: 800,     // Durasi animasi (ms)
      easing: 'ease-out-cubic', // Gaya animasi yang halus
      once: true,        // Animasi hanya jalan sekali (tidak ulang saat scroll naik)
      offset: 50,        // Memicu animasi sedikit lebih awal
    })
  })
})