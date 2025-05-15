<template>
    <SectionContainer>
        <Title title="Contagem de Gols" />
        <div class="text-8xl sm:text-9xl flex flex-row items-center justify-center">
            <p class=" font-bold text-red">{{ gols }}</p>
            <span class=" opacity-50">/</span>
            <p class=" opacity-50">10</p>
        </div>
    </SectionContainer>
</template>

<script setup lang="ts">
import Title from './Title.vue';
import SectionContainer from './SectionContainer.vue';

const { gols } = defineProps<{
    gols: number;
}>();

</script>