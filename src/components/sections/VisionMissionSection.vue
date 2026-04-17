<template>
  <section class="py-16 md:py-12 sm:py-8 px-8 md:px-4 bg-linear-to-br from-dkm-light-blue to-[#d4e3f0]">
    <div class="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-6 sm:gap-4">
      <!-- Vision Card -->
      <VisionMissionCard
        type="vision"
        title="Vision"
        :content="visionContent"
      />

      <!-- Mission Card -->
      <VisionMissionCard
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