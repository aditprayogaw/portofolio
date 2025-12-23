<template>
  <div class="min-h-screen flex flex-col font-sans text-custom-text bg-primary-dark">
    <TheHeader />
    
    <main class="grow">
      <slot />
    </main>
    
    <TheFooter />
  </div>
</template>