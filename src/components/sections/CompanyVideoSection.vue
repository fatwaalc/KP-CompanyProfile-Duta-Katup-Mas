<template>
  <section class="py-16 md:py-12 sm:py-8 px-8 sm:px-4 bg-linear-to-br from-dkm-light-blue to-blue-100">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <span class="inline-block text-dkm-crimson text-sm font-bold tracking-widest uppercase mb-2 pb-2 border-b-2 border-dkm-crimson">
          WATCH OUR STORY
        </span>
        <h2 class="text-4xl lg:text-3xl md:text-2xl font-bold text-dkm-dark m-0">
          Company Video Profile
        </h2>
      </div>

      <!-- Video Player -->
      <div class="relative w-full pt-[56.25%] h-0 bg-black rounded-xl overflow-hidden shadow-2xl mb-8 group">
        <video 
          ref="videoPlayer"
          class="absolute top-0 left-0 w-full h-full object-cover"
          @play="isPlaying = true"
          @pause="isPlaying = false"
        >
          <source src="/videos/company-profile.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>

        <!-- Play Button Overlay -->
        <button 
          v-if="!isPlaying"
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-dkm-crimson/90 hover:bg-dkm-crimson border-none rounded-full cursor-pointer flex items-center justify-center z-10 transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-sm"
          @click="playVideo"
          aria-label="Play video"
        >
          <Play class="w-10 h-10 text-white stroke-2.5 ml-1" />
        </button>

        <!-- Video Controls Overlay -->
        <div class="absolute bottom-0 left-0 right-0 flex items-center px-4 py-4 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-5">
          <div class="flex items-center gap-2">
            <button 
              class="bg-white/20 hover:bg-dkm-crimson/80 text-white border border-white/30 w-10 h-10 rounded-full cursor-pointer flex items-center justify-center transition-all duration-200"
              @click="togglePlayPause"
              :title="isPlaying ? 'Pause' : 'Play'"
              aria-label="Toggle play/pause"
            >
              <Pause v-if="isPlaying" class="w-5 h-5 stroke-2.5" />
              <Play v-else class="w-5 h-5 stroke-2.5" />
            </button>

            <button 
              class="bg-white/20 hover:bg-dkm-crimson/80 text-white border border-white/30 w-10 h-10 rounded-full cursor-pointer flex items-center justify-center transition-all duration-200"
              @click="toggleMute"
              :title="isMuted ? 'Unmute' : 'Mute'"
              aria-label="Toggle mute"
            >
              <Volume2 v-if="!isMuted" class="w-5 h-5 stroke-2.5" />
              <VolumeOff v-else class="w-5 h-5 stroke-2.5" />
            </button>
          </div>

          <button 
            class="bg-white/20 hover:bg-dkm-crimson/80 text-white border border-white/30 w-10 h-10 rounded-full cursor-pointer flex items-center justify-center transition-all duration-200 text-lg ml-auto"
            @click="goFullscreen"
            title="Fullscreen"
            aria-label="Toggle fullscreen"
          >
            ⛶
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Play, Pause, Volume2, VolumeOff } from 'lucide-vue-next'

const videoPlayer = ref(null)
const isPlaying = ref(false)
const isMuted = ref(false)

const playVideo = () => {
  if (videoPlayer.value) {
    videoPlayer.value.play()
  }
}

const togglePlayPause = () => {
  if (videoPlayer.value) {
    if (videoPlayer.value.paused) {
      videoPlayer.value.play()
    } else {
      videoPlayer.value.pause()
    }
  }
}

const toggleMute = () => {
  if (videoPlayer.value) {
    videoPlayer.value.muted = !videoPlayer.value.muted
    isMuted.value = videoPlayer.value.muted
  }
}

const goFullscreen = () => {
  if (videoPlayer.value) {
    if (videoPlayer.value.requestFullscreen) {
      videoPlayer.value.requestFullscreen()
    } else if (videoPlayer.value.webkitRequestFullscreen) {
      videoPlayer.value.webkitRequestFullscreen()
    }
  }
}
</script>