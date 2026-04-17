<template>
  <footer class="bg-gradient-to-br from-dkm-dark to-[#1a3a52] text-white/80 mt-auto">
    <div class="max-w-6xl mx-auto px-8 py-14 md:px-4 md:py-10">
      <div class="grid grid-cols-5 gap-10 mb-10 md:grid-cols-2 md:gap-6 lg:grid-cols-5 lg:gap-8">
        <div class="flex flex-col gap-3 md:col-span-2 lg:col-span-1">
          <button @click="navigateTo('/')" class="flex flex-col gap-2 no-underline text-inherit cursor-pointer transition-all duration-300 w-fit">
            <img src="@/assets/images/logo-dkm.jpg" alt="Logo" class="w-12 h-12 object-contain rounded-lg flex-shrink-0" />
            <h3 class="text-sm font-semibold text-white/90 m-0 hover:text-dkm-crimson">PT. Duta Katup Mas</h3>
          </button>
          <p class="text-xs font-medium text-white/80 m-0 uppercase">Valve Repair</p>
          <p class="text-sm m-0 mt-2 text-white/70">Jl. Mulawarman No.01, Balikpapan</p>
          <p class="text-sm m-0 text-white/70">(0542) 772011</p>
        </div>
        <div class="flex flex-col">
          <h4 class="text-sm font-bold text-white m-0 mb-4 uppercase">Home</h4>
          <ul class="list-none p-0 m-0 flex flex-col gap-2.5">
            <li><button @click="navigateTo('/')" class="text-white/70 bg-transparent border-0 cursor-pointer text-sm hover:text-dkm-crimson inline-block">Our Services</button></li>
            <li><button @click="navigateTo('/')" class="text-white/70 bg-transparent border-0 cursor-pointer text-sm hover:text-dkm-crimson inline-block">About</button></li>
          </ul>
        </div>
        <div class="flex flex-col">
          <h4 class="text-sm font-bold text-white m-0 mb-4 uppercase">About</h4>
          <ul class="list-none p-0 m-0 flex flex-col gap-2.5">
            <li><button @click="navigateTo('/about')" class="text-white/70 bg-transparent border-0 cursor-pointer text-sm hover:text-dkm-crimson inline-block">Who We Are</button></li>
          </ul>
        </div>
        <div class="flex flex-col">
          <h4 class="text-sm font-bold text-white m-0 mb-4 uppercase">Services</h4>
          <ul class="list-none p-0 m-0 flex flex-col gap-2.5">
            <li><button @click="navigateTo('/services')" class="text-white/70 bg-transparent border-0 cursor-pointer text-sm hover:text-dkm-crimson inline-block">Services</button></li>
          </ul>
        </div>
        <div class="flex flex-col">
          <h4 class="text-sm font-bold text-white m-0 mb-4 uppercase">Products</h4>
          <ul class="list-none p-0 m-0 flex flex-col gap-2.5">
            <li><button @click="navigateTo('/products')" class="text-white/70 bg-transparent border-0 cursor-pointer text-sm hover:text-dkm-crimson inline-block">Facilities</button></li>
          </ul>
        </div>
      </div>
      <div class="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent my-8"></div>
      <div class="flex justify-center items-center">
        <p class="text-xs text-white/50 m-0 text-center">&copy; 2026 PT. Duta Katup Mas. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { nextTick } from 'vue'

const router = useRouter()

const navigateTo = async (path) => {
  await router.push(path)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>