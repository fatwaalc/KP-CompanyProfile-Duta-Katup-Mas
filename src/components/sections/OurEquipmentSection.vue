<template>
  <section class="our-equipment">
    <div class="oe-container">
      <!-- Header -->
      <div class="oe-header">
        <span class="oe-label">EQUIPMENT</span>
        <h2 class="oe-title">Our Tools & Equipment</h2>
      </div>

      <!-- Equipment List -->
      <div class="oe-list">
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

<style scoped>
.our-equipment {
  background: white;
  padding: 80px 20px;
}

.oe-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Header */
.oe-header {
  text-align: center;
  margin-bottom: 60px;
}

.oe-label {
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

.oe-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #002157;
  margin: 0;
}

/* Equipment List */
.oe-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

/* Responsive */
@media (max-width: 1024px) {
  .our-equipment {
    padding: 60px 20px;
  }

  .oe-header {
    margin-bottom: 40px;
  }

  .oe-title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .our-equipment {
    padding: 50px 20px;
  }

  .oe-header {
    margin-bottom: 30px;
  }

  .oe-title {
    font-size: 1.75rem;
  }

  .oe-list {
    gap: 30px;
  }
}

@media (max-width: 480px) {
  .our-equipment {
    padding: 40px 16px;
  }

  .oe-label {
    font-size: 0.75rem;
  }

  .oe-title {
    font-size: 1.5rem;
  }
}
</style>
