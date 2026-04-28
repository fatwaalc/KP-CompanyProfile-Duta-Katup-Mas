<template>
  <footer class="bg-dkm-dark text-white/80 mt-auto">
    <div class="max-w-6xl mx-auto px-4 py-14 sm:px-6 lg:px-8 md:py-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-10">
        <div class="flex flex-col gap-3 sm:col-span-2 lg:col-span-1 lg:-ml-12 xl:-ml-16">
          <button
            @click="navigateTo('/')"
            class="inline-flex flex-col items-start gap-2 no-underline text-inherit cursor-pointer transition-all duration-300 w-fit"
          >
            <img src="@/assets/images/logofull-dkm.png" :alt="t('common.logo.alt')" class="w-100 h-auto object-contain shrink-0" />
          </button>
          <p class="text-base m-0 mt-1 text-white/70">{{ t('footer.address') }}</p>
          <p class="text-base m-0 text-white/70">{{ t('footer.phone') }}</p>
          <a href="mailto:admin@dutakatupmas.co.id" class="email-link text-base m-0 text-white/70 transition-colors duration-200 w-fit">admin@dutakatupmas.co.id</a>
          <GetInTouchButton class="w-fit mt-2" @click="navigateTo('/contact')" />
        </div>

        <div class="flex flex-col">
          <h4 class="text-sm font-bold text-white m-0 mb-4">{{ t('footer.section.home') }}</h4>
          <ul class="list-none p-0 m-0 flex flex-col gap-2.5">
            <li><button @click="navigateTo('/', '#services-hero')" class="footer-link">{{ t('footer.link.services') }}</button></li>
            <li><button @click="navigateTo('/', '#about-section')" class="footer-link">{{ t('footer.link.miniAbout') }}</button></li>
            <li><button @click="navigateTo('/', '#clients-section')" class="footer-link">{{ t('footer.link.clients') }}</button></li>
            <li><button @click="navigateTo('/', '#testimonials-section')" class="footer-link">{{ t('footer.link.testimonials') }}</button></li>
            <li><button @click="navigateTo('/', '#our-group-section')" class="footer-link">{{ t('footer.link.group') }}</button></li>
            <li><button @click="navigateTo('/', '#video-section')" class="footer-link">{{ t('footer.link.video') }}</button></li>
          </ul>
        </div>

        <div class="flex flex-col">
          <h4 class="text-sm font-bold text-white m-0 mb-4">{{ t('footer.section.about') }}</h4>
          <ul class="list-none p-0 m-0 flex flex-col gap-2.5">
            <li><button @click="navigateTo('/about', '#who-we-are')" class="footer-link">{{ t('footer.link.about.who') }}</button></li>
            <li><button @click="navigateTo('/about', '#vision-mission')" class="footer-link">{{ t('footer.link.about.vision') }}</button></li>
            <li><button @click="navigateTo('/about', '#chairman-note')" class="footer-link">{{ t('footer.link.about.chairman') }}</button></li>
            <li><button @click="navigateTo('/about', '#our-team')" class="footer-link">{{ t('footer.link.about.team') }}</button></li>
            <li><button @click="navigateTo('/about', '#certifications')" class="footer-link">{{ t('footer.link.about.cert') }}</button></li>
          </ul>
        </div>

        <div class="flex flex-col">
          <h4 class="text-sm font-bold text-white m-0 mb-4">{{ t('footer.section.services') }}</h4>
          <ul class="list-none p-0 m-0 flex flex-col gap-2.5">
            <li><button @click="navigateTo('/services', '#service-1')" class="footer-link">{{ t('footer.link.services.valve') }}</button></li>
            <li><button @click="navigateTo('/services', '#service-2')" class="footer-link">{{ t('footer.link.services.actuator') }}</button></li>
            <li><button @click="navigateTo('/services', '#service-3')" class="footer-link">{{ t('footer.link.services.flame') }}</button></li>
            <li><button @click="navigateTo('/services', '#service-4')" class="footer-link">{{ t('footer.link.services.psv') }}</button></li>
            <li><button @click="navigateTo('/services', '#service-5')" class="footer-link">{{ t('footer.link.services.instrumentation') }}</button></li>
          </ul>
        </div>

        <div class="flex flex-col">
          <h4 class="text-sm font-bold text-white m-0 mb-4">{{ t('footer.section.products') }}</h4>
          <ul class="list-none p-0 m-0 flex flex-col gap-2.5">
            <li><button @click="navigateTo('/products', '#product-1')" class="footer-link">{{ t('footer.link.products.visit') }}</button></li>
            <li><button @click="navigateTo('/products', '#product-3')" class="footer-link">{{ t('footer.link.products.facilities') }}</button></li>
            <li><button @click="navigateTo('/products', '#product-4')" class="footer-link">{{ t('footer.link.products.equipment') }}</button></li>
          </ul>
        </div>
      </div>

      <div class="h-px bg-linear-to-r from-transparent via-white/15 to-transparent my-8"></div>

      <div class="flex justify-center items-center">
        <p class="text-xs text-white/50 m-0 text-center">{{ t('footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useRouter } from 'vue-router'
import GetInTouchButton from '@/components/base/GetInTouchButton.vue'
import { t } from '@/i18n'

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