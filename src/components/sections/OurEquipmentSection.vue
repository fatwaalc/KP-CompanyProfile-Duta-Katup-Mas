<template>
  <section class="bg-white py-10 sm:py-12 lg:py-16 xl:py-20 px-4 sm:px-5 lg:px-6">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-8 sm:mb-10 lg:mb-15">
        <span class="inline-block text-dkm-crimson text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 sm:mb-4 pb-2 sm:pb-3 border-b-2 border-dkm-crimson">{{ t('products.equipment.label') }}</span>
        <h2 class="text-3xl sm:text-4xl lg:text-4xl xl:text-4xl font-bold text-dkm-dark m-0">{{ t('products.equipment.title') }}</h2>
      </div>

      <!-- Equipment List -->
      <div class="flex flex-col gap-7 lg:gap-10">
        <EquipmentCard v-for="(equipment, index) in equipmentList" :key="index" :equipment="equipment" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import EquipmentCard from '@/components/base/EquipmentCard.vue'
import { t } from '@/i18n'

// Equipment data
const equipmentList = computed(() => [
  {
    title: t('products.equipment.welding.title'),
    description: t('products.equipment.welding.desc'),
    images: [
      new URL('@/assets/images/weldingmachine.png', import.meta.url).href,
      new URL('@/assets/images/weldingmachine.png', import.meta.url).href
    ],
    youtubeLink: 'https://youtu.be/od2mhrhBNH4'
  },
  {
    title: t('products.equipment.machine.title'),
    description: t('products.equipment.machine.desc'),
    images: [
      new URL('@/assets/images/generalmachine.png', import.meta.url).href,
      new URL('@/assets/images/generalmachine.png', import.meta.url).href
    ],
    youtubeLink: 'https://youtu.be/aXXy0Jau-b8'
  }
])
</script>