<template>
    <div class="flex flex-col items-center justify-center w-1/4 sm:w-40 h-20">
        <div class="text-2xl sm:text-6xl font-bold mb-2 text-center flex items-center justify-center">
            {{ time }}
        </div>
        <div class="text-sm sm:text-md text-center flex items-center justify-center">
            {{ title }}
        </div>
    </div>
</template>

<script setup lang="ts">
    const { time, title } = defineProps<{
        time: string;
        title: string;
    }>();
</script>