<template>
    <div class="flex flex-col h-full w-full bg-black text-white">
        <AppHeader />
        <slot />
        <AppFooter />
        <NuxtImg 
            src="craque-neto.png"
            class="absolute bottom-24 sm:bottom-0 right-0 w-1/2 z-0"
        />
        <NuxtImg 
            src="ferrerinha.png"
            class="absolute bottom-24 sm:bottom-0 left-0 w-1/2 z-0"
        />

    </div>
</template>

<script setup lang="ts">
import AppFooter from '~/components/AppFooter.vue';
import AppHeader from '~/components/AppHeader.vue';
</script>