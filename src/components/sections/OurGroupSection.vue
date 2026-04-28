<template>
  <section class="bg-white py-20 md:py-15 sm:py-10 px-8 md:px-6 relative overflow-hidden">
    <!-- Background decorations -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(220,20,60,0.05)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(220,20,60,0.05)_0%,transparent_50%)] pointer-events-none"></div>

    <div class="max-w-6xl mx-auto relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-15 md:mb-10">
        <span class="inline-block text-dkm-crimson text-sm font-bold tracking-widest uppercase mb-2 pb-2 border-b-2 border-dkm-crimson">{{ t('home.group.label') }}</span>
        <h2 class="text-4xl lg:text-3xl md:text-2xl font-bold text-dkm-dark m-0 drop-shadow-lg">{{ t('home.group.title') }}</h2>
      </div>

      <!-- Group Marquee -->
      <LogosMarquee :items="companies" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import LogosMarquee from '@/components/base/LogosMarquee.vue'
import logoDias from '@/assets/images/logodias.png'
import logoDet from '@/assets/images/logodet.png'
import logoDikip from '@/assets/images/logodikip.png'
import logoRomas from '@/assets/images/logoromas.png'
import { t } from '@/i18n'

const companies = ref([
  { name: 'PT. Duta Instrumentasi Solusi', logo: logoDias },
  { name: 'PT. Duta Energi Teknik', logo: logoDet },
  { name: 'PT. Duta Katup Mas', logo: logoDikip },
  { name: 'PT. Duta Metalindo Perkasa', logo: logoRomas }
])
</script>

<style scoped>
.our-group-section {
  background: linear-gradient(135deg, #002157 0%, #1a3a52 100%);
  padding: 80px 2rem;
  position: relative;
  overflow: hidden;
}

.our-group-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(220, 20, 60, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(220, 20, 60, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.group-container {
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 60px;
  animation: fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.section-label {
  color: #dc143c;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin: 0 0 0.75rem 0;
  display: block;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #dc143c;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin: 0;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .our-group-section {
    padding: 60px 2rem;
  }

  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .our-group-section {
    padding: 50px 1.5rem;
  }

  .section-header {
    margin-bottom: 40px;
  }

  .section-label {
    font-size: 0.85rem;
  }

  .section-title {
    font-size: 1.75rem;
  }
}

@media (max-width: 480px) {
  .our-group-section {
    padding: 40px 1rem;
  }

  .section-header {
    margin-bottom: 30px;
  }

  .section-title {
    font-size: 1.5rem;
  }
}
</style>