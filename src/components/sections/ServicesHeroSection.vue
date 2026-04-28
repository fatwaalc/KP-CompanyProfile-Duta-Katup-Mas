<template>
  <section id="services-hero" class="services-hero">
    <div class="hero-content">
      <span class="hero-label">{{ t('services.hero.label') }}</span>
      <h1 class="hero-title">{{ t('services.hero.title') }}</h1>
      <p class="hero-subtitle">{{ t('services.hero.subtitle') }}</p>
    </div>
  </section>
</template>

<script setup>
import { t } from '@/i18n'
</script>

<style scoped>
.services-hero {
  background: linear-gradient(135deg, #002157 0%, #1a3a52 100%);
  color: white;
  min-height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-label {
  display: inline-block;
  color: #dc143c;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  padding-bottom: 12px;
  border-bottom: 2px solid #dc143c;
  animation: slideInDown 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  animation: slideInDown 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-subtitle {
  font-size: 1.2rem;
  opacity: 0.95;
  line-height: 1.6;
  animation: slideInDown 1s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
