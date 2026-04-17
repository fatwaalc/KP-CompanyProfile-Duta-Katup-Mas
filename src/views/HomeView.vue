<template>
  <div class="home-view">
    <div id="hero-section">
      <HeroSection />
    </div>
    <div id="services-hero">
      <OurServicesSection />
    </div>
    <div id="about-section">
      <AboutUsSection />
    </div>
    <div id="clients-section">
      <OurClientsSection />
    </div>
    <div id="testimonials-section">
      <TestimonialsSection />
    </div>
    <div id="our-group-section">
      <OurGroupSection />
    </div>
    <div id="video-section">
      <CompanyVideoSection />
    </div>
    
    <!-- Section lain akan ditambahkan di sini -->
  </div>
</template>

<script setup>
import HeroSection from '@/components/sections/HeroSection.vue'
import OurServicesSection from '@/components/sections/OurServicesSection.vue'
import AboutUsSection from '@/components/sections/AboutUsSection.vue'
import OurClientsSection from '@/components/sections/OurClientsSection.vue'
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue'
import OurGroupSection from '@/components/sections/OurGroupSection.vue'
import CompanyVideoSection from '@/components/sections/CompanyVideoSection.vue'
</script>

<style scoped>
.home-view {
  width: 100%;
}
</style>
