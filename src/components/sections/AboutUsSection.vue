<template>
  <section class="py-16 md:py-12 sm:py-8 px-8 md:px-4 sm:px-4 bg-linear-to-br from-dkm-light-blue to-blue-100">
    <div class="about-grid max-w-7xl mx-auto grid gap-10 items-start">
      <!-- Left Content -->
      <div class="about-copy flex flex-col lg:pr-4">
        <span class="inline-block text-dkm-crimson text-sm font-bold tracking-widest uppercase mb-4 pb-2 border-b-2 border-dkm-crimson w-fit">
          MINI ABOUT DKM
        </span>
        
        <h2 class="about-title text-4xl font-bold text-dkm-dark mb-5 leading-tight">
          PT. Duta Katup Mas
        </h2>
        
        <p class="about-text text-base md:text-sm leading-relaxed text-gray-700 mb-8 text-justify md:text-left">
          PT Duta Katup Mas (DKM) is a trusted valve service specialist based in East Kalimantan, established in 1999 to provide reliable, 
          total solutions for the energy industry. We specialize in high-accuracy repair, testing, and engineering services across a broad 
          spectrum of valve brands and models for the Oil & Gas, Petrochemical, and Power plant sectors. Guided by our commitment to products and services integrity, 
          our highly skilled team ensures your operations maintain peak performance with first-rate punctuality and safety.
        </p>
      </div>

      <!-- Right Image -->
      <div class="about-image relative w-full h-96 rounded-2xl overflow-hidden shadow-lg ring-1 ring-dkm-dark/10">
        <img 
          :src="miniAboutImage" 
          alt="PT. Duta Katup Mas Facility"
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 bg-linear-to-br from-dkm-dark/25 via-transparent to-dkm-crimson/10 pointer-events-none"></div>
      </div>

      <!-- Learn More Button -->
      <div class="about-button-wrap w-fit">
        <LearnMoreButton label="Learn More" :targetPage="'/about'" :targetSectionId="'who-we-are'" />
      </div>
    </div>
  </section>
</template>

<script setup>
import miniAboutImage from '@/assets/images/miniaboutdkm.jpg'
import LearnMoreButton from '@/components/base/LearnMoreButton.vue'
</script>

<style scoped>
@media (min-width: 1025px) {
  .about-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
  }

  .about-button-wrap {
    grid-column: 1;
    margin-top: -2rem;
  }
}

@media (max-width: 1024px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }

  .about-button-wrap {
    margin-left: auto;
    margin-right: auto;
  }

  .about-copy {
    padding-right: 0;
  }

  .about-title {
    font-size: 1.875rem;
  }

  .about-image {
    height: 18rem;
  }
}

@media (max-width: 768px) {
  section {
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .about-title {
    font-size: 1.5rem;
  }

  .about-text {
    text-align: left;
    margin-bottom: 1.5rem;
  }

  .about-image {
    height: 16rem;
  }

  .about-button-wrap {
    margin-top: 0.25rem;
  }
}

@media (max-width: 480px) {
  .about-grid {
    gap: 1.25rem;
  }

  .about-image {
    height: 14rem;
  }
}
</style>
