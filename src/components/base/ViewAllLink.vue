<template>
  <div class="mt-8 flex justify-center">
    <router-link
      :to="link"
      class="view-all-link group inline-flex w-fit items-center gap-2 px-7 py-3 bg-dkm-dark text-white border-2 border-dkm-dark rounded text-base font-semibold no-underline cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5"
    >
      {{ labelText }}
      <CircleArrowRight class="view-all-arrow w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
    </router-link>
  </div>
</template>

<script setup>
import { CircleArrowRight } from 'lucide-vue-next'
import { t } from '@/i18n'
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    default: '/'
  }
})

const labelText = computed(() => props.label || t('cta.viewAll'))
</script>

<style scoped>
.view-all-link:hover {
  background-color: #dc143c;
  border-color: #dc143c;
}

.view-all-link:hover .view-all-arrow {
  transform: translateX(5px);
}
</style>