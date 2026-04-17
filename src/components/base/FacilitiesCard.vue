<template>
  <div class="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,33,87,0.15)] animate-slide-in-up" :class="{ 'delay-200': isWorkshop, 'delay-300': !isWorkshop }">
    <!-- Carousel -->
    <div class="relative w-full pb-[75%] bg-black overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full">
        <div class="w-full h-full flex transition-transform duration-600 ease-out" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <div v-for="(image, index) in images" :key="index" class="min-w-full h-full">
            <img :src="image" :alt="title" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <!-- Navigation Buttons -->
      <button class="absolute top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white border-0 p-3 rounded cursor-pointer transition-all duration-300 hover:bg-opacity-80 z-10 left-3" @click="prevSlide">
        <ChevronLeft :size="24" />
      </button>
      <button class="absolute top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white border-0 p-3 rounded cursor-pointer transition-all duration-300 hover:bg-opacity-80 z-10 right-3" @click="nextSlide">
        <ChevronRight :size="24" />
      </button>

      <!-- Dot Indicators -->
      <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        <button 
          v-for="(_, index) in images" 
          :key="index" 
          class="w-2.5 h-2.5 rounded-full bg-white bg-opacity-50 border-0 cursor-pointer transition-all duration-300" 
          :class="{ 'bg-opacity-100 scale-125': currentSlide === index }"
          @click="setSlide(index)"
        ></button>
      </div>
    </div>

    <!-- Card Content -->
    <div class="p-7.5 md:p-5">
      <div class="flex items-center gap-4 mb-4 md:gap-3">
        <span class="w-10 h-10 min-w-10 flex items-center justify-center rounded-lg text-white text-base" :class="{ 'bg-gradient-to-br from-dkm-dark to-[#003080]': isWorkshop, 'bg-gradient-to-br from-dkm-crimson to-dkm-dark-red': !isWorkshop }">
          <svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path v-if="isWorkshop" d="M3 9h18v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9zm0-3h18V4c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v2zm6 6h2v4h-2v-4zm4 0h2v4h-2v-4zm-8 0h2v4H5v-4z"/>
            <path v-else d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm4 8H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm4 12h-2V9h2v12zm4 0h-2v-7h2v7z"/>
          </svg>
        </span>
        <h3 class="text-xl font-bold text-dkm-dark m-0 md:text-lg">{{ title }}</h3>
      </div>
      <p class="text-sm text-gray-600 leading-relaxed m-0 md:text-xs">
        {{ descriptions[currentSlide] }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  images: {
    type: Array,
    required: true
  },
  descriptions: {
    type: Array,
    required: true
  },
  isWorkshop: {
    type: Boolean,
    default: true
  }
})

const currentSlide = ref(0)
let autoAdvanceInterval = null

// Auto-advance carousel
const startAutoAdvance = () => {
  autoAdvanceInterval = setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoAdvance = () => {
  if (autoAdvanceInterval) {
    clearInterval(autoAdvanceInterval)
    autoAdvanceInterval = null
  }
}

const resetAutoAdvance = () => {
  stopAutoAdvance()
  startAutoAdvance()
}

// Carousel navigation
const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  } else {
    currentSlide.value = props.images.length - 1
  }
  resetAutoAdvance()
}

const nextSlide = () => {
  if (currentSlide.value < props.images.length - 1) {
    currentSlide.value++
  } else {
    currentSlide.value = 0
  }
  resetAutoAdvance()
}

const setSlide = (index) => {
  currentSlide.value = index
  resetAutoAdvance()
}

// Lifecycle hooks
onMounted(() => {
  startAutoAdvance()
})

onUnmounted(() => {
  stopAutoAdvance()
})
</script>
