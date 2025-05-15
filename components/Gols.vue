<template>
    <SectionContainer>
        <Title title="Gols" />
        <div class="flex flex-row gap-4 flex-wrap justify-center items-center">
            <CardGol 
                v-for="(gol, i) in gols" 
                :key="i" 
                :data="gol.data" 
                :video="gol.video" 
                :index="i + 1"
            />
        </div>
    </SectionContainer>
</template>

<script setup lang="ts">
import SectionContainer from './SectionContainer.vue';
import Title from './Title.vue';

const { gols } = defineProps<{
    gols: { data: string; video: string }[];
}>();
</script>