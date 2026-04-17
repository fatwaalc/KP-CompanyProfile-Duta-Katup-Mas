<template>
  <section class="py-16 md:py-12 sm:py-8 px-8 md:px-4 sm:px-4 bg-linear-to-br from-dkm-light-blue to-[#d4e3f0]">
    <div class="max-w-5xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12 md:mb-8">
        <span class="inline-block text-dkm-crimson text-xs font-bold tracking-widest uppercase mb-2 pb-2 border-b-2 border-dkm-crimson">TESTIMONIALS</span>
        <h2 class="text-4xl lg:text-3xl md:text-2xl font-bold text-dkm-dark m-0">What Customers Say</h2>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 md:gap-6 sm:grid-cols-1">
        <TestimonialCard 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          :text="testimonial.text"
          :name="testimonial.name"
          :role="testimonial.role"
          :featured="testimonial.featured"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import TestimonialCard from '@/components/base/TestimonialCard.vue'

const testimonials = ref([
  {
    featured: true,
    text: 'DKM consistently delivers high-quality valve repair services with excellent turnaround time. Their team is professional and knowledgeable.',
    name: 'PT. Pertamina Kilang',
    role: 'Supervisor PT. Pertamina Kilang'
  },
  {
    featured: false,
    text: 'We have been working with PT. Duta Katup Mas for over 5 years. Their expertise in PSV maintenance is outstanding.',
    name: 'PT. Pertamina Hulu Mahakam',
    role: 'Operations Head, PT. PHM'
  },
  {
    featured: false,
    text: 'Reliable partner for all our valve and instrumentation needs. Great customer service and competitive pricing.',
    name: 'Badak LNG',
    role: 'Operations Head Badak LNG'
  }
])
</script>