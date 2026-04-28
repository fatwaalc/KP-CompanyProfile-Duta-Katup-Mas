<template>
  <section class="py-16 md:py-12 sm:py-8 px-8 sm:px-4 bg-white relative overflow-hidden">

    <div class="max-w-5xl mx-auto relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <span class="inline-block text-dkm-crimson text-sm font-bold tracking-widest uppercase mb-2 pb-2 border-b-2 border-dkm-crimson">
          {{ t('home.clients.label') }}
        </span>
        <h2 class="text-4xl lg:text-3xl md:text-2xl font-bold text-dkm-dark m-0">
          {{ t('home.clients.title') }}
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
import { t } from '@/i18n'

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