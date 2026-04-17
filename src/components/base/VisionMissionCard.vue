<template>
  <div class="group relative flex flex-col w-full bg-white p-12 md:p-8 sm:p-6 rounded-xl shadow-dkm hover:shadow-dkm-hover transition-all duration-500 ease-out overflow-hidden hover:-translate-y-3">
    <!-- Top border gradient indicator -->
    <div 
      class="absolute top-0 left-0 right-0 h-1 scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"
      :class="type === 'vision' ? 'bg-gradient-to-r from-dkm-blue to-dkm-navy' : 'bg-gradient-to-r from-dkm-crimson to-dkm-dark-red'"
    ></div>

    <!-- Card Icon -->
    <div 
      :class="[
        'w-18 h-18 md:w-16 md:h-16 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-6 md:mb-4 transition-all duration-500 ease-out group-hover:scale-125 group-hover:rotate-12 relative z-10',
        type === 'vision' 
          ? 'bg-gradient-to-br from-blue-100 to-blue-50 text-dkm-blue group-hover:from-dkm-blue group-hover:to-dkm-navy group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/30' 
          : 'bg-gradient-to-br from-red-100 to-red-50 text-dkm-crimson group-hover:from-dkm-crimson group-hover:to-dkm-dark-red group-hover:text-white group-hover:shadow-lg group-hover:shadow-red-500/30'
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
      'text-3xl md:text-2xl sm:text-xl font-bold mb-4 transition-colors duration-300 ease-out',
      type === 'vision' 
        ? 'text-dkm-dark group-hover:text-dkm-blue' 
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
        <Goal :size="20" class="flex-shrink-0 mt-0.5 text-dkm-crimson transition-all duration-300 ease-out group-hover:text-dkm-dark-red group-hover:scale-110" />
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
