<template>
  <!-- Container for absolute positioning reference -->
  <div class="absolute inset-0 w-full h-full pointer-events-none">
    <!-- Previous Button - Left Side -->
    <button
      @click="handlePrev"
      :disabled="currentIndex === 0"
      class="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-9 md:h-9 rounded-full transition-all duration-300 bg-black/50 hover:bg-black/70 text-white border-none cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-black/50 pointer-events-auto"
      aria-label="Previous slide"
    >
      <ChevronLeft :size="20" class="md:w-5 md:h-5" />
    </button>

    <!-- Dot Indicators - Center Bottom -->
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 pointer-events-auto">
      <button 
        v-for="(_, index) in totalSlides" 
        :key="index"
        @click="goToSlide(index)"
        :class="currentIndex === index ? 'bg-white w-8 rounded' : 'bg-white/50 hover:bg-white/70 w-2.5 h-2.5 rounded-full'"
        class="h-2.5 border-none cursor-pointer transition-all duration-300"
        :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>

    <!-- Next Button - Right Side -->
    <button
      @click="handleNext"
      :disabled="currentIndex === totalSlides - 1"
      class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-9 md:h-9 rounded-full transition-all duration-300 bg-black/50 hover:bg-black/70 text-white border-none cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-black/50 pointer-events-auto"
      aria-label="Next slide"
    >
      <ChevronRight :size="20" class="md:w-5 md:h-5" />
    </button>
  </div>
</template>

<script setup>
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

defineProps({
  currentIndex: {
    type: Number,
    required: true
  },
  totalSlides: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['prev', 'next', 'goto'])

const handlePrev = () => {
  emit('prev')
}

const handleNext = () => {
  emit('next')
}

const goToSlide = (index) => {
  emit('goto', index)
}
</script>