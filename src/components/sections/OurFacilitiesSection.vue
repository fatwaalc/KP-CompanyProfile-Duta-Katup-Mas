<template>
  <section class="our-facilities">
    <div class="of-container">
      <!-- Header -->
      <div class="of-header">
        <span class="of-label">OUR FACILITIES</span>
        <h2 class="of-title">Workshop & Office</h2>
      </div>

      <!-- Facilities Grid -->
      <div class="of-grid">
        <FacilitiesCard 
          title="Workshop"
          :images="workshopImages"
          :descriptions="workshopDescriptions"
          :isWorkshop="true"
        />
        <FacilitiesCard 
          title="Office"
          :images="officeImages"
          :descriptions="officeDescriptions"
          :isWorkshop="false"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import FacilitiesCard from '@/components/base/FacilitiesCard.vue'

// Workshop images
const workshopImages = ref([
  new URL('@/assets/images/workshopfake2.jpg', import.meta.url).href,
  new URL('@/assets/images/workshopfake3.jpg', import.meta.url).href,
  new URL('@/assets/images/workshopfake4.jpg', import.meta.url).href
])

// Workshop descriptions
const workshopDescriptions = ref([
  'Workshop Area',
  'Assembly Area',
  'Blasting Area'
])

// Office images
const officeImages = ref([
  new URL('@/assets/images/meetingroom.jpg', import.meta.url).href,
  new URL('@/assets/images/officefake.jpg', import.meta.url).href,
  new URL('@/assets/images/pantryfake.jpg', import.meta.url).href,
  new URL('@/assets/images/receptionfake.jpg', import.meta.url).href
])

// Office descriptions
const officeDescriptions = ref([
  'Meeting rooms equipped with modern conferencing systems for team collaboration, client presentations, and strategic planning sessions.',
  'Office spaces designed for optimal productivity, housing engineering teams, project managers, and administrative staff with individual workstations.',
  'Pantry area providing refreshment facilities, break spaces, and social areas for staff relaxation and informal team interactions.',
  'Reception area serving as the first point of contact, providing professional greeting services and visitor management for all incoming clients and guests.'
])
</script>

<style scoped>
.our-facilities {
  background: linear-gradient(135deg, #e8f0f7 0%, #d4e3f0 100%);
  padding: 80px 20px;
}

.of-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Header */
.of-header {
  text-align: center;
  margin-bottom: 60px;
}

.of-label {
  display: inline-block;
  color: #dc143c;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 2px solid #dc143c;
}

.of-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #002157;
  margin: 0;
}

/* Grid */
.of-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

/* Responsive */
@media (max-width: 1024px) {
  .our-facilities {
    padding: 60px 20px;
  }

  .of-header {
    margin-bottom: 40px;
  }

  .of-title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .our-facilities {
    padding: 50px 20px;
  }

  .of-header {
    margin-bottom: 30px;
  }

  .of-title {
    font-size: 1.75rem;
  }

  .of-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

@media (max-width: 480px) {
  .our-facilities {
    padding: 40px 16px;
  }

  .of-label {
    font-size: 0.75rem;
  }

  .of-title {
    font-size: 1.5rem;
  }

  .of-grid {
    gap: 20px;
  }
}
</style>
