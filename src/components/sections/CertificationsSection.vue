<template>
  <section class="bg-white py-20 md:py-16 sm:py-12 px-6">
    <div class="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
      <!-- Left Column: Content -->
      <div class="flex items-start">
        <div class="w-full">
          <!-- Label -->
          <span class="inline-block text-dkm-crimson text-sm font-bold tracking-widest uppercase mb-4 pb-3 border-b-2 border-dkm-crimson animate-slide-in-left">
            QUALITY ASSURANCE
          </span>

          <!-- Title -->
          <h2 class="text-4xl md:text-3xl font-bold text-dkm-dark mb-4 leading-tight animate-slide-in-left" style="animation-delay: 0.2s">
            Certifications
          </h2>

          <!-- Description -->
          <p class="text-base text-gray-600 leading-relaxed mb-8 animate-slide-in-left" style="animation-delay: 0.4s">
            Our commitment to quality is validated by internationally recognized certifications.
          </p>

          <!-- Certifications List -->
          <ul class="flex flex-col gap-4 list-none p-0 m-0">
            <li class="flex items-start gap-3 text-sm text-gray-800 leading-relaxed animate-slide-in-left" style="animation-delay: 0.2s">
              <FileCheck class="w-5 h-5 text-dkm-crimson flex-shrink-0 mt-0.5" />
              <span>ISO 9001:2015 – Quality Management System</span>
            </li>
            <li class="flex items-start gap-3 text-sm text-gray-800 leading-relaxed animate-slide-in-left" style="animation-delay: 0.3s">
              <FileCheck class="w-5 h-5 text-dkm-crimson flex-shrink-0 mt-0.5" />
              <span>ISO 14001:2015 – Environmental Management System</span>
            </li>
            <li class="flex items-start gap-3 text-sm text-gray-800 leading-relaxed animate-slide-in-left" style="animation-delay: 0.4s">
              <FileCheck class="w-5 h-5 text-dkm-crimson flex-shrink-0 mt-0.5" />
              <span>ISO 45001:2018 – Occupational Health & Safety</span>
            </li>
            <li class="flex items-start gap-3 text-sm text-gray-800 leading-relaxed animate-slide-in-left" style="animation-delay: 0.5s">
              <FileCheck class="w-5 h-5 text-dkm-crimson flex-shrink-0 mt-0.5" />
              <span>API 6D – Specification for Pipeline and Piping Valves</span>
            </li>
            <li class="flex items-start gap-3 text-sm text-gray-800 leading-relaxed animate-slide-in-left" style="animation-delay: 0.6s">
              <FileCheck class="w-5 h-5 text-dkm-crimson flex-shrink-0 mt-0.5" />
              <span>ASME Certified Workshop</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Right Column: Image Carousel -->
      <div class="flex justify-center items-center">
        <div class="relative w-full max-w-lg">
          <div class="relative w-full pt-[70%] bg-gray-200 rounded-2xl overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-full flex transition-transform duration-500" :style="{ transform: `translateX(-${currentCertSlide * 100}%)` }">
              <div v-for="(certImage, index) in certImages" :key="index" class="w-full h-full flex-shrink-0 flex items-center justify-center">
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
import sertif3 from '@/assets/images/sertif3.png'

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
    image: sertif3,
    alt: 'ISO 45001:2018 Certification'
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

<style scoped>
.certifications {
  background: white;
  padding: 80px 20px;
}

.cert-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

/* Left Column: Content */
.cert-content-column {
  display: flex;
  align-items: flex-start;
}

.cert-content {
  width: 100%;
}

/* Label */
.cert-label {
  display: inline-block;
  color: #dc143c;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 2px solid #dc143c;
  animation: slideInLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Title */
.cert-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #002157;
  margin-bottom: 16px;
  line-height: 1.2;
  animation: slideInLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Description */
.cert-description {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 32px;
  animation: slideInLeft 1s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Certifications List */
.cert-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.cert-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 0.95rem;
  color: #333;
  line-height: 1.6;
  animation: slideInLeft 1.2s cubic-bezier(0.4, 0, 0.2, 1) backwards;
}

.cert-item:nth-child(1) {
  animation-delay: 0.2s;
}

.cert-item:nth-child(2) {
  animation-delay: 0.3s;
}

.cert-item:nth-child(3) {
  animation-delay: 0.4s;
}

.cert-item:nth-child(4) {
  animation-delay: 0.5s;
}

.cert-item:nth-child(5) {
  animation-delay: 0.6s;
}

.cert-icon {
  width: 20px;
  height: 20px;
  color: #dc143c;
  flex-shrink: 0;
  margin-top: 2px;
}

.cert-text {
  flex: 1;
}

/* Right Column: Carousel */
.cert-carousel-column {
  display: flex;
  justify-content: center;
  align-items: center;
}

.cert-carousel {
  position: relative;
  width: 100%;
  max-width: 500px;
}

.cert-carousel-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 70%;
  background: #f0f0f0;
  border-radius: 16px;
  overflow: hidden;
}

.cert-carousel-slides {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.cert-carousel-slide {
  min-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cert-carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Carousel Navigation Buttons */
.cert-carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

.cert-carousel-btn:hover {
  background: rgba(0, 0, 0, 0.8);
}

.cert-carousel-prev {
  left: 12px;
}

.cert-carousel-next {
  right: 12px;
}

/* Dot Indicators */
.cert-dots {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
}

.cert-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.cert-dot:hover {
  background: rgba(255, 255, 255, 0.8);
}

.cert-dot.active {
  background: #dc143c;
  width: 24px;
  border-radius: 4px;
}

/* Animations */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .certifications {
    padding: 60px 20px;
  }

  .cert-container {
    gap: 40px;
  }

  .cert-title {
    font-size: 2rem;
  }

  .cert-carousel-wrapper {
    padding-bottom: 66.67%;
  }
}

@media (max-width: 768px) {
  .certifications {
    padding: 60px 20px;
  }

  .cert-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .cert-title {
    font-size: 1.75rem;
    margin-bottom: 12px;
  }

  .cert-description {
    font-size: 0.95rem;
    margin-bottom: 24px;
  }

  .cert-item {
    font-size: 0.9rem;
  }

  .cert-carousel-wrapper {
    max-width: 100%;
    padding-bottom: 66.67%;
  }
}

@media (max-width: 480px) {
  .certifications {
    padding: 40px 16px;
  }

  .cert-label {
    font-size: 0.75rem;
  }

  .cert-title {
    font-size: 1.5rem;
    margin-bottom: 12px;
  }

  .cert-description {
    font-size: 0.875rem;
    margin-bottom: 20px;
  }

  .cert-list {
    gap: 12px;
  }

  .cert-item {
    font-size: 0.85rem;
    gap: 10px;
  }

  .cert-icon {
    width: 18px;
    height: 18px;
  }

  .cert-carousel-btn {
    padding: 12px;
  }

  .cert-carousel-prev {
    left: 8px;
  }

  .cert-carousel-next {
    right: 8px;
  }

  .cert-dot {
    width: 6px;
    height: 6px;
  }

  .cert-dot.active {
    width: 20px;
  }
}
</style>
