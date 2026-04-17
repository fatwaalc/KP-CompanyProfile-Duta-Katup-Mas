<template>
  <router-link
    :to="service.link"
    class="group relative block h-70 sm:h-75 lg:h-80 overflow-hidden rounded-2xl no-underline shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
  >
    <!-- Image -->
    <img
      :src="service.image"
      :alt="service.title"
      class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
    />

    <!-- Overlay -->
    <div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/35 to-transparent transition-opacity duration-500"></div>
    <div class="absolute inset-0 bg-linear-to-t from-black/90 via-black/45 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

    <!-- Content -->
    <div class="relative h-full flex flex-col justify-end p-5 md:p-4">
      <p class="text-white/80 text-[11px] md:text-[10px] font-bold tracking-[0.16em] uppercase mb-2 transition-all duration-500 group-hover:text-white/90 group-hover:-translate-y-0.5">
        {{ service.category }}
      </p>
      <h3 class="text-white text-2xl md:text-xl sm:text-lg font-extrabold leading-tight mb-4 md:mb-3 line-clamp-3 transition-transform duration-500 group-hover:-translate-y-1">
        {{ service.title }}
      </h3>
      <span class="service-arrow-pulse inline-flex items-center justify-center w-11 h-11 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-xs border border-white/30 text-white transition-all duration-300 group-hover:bg-white/35 group-hover:translate-x-1">
        <ChevronRight :size="20" class="md:w-5 md:h-5" />
      </span>
    </div>
  </router-link>
</template>

<script setup>
import { ChevronRight } from 'lucide-vue-next'

defineProps({
  service: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
@keyframes subtlePulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.06);
  }
  100% {
    transform: scale(1);
  }
}

.group:hover .service-arrow-pulse {
  animation: subtlePulse 1.4s ease-in-out infinite;
}
</style>

