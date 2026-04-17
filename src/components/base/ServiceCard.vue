<template>
  <router-link 
    :to="service.link"
    class="service-card"
  >
    <!-- Image -->
    <img 
      :src="service.image" 
      :alt="service.title"
      class="service-card-img"
    />

    <!-- Content -->
    <div class="service-card-content">
      <h3 class="service-card-title">
        {{ service.title }}
      </h3>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  service: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.service-card {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: white;
  height: 100%;
}

.service-card:hover {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  transform: translateY(-4px);
}

/* Image */
.service-card-img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover .service-card-img {
  transform: scale(1.05);
}

/* Content */
.service-card-content {
  display: flex;
  flex-direction: column;
  padding: 1.25rem 1rem;
  background: white;
  flex: 1;
  justify-content: center;
}

/* Title */
.service-card-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #002157;
  margin: 0;
  line-height: 1.4;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Responsive */
@media (max-width: 768px) {
  .service-card-img {
    height: 160px;
  }

  .service-card-content {
    padding: 1.25rem;
  }

  .service-card-title {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .service-card-img {
    height: 140px;
  }

  .service-card-title {
    font-size: 0.9rem;
  }
}
</style>

