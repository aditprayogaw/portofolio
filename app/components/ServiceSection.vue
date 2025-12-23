<script setup lang="ts">
const { services } = usePortfolioData()

// Kita tambahkan icon manual untuk setiap service agar visual lebih menarik
const serviceIcons = [
    'i-heroicons-code-bracket-square', // Icon untuk Frontend
    'i-heroicons-paint-brush',         // Icon untuk UI/UX
    'i-heroicons-camera'               // Icon untuk Visual/Photography
]
</script>

<template>
    <section id="services" class="py-24 bg-primary-dark relative">

        <UContainer class="relative z-10">

            <div class="text-center max-w-2xl mx-auto mb-16 space-y-4">
                <h2 class="text-3xl md:text-4xl font-bold text-white">
                    What Do I Offer
                </h2>
                <p class="text-custom-text text-lg">
                    Creates Professional Design That's Oriented Towards Client Needs
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div v-for="(service, index) in services" :key="index" data-aos="fade-up" :data-aos-delay="index * 100"
                    class="group p-8 rounded-2xl bg-primary border border-secondary/30 hover:border-light transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-light/10">
                    <div
                        class="w-14 h-14 rounded-full bg-primary-dark border border-secondary/50 flex items-center justify-center mb-6 group-hover:bg-light group-hover:text-primary-dark transition-colors duration-300">
                        <UIcon :name="serviceIcons[index]" class="w-7 h-7 text-light group-hover:text-primary-dark" />
                    </div>

                    <h3 class="text-xl font-bold text-white mb-3">
                        {{ service.title }}
                    </h3>
                    <p class="text-gray-300 leading-relaxed text-sm">
                        {{ service.description }}
                    </p>
                </div>
            </div>

        </UContainer>
    </section>
</template>