<template>
  <section class="bg-dkm-light-blue py-10 sm:py-12 lg:py-16 xl:py-20 px-4 sm:px-5 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <!-- Label -->
      <span class="inline-block text-dkm-crimson text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 pb-3 border-b-2 border-dkm-crimson animate-slide-in-left">
        {{ t('about.chairman.label') }}
      </span>

      <!-- Title -->
      <h2 class="text-3xl sm:text-4xl lg:text-4xl font-bold text-dkm-dark mb-5 sm:mb-6 leading-tight animate-slide-in-left" style="animation-delay: 0.2s">
        {{ t('about.chairman.title') }}
      </h2>

      <!-- Body -->
      <p class="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 animate-slide-in-left" style="animation-delay: 0.3s">
        {{ t('about.chairman.body1') }}
      </p>
      <p class="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 animate-slide-in-left" style="animation-delay: 0.35s">
        {{ t('about.chairman.body2') }}
      </p>
      <p class="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8 animate-slide-in-left" style="animation-delay: 0.4s">
        {{ t('about.chairman.body3') }}
      </p>

      <!-- Quote -->
      <p class="text-sm sm:text-base lg:text-lg text-gray-800 leading-relaxed mb-6 sm:mb-8 italic pl-4 sm:pl-5 border-l-4 border-dkm-crimson animate-slide-in-left" style="animation-delay: 0.45s">
        <strong>{{ t('about.chairman.quote') }}</strong>
      </p>

      <!-- Signature -->
      <div class="flex flex-col gap-1 animate-slide-in-left" style="animation-delay: 0.6s">
        <p class="text-lg sm:text-xl font-bold text-dkm-dark m-0">{{ t('about.chairman.signature') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { t } from '@/i18n'
</script>
