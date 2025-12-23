<template>
  <header class="py-4 bg-primary-dark/90 backdrop-blur-md sticky top-0 z-50 border-b border-primary/30">
    <UContainer class="flex items-center justify-between">
      
      <div class="text-xl font-bold font-sans text-custom-text">
        <a href="#">AdityaCreative</a>
      </div>

      <div class="hidden md:flex items-center gap-8">
        <nav class="flex items-center gap-6">
          <NuxtLink to="#home" class="text-sm font-medium text-custom-text hover:text-light transition">Home</NuxtLink>
          <NuxtLink to="#about" class="text-sm font-medium text-custom-text hover:text-light transition">About</NuxtLink>
          <NuxtLink to="#project" class="text-sm font-medium text-custom-text hover:text-light transition">Project</NuxtLink>
        </nav>

        <UButton 
          to="#contact" 
          color="primary" 
          variant="solid" 
          size="md"
          :ui="{ base: 'rounded-full' }"
          class="px-6 font-semibold"
        >
          Contact Me
        </UButton>
      </div>

      <div class="md:hidden">
        <UButton icon="i-heroicons-bars-3" color="neutral" variant="ghost" />
      </div>

    </UContainer>
  </header>
</template>