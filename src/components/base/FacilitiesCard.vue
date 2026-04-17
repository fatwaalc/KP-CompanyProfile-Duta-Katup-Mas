<template>
  <div class="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,33,87,0.15)] animate-slide-in-up" :class="{ 'delay-200': isWorkshopCard, 'delay-300': !isWorkshopCard }">
    <!-- Carousel -->
    <div class="relative w-full pb-[75%] bg-black overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full">
        <div class="w-full h-full flex transition-transform duration-600 ease-out" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <div v-for="(image, index) in images" :key="index" class="min-w-full h-full">
            <img :src="image" :alt="title" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <!-- Carousel Navigation -->
      <CarouselNavigation 
        :currentIndex="currentSlide" 
        :totalSlides="images.length"
        @prev="prevSlide"
        @next="nextSlide"
        @goto="setSlide"
      />
    </div>

    <!-- Card Content -->
    <div class="p-7.5 md:p-5">
      <div class="flex items-center gap-4 mb-4 md:gap-3">
        <span class="w-10 h-10 min-w-10 flex items-center justify-center rounded-lg text-white text-base" :class="{ 'bg-dkm-dark': isWorkshopCard, 'bg-dkm-crimson': !isWorkshopCard }">
          <ToolboxIcon v-if="isWorkshopCard" :size="20" :stroke-width="2.4" class="text-white" />
          <span v-else class="office-icon" aria-hidden="true">
            <span class="office-icon-door"></span>
          </span>
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
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { Toolbox as ToolboxIcon } from 'lucide-vue-next'
import CarouselNavigation from '@/components/base/CarouselNavigation.vue'

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

const isWorkshopCard = computed(() => {
  return props.isWorkshop || /workshop/i.test(props.title)
})

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

<style scoped>
.office-icon {
  position: relative;
  display: block;
  width: 18px;
  height: 18px;
  border: 2px solid #fff;
  border-bottom-width: 3px;
  border-radius: 2px;
}

.office-icon::before {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 2px;
  height: 2px;
  background: #fff;
  box-shadow:
    4px 0 0 #fff,
    8px 0 0 #fff,
    0 4px 0 #fff,
    4px 4px 0 #fff,
    8px 4px 0 #fff;
}

.office-icon-door {
  position: absolute;
  left: 50%;
  bottom: -1px;
  width: 4px;
  height: 6px;
  transform: translateX(-50%);
  background: #fff;
  border-top-left-radius: 1px;
  border-top-right-radius: 1px;
}
</style>
