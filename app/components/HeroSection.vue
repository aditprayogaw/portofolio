<script setup lang="ts">
// Ambil data profil dari composable yang sudah kita buat
const { personalInfo } = usePortfolioData()
</script>

<template>
    <section id="home" class="relative py-20 md:py-32 overflow-hidden">
        <UContainer>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <div class="space-y-6 animate-fade-in-up">
                    <div
                        class="inline-block px-4 py-1.5 rounded-full border border-secondary bg-primary/30 text-light text-sm font-medium">
                        Hello Everyone!
                    </div>

                    <div>
                        <h1 class="text-4xl md:text-4xl font-bold text-white mb-2 leading-tight">
                            My name is <span class="text-custom-text">{{ personalInfo.name }}</span>
                        </h1>
                        <h2 class="text-xl md:text-2xl font-medium text-secondary">
                            {{ personalInfo.role }}
                        </h2>
                    </div>

                    <p class="text-gray-300 text-lg text-justify leading-relaxed max-w-lg">
                        {{ personalInfo.description }}
                    </p>

                    <p class="text-light text-justify text-sm leading-relaxed max-w-lg italic ">
                        "{{ personalInfo.subDescription }}"
                    </p>

                    <div class="flex items-center gap-4 pt-4">
                        <UButton to="#project" color="neutral" size="lg" :ui="{ base: 'rounded-full' }" class="px-8"
                            icon="i-heroicons-arrow-right-20-solid" trailing>
                            Latest Project
                        </UButton>

                        <UButton :to="personalInfo.cvLink" variant="outline" color="neutral" size="lg" class="px-14 py-3"
                            :ui="{ base: 'rounded-full' }">
                            Download CV
                        </UButton>
                    </div>
                </div>

                <div class="relative flex justify-center md:justify-end">
                    <div
                        class="absolute inset-0 bg-gradient from-primary to-light opacity-20 blur-3xl rounded-full transform scale-90 translate-x-10 translate-y-10">
                    </div>

                    <div
                        class="relative w-80 h-80 md:w-112.5 md:h-112.5 overflow-hidden bg-primary-dark">
                        <img :src="personalInfo.profileImage" :alt="personalInfo.name"
                            class="w-full h-full object-cover" />
                    </div>

                    <div
                        class="absolute -bottom-4 -left-4 md:bottom-0 md:left-64 bg-primary border border-secondary p-4 rounded-2xl shadow-lg backdrop-blur-sm bg-opacity-90">
                        <div class="flex items-center gap-3">
                            <div class="bg-light p-2 rounded-full text-primary-dark">
                                <UIcon name="i-heroicons-code-bracket" class="w-6 h-6" />
                            </div>
                            <div>
                                <p class="text-xs text-light">Experience</p>
                                <p class="text-sm font-bold text-white">Frontend Dev</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </UContainer>
    </section>
</template>

<style scoped>
/* Animasi Sederhana saat load */
.animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>