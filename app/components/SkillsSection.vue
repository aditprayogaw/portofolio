<script setup lang="ts">
// Daftar Skill Manual (Bisa dipindah ke composables jika mau)
const skills = [
    { name: 'Vue.js', icon: 'i-heroicons-code-bracket' },
    { name: 'Nuxt.js', icon: 'i-heroicons-cube' },
    { name: 'Laravel', icon: 'i-heroicons-server' },
    { name: 'Tailwind CSS', icon: 'i-heroicons-paint-brush' },
    { name: 'UI/UX Design', icon: 'i-heroicons-swatch' },
    { name: 'Photography', icon: 'i-heroicons-camera' },
    { name: 'Adobe Photoshop', icon: 'i-heroicons-photo' }, // Menggunakan icon umum jika logo Ps belum ada
    { name: 'Adobe Illustrator', icon: 'i-heroicons-pencil' }
]
</script>

<template>
    <section class="py-16 bg-gradient from-primary-dark to-primary/20">
        <UContainer class="text-center">

            <h3 class="text-xl font-bold text-gray-400 mb-8 uppercase tracking-widest">
                Tools & Skills
            </h3>

            <div class="flex flex-wrap justify-center gap-4">
                <div v-for="skill in skills" :key="skill.name"
                    class="flex items-center gap-2 px-6 py-3 rounded-full bg-primary border border-secondary/30 text-white font-medium hover:border-custom-text hover:text-custom-text hover:shadow-[0_0_15px_rgba(167,236,243,0.3)] transition-all duration-300 cursor-default">
                    <UIcon :name="skill.icon" class="w-5 h-5" />
                    <span>{{ skill.name }}</span>
                </div>
            </div>

        </UContainer>
    </section>
</template>