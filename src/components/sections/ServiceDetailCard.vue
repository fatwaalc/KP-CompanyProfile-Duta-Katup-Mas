<template>
  <section class="service-detail" :style="{ background: backgroundColor }">
    <div class="sd-container">
      <!-- Left Column: Image -->
      <div class="sd-image-column">
        <div class="sd-image-wrapper">
          <img 
            :src="image" 
            :alt="title"
            class="sd-image"
          />
        </div>
      </div>

      <!-- Right Column: Content -->
      <div class="sd-content-column">
        <!-- Title -->
        <h2 class="sd-title">{{ title }}</h2>

        <!-- Description -->
        <p class="sd-description">
          {{ description }}
        </p>

        <!-- Features List -->
        <ul class="sd-features">
          <li v-for="(feature, index) in features" :key="index" class="sd-feature-item">
            <span class="sd-feature-icon">
              <ClipboardPen :size="20" />
            </span>
            <span class="sd-feature-text">{{ feature }}</span>
          </li>
        </ul>

        <!-- Contact Button -->
        <a href="javascript:void(0)" class="sd-contact-btn" @click="navigateToContact">
          {{ t('cta.contact') }}
          <ChevronRight :size="20" class="sd-btn-arrow" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { nextTick } from 'vue'
import { ChevronRight, ClipboardPen } from 'lucide-vue-next'
import { t } from '@/i18n'

const router = useRouter()

defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  features: {
    type: Array,
    required: true
  },
  backgroundColor: {
    type: String,
    default: 'white'
  }
})

const navigateToContact = async () => {
  await router.push('/contact')
  await nextTick()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.service-detail {
  background: white;
  padding: 80px 20px;
  border-bottom: 1px solid #f0f0f0;
}

.sd-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

/* Left Column: Image */
.sd-image-column {
  display: flex;
  justify-content: center;
  align-items: center;
}

.sd-image-wrapper {
  width: 100%;
  max-width: 500px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 33, 87, 0.15);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: slideInLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.sd-image-wrapper:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0, 33, 87, 0.25);
}

.sd-image {
  width: 100%;
  height: auto;
  display: block;
}

/* Right Column: Content */
.sd-content-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Title */
.sd-title {
  font-size: 2rem;
  font-weight: 700;
  color: #002157;
  margin: 0;
  line-height: 1.3;
  animation: slideInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Description */
.sd-description {
  font-size: 1rem;
  color: #666;
  line-height: 1.8;
  margin: 0;
  animation: slideInRight 1s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Features List */
.sd-features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.sd-feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.95rem;
  color: #333;
  animation: slideInRight 1.2s cubic-bezier(0.4, 0, 0.2, 1) backwards;
}

.sd-feature-item:nth-child(1) {
  animation-delay: 0.2s;
}

.sd-feature-item:nth-child(2) {
  animation-delay: 0.3s;
}

.sd-feature-item:nth-child(3) {
  animation-delay: 0.4s;
}

.sd-feature-item:nth-child(4) {
  animation-delay: 0.5s;
}

.sd-feature-item:nth-child(5) {
  animation-delay: 0.6s;
}

.sd-feature-icon {
  width: 20px;
  height: 20px;
  color: #dc143c;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.sd-feature-icon svg {
  width: 100%;
  height: 100%;
}

/* Contact Button */
.sd-contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  padding: 12px 28px;
  background-color: #002157;
  color: white;
  border: 2px solid #002157;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 12px;
}

.sd-contact-btn:hover {
  background-color: #dc143c;
  border-color: #dc143c;
  transform: translateY(-2px);
}

.sd-btn-arrow {
  font-size: 1.25rem;
  transition: transform 0.3s ease;
}

.sd-contact-btn:hover .sd-btn-arrow {
  transform: translateX(5px);
}

/* Animations */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .service-detail {
    padding: 60px 20px;
  }

  .sd-container {
    gap: 40px;
  }

  .sd-title {
    font-size: 1.75rem;
  }

  .sd-description {
    font-size: 0.95rem;
  }
}

@media (max-width: 768px) {
  .service-detail {
    padding: 60px 20px;
  }

  .sd-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .sd-image-wrapper {
    max-width: 100%;
  }

  .sd-title {
    font-size: 1.5rem;
  }

  .sd-description {
    font-size: 0.9rem;
  }

  .sd-features {
    gap: 10px;
  }

  .sd-feature-item {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .service-detail {
    padding: 40px 16px;
  }

  .sd-icon-badge {
    width: 48px;
    height: 48px;
  }

  .sd-icon-badge svg {
    width: 24px;
    height: 24px;
  }

  .sd-title {
    font-size: 1.25rem;
  }

  .sd-description {
    font-size: 0.85rem;
  }

  .sd-features {
    gap: 8px;
  }

  .sd-feature-item {
    font-size: 0.8rem;
    gap: 10px;
  }

  .sd-contact-btn {
    font-size: 0.9rem;
    padding: 10px 24px;
  }
}
</style>
