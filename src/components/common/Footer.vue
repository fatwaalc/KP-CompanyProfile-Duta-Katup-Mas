<template>
  <footer class="bg-dkm-dark text-white/80 mt-auto">
    <div class="max-w-6xl mx-auto px-4 py-14 sm:px-6 lg:px-8 md:py-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-10">
        <div class="flex flex-col gap-3 sm:col-span-2 lg:col-span-1 lg:-ml-12 xl:-ml-16">
          <button
            @click="navigateTo('/')"
            class="inline-flex flex-col items-start gap-2 no-underline text-inherit cursor-pointer transition-all duration-300 w-fit"
          >
            <img src="@/assets/images/logo-dkm.jpg" alt="Logo" class="w-12 h-12 object-contain rounded-lg shrink-0" />
            <h3 class="text-2xl font-semibold text-white/95 m-0 hover:text-dkm-crimson">PT. Duta Katup Mas</h3>
          </button>
          <p class="text-[13.5px] font-medium tracking-normal uppercase leading-tight text-white/75 m-0 whitespace-nowrap">VALVE REPAIR &amp; MAINTENANCE SERVICE</p>
          <p class="text-base m-0 mt-1 text-white/70">Jl. Mulawarman No.01, RT.28, Balikpapan - Batakan 76116, Kalimantan Timur, Indonesia. </p>
          <p class="text-base m-0 text-white/70">(0542) 772011 / 772012 / 772013</p>
          <a href="mailto:admin@dutakatupmas.co.id" class="email-link text-base m-0 text-white/70 transition-colors duration-200 w-fit">admin@dutakatupmas.co.id</a>
          <GetInTouchButton class="w-fit mt-2" @click="navigateTo('/contact')" />
        </div>

        <div class="flex flex-col">
          <h4 class="text-sm font-bold text-white m-0 mb-4">Home</h4>
          <ul class="list-none p-0 m-0 flex flex-col gap-2.5">
            <li><button @click="navigateTo('/', '#services-hero')" class="footer-link">Our Services</button></li>
            <li><button @click="navigateTo('/', '#about-section')" class="footer-link">Mini About DKM</button></li>
            <li><button @click="navigateTo('/', '#clients-section')" class="footer-link">Our Clients</button></li>
            <li><button @click="navigateTo('/', '#testimonials-section')" class="footer-link">Testimonials</button></li>
            <li><button @click="navigateTo('/', '#our-group-section')" class="footer-link">Our Group</button></li>
            <li><button @click="navigateTo('/', '#video-section')" class="footer-link">Company Video Profile</button></li>
          </ul>
        </div>

        <div class="flex flex-col">
          <h4 class="text-sm font-bold text-white m-0 mb-4">About Us</h4>
          <ul class="list-none p-0 m-0 flex flex-col gap-2.5">
            <li><button @click="navigateTo('/about', '#who-we-are')" class="footer-link">Who We Are</button></li>
            <li><button @click="navigateTo('/about', '#vision-mission')" class="footer-link">Vision &amp; Mission</button></li>
            <li><button @click="navigateTo('/about', '#chairman-note')" class="footer-link">Chairman's Note</button></li>
            <li><button @click="navigateTo('/about', '#our-team')" class="footer-link">Our Team</button></li>
            <li><button @click="navigateTo('/about', '#certifications')" class="footer-link">Certifications</button></li>
          </ul>
        </div>

        <div class="flex flex-col">
          <h4 class="text-sm font-bold text-white m-0 mb-4">Services</h4>
          <ul class="list-none p-0 m-0 flex flex-col gap-2.5">
            <li><button @click="navigateTo('/services', '#service-1')" class="footer-link">Valve Repair</button></li>
            <li><button @click="navigateTo('/services', '#service-2')" class="footer-link">Actuator Maintenance</button></li>
            <li><button @click="navigateTo('/services', '#service-3')" class="footer-link">Flame Arresters</button></li>
            <li><button @click="navigateTo('/services', '#service-4')" class="footer-link">PSV Maintenance</button></li>
            <li><button @click="navigateTo('/services', '#service-5')" class="footer-link">Instrumentation</button></li>
          </ul>
        </div>

        <div class="flex flex-col">
          <h4 class="text-sm font-bold text-white m-0 mb-4">Products &amp; Facilities</h4>
          <ul class="list-none p-0 m-0 flex flex-col gap-2.5">
            <li><button @click="navigateTo('/products', '#product-1')" class="footer-link">Visit E-Commerce</button></li>
            <li><button @click="navigateTo('/products', '#product-3')" class="footer-link">Our Facilities</button></li>
            <li><button @click="navigateTo('/products', '#product-4')" class="footer-link">Our Equipment</button></li>
          </ul>
        </div>
      </div>

      <div class="h-px bg-linear-to-r from-transparent via-white/15 to-transparent my-8"></div>

      <div class="flex justify-center items-center">
        <p class="text-xs text-white/50 m-0 text-center">&copy; 2026 PT. Duta Katup Mas. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useRouter } from 'vue-router'
import GetInTouchButton from '@/components/base/GetInTouchButton.vue'

const router = useRouter()

const navigateTo = async (path, hash = '') => {
  if (hash) {
    await router.push({ path, hash })
    return
  }

  await router.push(path)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.footer-link {
  color: rgb(255 255 255 / 0.7);
  background: transparent;
  border: 0;
  cursor: pointer;
  font-size: 0.95rem;
  display: inline-block;
  text-align: left;
  padding: 0;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: #dc143c;
}

.email-link:hover {
  color: #dc143c;
}

</style>