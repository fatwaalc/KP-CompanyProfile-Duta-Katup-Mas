<template>
  <div 
    class="testimonial-card"
    :class="{ featured: featured }"
  >
    <!-- Quote Icon -->
    <div class="quote-icon">
      <span>"</span>
    </div>

    <!-- Testimonial Text -->
    <p class="testimonial-text">
      {{ text }}
    </p>

    <!-- Star Rating -->
    <div class="star-rating">
      <span 
        v-for="star in 5" 
        :key="star"
        class="star"
      >
        ★
      </span>
    </div>

    <!-- Customer Info -->
    <div class="customer-info">
      <h4 class="customer-name">{{ name }}</h4>
      <p class="customer-role">{{ role }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  featured: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
/* Testimonial Card */
.testimonial-card {
  padding: 2rem;
  background: white;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.testimonial-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #dc143c 0%, #a00a28 100%);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.testimonial-card:hover::before {
  transform: scaleX(1);
}

.testimonial-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  border-color: #dc143c;
}

.testimonial-card.featured {
  grid-column: span 1;
}

.testimonial-card.featured:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  border-color: #dc143c;
}

@media (max-width: 768px) {
  .testimonial-card.featured {
    grid-column: span 1;
    transform: scale(1);
  }

  .testimonial-card.featured:hover {
    transform: translateY(-12px) scale(1);
  }
}

/* Quote Icon */
.quote-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

.quote-icon span {
  font-size: 2rem;
  color: #dc143c;
  font-weight: bold;
  line-height: 1;
}

.testimonial-card:hover .quote-icon {
  background-color: #dc143c;
  transform: scale(1.1) rotate(-5deg);
}

.testimonial-card:hover .quote-icon span {
  color: white;
}

/* Testimonial Text */
.testimonial-text {
  font-size: 1rem;
  line-height: 1.7;
  color: #666;
  margin-bottom: 1.5rem;
  flex: 1;
  font-style: italic;
}

/* Star Rating */
.star-rating {
  display: flex;
  gap: 0.3rem;
  margin-bottom: 1.5rem;
}

.star {
  font-size: 1.1rem;
  color: #ffc107;
  transition: all 0.3s ease;
  display: inline-block;
}

.testimonial-card:hover .star {
  transform: scale(1.1);
  text-shadow: 0 2px 8px rgba(255, 193, 7, 0.5);
}

.star:nth-child(1) { animation-delay: 0s; }
.star:nth-child(2) { animation-delay: 0.05s; }
.star:nth-child(3) { animation-delay: 0.1s; }
.star:nth-child(4) { animation-delay: 0.15s; }
.star:nth-child(5) { animation-delay: 0.2s; }

.testimonial-card:hover .star {
  animation: starBounce 0.4s ease;
}

@keyframes starBounce {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-5px) scale(1.15); }
}

/* Customer Info */
.customer-info {
  border-top: 1px solid #e8e8e8;
  padding-top: 1rem;
}

.customer-name {
  font-size: 1rem;
  font-weight: 700;
  color: #002157;
  margin: 0 0 0.3rem 0;
  transition: color 0.3s ease;
}

.customer-role {
  font-size: 0.85rem;
  color: #999;
  margin: 0;
  transition: color 0.3s ease;
}

.testimonial-card:hover .customer-name {
  color: #dc143c;
}

.testimonial-card:hover .customer-role {
  color: #666;
}

/* Responsive */
@media (max-width: 768px) {
  .testimonial-card {
    padding: 1.5rem;
  }

  .testimonial-text {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .testimonial-card {
    padding: 1.25rem;
  }

  .quote-icon {
    width: 40px;
    height: 40px;
  }

  .quote-icon span {
    font-size: 1.5rem;
  }

  .testimonial-text {
    font-size: 0.9rem;
    line-height: 1.6;
  }

  .star {
    font-size: 0.95rem;
  }
}
</style>
