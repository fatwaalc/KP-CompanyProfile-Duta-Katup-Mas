<template>
  <button
    @click="emit('click')"
    class="inline-flex items-center gap-2 px-4 py-2 bg-dkm-crimson text-white font-semibold text-sm rounded-md border border-dkm-crimson cursor-pointer transition-all duration-200"
    :title="label"
    type="button"
  >
    <span>{{ label }}</span>
    <Send class="w-4 h-4" />
  </button>
</template>

<script setup>
import { Send } from 'lucide-vue-next'

defineProps({
  label: {
    type: String,
    default: 'Get In Touch'
  }
})

const emit = defineEmits(['click'])
</script>

<style scoped>
button:hover {
  background-color: #a00a28;
  border-color: #a00a28;
  transform: translateY(-1px);
}
</style>

