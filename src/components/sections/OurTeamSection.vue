<template>
  <section class="bg-linear-to-br from-dkm-light-blue to-[#d4e3f0] py-20 px-5">
    <div class="max-w-3xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-15">
        <span class="inline-block text-dkm-crimson text-sm font-bold tracking-widest uppercase mb-4 pb-3 border-b-2 border-dkm-crimson animate-slide-in-up">OUR PEOPLE</span>
        <h2 class="text-4xl lg:text-3xl md:text-2xl font-bold text-dkm-dark mb-4 animate-slide-in-up">Our Team</h2>
        <p class="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto animate-slide-in-up">
          Our team of certified engineers and technicians brings decades of combined experience in valve repair and maintenance.
        </p>
      </div>

      <!-- Slideshow -->
      <div class="relative mb-12 rounded-2xl overflow-hidden">
        <div class="relative w-full pb-[50%] bg-black rounded-2xl overflow-hidden">
          <div class="absolute inset-0 w-full h-full flex transition-transform duration-500" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div v-for="(slide, index) in slides" :key="index" class="min-w-full h-full flex items-center justify-center">
              <img :src="slide.image" :alt="slide.alt" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <button class="absolute top-1/2 -translate-y-1/2 left-3 bg-black/50 text-white border-none px-3 py-3 rounded cursor-pointer transition-all z-10 hover:bg-black/80" @click="prevSlide">
          <ChevronLeft :size="24" />
        </button>
        <button class="absolute top-1/2 -translate-y-1/2 right-3 bg-black/50 text-white border-none px-3 py-3 rounded cursor-pointer transition-all z-10 hover:bg-black/80" @click="nextSlide">
          <ChevronRight :size="24" />
        </button>

        <!-- Dot Indicators -->
        <div class="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          <button 
            v-for="(_, index) in slides" 
            :key="index" 
            :class="{ 'bg-dkm-crimson w-8 rounded': currentSlide === index, 'w-2.5 h-2.5 rounded-full bg-white/50 hover:bg-white/80': currentSlide !== index }"
            class="border-none cursor-pointer transition-all"
            @click="currentSlide = index"
          ></button>
        </div>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 md:gap-5">
        <!-- Total Employees Card -->
        <div class="bg-white p-10 md:p-6 sm:p-5 rounded-xl flex md:flex-col items-center gap-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all">
          <div class="w-16 h-16 md:w-14 md:h-14 sm:w-12 sm:h-12 bg-linear-to-br from-dkm-dark to-[#1a4d8f] rounded-lg flex items-center justify-center text-white shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-8 h-8">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <div class="flex flex-col gap-2">
            <p class="m-0 text-4xl md:text-3xl font-bold text-dkm-dark leading-none">
              <span class="text-dkm-crimson" ref="employeeCountRef">0</span><span class="text-dkm-crimson text-2xl md:text-xl">+</span>
            </p>
            <p class="m-0 text-sm text-gray-600 md:text-center">Total Employees</p>
          </div>
        </div>

        <!-- Certified Engineers Card -->
        <div class="bg-white p-10 md:p-6 sm:p-5 rounded-xl flex md:flex-col items-center gap-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all">
          <div class="w-16 h-16 md:w-14 md:h-14 sm:w-12 sm:h-12 bg-linear-to-br from-dkm-dark to-[#1a4d8f] rounded-lg flex items-center justify-center text-white shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-8 h-8">
              <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
              <path d="M12.5 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V11.5"></path>
              <path d="M21 5h-4M19 3v4"></path>
            </svg>
          </div>
          <div class="flex flex-col gap-2">
            <p class="m-0 text-4xl md:text-3xl font-bold text-dkm-dark leading-none">
              <span class="text-dkm-crimson" ref="engineerCountRef">0</span><span class="text-dkm-crimson text-2xl md:text-xl">+</span>
            </p>
            <p class="m-0 text-sm text-gray-600 md:text-center">Certified Engineers</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import team1 from '@/assets/images/team1.jpg'
import team2 from '@/assets/images/team2.jpg'
import team3 from '@/assets/images/team3.jpg'

const slides = ref([
  { image: team1, alt: 'Team at work' },
  { image: team2, alt: 'Team collaboration' },
  { image: team3, alt: 'Equipment testing' }
])

const currentSlide = ref(0)
const employeeCountRef = ref(null)
const engineerCountRef = ref(null)
const autoPlayInterval = ref(null)

const prevSlide = () => {
  currentSlide.value = currentSlide.value > 0 ? currentSlide.value - 1 : slides.value.length - 1
}

const nextSlide = () => {
  currentSlide.value = currentSlide.value < slides.value.length - 1 ? currentSlide.value + 1 : 0
}

const startAutoPlay = () => {
  autoPlayInterval.value = setInterval(nextSlide, 5000)
}

const stopAutoPlay = () => {
  if (autoPlayInterval.value) clearInterval(autoPlayInterval.value)
}

