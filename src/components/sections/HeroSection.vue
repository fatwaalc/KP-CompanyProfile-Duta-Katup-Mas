<template>
  <section class="hero-section" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <!-- Overlay untuk darkening background -->
    <div class="hero-overlay"></div>
    
    <!-- Hero Content -->
    <div class="hero-content">
      <p class="hero-text">
        "{{ t('home.hero.pre') }}
        <span class="font-bold text-white">{{ t('home.hero.highlight1') }}</span>
        {{ t('home.hero.mid') }}
        <span class="font-bold text-white">{{ t('home.hero.highlight2') }}</span>"
      </p>
      
      <CTAButtonGroup />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import CTAButtonGroup from '@/components/base/CTAButtonGroup.vue'
import workshopImage from '@/assets/images/heroesdkmnew.jpg'
import { t } from '@/i18n'

// Background image dari assets
const backgroundImage = ref(workshopImage)
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom right, rgba(0, 26, 61, 0.75) 0%, rgba(139, 0, 0, 0.5) 100%);
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  color: white;
  max-width: 1024px;
  padding: 2rem;
  animation: slideInUp 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-text {
  font-size: clamp(1.35rem, 4.8vw, 3rem);
  line-height: 1.4;
  margin-bottom: 3rem;
  opacity: 0.95;
  font-weight: 700;
  font-style: italic;
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 500px;
  }

  .hero-text {
    margin-bottom: 2rem;
  }
}

@media (max-width: 640px) {
  .hero-section {
    min-height: 350px;
  }

  .hero-content {
    padding: 1rem;
  }

  .hero-text {
    font-size: clamp(1.25rem, 5.6vw, 1.6rem);
    line-height: 1.45;
    margin-bottom: 1.5rem;
  }
}

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
</style>

