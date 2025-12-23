<script setup lang="ts">
// Panggil data link dari composable
const { socialMedia } = usePortfolioData()
</script>

<template>
    <footer class="py-8 bg-[#011026] border-t border-primary/20 text-center relative z-50">
        <UContainer>
            <div class="flex flex-col md:flex-row justify-between items-center gap-4">

                <p class="text-gray-500 text-sm">
                    © 2025 <span class="text-custom-text font-semibold">AdityaCreative</span>. All Rights Reserved.
                </p>

                <div class="flex items-center gap-4">

                    <UButton :to="socialMedia.instagram" target="_blank" icon="i-simple-icons-instagram" color="neutral"
                        variant="ghost"
                        class="hover:text-pink-500 text-gray-400 transition-transform hover:scale-110" />

                    <UButton :to="socialMedia.github" target="_blank" icon="i-simple-icons-github" color="neutral"
                        variant="ghost" class="hover:text-white text-gray-400 transition-transform hover:scale-110" />

                </div>

            </div>
        </UContainer>
    </footer>
</template>