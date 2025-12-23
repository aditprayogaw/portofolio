<script setup lang="ts">
const { projects } = usePortfolioData()
</script>

<template>
    <section id="project" class="py-24 bg-primary-dark">
        <UContainer>

            <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div>
                    <h2 class="text-3xl md:text-4xl font-bold text-white mb-2">
                        Latest Project
                    </h2>
                    <p class="text-gray-400">
                        Some of the projects I have worked on
                    </p>
                </div>

                <UButton to="#" variant="ghost" color="neutral"
                    class="text-custom-text hover:text-white self-start md:self-auto"
                    trailing-icon="i-heroicons-arrow-right">
                    More Projects
                </UButton>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
            </div>

        </UContainer>
    </section>
</template>