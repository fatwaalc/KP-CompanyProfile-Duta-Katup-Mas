<template>
  <section class="py-16 md:py-12 sm:py-8 px-8 sm:px-4 bg-linear-to-r from-dkm-dark to-dkm-dark/90 relative overflow-hidden">
    <!-- Background Decorations -->
    <div class="absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/5 w-96 h-96 rounded-full bg-dkm-crimson/5 blur-3xl"></div>
      <div class="absolute top-4/5 right-1/5 w-96 h-96 rounded-full bg-dkm-crimson/5 blur-3xl"></div>
    </div>

    <div class="max-w-5xl mx-auto relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <span class="inline-block text-dkm-crimson text-sm font-bold tracking-widest uppercase mb-2 pb-2 border-b-2 border-dkm-crimson">
          TRUSTED BY INDUSTRY LEADERS
        </span>
        <h2 class="text-5xl md:text-4xl sm:text-3xl font-bold text-white m-0 drop-shadow-lg">
          Our Clients
        </h2>
      </div>

      <!-- Clients Marquee -->
      <LogosMarquee :items="clients" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import LogosMarquee from '@/components/base/LogosMarquee.vue'
import logoBadak from '@/assets/images/logobadak.png'
import logoBukaka from '@/assets/images/logobukaka.png'
import logoElnusa from '@/assets/images/logoelnusa.png'
import logoHaliburton from '@/assets/images/logohaliburton.png'
import logoPertamina from '@/assets/images/logopertamina.png'
import logoPupuk from '@/assets/images/logopupuk.png'
import logoRdmp from '@/assets/images/logordmp.png'

const clients = ref([
  { name: 'Badak', logo: logoBadak },
  { name: 'Bukaka', logo: logoBukaka },
  { name: 'Elnusa', logo: logoElnusa },
  { name: 'Haliburton', logo: logoHaliburton },
  { name: 'Pertamina', logo: logoPertamina },
  { name: 'Pupuk', logo: logoPupuk },
  { name: 'RDMP', logo: logoRdmp }
])
</script>