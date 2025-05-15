<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <button ref="audioButton" class="z-10 fixed bottom-4 right-4 w-10 h-10 bg-white rounded-md flex items-center justify-center">
      <Icon :name="audioIcon" class="text-black text-2xl" />
    </button>
    <audio ref="audio" src="audio-neto.mp3" loop preload="auto" autoplay="true" />
  </div>
</template>

<script setup lang="ts">
const audioButton = ref<HTMLButtonElement | null>(null);
const audio = ref<HTMLAudioElement | null>(null);
const isPlaying = ref(true);

const audioIcon = computed(() => {
  return isPlaying.value ? 'mdi:volume-high' : 'mdi:volume-off';
})

onMounted(() => {
  if (!audio.value) return;

  audioButton.value?.addEventListener('click', () => {
    if (!audio.value) return;
    
    if (audio.value.paused) {
      audio.value.play();
      isPlaying.value = true;
    } else {
      audio.value.pause();
      isPlaying.value = false;
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    audioButton.value?.click();
  });
});
</script>
