<template>
  <section class="py-16 md:py-12 sm:py-8 px-8 md:px-4 bg-linear-to-br from-dkm-light-blue to-[#d4e3f0]">
    <div class="vision-mission-grid max-w-5xl mx-auto">
      <!-- Vision Card -->
      <VisionMissionCard
        class="vision-card"
        type="vision"
        :title="t('about.vision.title')"
        :content="visionContent"
      />

      <!-- Mission Card -->
      <VisionMissionCard
        class="mission-card"
        type="mission"
        :title="t('about.mission.title')"
        :missionItems="missionItems"
      />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import VisionMissionCard from '@/components/base/VisionMissionCard.vue'
import { t } from '@/i18n'

const visionContent = computed(() => t('about.vision.content'))

const missionItems = computed(() => [
  t('about.mission.1'),
  t('about.mission.2'),
  t('about.mission.3')
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