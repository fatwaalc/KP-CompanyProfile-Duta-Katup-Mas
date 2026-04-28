<template>
  <div class="flex gap-6 md:gap-4 sm:gap-3 justify-center flex-wrap">
    <router-link
      to="/services"
      class="group inline-flex items-center justify-center gap-2 px-8 md:px-6 sm:px-5 py-3.5 md:py-3 sm:py-2.5 rounded-full font-semibold text-base md:text-sm sm:text-xs text-white no-underline cursor-pointer transition-all duration-300 border-2 border-dkm-crimson bg-dkm-crimson whitespace-nowrap hover:bg-dkm-dark-red hover:border-dkm-dark-red hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-500/30"
    >
      {{ t('cta.services') }}
      <ChevronRight :size="20" class="transition-transform duration-300 group-hover:translate-x-1" />
    </router-link>
    <router-link
      to="/contact"
      class="inline-flex items-center justify-center gap-2 px-8 md:px-6 sm:px-5 py-3.5 md:py-3 sm:py-2.5 rounded-full font-semibold text-base md:text-sm sm:text-xs text-dkm-dark no-underline cursor-pointer transition-all duration-300 border-2 border-white bg-white whitespace-nowrap hover:bg-gray-100 hover:border-white hover:-translate-y-0.5 hover:shadow-lg"
    >
      {{ t('cta.contact') }}
    </router-link>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ChevronRight } from 'lucide-vue-next'
import { t } from '@/i18n'

const router = useRouter()
</script>