<template>
  <button 
    @click="handleClick"
    class="learn-more-btn group inline-flex w-fit items-center gap-2 px-7 py-3 md:px-6 md:py-2 bg-dkm-dark text-white text-base font-semibold rounded cursor-pointer transition-all duration-300 ease-out border-2 border-dkm-dark hover:-translate-y-0.5"
  >
    {{ labelText }}
    <CircleArrowRight class="learn-more-arrow w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
  </button>
</template>

<script setup>
import { computed, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { CircleArrowRight } from 'lucide-vue-next'
import { t } from '@/i18n'

const router = useRouter()

const props = defineProps({
  label: {
    type: String,
    default: ''
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

const labelText = computed(() => props.label || t('cta.learnMore'))

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

<style scoped>
.learn-more-btn:hover {
  background-color: #dc143c;
  border-color: #dc143c;
}

.learn-more-btn:hover .learn-more-arrow {
  transform: translateX(5px);
}
</style>

