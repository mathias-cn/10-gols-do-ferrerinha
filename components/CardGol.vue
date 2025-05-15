<template>
    <div class="bg-black bg-opacity-50 flex flex-col items-center justify-center p-2 border-[1px] border-opacity-50 border-white rounded-lg">
        <div class="flex flex-row items-center justify-center gap-2 text-xl">
            <p class="font-bold">Gol {{ index }}:</p>
            <p>{{ data }}</p>
        </div>
        <iframe 
            :src="video"
            width="300"
            height="200"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        />
    </div>
</template>

<script setup lang="ts">
const { data, video, index } = defineProps<{
    data: string;
    video: string;
    index: number;
}>();
</script>