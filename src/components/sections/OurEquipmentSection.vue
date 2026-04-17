<template>
  <section class="bg-white py-10 sm:py-12 lg:py-16 xl:py-20 px-4 sm:px-5 lg:px-6">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-8 sm:mb-10 lg:mb-15">
        <span class="inline-block text-dkm-crimson text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 sm:mb-4 pb-2 sm:pb-3 border-b-2 border-dkm-crimson">EQUIPMENT</span>
        <h2 class="text-3xl sm:text-4xl lg:text-4xl xl:text-4xl font-bold text-dkm-dark m-0">Our Tools &amp; Equipment</h2>
      </div>

      <!-- Equipment List -->
      <div class="flex flex-col gap-7 lg:gap-10">
        <EquipmentCard v-for="(equipment, index) in equipmentList" :key="index" :equipment="equipment" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import EquipmentCard from '@/components/base/EquipmentCard.vue'

// Equipment data
const equipmentList = ref([
  {
    title: 'Welding Overlay Machine',
    description: 'The <strong>Smart Weld BW-830</strong> is a professional automated MIG bore welding system designed for precision ID and OD weld build-up and repair within a versatile <strong>1.5" to 30"</strong> range. Utilizing advanced step technology for superior first and final passes, this 250-amp rated machine maximizes productivity through preprogrammed modes and supports specialized wire types such as <strong>Inconel, Stainless, and Aluminum Bronze</strong>. This automated solution ensures technical accuracy in DKM\'s specialized repair works while significantly enhancing workplace safety by reducing operator exposure to harmful fumes within the welding facility.',
    images: [
      new URL('@/assets/images/weldingoverlay.jpg', import.meta.url).href,
      new URL('@/assets/images/weldingoverlay2.jpg', import.meta.url).href
    ],
    youtubeLink: 'https://youtu.be/od2mhrhBNH4'
  },
  {
    title: 'General Machining Machine',
    description: 'Takisawa Taiwan vertical turning centers are engineered for high-volume production, significantly reducing cutting times for critical components such as valves and industrial hubs. The <strong>VTL-750 series</strong> features a heavy-duty box-shaped bed that ensures maximum rigidity and stability for precision machining. With a maximum turning diameter of <strong>29.5″ (750 mm)</strong> and a length of <strong>27.4″ (698 mm)</strong>, this CNC vertical lathe—located in DKM\'s Workshop I—provides the high-level accuracy required for professional valve refurbishment and re-engineering projects.',
    images: [
      new URL('@/assets/images/generalmachine.jpg', import.meta.url).href,
      new URL('@/assets/images/generalmachine2.jpg', import.meta.url).href
    ],
    youtubeLink: 'https://youtu.be/aXXy0Jau-b8'
  }
])
</script>