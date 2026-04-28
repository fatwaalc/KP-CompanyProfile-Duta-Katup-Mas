<template>
  <section class="bg-white py-16 md:py-14 px-5 md:px-4">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-10 md:mb-8">
        <span class="inline-block text-dkm-crimson text-sm font-bold tracking-widest uppercase mb-2 pb-2 border-b-2 border-dkm-crimson">
          {{ t('home.services.label') }}
        </span>
        <h2 class="text-4xl lg:text-3xl md:text-2xl font-bold text-dkm-dark m-0">{{ t('home.services.title') }}</h2>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-3 mb-8">
        <ServiceCard
          v-for="(service, index) in services"
          :key="index"
          :service="service"
        />
      </div>

      <!-- View All Link -->
      <ViewAllLink :label="t('cta.viewAllServices')" link="/services" />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import ServiceCard from '@/components/base/ServiceCard.vue'
import ViewAllLink from '@/components/base/ViewAllLink.vue'
import valveImage from '@/assets/images/valvefake.jpg'
import actuatorImage from '@/assets/images/actuatorfake.jpg'
import flameareImage from '@/assets/images/flamearesfake.jpg'
import psvImage from '@/assets/images/psvfake.jpg'
import instrumentImage from '@/assets/images/instrumentservicefake.jpg'
import { t } from '@/i18n'

const services = computed(() => [
  {
    id: 1,
    category: t('home.services.card1.category'),
    title: t('home.services.card1.title'),
    image: valveImage,
    link: '/services#service-1'
  },
  {
    id: 2,
    category: t('home.services.card2.category'),
    title: t('home.services.card2.title'),
    image: actuatorImage,
    link: '/services#service-2'
  },
  {
    id: 3,
    category: t('home.services.card3.category'),
    title: t('home.services.card3.title'),
    image: flameareImage,
    link: '/services#service-3'
  },
  {
    id: 4,
    category: t('home.services.card4.category'),
    title: t('home.services.card4.title'),
    image: psvImage,
    link: '/services#service-4'
  },
  {
    id: 5,
    category: t('home.services.card5.category'),
    title: t('home.services.card5.title'),
    image: instrumentImage,
    link: '/services#service-5'
  }
])
</script>
