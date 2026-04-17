<template>
  <a 
    :href="youtubeLink"
    target="_blank" 
    rel="noopener noreferrer"
    class="inline-flex self-start items-center gap-2 px-4 py-2 mt-2 bg-dkm-crimson text-white text-sm font-semibold rounded border-2 border-dkm-crimson transition-all duration-300 ease-out hover:bg-dkm-dark-red hover:border-dkm-dark-red hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-500/30"
  >
    <Play :size="20" />
    Watch on YouTube
  </a>
</template>

<script setup>
import { Play } from 'lucide-vue-next'

defineProps({
  youtubeLink: {
    type: String,
    required: true
  }
})
</script>