const animateCountUp = (element, target, duration = 2000) => {
  if (!element) return
  const increment = target / (duration / 16)
  let current = 0
  const update = () => {
    current += increment
    element.textContent = Math.floor(Math.min(current, target))
    if (current < target) requestAnimationFrame(update)
  }
  update()
}

onMounted(() => {
  setTimeout(() => {
    animateCountUp(employeeCountRef.value, 80)
    animateCountUp(engineerCountRef.value, 30)
  }, 300)
  startAutoPlay()
})

onUnmounted(() => stopAutoPlay())
</script>

<style scoped>
.ot-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #002157;
  margin-bottom: 16px;
  animation: slideInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.ot-description {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
  animation: slideInUp 1s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Slideshow */
.ot-slideshow {
  position: relative;
  margin-bottom: 50px;
  border-radius: 16px;
  overflow: hidden;
}

.ot-slides-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 50%;
  background: #000;
  border-radius: 16px;
  overflow: hidden;
}

.ot-slides-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.ot-slide {
  min-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ot-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Navigation Buttons */
.ot-nav-btn {
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

.ot-nav-btn:hover {
  background: rgba(0, 0, 0, 0.8);
}

.ot-nav-prev {
  left: 12px;
}

.ot-nav-next {
  right: 12px;
}

/* Dot Indicators */
.ot-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 10;
}

.ot-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.ot-dot:hover {
  background: rgba(255, 255, 255, 0.8);
}

.ot-dot.active {
  background: #dc143c;
  width: 32px;
  border-radius: 5px;
}

/* Stats Cards */
.ot-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.ot-stat-card {
  background: white;
  padding: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 24px;
  box-shadow: 0 4px 20px rgba(0, 33, 87, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: slideInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: 0;
}

.ot-stat-card:nth-child(1) {
  animation-delay: 0.2s;
}

.ot-stat-card:nth-child(2) {
  animation-delay: 0.4s;
}

.ot-stat-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 33, 87, 0.15);
}

.ot-stat-icon {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #002157 0%, #1a4d8f 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 32px;
  flex-shrink: 0;
}

.ot-stat-icon svg {
  width: 32px;
  height: 32px;
}

.ot-stat-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.ot-stat-number {
  margin: 0;
  font-size: 2.5rem;
  font-weight: 700;
  color: #002157;
  line-height: 1;
}

.ot-count {
  color: #dc143c;
}

.ot-suffix {
  color: #dc143c;
  font-size: 1.75rem;
}

.ot-stat-label {
  margin: 0;
  font-size: 0.95rem;
  color: #666;
}

/* Animations */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .our-team {
    padding: 60px 20px;
  }

  .ot-title {
    font-size: 2rem;
  }

  .ot-nav-btn {
    padding: 12px;
  }

  .ot-nav-prev {
    left: 12px;
  }

  .ot-nav-next {
    right: 12px;
  }

  .ot-stat-card {
    padding: 32px;
  }
}

@media (max-width: 768px) {
  .ot-header {
    margin-bottom: 40px;
  }

  .ot-title {
    font-size: 1.75rem;
    margin-bottom: 12px;
  }

  .ot-description {
    font-size: 0.95rem;
  }

  .ot-slideshow {
    margin-bottom: 40px;
  }

  .ot-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .ot-stat-card {
    padding: 24px;
    gap: 16px;
    flex-direction: column;
    text-align: center;
  }

  .ot-stat-icon {
    width: 56px;
    height: 56px;
  }

  .ot-stat-icon svg {
    width: 28px;
    height: 28px;
  }

  .ot-stat-number {
    font-size: 2rem;
  }

  .ot-suffix {
    font-size: 1.5rem;
  }

  .ot-nav-btn {
    padding: 12px;
  }
}

@media (max-width: 480px) {
  .our-team {
    padding: 40px 16px;
  }

  .ot-label {
    font-size: 0.75rem;
  }

  .ot-title {
    font-size: 1.5rem;
    margin-bottom: 12px;
  }

  .ot-description {
    font-size: 0.875rem;
  }

  .ot-slideshow {
    margin-bottom: 30px;
  }

  .ot-stats {
    grid-template-columns: 1fr;
  }

  .ot-stat-card {
    padding: 20px;
  }

  .ot-stat-icon {
    width: 48px;
    height: 48px;
  }

  .ot-stat-icon svg {
    width: 24px;
    height: 24px;
  }

  .ot-stat-number {
    font-size: 1.75rem;
  }

  .ot-suffix {
    font-size: 1.25rem;
  }

  .ot-nav-btn {
    padding: 12px;
  }

  .ot-nav-prev {
    left: 8px;
  }

  .ot-nav-next {
    right: 8px;
  }

  .ot-dot {
    width: 8px;
    height: 8px;
  }

  .ot-dot.active {
    width: 24px;
  }
}
</style>
