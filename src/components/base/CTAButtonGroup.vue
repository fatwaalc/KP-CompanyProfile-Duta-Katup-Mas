<template>
  <div class="cta-button-group">
    <router-link to="/services" class="cta-button services-btn">
      Our Services
      <span class="arrow">→</span>
    </router-link>
    <router-link to="/contact" class="cta-button contact-btn">
      Contact Us
    </router-link>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style scoped>
.cta-button-group {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid;
  white-space: nowrap;
}

.services-btn {
  background-color: #dc143c;
  border-color: #dc143c;
  color: white;
}

.services-btn:hover {
  background-color: #a00a28;
  border-color: #a00a28;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(220, 20, 60, 0.3);
}

.services-btn .arrow {
  display: inline-block;
  font-size: 1.125rem;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.services-btn:hover .arrow {
  transform: translateX(6px);
}

.contact-btn {
  background-color: white;
  border-color: white;
  color: #002157;
}

.contact-btn:hover {
  background-color: #f3f4f6;
  border-color: white;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .cta-button-group {
    gap: 1rem;
  }

  .cta-button {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 640px) {
  .cta-button-group {
    gap: 0.75rem;
  }

  .cta-button {
    padding: 0.625rem 1.25rem;
    font-size: 0.875rem;
  }
}
</style>