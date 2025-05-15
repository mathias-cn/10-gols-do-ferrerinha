<template>
    <SectionContainer>
        <Title title="Tempo sem Concluir o Desafio do Neto" />
        <div class="bg-black bg-opacity-50 flex flex-row border-[1px] border-opacity-50 border-white p-4 rounded-lg divide-x-2 divide-white w-full">
            <TimeDisplay :time="diasParaConcluir" :title="'Dias'" />
            <TimeDisplay :time="horasParaConcluir" :title="'Horas'" />
            <TimeDisplay :time="minutosParaConcluir" :title="'Minutos'" />
            <TimeDisplay :time="segundosParaConcluir" :title="'Segundos'" />
        </div>
    </SectionContainer>
</template>

<script setup lang="ts">
import dayjs from '#build/dayjs.imports.mjs';
import Title from './Title.vue';
import SectionContainer from './SectionContainer.vue';
const dataAtual = ref(dayjs());
const inicioDesafio = ref(dayjs('2025-04-10T13:00:00'));

const diasParaConcluir = computed(() => {
    const diferenca = inicioDesafio.value.diff(dataAtual.value, 'day').toString().replace('-', '');
    if(diferenca.toString().length === 1) {
        return `0${diferenca}`;
    }
    return diferenca;
})

const horasParaConcluir = computed(() => {
    const diferenca = (inicioDesafio.value.diff(dataAtual.value, 'hour') % 24).toString().replace('-', '');
    if(diferenca.length === 1) {
        return `0${diferenca}`;
    }
    return diferenca;
})

const minutosParaConcluir = computed(() => {
    const diferenca = (inicioDesafio.value.diff(dataAtual.value, 'minute') % 60).toString().replace('-', '');
    if(diferenca.length === 1) {
        return `0${diferenca}`;
    }
    return diferenca;
})

const segundosParaConcluir = computed(() => {
    const diferenca = (inicioDesafio.value.diff(dataAtual.value, 'second') % 60).toString().replace('-', '');
    if(diferenca.length === 1) {
        return `0${diferenca}`;
    }
    return diferenca;
})

onNuxtReady(() => {
    setInterval(() => {
        dataAtual.value = dayjs();
    }, 1000);
})
</script>