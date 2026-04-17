<template>
  <section class="py-16 md:py-12 sm:py-8 px-8 md:px-4 bg-linear-to-br from-dkm-light-blue to-[#d4e3f0]">
    <div class="vision-mission-grid max-w-5xl mx-auto">
      <!-- Vision Card -->
      <VisionMissionCard
        class="vision-card"
        type="vision"
        title="Vision"
        :content="visionContent"
      />

      <!-- Mission Card -->
      <VisionMissionCard
        class="mission-card"
        type="mission"
        title="Mission"
        :missionItems="missionItems"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import VisionMissionCard from '@/components/base/VisionMissionCard.vue'

const visionContent = ref('To establish PT. Duta Katup Mas as a prominent and reliable total solution company in Indonesia on valve repair and instrumentation work with customer satisfaction as priority.')

const missionItems = ref([
  'To maintain our high standard services by our team. Our team consist of highly skilled personnel highly capable of identifying and troubleshooting various challenges in the industry, thus an on-going human development program through trainings remain in our top priorities.',
  'To provide our clients with best quality service with high accuracy, punctual and best result.',
  'Ongoing communication with clients to fulfill client\'s requirements and needs in the best interest of clients.'
])
</script>

<style scoped>
.vision-mission-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.vision-card {
  order: 1;
}

.mission-card {
  order: 2;
}

@media (min-width: 768px) {
  .vision-mission-grid {
    gap: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .vision-mission-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
    align-items: stretch;
  }
}
</style>