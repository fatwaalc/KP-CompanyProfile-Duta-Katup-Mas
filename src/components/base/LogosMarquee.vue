<template>
  <div class="logos-marquee">
    <div class="marquee-content">
      <div
        v-for="groupIndex in 2"
        :key="`group-${groupIndex}`"
        class="marquee-group"
      >
        <div
          v-for="(item, index) in items"
          :key="`group-${groupIndex}-${index}`"
          class="marquee-item"
        >
          <img
            :src="item.logo"
            :alt="item.name"
            class="marquee-logo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every(item => item.logo && item.name)
    }
  }
})
</script>

<style scoped>
/* Logos Marquee Container */
.logos-marquee {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: 2rem 0;
  background: transparent;
}

.marquee-content {
  display: flex;
  gap: 0;
  animation: marquee 20s linear infinite;
  width: max-content;
  will-change: transform;
}

.marquee-group {
  display: flex;
  gap: 2rem;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.logos-marquee:hover .marquee-content {
  animation-play-state: paused;
}

/* Marquee Items */
.marquee-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  min-width: 140px;
  height: auto;
  padding: 0 1.5rem;
  transition: all 0.3s ease;
}

.marquee-item:hover {
  transform: scale(1.1);
}

.marquee-logo {
  max-width: 100%;
  max-height: 120px;
  object-fit: contain;
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

.marquee-item:hover .marquee-logo {
  opacity: 1;
}

/* Responsive */
@media (max-width: 768px) {
  .marquee-content {
    gap: 1.5rem;
  }

  .marquee-item {
    min-width: 130px;
    padding: 0 1rem;
  }

  .marquee-logo {
    max-height: 100px;
  }
}

@media (max-width: 480px) {
  .marquee-content {
    gap: 1rem;
  }

  .marquee-item {
    min-width: 110px;
    padding: 0 0.8rem;
  }

  .marquee-logo {
    max-height: 80px;
  }
}
</style>
