import type { Config } from 'tailwindcss'

export default <Config>{
  content: [],
  theme: {
    extend: {
      colors: {
        // 1. Definisi Warna Spesifik (Agar bisa panggil class: bg-primary-dark, text-light, dll)
        'primary-dark': '#021C41',  // Background Gelap
        'primary': '#02385A',       // Warna Utama
        'secondary': '#26668C',     // Aksen
        'light': '#55ACBF',         // Terang
        'custom-text': '#A7ECF3',   // Teks

        // 2. Palet "Brand" untuk Nuxt UI (Mapping warna Anda ke skala 50-950)
        brand: {
          50: '#F0FDFF',
          100: '#A7ECF3', // <-- Warna Text Anda
          200: '#8AE0EB',
          300: '#6CD4E3',
          400: '#55ACBF', // <-- Warna Light Anda
          500: '#26668C', // <-- Warna Secondary Anda (Sering jadi default Button)
          600: '#1D5073',
          700: '#02385A', // <-- Warna Primary Anda
          800: '#022A46',
          900: '#021C41', // <-- Warna Primary Dark Anda
          950: '#011026'
        }
      }
    }
  }
}