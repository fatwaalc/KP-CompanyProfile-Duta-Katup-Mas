<template>
  <div class="equipment-card-layout gap-5 sm:gap-7 lg:gap-10 bg-gray-50 rounded-xl p-4 sm:p-6 lg:p-7.5 transition-all duration-500 ease-out hover:bg-white hover:shadow-[0_12px_40px_rgba(0,33,87,0.12)] hover:-translate-y-1.5 animate-slide-in-up">
    <!-- Left: Image Carousel -->
    <div class="flex justify-center">
      <div class="relative w-full max-w-96 lg:max-w-none">
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

      </div>
    </div>

    <!-- Right: Content -->
    <div class="flex flex-col items-start gap-4">
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

<style scoped>
.equipment-card-layout {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
}

@media (min-width: 1024px) {
  .equipment-card-layout {
    grid-template-columns: minmax(320px, 0.85fr) minmax(0, 1.15fr);
  }
}
</style>
