<template>
    <h1 class="text-2xl sm:text-3xl font-bold mb-4">{{ title }}</h1>
</template>

<script setup lang="ts">
const { title } = defineProps<{
    title: string;
}>();
</script>