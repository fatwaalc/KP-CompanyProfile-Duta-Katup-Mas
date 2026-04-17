<template>
  <div class="about-view">
    <div id="about-hero">
      <AboutHeroSection />
    </div>
    <div id="who-we-are">
      <WhoWeAreSection />
    </div>
    <div id="vision-mission">
      <VisionMissionSection />
    </div>
    <div id="chairman-note">
      <ChairmanNoteSection />
    </div>
    <div id="our-team">
      <OurTeamSection />
    </div>
    <div id="certifications">
      <CertificationsSection />
    </div>
    
    <!-- More sections akan ditambahkan di sini -->
  </div>
</template>

<script setup>
import AboutHeroSection from '@/components/sections/AboutHeroSection.vue'
import WhoWeAreSection from '@/components/sections/WhoWeAreSection.vue'
import VisionMissionSection from '@/components/sections/VisionMissionSection.vue'
import ChairmanNoteSection from '@/components/sections/ChairmanNoteSection.vue'
import OurTeamSection from '@/components/sections/OurTeamSection.vue'
import CertificationsSection from '@/components/sections/CertificationsSection.vue'
</script>

<style scoped>
.about-view {
  width: 100%;
}
</style>
