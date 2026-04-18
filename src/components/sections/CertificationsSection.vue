<template>
  <section class="bg-white py-10 sm:py-12 lg:py-16 xl:py-20 px-4 sm:px-5 lg:px-6">
    <div class="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
      <!-- Left Column: Content -->
      <div class="flex items-start">
        <div class="w-full">
          <!-- Label -->
          <span class="inline-block text-dkm-crimson text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 sm:mb-4 pb-2 sm:pb-3 border-b-2 border-dkm-crimson animate-slide-in-left">
            QUALITY ASSURANCE
          </span>

          <!-- Title -->
          <h2 class="text-3xl sm:text-4xl lg:text-4xl xl:text-3xl font-bold text-dkm-dark mb-3 sm:mb-4 leading-tight animate-slide-in-left" style="animation-delay: 0.2s">
            Certifications
          </h2>

          <!-- Description -->
          <p class="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 animate-slide-in-left" style="animation-delay: 0.4s">
            Our commitment to quality is validated by internationally recognized certifications.
          </p>

          <!-- Certifications List -->
          <ul class="flex flex-col gap-3 sm:gap-4 list-none p-0 m-0">
            <li class="flex items-start gap-2.5 sm:gap-3 text-sm sm:text-base text-gray-800 leading-relaxed animate-slide-in-left" style="animation-delay: 0.2s">
              <FileCheck class="w-5 h-5 text-dkm-crimson shrink-0 mt-0.5" />
              <span>ISO 9001:2015 – Quality Management System</span>
            </li>
            <li class="flex items-start gap-2.5 sm:gap-3 text-sm sm:text-base text-gray-800 leading-relaxed animate-slide-in-left" style="animation-delay: 0.3s">
              <FileCheck class="w-5 h-5 text-dkm-crimson shrink-0 mt-0.5" />
              <span>ISO 14001:2015 – Environmental Management System</span>
            </li>
            <li class="flex items-start gap-2.5 sm:gap-3 text-sm sm:text-base text-gray-800 leading-relaxed animate-slide-in-left" style="animation-delay: 0.4s">
              <FileCheck class="w-5 h-5 text-dkm-crimson shrink-0 mt-0.5" />
              <span>ISO 45001:2018 – Occupational Health & Safety</span>
            </li>
            <li class="flex items-start gap-2.5 sm:gap-3 text-sm sm:text-base text-gray-800 leading-relaxed animate-slide-in-left" style="animation-delay: 0.5s">
              <FileCheck class="w-5 h-5 text-dkm-crimson shrink-0 mt-0.5" />
              <span>API 6D – Specification for Pipeline and Piping Valves</span>
            </li>
            <li class="flex items-start gap-2.5 sm:gap-3 text-sm sm:text-base text-gray-800 leading-relaxed animate-slide-in-left" style="animation-delay: 0.6s">
              <FileCheck class="w-5 h-5 text-dkm-crimson shrink-0 mt-0.5" />
              <span>ASME Certified Workshop</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Right Column: Image Carousel -->
      <div class="flex justify-center xl:justify-end items-center">
        <div class="relative w-full max-w-xl">
          <div class="relative w-full pt-[74%] sm:pt-[70%] lg:pt-[66%] bg-gray-200 rounded-xl sm:rounded-2xl overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-full flex transition-transform duration-500" :style="{ transform: `translateX(-${currentCertSlide * 100}%)` }">
              <div v-for="(certImage, index) in certImages" :key="index" class="w-full h-full shrink-0 flex items-center justify-center">
                <img :src="certImage.image" :alt="certImage.alt" class="w-full h-full object-cover" />
              </div>
            </div>

            <!-- Carousel Navigation -->
            <CarouselNavigation
              :currentIndex="currentCertSlide"
              :totalSlides="certImages.length"
              @prev="prevCertSlide"
              @next="nextCertSlide"
              @goto="currentCertSlide = $event"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { FileCheck } from 'lucide-vue-next'
import CarouselNavigation from '@/components/base/CarouselNavigation.vue'
import sertif1 from '@/assets/images/sertif1.png'
import sertif2 from '@/assets/images/sertif2.png'

// Carousel images data
const certImages = ref([
  {
    image: sertif1,
    alt: 'ISO 9001:2015 Certification'
  },
  {
    image: sertif2,
    alt: 'ISO 14001:2015 Certification'
  },
  {
    image: sertif1,
    alt: 'API 6D Certification'
  },
  {
    image: sertif2,
    alt: 'ASME Certified Workshop'
  }
])

const currentCertSlide = ref(0)
const autoPlayInterval = ref(null)

// Carousel navigation
const prevCertSlide = () => {
  if (currentCertSlide.value > 0) {
    currentCertSlide.value--
  } else {
    currentCertSlide.value = certImages.value.length - 1
  }
}

const nextCertSlide = () => {
  if (currentCertSlide.value < certImages.value.length - 1) {
    currentCertSlide.value++
  } else {
    currentCertSlide.value = 0
  }
}

// Auto-play slideshow
const startAutoPlay = () => {
  autoPlayInterval.value = setInterval(() => {
    nextCertSlide()
  }, 5000) // Change slide every 5 seconds
}

const stopAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value)
  }
}

// Start animations on mount
onMounted(() => {
  startAutoPlay()
})

// Clean up interval on unmount
onUnmounted(() => {
  stopAutoPlay()
})
</script>