<template>
  <section class="bg-white py-20 md:py-16 sm:py-12 px-6">
    <div class="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
      <!-- Left Column: Chairman Image -->
      <div class="flex justify-center items-center order-last lg:order-first">
        <div class="w-full max-w-sm rounded-xl overflow-hidden shadow-lg hover:-translate-y-3 transition-all duration-400 hover:shadow-2xl">
          <img 
            src="@/assets/images/chairmansnote.jpg" 
            alt="Ir. Hadi Suryanto - Chairman & Founder" 
            class="w-full h-auto display-block"
          />
        </div>
      </div>

      <!-- Right Column: Message -->
      <div class="flex items-center">
        <div class="w-full">
          <!-- Label -->
          <span class="inline-block text-dkm-crimson text-sm font-bold tracking-widest uppercase mb-4 pb-3 border-b-2 border-dkm-crimson animate-slide-in-left">
            CHAIRMAN'S NOTE
          </span>

          <!-- Title -->
          <h2 class="text-4xl md:text-3xl font-bold text-dkm-dark mb-6 leading-tight animate-slide-in-left" style="animation-delay: 0.2s">
            A Message from Our Leader
          </h2>

          <!-- Quote -->
          <p class="text-lg md:text-base text-gray-800 leading-relaxed mb-8 italic pl-5 border-l-4 border-dkm-crimson animate-slide-in-left" style="animation-delay: 0.4s">
            "We have a goal to be an important part of the oil and gas industry; thus, the need to enhance our performance for client satisfaction remains our goal on a daily basis. Competition within the industry is inevitable, but with full commitment to the best quality services, first-rate punctuality, and our fully covered one-year warranty, we are confident to strive in the industry."
          </p>

          <!-- Signature -->
          <div class="flex flex-col gap-1 animate-slide-in-left" style="animation-delay: 0.6s">
            <p class="text-xl md:text-lg font-bold text-dkm-dark m-0">Juwanta Yeonardy</p>
            <p class="text-base text-gray-600 m-0">Chairman PT. Duta Katup Mas</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component for Chairman's Note section on About page
// Displays chairman's message with photo and signature
</script>

<style scoped>
.chairman-note {
  background: white;
  padding: 80px 20px;
}

.cn-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

/* Image Column */
.cn-image-column {
  display: flex;
  justify-content: center;
  align-items: center;
}

.cn-image-wrapper {
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 33, 87, 0.15);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.cn-image-wrapper:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 50px rgba(0, 33, 87, 0.25);
}

.cn-image {
  width: 100%;
  height: auto;
  display: block;
}

/* Content Column */
.cn-content-column {
  display: flex;
  align-items: center;
}

.cn-content {
  width: 100%;
}

/* Label */
.cn-label {
  display: inline-block;
  color: #dc143c;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 2px solid #dc143c;
  animation: slideInRight 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Title */
.cn-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #002157;
  margin-bottom: 24px;
  line-height: 1.2;
  animation: slideInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Quote */
.cn-quote {
  font-size: 1.125rem;
  color: #333;
  line-height: 1.8;
  margin-bottom: 32px;
  font-style: italic;
  padding-left: 20px;
  border-left: 4px solid #dc143c;
  animation: slideInRight 1s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Signature */
.cn-signature {
  display: flex;
  flex-direction: column;
  gap: 4px;
  animation: slideInRight 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.cn-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #002157;
  margin: 0;
}

.cn-position {
  font-size: 0.95rem;
  color: #666;
  margin: 0;
}

/* Animations */
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .cn-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .cn-title {
    font-size: 2rem;
  }

  .cn-quote {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .chairman-note {
    padding: 60px 20px;
  }

  .cn-container {
    gap: 30px;
  }

  .cn-image-wrapper {
    max-width: 100%;
  }

  .cn-title {
    font-size: 1.75rem;
  }

  .cn-quote {
    font-size: 0.95rem;
    margin-bottom: 24px;
  }
}

@media (max-width: 480px) {
  .chairman-note {
    padding: 40px 16px;
  }

  .cn-label {
    font-size: 0.75rem;
  }

  .cn-title {
    font-size: 1.375rem;
    margin-bottom: 16px;
  }

  .cn-quote {
    font-size: 0.875rem;
    padding-left: 16px;
    margin-bottom: 20px;
  }

  .cn-name {
    font-size: 1.125rem;
  }

  .cn-position {
    font-size: 0.85rem;
  }
}
</style>
