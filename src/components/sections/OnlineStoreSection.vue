<template>
  <section class="online-store">
    <div class="os-container">
      <div class="os-card" :style="{ backgroundImage: `url(${BackgroundCardStore})` }">
        <!-- Title -->
        <h2 class="os-title">Shop Our Products Online</h2>

        <!-- Description -->
        <p class="os-description">
          Browse our catalogue of valves, spare parts, and accessories on <strong>PaDi UMKM</strong> website platform.
        </p>

        <!-- CTA Button -->
        <a 
          href="https://padiumkm.id/store/631a507a5b9755003d24fbcc" 
          target="_blank" 
          rel="noopener noreferrer"
          class="visit-store-btn"
        >
          Visit E-Commerce
          <ShoppingCart :size="20" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ShoppingCart } from 'lucide-vue-next'
import BackgroundCardStore from '@/assets/images/BackgroundCardStore.png'
// Online Store Section Component
</script>

<style scoped>
.online-store {
  background: #f8f9fa;
  padding: 80px 20px;
}

.os-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.os-card {
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  padding: 60px 80px;
  text-align: center;
  max-width: 900px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 33, 87, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: slideInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.os-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 30px 80px rgba(0, 33, 87, 0.3);
}

/* Title */
.os-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin: 0 0 24px 0;
  line-height: 1.2;
  animation: slideInDown 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Description */
.os-description {
  font-size: 1.125rem;
  color: #b8c5d6;
  line-height: 1.8;
  margin: 0 0 40px 0;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  animation: slideInUp 1s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Button */
.visit-store-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  padding: 0.9rem 2rem;
  background-color: #dc143c;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid #dc143c;
  animation: slideInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.visit-store-btn:hover {
  background-color: #a00a28;
  color: white;
  border-color: #a00a28;
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(220, 20, 60, 0.3);
}

/* Animations */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .online-store {
    padding: 60px 20px;
  }

  .os-card {
    padding: 50px 60px;
  }

  .os-title {
    font-size: 2rem;
  }

  .os-description {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .online-store {
    padding: 50px 20px;
  }

  .os-card {
    padding: 40px 40px;
    border-radius: 16px;
  }

  .os-title {
    font-size: 1.75rem;
    margin-bottom: 16px;
  }

  .os-description {
    font-size: 0.95rem;
    margin-bottom: 32px;
  }

  .visit-store-btn {
    padding: 0.8rem 1.75rem;
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .online-store {
    padding: 40px 16px;
  }

  .os-card {
    padding: 30px 24px;
    border-radius: 12px;
  }

  .os-title {
    font-size: 1.375rem;
    margin-bottom: 12px;
  }

  .os-description {
    font-size: 0.875rem;
    margin-bottom: 24px;
  }

  .visit-store-btn {
    padding: 0.7rem 1.5rem;
    font-size: 0.9rem;
  }
}
</style>
