<template>
  <section class="py-16 md:py-12 sm:py-8 px-6 md:px-4 bg-white">
    <div class="who-grid max-w-6xl mx-auto">
      <!-- Heading -->
      <div class="who-heading">
        <h2 class="text-4xl lg:text-3xl md:text-2xl font-bold text-dkm-dark m-0 mb-2 relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-15 after:h-1 after:bg-linear-to-r after:from-dkm-crimson after:to-dkm-dark-red after:rounded">Who We Are</h2>
      </div>

      <!-- Description -->
      <div class="who-description flex flex-col gap-6 md:gap-5">
        <p class="text-base md:text-sm leading-relaxed text-gray-600 m-0 text-justify md:text-left">
          PT Duta Katup Mas (DKM) originated from the success of its group companies, 
          which had been supplying mechanical units like gate, ball, and control valves to the oil and gas industry since 1990. 
          Officially established in December 1999 in Balikpapan, East Kalimantan, DKM pioneered valve and instrument repair operations to provide the industry with reliable, 
          ready-to-use equipment while overcoming long delivery lead times.
        </p>
        
        <p class="text-base md:text-sm leading-relaxed text-gray-600 m-0 text-justify md:text-left">
          Since its inception, DKM has significantly expanded its technical pool and expertise to service and test a broad spectrum of valve types, 
          brands, and models for the Oil & Gas, Petrochemical, and Power plant sectors. Guided by its core principle of products and services integrity, 
          the company maintains rigorous quality and safety standards through its ISO 9001:2015 and ISO 45001:2018 certifications.
        </p>
      </div>

      <!-- Right Image -->
      <div class="who-image-wrap flex items-start justify-end">
        <div class="relative w-full aspect-4/3 rounded-xl overflow-hidden shadow-2xl transition-all hover:-translate-y-2 hover:shadow-3xl">
          <img 
            src="@/assets/images/miniaboutdkm.jpg" 
            alt="PT. Duta Katup Mas Facility"
            class="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed for this section
</script>

<style scoped>
.who-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: start;
}

.who-heading {
  order: 1;
}

.who-description {
  order: 2;
}

.who-image-wrap {
  order: 3;
}

@media (min-width: 1024px) {
  .who-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 3rem;
    row-gap: 1.5rem;
  }

  .who-heading {
    grid-column: 1;
    grid-row: 1;
  }

  .who-description {
    grid-column: 1;
    grid-row: 2;
  }

  .who-image-wrap {
    grid-column: 2;
    grid-row: 1 / span 2;
    order: initial;
  }
}
</style>