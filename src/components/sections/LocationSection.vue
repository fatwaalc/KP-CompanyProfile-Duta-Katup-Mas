<template>
  <section class="bg-white py-20 md:py-16 sm:py-12 px-4 sm:px-5 lg:px-6">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <h2 class="text-4xl md:text-3xl sm:text-2xl font-bold text-dkm-dark m-0 mb-10 animate-slide-in-down">
        {{ t('home.location.title') }}
      </h2>

      <!-- Map Container -->
      <div class="relative w-full rounded-xl overflow-hidden shadow-md animate-slide-in-up mb-10">
        <iframe
          class="location-map-frame w-full border-none rounded-xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8885343462966!2d116.94816287372724!3d-1.2369752355716195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df144532d2a3b7f%3A0x8f370326515aa2ae!2sPT%20DUTA%20KATUP%20MAS!5e0!3m2!1sen!2sid!4v1776383590257!5m2!1sen!2sid"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
import { t } from '@/i18n'
</script>

<style scoped>
.location-map-frame {
  height: 26rem;
}

@media (max-width: 768px) {
  .location-map-frame {
    height: 21rem;
  }
}

@media (max-width: 480px) {
  .location-map-frame {
    height: 17rem;
  }
}
</style>

