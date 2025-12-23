<script setup lang="ts">
const { contactInfo } = usePortfolioData()

const contactDetails = [
    {
        icon: 'i-heroicons-envelope',
        label: 'Email',
        value: contactInfo.email,
        href: `mailto:${contactInfo.email}`
    },
    {
        icon: 'i-heroicons-phone',
        label: 'Phone',
        value: contactInfo.phone,
        href: `https://wa.me/${contactInfo.phone.replace(/[^0-9]/g, '')}` // Link ke WhatsApp
    },
    {
        icon: 'i-heroicons-map-pin',
        label: 'Address',
        value: contactInfo.address,
        href: '#'
    }
]
</script>

<template>
    <section id="contact" class="py-24 bg-primary-dark relative overflow-hidden">
        <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-secondary opacity-5 blur-[100px] rounded-full pointer-events-none">
        </div>

        <UContainer class="relative z-10 max-w-4xl mx-auto text-center">

            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                Get in Touch
            </h2>
            <p class="text-gray-400 mb-12 max-w-xl mx-auto">
                For business and partnership inquiry please contact me below
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a v-for="(item, index) in contactDetails" :key="index" :href="item.href" target="_blank"
                    class="group flex flex-col items-center p-8 rounded-2xl bg-primary border border-secondary/30 hover:border-light transition-all duration-300 hover:-translate-y-1">
                    <div
                        class="w-12 h-12 rounded-full bg-primary-dark border border-secondary text-light flex items-center justify-center mb-4 group-hover:bg-light group-hover:text-primary-dark transition-colors">
                        <UIcon :name="item.icon" class="w-6 h-6" />
                    </div>

                    <h3 class="text-lg font-semibold text-white mb-1">
                        {{ item.label }}
                    </h3>

                    <p class="text-sm text-custom-text group-hover:text-white transition-colors">
                        {{ item.value }}
                    </p>
                </a>
            </div>

            <div class="mt-12">
                <UButton :to="`mailto:${contactInfo.email}`" size="xl" color="primary" variant="solid"
                    :ui="{ base: 'rounded-full' }" class="px-10 py-4 text-lg shadow-lg shadow-secondary/20"
                    icon="i-heroicons-paper-airplane">
                    Say Hello
                </UButton>
            </div>

        </UContainer>
    </section>
</template>