<template>
  <section class="py-16 md:py-12 sm:py-8 px-8 md:px-4 sm:px-4 bg-linear-to-br from-dkm-light-blue to-[#d4e3f0]">
    <div class="max-w-5xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12 md:mb-8">
        <span class="inline-block text-dkm-crimson text-sm font-bold tracking-widest uppercase mb-2 pb-2 border-b-2 border-dkm-crimson">{{ t('home.testimonials.label') }}</span>
        <h2 class="text-4xl lg:text-3xl md:text-2xl font-bold text-dkm-dark m-0">{{ t('home.testimonials.title') }}</h2>
      </div>

      <!-- Testimonials Marquee -->
      <div class="testimonials-marquee">
        <div class="marquee-track">
          <TestimonialCard
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="marquee-card"
            :text="testimonial.text"
            :name="testimonial.name"
            :role="testimonial.role"
            :featured="testimonial.featured"
          />
          <TestimonialCard
            v-for="(testimonial, index) in testimonials"
            :key="`duplicate-${index}`"
            class="marquee-card"
            :text="testimonial.text"
            :name="testimonial.name"
            :role="testimonial.role"
            :featured="testimonial.featured"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import TestimonialCard from '@/components/base/TestimonialCard.vue'
import { t } from '@/i18n'

const testimonials = computed(() => [
  {
    featured: true,
    text: t('home.testimonial.1'),
    name: 'PT. Pertamina Kilang',
    role: t('home.testimonial.1.role')
  },
  {
    featured: false,
    text: t('home.testimonial.2'),
    name: 'PT. Pertamina Hulu Mahakam',
    role: t('home.testimonial.2.role')
  },
  {
    featured: false,
    text: t('home.testimonial.3'),
    name: 'Badak LNG',
    role: t('home.testimonial.3.role')
  }
])
</script>

<style scoped>
.testimonials-marquee {
  overflow: hidden;
  width: 100%;
  padding: 28px 0 64px;
}

.marquee-track {
  display: flex;
  gap: 2rem;
  width: max-content;
  animation: testimonials-marquee 35s linear infinite;
  padding: 8px 0;
}

.testimonials-marquee:hover .marquee-track {
  animation-play-state: paused;
}

.marquee-card {
  flex: 0 0 340px;
}

@keyframes testimonials-marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@media (max-width: 1024px) {
  .marquee-track {
    gap: 1.5rem;
  }

  .marquee-card {
    flex-basis: 320px;
  }
}

@media (max-width: 768px) {
  .marquee-card {
    flex-basis: 280px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
  }
}
</style>