<template>
  <div style="display: flex; justify-content: center; margin-top: 2rem;">
    <router-link 
      :to="link" 
      class="view-all-btn"
    >
      {{ label }}
      <span class="btn-arrow">→</span>
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: 'View All'
  },
  link: {
    type: String,
    default: '/'
  }
})
</script>

<style scoped>
.view-all-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  padding: 12px 28px;
  background-color: #002157;
  color: white;
  border: 2px solid #002157;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.view-all-btn:hover {
  background-color: #dc143c;
  border-color: #dc143c;
  transform: translateY(-2px);
}

.btn-arrow {
  font-size: 1.25rem;
  transition: transform 0.3s ease;
}

.view-all-btn:hover .btn-arrow {
  transform: translateX(5px);
}
</style>