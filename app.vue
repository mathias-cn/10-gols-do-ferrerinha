<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <button ref="audioButton" class="z-10 fixed bottom-2 right-2 w-10 h-10 bg-white rounded-md flex items-center justify-center">
      <Icon :name="audioIcon" class="text-black text-2xl" />
    </button>
  </div>
</template>

<script setup lang="ts">
const audioButton = ref<HTMLButtonElement | null>(null);
const audio = ref<HTMLAudioElement | null>(null);
const isPlaying = ref(false);

const audioIcon = computed(() => {
  return isPlaying.value ? 'mdi:volume-high' : 'mdi:volume-off';
})

onMounted(() => {
  audio.value = new Audio('audio-neto.mp3');
  audio.value.loop = true;

  audioButton.value?.addEventListener('click', () => {
    if (!audio.value) return;
    
    if (audio.value.paused) {
      audio.value.play();
      isPlaying.value = true;
    } else {
      audio.value.pause();
      isPlaying.value = false;
    }
  })

  try {
    const playPromise = audio.value.play();
    
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          isPlaying.value = true;
        })
        .catch(error => {
          console.log('Autoplay prevented:', error);
          document.addEventListener('click', () => {
            audio.value?.play()
              .then(() => {
                isPlaying.value = true;
              })
              .catch(console.error);
          }, { once: true });
        });
    }
  } catch (error) {
    console.error('Error initializing audio:', error);
  }
})
</script>
