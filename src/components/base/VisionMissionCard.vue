<template>
  <div
    :class="[
      'vm-card group relative flex flex-col w-full p-12 md:p-8 sm:p-6 rounded-xl shadow-dkm border border-transparent transition-all duration-500 ease-out overflow-hidden hover:-translate-y-2.5',
      type === 'vision'
        ? 'bg-white hover:border-dkm-dark/25 hover:shadow-[0_20px_45px_rgba(0,33,87,0.16)]'
        : 'bg-white hover:border-dkm-crimson/25 hover:shadow-[0_20px_45px_rgba(220,20,60,0.18)]'
    ]"
  >
    <div
      :class="[
        'absolute -top-16 -right-16 w-36 h-36 rounded-full blur-2xl opacity-0 transition-opacity duration-500 pointer-events-none',
        type === 'vision' ? 'bg-dkm-dark/20 group-hover:opacity-100' : 'bg-dkm-crimson/20 group-hover:opacity-100'
      ]"
    ></div>

    <!-- Top border gradient indicator -->
    <div 
      class="absolute top-0 left-0 right-0 h-1 scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"
      :class="type === 'vision' ? 'bg-linear-to-r from-dkm-dark to-dkm-blue' : 'bg-linear-to-r from-dkm-crimson to-dkm-dark-red'"
    ></div>

    <!-- Card Icon -->
    <div 
      :class="[
        'vm-icon w-18 h-18 md:w-16 md:h-16 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-6 md:mb-4 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-110 relative z-10',
        type === 'vision' 
          ? 'bg-[#e9eef8] text-dkm-dark group-hover:bg-dkm-dark group-hover:text-white group-hover:shadow-lg group-hover:shadow-dkm-dark/30' 
          : 'bg-red-50 text-dkm-crimson group-hover:bg-dkm-crimson group-hover:text-white group-hover:shadow-lg group-hover:shadow-red-500/30'
      ]"
    >
      <svg v-if="type === 'vision'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-8 h-8 md:w-7 md:h-7">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
      <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-8 h-8 md:w-7 md:h-7">
        <circle cx="12" cy="12" r="1"></circle>
        <circle cx="12" cy="12" r="5"></circle>
        <circle cx="12" cy="12" r="9"></circle>
      </svg>
    </div>

    <!-- Card Title -->
    <h3 :class="[
      'text-3xl md:text-2xl sm:text-xl font-bold mb-4 transition-all duration-300 ease-out',
      type === 'vision' 
        ? 'text-dkm-dark group-hover:text-dkm-dark group-hover:translate-x-0.5' 
        : 'text-dkm-dark group-hover:text-dkm-crimson'
    ]">
      {{ title }}
    </h3>

    <!-- Vision Content -->
    <p v-if="type === 'vision'" class="text-base md:text-sm sm:text-sm leading-relaxed text-gray-600 transition-colors duration-300 ease-out group-hover:text-gray-800">
      {{ content }}
    </p>

    <!-- Mission Items List -->
    <ul v-else class="list-none p-0 m-0 flex flex-col gap-4 sm:gap-3">
      <li v-for="(item, index) in missionItems" :key="index" class="flex items-start gap-3 text-base md:text-sm sm:text-sm leading-relaxed text-gray-600 transition-colors duration-300 ease-out group-hover:text-gray-800">
        <Goal :size="20" class="shrink-0 mt-0.5 text-dkm-crimson transition-all duration-300 ease-out group-hover:text-dkm-dark-red group-hover:scale-110" />
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { Goal } from 'lucide-vue-next'

defineProps({
  type: {
    type: String,
    enum: ['vision', 'mission'],
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    default: ''
  },
  missionItems: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.vm-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, transparent 0%, rgba(255, 255, 255, 0.45) 45%, transparent 70%);
  transform: translateX(-130%);
  transition: transform 0.65s ease;
  pointer-events: none;
}

.vm-card:hover::after {
  transform: translateX(130%);
}
</style>
