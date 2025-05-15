<template>
    <div class="flex flex-col items-center justify-start gap-10 pt-4 pb-4 z-10">
        <ContagemGols :gols="gols.length" />
        <ContagemRegressiva />
        <Gols :gols="gols" />
    </div>
</template>

<script setup lang="ts">
import ContagemRegressiva from '~/components/ContagemRegressiva.vue';
import ContagemGols from '~/components/ContagemGols.vue';
import Gols from '~/components/Gols.vue';

const gols = reactive([
    {
         data: '11/04/2025',
         video: 'https://www.youtube.com/embed/kwr-KLQZ7PU?start=11'
    },
    {
         data: '11/04/2025',
         video: 'https://www.youtube.com/embed/kwr-KLQZ7PU?start=80'
    },
    {
        data: '13/04/2025',
        video: 'https://www.youtube.com/embed/VjjkYX9K6oQ?start=44'
    },
    {
        data: '16/04/2025',
        video: 'https://www.youtube.com/embed/K0xZ4bu0zO8?start=50'
    },
    {
        data: '20/04/2025',
        video: 'https://www.youtube.com/embed/M8vqLjzCqQQ?start=14'
    }
])

</script>