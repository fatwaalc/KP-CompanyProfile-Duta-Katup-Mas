<template>
  <a 
    :href="youtubeLink"
    target="_blank" 
    rel="noopener noreferrer"
    class="inline-flex items-center gap-2 px-8 py-3 mt-6 bg-dkm-crimson text-white font-semibold rounded border-2 border-dkm-crimson transition-all duration-300 ease-out hover:bg-dkm-dark-red hover:border-dkm-dark-red hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-500/30"
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

