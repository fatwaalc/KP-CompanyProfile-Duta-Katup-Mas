<template>
  <section class="bg-linear-to-br from-dkm-light-blue to-[#d4e3f0] py-10 sm:py-12 lg:py-16 xl:py-20 px-4 sm:px-5 lg:px-6">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-8 sm:mb-10 lg:mb-15">
        <span class="inline-block text-dkm-crimson text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 sm:mb-4 pb-2 sm:pb-3 border-b-2 border-dkm-crimson">{{ t('products.facilities.label') }}</span>
        <h2 class="text-3xl sm:text-4xl lg:text-4xl xl:text-4xl font-bold text-dkm-dark m-0">{{ t('products.facilities.title') }}</h2>
      </div>

      <!-- Facilities Grid -->
      <div class="facilities-grid gap-5 sm:gap-7 lg:gap-10">
        <FacilitiesCard 
          :title="t('products.facilities.workshopTitle')"
          :images="workshopImages"
          :descriptions="workshopDescriptions"
          :is-workshop="true"
        />
        <FacilitiesCard
          :title="t('products.facilities.officeTitle')"
          :images="officeImages"
          :descriptions="officeDescriptions"
          :is-workshop="false"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import FacilitiesCard from '@/components/base/FacilitiesCard.vue'
import { t } from '@/i18n'

// Workshop images
const workshopImages = ref([
  new URL('@/assets/images/blastingpantingarea.png', import.meta.url).href,
  new URL('@/assets/images/flangestoragearea.png', import.meta.url).href,
  new URL('@/assets/images/machinearea.png', import.meta.url).href,
  new URL('@/assets/images/monitoringtestarea.png', import.meta.url).href,
  new URL('@/assets/images/overhaul area.png', import.meta.url).href,
  new URL('@/assets/images/storagearea.png', import.meta.url).href,
  new URL('@/assets/images/weldingarea.png', import.meta.url).href
])

// Workshop descriptions
const workshopDescriptions = computed(() => [
  t('products.facilities.workshop1'),
  t('products.facilities.workshop2'),
  t('products.facilities.workshop3'),
  t('products.facilities.workshop4'),
  t('products.facilities.workshop5'),
  t('products.facilities.workshop6'),
  t('products.facilities.workshop7')
])

// Office images
const officeImages = ref([
  new URL('@/assets/images/meetingroomarea.jpeg', import.meta.url).href,
  new URL('@/assets/images/resepsionisarea.jpeg', import.meta.url).href
])

// Office descriptions
const officeDescriptions = computed(() => [
  t('products.facilities.office1'),
  t('products.facilities.office2')
])
</script>

<style scoped>
.facilities-grid {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 1024px) {
  .facilities-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>