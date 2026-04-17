<template>
  <section class="bg-white py-16 md:py-14 px-5 md:px-4">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-10 md:mb-8">
        <span class="inline-block text-dkm-crimson text-sm font-bold tracking-widest uppercase mb-2 pb-2 border-b-2 border-dkm-crimson">
          WHAT WE DO
        </span>
        <h2 class="text-4xl lg:text-3xl md:text-2xl font-bold text-dkm-dark m-0">Our Services</h2>
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
      <ViewAllLink label="View All Services" link="/services" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ServiceCard from '@/components/base/ServiceCard.vue'
import ViewAllLink from '@/components/base/ViewAllLink.vue'
import valveImage from '@/assets/images/valvefake.jpg'
import actuatorImage from '@/assets/images/actuatorfake.jpg'
import flameareImage from '@/assets/images/flamearesfake.jpg'
import psvImage from '@/assets/images/psvfake.jpg'
import instrumentImage from '@/assets/images/instrumentservicefake.jpg'

const services = ref([
  {
    id: 1,
    category: 'VALVE REPAIR',
    title: 'Repair Valve Various Size & Class',
    image: valveImage,
    link: '/services#service-1'
  },
  {
    id: 2,
    category: 'ACTUATOR',
    title: 'Actuator Maintenance Services',
    image: actuatorImage,
    link: '/services#service-2'
  },
  {
    id: 3,
    category: 'FLAME ARRESTERS',
    title: 'Flame Arresters Maintenance Services',
    image: flameareImage,
    link: '/services#service-3'
  },
  {
    id: 4,
    category: 'PSV',
    title: 'Pressure Safety Valve Maintenance',
    image: psvImage,
    link: '/services#service-4'
  },
  {
    id: 5,
    category: 'INSTRUMENTATION',
    title: 'Instrumentation Services',
    image: instrumentImage,
    link: '/services#service-5'
  }
])
</script>
