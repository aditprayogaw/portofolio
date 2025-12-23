<script setup lang="ts">
const { whyHireMe } = usePortfolioData()

// Icon dekoratif untuk setiap sifat
const icons = [
    'i-heroicons-briefcase',       // Workaholic
    'i-heroicons-chat-bubble-left-right', // Communicative
    'i-heroicons-user-group',      // Cooperative
    'i-heroicons-star'             // Perfectionist
]
</script>

<template>
    <section class="py-20 bg-primary-dark relative overflow-hidden">
        <UContainer>

            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-white mb-4">Why Hire Me?</h2>
                <div class="w-16 h-1 bg-secondary mx-auto rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="(item, index) in whyHireMe" :key="index" data-aos="flip-left" :data-aos-delay="index * 100"
                    class="bg-primary/50 border border-primary hover:border-light p-6 rounded-xl hover:bg-primary transition-all duration-300 group">
                    <div class="mb-4 text-light group-hover:text-custom-text transition-colors">
                        <UIcon :name="icons[index]" class="w-8 h-8" />
                    </div>

                    <h3 class="text-lg font-bold text-white mb-2">
                        {{ item.title }}
                    </h3>

                    <p class="text-sm text-gray-300 leading-relaxed">
                        {{ item.description }}
                    </p>
                </div>
            </div>

        </UContainer>
    </section>
</template>