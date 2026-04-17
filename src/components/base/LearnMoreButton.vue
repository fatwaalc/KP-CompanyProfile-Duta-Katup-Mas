<template>
  <button 
    @click="handleClick" 
    class="inline-flex items-center gap-2 px-8 py-3 md:px-6 md:py-2 bg-dkm-dark text-white font-semibold rounded transition-all duration-300 ease-out border-2 border-dkm-dark hover:bg-dkm-crimson hover:border-dkm-crimson hover:-translate-y-0.5"
  >
    {{ label }}
    <span class="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
  </button>
</template>

<script setup>
import { nextTick } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  label: {
    type: String,
    default: 'Learn More'
  },
  targetPage: {
    type: String,
    default: '/about'
  },
  targetSectionId: {
    type: String,
    default: 'who-we-are'
  }
})

const handleClick = async () => {
  // Navigate to target page
  await router.push(props.targetPage)
  await nextTick()
  
  // Scroll to top first
  window.scrollTo(0, 0)
  
  // Then scroll to target section after a delay
  setTimeout(() => {
    const element = document.getElementById(props.targetSectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, 300)
}
</script>

