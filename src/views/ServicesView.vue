<template>
  <div class="services-view">
    <ServicesHeroSection />
    
    <!-- Service Detail Cards -->
    <div id="service-1">
      <ServiceDetailCard 
        :image="valveImage"
        :title="t('services.service1.title')"
        :description="serviceDescriptions.service1"
        :features="serviceFeatures.service1"
        backgroundColor="linear-gradient(135deg, #e8f0f7 0%, #d4e3f0 100%)"
      />
    </div>

    <div id="service-2">
      <ServiceDetailCard 
        :image="actuatorImage"
        :title="t('services.service2.title')"
        :description="serviceDescriptions.service2"
        :features="serviceFeatures.service2"
      />
    </div>

    <div id="service-3">
      <ServiceDetailCard 
        :image="flameareImage"
        :title="t('services.service3.title')"
        :description="serviceDescriptions.service3"
        :features="serviceFeatures.service3"
        backgroundColor="linear-gradient(135deg, #e8f0f7 0%, #d4e3f0 100%)"
      />
    </div>

    <div id="service-4">
      <ServiceDetailCard 
        :image="psvImage"
        :title="t('services.service4.title')"
        :description="serviceDescriptions.service4"
        :features="serviceFeatures.service4"
      />
    </div>

    <div id="service-5">
      <ServiceDetailCard 
        :image="instrumentImage"
        :title="t('services.service5.title')"
        :description="serviceDescriptions.service5"
        :features="serviceFeatures.service5"
        backgroundColor="linear-gradient(135deg, #e8f0f7 0%, #d4e3f0 100%)"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import ServicesHeroSection from '@/components/sections/ServicesHeroSection.vue'
import ServiceDetailCard from '@/components/sections/ServiceDetailCard.vue'
import valveImage from '@/assets/images/valvefake.jpg'
import actuatorImage from '@/assets/images/actuatorfake.jpg'
import flameareImage from '@/assets/images/flamearesfake.jpg'
import psvImage from '@/assets/images/psvfake.jpg'
import instrumentImage from '@/assets/images/instrumentservicefake.jpg'
import { t } from '@/i18n'

const serviceDescriptions = computed(() => ({
  service1: t('services.service1.desc'),
  service2: t('services.service2.desc'),
  service3: t('services.service3.desc'),
  service4: t('services.service4.desc'),
  service5: t('services.service5.desc')
}))

const serviceFeatures = computed(() => ({
  service1: [
    t('services.service1.feature1'),
    t('services.service1.feature2'),
    t('services.service1.feature3'),
    t('services.service1.feature4'),
    t('services.service1.feature5')
  ],
  service2: [
    t('services.service2.feature1'),
    t('services.service2.feature2'),
    t('services.service2.feature3'),
    t('services.service2.feature4'),
    t('services.service2.feature5')
  ],
  service3: [
    t('services.service3.feature1'),
    t('services.service3.feature2'),
    t('services.service3.feature3'),
    t('services.service3.feature4'),
    t('services.service3.feature5')
  ],
  service4: [
    t('services.service4.feature1'),
    t('services.service4.feature2'),
    t('services.service4.feature3'),
    t('services.service4.feature4'),
    t('services.service4.feature5')
  ],
  service5: [
    t('services.service5.feature1'),
    t('services.service5.feature2'),
    t('services.service5.feature3'),
    t('services.service5.feature4'),
    t('services.service5.feature5')
  ]
}))
</script>

<style scoped>
.services-view {
  width: 100%;
}
</style>
