<template>
  <section class="our-services">
    <div class="services-container">
      <!-- Header -->
      <div class="section-header">
        <span class="section-tag">WHAT WE DO</span>
        <h2 class="section-title">Our Services</h2>
      </div>

      <!-- Services Grid -->
      <div class="services-grid">
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

<style scoped>
.our-services {
  background: linear-gradient(135deg, #e8f0f7 0%, #d4e3f0 100%);
  padding: 4rem 2rem;
}

.services-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-tag {
  display: inline-block;
  color: #dc143c;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #dc143c;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #002157;
  margin: 0;
}

/* Services Grid - 3 columns, 2 rows (3-2 layout) */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

/* Center last 2 cards on bottom row */
.services-grid :nth-child(4),
.services-grid :nth-child(5) {
  grid-column: 2 / 4;
}

@media (max-width: 1024px) {
  .section-title {
    font-size: 2rem;
  }

  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .services-grid :nth-child(4),
  .services-grid :nth-child(5) {
    grid-column: auto;
  }
}

@media (max-width: 768px) {
  .our-services {
    padding: 3rem 1rem;
  }

  .section-header {
    margin-bottom: 2rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.5rem;
  }

  .services-grid {
    gap: 0.75rem;
  }
}
</style>
