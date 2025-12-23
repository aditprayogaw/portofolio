<script setup lang="ts">
// Menerima data 'project' dari komponen induk
defineProps<{
    project: {
        id: number
        title: string
        category: string
        image: string
        link: string
    }
}>()
</script>

<template>
    <div
        data-aos="zoom-in-up"
        class="group relative rounded-xl overflow-hidden bg-primary border border-secondary/30 shadow-lg hover:shadow-light/20 hover:-translate-y-2 transition-all duration-300">

        <div class="aspect-video overflow-hidden relative">
            <img :src="project.image" :alt="project.title"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />

            <div
                class="absolute inset-0 bg-primary-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <UButton :to="project.link" color="neutral" variant="outline" :ui="{ base: 'rounded-full' }">
                    View Details
                </UButton>
            </div>
        </div>

        <div class="p-6">
            <p class="text-xs font-bold text-light uppercase tracking-wider mb-2">
                {{ project.category }}
            </p>
            <h3 class="text-xl font-bold text-white mb-1 group-hover:text-custom-text transition-colors">
                {{ project.title }}
            </h3>
        </div>

    </div>
</template>