<template>
  <div class="products-view">
    <ProductsHeroSection />
    
    <div id="product-1">
      <OnlineStoreSection />
    </div>

    <div id="product-3">
      <OurFacilitiesSection />
    </div>

    <div id="product-4">
      <OurEquipmentSection />
    </div>

    <!-- Product Sections dengan IDs untuk navigation -->
    <div id="product-2"></div>
    
    <!-- Sections akan ditambahkan di sini -->
  </div>
</template>

<script setup>
import ProductsHeroSection from '@/components/sections/ProductsHeroSection.vue'
import OnlineStoreSection from '@/components/sections/OnlineStoreSection.vue'
import OurFacilitiesSection from '@/components/sections/OurFacilitiesSection.vue'
import OurEquipmentSection from '@/components/sections/OurEquipmentSection.vue'
</script>

<style scoped>
.products-view {
  width: 100%;
}
</style>
