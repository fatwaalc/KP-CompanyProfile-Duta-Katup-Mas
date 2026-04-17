<template>
  <section class="bg-white py-10 sm:py-12 lg:py-16 xl:py-20 px-4 sm:px-5 lg:px-8">
    <div class="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-10 xl:gap-12 items-start">
      <!-- Left Column: Message -->
      <div class="flex items-start">
        <div class="w-full">
          <!-- Label -->
          <span class="inline-block text-dkm-crimson text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 pb-3 border-b-2 border-dkm-crimson animate-slide-in-left">
            CHAIRMAN'S NOTE
          </span>

          <!-- Title -->
          <h2 class="text-3xl sm:text-4xl lg:text-4xl xl:text-3xl font-bold text-dkm-dark mb-5 sm:mb-6 leading-tight animate-slide-in-left" style="animation-delay: 0.2s">
            A Message from Our Leader
          </h2>

          <!-- Quote -->
          <p class="text-sm sm:text-base lg:text-lg text-gray-800 leading-relaxed mb-6 sm:mb-8 italic pl-4 sm:pl-5 border-l-4 border-dkm-crimson animate-slide-in-left" style="animation-delay: 0.4s">
            "We have a goal to be an important part of the oil and gas industry; thus, the need to enhance our performance for client satisfaction remains our goal on a daily basis. Competition within the industry is inevitable, but with full commitment to the best quality services, first-rate punctuality, and our fully covered one-year warranty, we are confident to strive in the industry."
          </p>

          <!-- Signature -->
          <div class="flex flex-col gap-1 animate-slide-in-left" style="animation-delay: 0.6s">
            <p class="text-lg sm:text-xl font-bold text-dkm-dark m-0">Juwanta Yeonardy</p>
            <p class="text-sm sm:text-base text-gray-600 m-0">Chairman PT. Duta Katup Mas</p>
          </div>
        </div>
      </div>

      <!-- Right Column: Chairman Image -->
      <div class="flex justify-center xl:justify-end items-start">
        <div class="w-full max-w-md xl:max-w-lg rounded-xl overflow-hidden shadow-lg hover:-translate-y-3 transition-all duration-400 hover:shadow-2xl">
          <img
            src="@/assets/images/chairmansnote.jpg"
            alt="Ir. Hadi Suryanto - Chairman & Founder"
            class="w-full h-auto block"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component for Chairman's Note section on About page
// Displays chairman's message with photo and signature
</script>
