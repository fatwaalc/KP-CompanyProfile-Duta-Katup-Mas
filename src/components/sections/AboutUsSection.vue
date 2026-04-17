<template>
  <section class="py-16 px-8 bg-white">
    <div class="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- Left Content -->
      <div class="flex flex-col">
        <span class="inline-block text-dkm-crimson text-sm font-bold tracking-widest uppercase mb-4 pb-2 border-b-2 border-dkm-crimson w-fit">
          MINI ABOUT DKM
        </span>
        
        <h2 class="text-5xl lg:text-5xl md:text-4xl sm:text-3xl font-bold text-dkm-dark mb-6 leading-tight">
          PT. Duta Katup Mas
        </h2>
        
        <p class="text-base md:text-base sm:text-sm leading-relaxed text-gray-600 mb-8 text-justify md:text-left">
          PT Duta Katup Mas (DKM) is a trusted valve service specialist based in East Kalimantan, established in 1999 to provide reliable, 
          total solutions for the energy industry. We specialize in high-accuracy repair, testing, and engineering services across a broad 
          spectrum of valve brands and models for the Oil & Gas, Petrochemical, and Power plant sectors. Guided by our commitment to products and services integrity, 
          our highly skilled team ensures your operations maintain peak performance with first-rate punctuality and safety.
        </p>

        <!-- Learn More Button -->
        <LearnMoreButton label="Learn More" :targetPage="'/about'" :targetSectionId="'who-we-are'" />
      </div>

      <!-- Right Image -->
      <div class="relative w-full h-80 md:h-72 sm:h-64 rounded-xl overflow-hidden">
        <img 
          :src="miniAboutImage" 
          alt="PT. Duta Katup Mas Facility"
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-400"
        />
        <div class="absolute inset-0 bg-linear-to-br from-dkm-dark/10 to-dkm-crimson/5 pointer-events-none"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import miniAboutImage from '@/assets/images/miniaboutdkm.jpg'
import LearnMoreButton from '@/components/base/LearnMoreButton.vue'

const router = useRouter()

</script>

<style scoped>
.about-us {
  padding: 4rem 2rem;
  background-color: white;
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

/* Content Section */
.about-content {
  display: flex;
  flex-direction: column;
}

.section-tag {
  display: inline-block;
  color: #dc143c;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  width: fit-content;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #dc143c;
}

.section-title {
  font-size: 2.8rem;
  font-weight: 700;
  color: #002157;
  margin: 0 0 1.5rem 0;
  line-height: 1.2;
}

.section-description {
  font-size: 1rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 2rem;
  text-align: justify;
}

/* Statistics Grid moved to removed */

/* Image Section */
.about-image {
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.about-image:hover .image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 33, 87, 0.1) 0%, rgba(220, 20, 60, 0.05) 100%);
  pointer-events: none;
}

/* Responsive */
@media (max-width: 1024px) {
  .about-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .section-title {
    font-size: 2.2rem;
  }

  .about-image {
    height: 350px;
  }
}

@media (max-width: 768px) {
  .about-us {
    padding: 3rem 1rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .section-description {
    font-size: 0.95rem;
    text-align: left;
  }

  .about-image {
    height: 300px;
  }
}

@media (max-width: 480px) {
  .about-us {
    padding: 2rem 1rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .section-description {
    font-size: 0.9rem;
    line-height: 1.6;
  }

  .about-image {
    height: 250px;
  }
}
</style>
