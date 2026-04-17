<template>
  <div class="grid grid-cols-[0.8fr_1.2fr] gap-10 items-center bg-gray-50 rounded-xl p-7.5 transition-all duration-500 ease-out hover:bg-white hover:shadow-[0_12px_40px_rgba(0,33,87,0.12)] hover:-translate-y-1.5 animate-slide-in-up md:grid-cols-1 md:gap-7.5 md:p-6 sm:p-4 sm:gap-5">
    <!-- Left: Image Carousel -->
    <div class="flex justify-center">
      <div class="relative w-full max-w-96">
        <div class="relative w-full pb-[75%] bg-black rounded-lg overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-full flex transition-transform duration-600 ease-out" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div v-for="(image, imgIndex) in equipment.images" :key="imgIndex" class="min-w-full h-full">
              <img :src="image" :alt="equipment.title" class="w-full h-full object-cover block" />
            </div>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <CarouselNavigation 
          :currentIndex="currentSlide" 
          :totalSlides="equipment.images.length"
          @prev="prevSlide"
          @next="nextSlide"
          @goto="setSlide"
        />

        <!-- Dot Indicators -->
        <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          <button 
            v-for="(_, imgIndex) in equipment.images" 
            :key="imgIndex" 
            class="w-2.5 h-2.5 rounded-full bg-white bg-opacity-50 border-0 cursor-pointer transition-all duration-300" 
            :class="{ 'bg-opacity-100 scale-125': currentSlide === imgIndex }"
            @click="setSlide(imgIndex)"
          ></button>
        </div>
      </div>
    </div>

    <!-- Right: Content -->
    <div class="flex flex-col gap-4">
      <!-- Title -->
      <h3 class="text-2xl font-bold text-dkm-dark m-0 leading-tight md:text-xl">{{ equipment.title }}</h3>

      <!-- Description -->
      <p class="text-sm text-gray-700 leading-relaxed m-0" v-html="equipment.description"></p>

      <!-- YouTube Button -->
      <WatchYoutubeButton :youtubeLink="equipment.youtubeLink" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import CarouselNavigation from '@/components/base/CarouselNavigation.vue'
import WatchYoutubeButton from '@/components/base/WatchYoutubeButton.vue'

const props = defineProps({
  equipment: {
    type: Object,
    required: true
  }
})

const currentSlide = ref(0)
let autoAdvanceInterval = null

// Auto-advance carousel
const startAutoAdvance = () => {
  autoAdvanceInterval = setInterval(() => {
    nextSlide()
  }, 4000)
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
    currentSlide.value = props.equipment.images.length - 1
  }
  resetAutoAdvance()
}

const nextSlide = () => {
  if (currentSlide.value < props.equipment.images.length - 1) {
    currentSlide.value++
  } else {
    currentSlide.value = 0
  }
  resetAutoAdvance()
}

const setSlide = (slideIndex) => {
  currentSlide.value = slideIndex
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
