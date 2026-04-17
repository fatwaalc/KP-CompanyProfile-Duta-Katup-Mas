<template>
  <button 
    @click="handleClick"
    class="inline-flex items-center gap-2 px-7 py-3 md:px-6 md:py-2.5 sm:px-5 sm:py-2 bg-dkm-crimson text-white font-semibold text-sm md:text-xs sm:text-xs rounded-md border-2 border-dkm-crimson cursor-pointer transition-all duration-300 ease-out hover:bg-dkm-dark-red hover:border-dkm-dark-red hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-500/30"
    :title="label"
  >
    <Send :size="18" />
    {{ label }}
  </button>
</template>

<script setup>
import { Send } from 'lucide-vue-next'

const props = defineProps({
  label: {
    type: String,
    default: 'Get in Touch'
  },
  onAction: {
    type: Function,
    default: null
  }
})

const handleClick = () => {
  if (props.onAction) {
    props.onAction()
  }
}
</script>

