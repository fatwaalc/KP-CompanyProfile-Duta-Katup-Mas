<template>
  <nav class="navbar" :class="{ 'navbar-hidden': isNavbarHidden }">
    <div class="navbar-container">
      <!-- Logo -->
      <div class="navbar-logo">
        <router-link to="/">
          <img src="@/assets/images/logofull-dkm.png" :alt="t('common.logo.alt')" class="logo" />
        </router-link>
      </div>

      <!-- Hamburger Menu Button (Mobile Only) -->
      <button class="hamburger" :class="{ active: isMobileMenuOpen }" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Navigation Menu -->
      <ul class="nav-menu" :class="{ active: isMobileMenuOpen }">
        <!-- Menu Item: Home -->
        <li class="nav-item">
          <router-link to="/" class="nav-link" :class="{ active: isActive('/') }" @click="closeMobileMenu">
            {{ t('nav.home') }}
          </router-link>
        </li>

        <!-- Menu Item: About Us (with dropdown) -->
        <li class="nav-item dropdown" :class="{ active: activeDropdown === 'about' }" @mouseenter="openDropdown('about')" @mouseleave="closeDropdown">
          <div class="dropdown-header">
            <router-link to="/about#about-hero" class="nav-link" :class="{ active: isActive('/about') }" @click="closeMobileMenu">
              {{ t('nav.about') }}
            </router-link>
            <button class="dropdown-chevron" @click.prevent.stop="toggleDropdownOnMobile('about')">
              <ChevronDown :size="18" />
            </button>
          </div>
          <ul class="dropdown-menu" :class="{ active: activeDropdown === 'about' }" @mouseenter="openDropdown('about')" @mouseleave="closeDropdown">
            <li><router-link to="/about#who-we-are" class="dropdown-link" @click="closeMobileMenu">{{ t('nav.about.who') }}</router-link></li>
            <li><router-link to="/about#vision-mission" class="dropdown-link" @click="closeMobileMenu">{{ t('nav.about.vision') }}</router-link></li>
            <li><router-link to="/about#chairman-note" class="dropdown-link" @click="closeMobileMenu">{{ t('nav.about.chairman') }}</router-link></li>
            <li><router-link to="/about#our-team" class="dropdown-link" @click="closeMobileMenu">{{ t('nav.about.team') }}</router-link></li>
            <li><router-link to="/about#certifications" class="dropdown-link" @click="closeMobileMenu">{{ t('nav.about.cert') }}</router-link></li>
          </ul>
        </li>

        <!-- Menu Item: Services (with dropdown) -->
        <li class="nav-item dropdown" :class="{ active: activeDropdown === 'services' }" @mouseenter="openDropdown('services')" @mouseleave="closeDropdown">
          <div class="dropdown-header">
            <router-link to="/services#services-hero" class="nav-link" :class="{ active: isActive('/services') }" @click="closeMobileMenu">
              {{ t('nav.services') }}
            </router-link>
            <button class="dropdown-chevron" @click.prevent.stop="toggleDropdownOnMobile('services')">
              <ChevronDown :size="18" />
            </button>
          </div>
          <ul class="dropdown-menu" :class="{ active: activeDropdown === 'services' }" @mouseenter="openDropdown('services')" @mouseleave="closeDropdown">
            <li><router-link to="/services#service-1" class="dropdown-link" @click="closeMobileMenu">{{ t('nav.services.valve') }}</router-link></li>
            <li><router-link to="/services#service-2" class="dropdown-link" @click="closeMobileMenu">{{ t('nav.services.actuator') }}</router-link></li>
            <li><router-link to="/services#service-3" class="dropdown-link" @click="closeMobileMenu">{{ t('nav.services.flame') }}</router-link></li>
            <li><router-link to="/services#service-4" class="dropdown-link" @click="closeMobileMenu">{{ t('nav.services.psv') }}</router-link></li>
            <li><router-link to="/services#service-5" class="dropdown-link" @click="closeMobileMenu">{{ t('nav.services.instrumentation') }}</router-link></li>
          </ul>
        </li>

        <!-- Menu Item: Products & Facilities (with dropdown) -->
        <li class="nav-item dropdown" :class="{ active: activeDropdown === 'products' }" @mouseenter="openDropdown('products')" @mouseleave="closeDropdown">
          <div class="dropdown-header">
            <router-link to="/products#products-hero" class="nav-link" :class="{ active: isActive('/products') }" @click="closeMobileMenu">
              {{ t('nav.products') }}
            </router-link>
            <button class="dropdown-chevron" @click.prevent.stop="toggleDropdownOnMobile('products')">
              <ChevronDown :size="18" />
            </button>
          </div>
          <ul class="dropdown-menu" :class="{ active: activeDropdown === 'products' }" @mouseenter="openDropdown('products')" @mouseleave="closeDropdown">
            <li><router-link to="/products#product-1" class="dropdown-link" @click="closeMobileMenu">{{ t('nav.products.visit') }}</router-link></li>
            <li><router-link to="/products#product-3" class="dropdown-link" @click="closeMobileMenu">{{ t('nav.products.facilities') }}</router-link></li>
            <li><router-link to="/products#product-4" class="dropdown-link" @click="closeMobileMenu">{{ t('nav.products.equipment') }}</router-link></li>
          </ul>
        </li>

        <!-- Menu Item: Contact Us -->
        <li class="nav-item">
          <router-link to="/contact" class="nav-link" :class="{ active: isActive('/contact') }" @click="closeMobileMenu">
            {{ t('nav.contact') }}
          </router-link>
        </li>

      </ul>

      <div class="lang-toggle-wrapper" role="group" aria-label="Language">
        <div class="lang-toggle">
          <span class="lang-pill" :class="{ 'is-en': lang === 'en' }"></span>
          <button class="lang-option" :class="{ active: lang === 'id' }" @click="setLang('id')">ID</button>
          <button class="lang-option" :class="{ active: lang === 'en' }" @click="setLang('en')">EN</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import ChevronDown from '../base/ChevronDown.vue'
import { lang, setLang, t } from '@/i18n'

const router = useRouter()
const route = useRoute()
const isMobileMenuOpen = ref(false)
const activeDropdown = ref(null)
const isNavbarHidden = ref(false)
const lastScrollY = ref(0)
let dropdownCloseTimer = null

// Check if a path is active
const isActive = (path) => {
  return route.path === path
}

const handleScroll = () => {
  const currentScrollY = window.scrollY
  
  // Jika scroll ke bawah lebih dari 50px, hide navbar
  if (currentScrollY > lastScrollY.value && currentScrollY > 50) {
    isNavbarHidden.value = true
  } else {
    // Jika scroll ke atas, show navbar
    isNavbarHidden.value = false
  }
  
  lastScrollY.value = currentScrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  // Clear any pending dropdown close timer
  if (dropdownCloseTimer) {
    clearTimeout(dropdownCloseTimer)
  }
})

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  // Clear any pending close timer and reset dropdown
  if (dropdownCloseTimer) {
    clearTimeout(dropdownCloseTimer)
  }
  activeDropdown.value = null
}

const openDropdown = (dropdown) => {
  // Clear any pending close timer
  if (dropdownCloseTimer) {
    clearTimeout(dropdownCloseTimer)
  }
  activeDropdown.value = dropdown
}

const closeDropdown = () => {
  // Add delay to allow user to move cursor to dropdown menu
  dropdownCloseTimer = setTimeout(() => {
    activeDropdown.value = null
  }, 200)
}

const toggleDropdownOnMobile = (dropdown) => {
  // For mobile: toggle dropdown
  if (activeDropdown.value === dropdown) {
    activeDropdown.value = null
  } else {
    activeDropdown.value = dropdown
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navbar {
  background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  transition: transform 0.3s ease;
}

.navbar.navbar-hidden {
  transform: translateY(-100%);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

/* Logo */
.navbar-logo {
  flex-shrink: 0;
}

.navbar-logo a {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.navbar-logo a:hover {
  opacity: 0.8;
}

.logo {
  height: 72px;
  max-width: 220px;
  object-fit: contain;
}

/* Navigation Menu */
.nav-menu {
  display: flex;
  list-style: none;
  gap: 0;
  align-items: center;
  margin: 0;
  margin-left: auto;
}

.nav-item {
  position: relative;
  list-style: none;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #374151;
  text-decoration: none;
  padding: 0.75rem 1.25rem;
  transition: color 0.3s ease;
  font-weight: 500;
  font-size: 0.95rem;
  position: relative;
  cursor: pointer;
}

.nav-link:hover {
  color: #dc143c;
}

.nav-link.active {
  color: #dc143c;
  font-weight: 600;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 3px;
  background-color: #dc143c;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(-50%);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: calc(100% - 1.5rem);
}

/* Dropdown Item */
.nav-item.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

  /* Dropdown Header - for mobile toggle */
  .dropdown-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .dropdown-header .nav-link {
    flex: 1;
    padding-right: 0;
  }

  .nav-item.dropdown .nav-link::after {
    left: 0;
    transform: none;
  }

  .nav-item.dropdown:hover .nav-link::after,
  .nav-item.dropdown.active .nav-link::after {
    width: calc(100% + 2.25rem);
  }

  .dropdown-chevron {
    background: none;
    border: none;
    padding: 6px 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: inherit;
    transition: transform 0.3s ease;
  }

  .dropdown-chevron:hover {
    opacity: 0.7;
  }

  .nav-item.dropdown.active .dropdown-chevron {
    transform: rotate(180deg);
  }

/* Dropdown Menu */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  list-style: none;
  min-width: 220px;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  z-index: 1001;
  margin-top: 8px;
  animation: slideDown 0.3s ease forwards;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  pointer-events: none;
}

.dropdown-menu.active {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dropdown-menu li {
  list-style: none;
}

.dropdown-menu.active {
  animation: slideDown 0.3s ease forwards;
}

.dropdown-menu li:not(:last-child) {
  border-bottom: 1px solid #f3f4f6;
}

.dropdown-menu a,
.dropdown-link {
  display: block;
  color: #374151;
  text-decoration: none;
  padding: 1rem 1.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 0.9rem;
  position: relative;
  border-left: 4px solid transparent;
}

.dropdown-menu a:hover,
.dropdown-link:hover {
  background-color: #f9fafb;
  color: #dc143c;
  padding-left: 1.75rem;
  border-left-color: #dc143c;
  box-shadow: inset 8px 0 15px rgba(220, 20, 60, 0.05);
}

/* Language Toggle */
.lang-toggle-wrapper {
  display: flex;
  align-items: center;
  margin-left: 0.75rem;
}

.lang-toggle {
  position: relative;
  display: inline-flex;
  align-items: center;
  background: #eef2f7;
  border: 1px solid #e5e7eb;
  border-radius: 999px;
  padding: 3px;
  min-width: 86px;
  overflow: hidden;
}

.lang-option {
  position: relative;
  z-index: 2;
  flex: 1;
  border: 0;
  background: transparent;
  color: #4b5563;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 6px 10px;
  cursor: pointer;
  transition: color 0.2s ease;
}

.lang-option.active {
  color: #ffffff;
}

.lang-pill {
  position: absolute;
  top: 3px;
  bottom: 3px;
  left: 3px;
  width: calc(50% - 3px);
  background: #dc143c;
  border-radius: 999px;
  transition: transform 0.25s ease;
  z-index: 1;
  box-shadow: 0 6px 14px rgba(220, 20, 60, 0.25);
}

.lang-pill.is-en {
  transform: translateX(100%);
}

.lang-toggle:focus-within {
  box-shadow: 0 0 0 2px rgba(220, 20, 60, 0.2);
}

/* Hamburger Menu */
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 6px;
  background: none;
  border: none;
  padding: 0;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background-color: #374151;
  border-radius: 3px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(10px, 10px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(8px, -8px);
}

/* Mobile Responsive */
@media (max-width: 1024px) {
  .navbar-container {
    padding: 0.4rem 1.5rem;
  }

  .nav-link {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .navbar-container {
    padding: 0.4rem 1rem;
  }

  /* Urutan flex: Logo (1) → Nav Menu (2) → Lang Toggle (3) → Hamburger (4) */
  .navbar-logo {
    order: 1;
    flex-shrink: 0;
  }

  .lang-toggle-wrapper {
    order: 3;
    margin-left: auto;
    margin-right: 0;
  }

  .lang-toggle {
    width: 86px;
  }

  .logo {
    height: 60px;
    max-width: 200px;
  }

  .hamburger {
    display: flex;
    order: 4;
    margin-left: 0.75rem;
  }

  /* Mobile Menu */
  .nav-menu {
    order: 2;
    position: fixed;
    left: -100%;
    top: 0;
    width: 80%;
    max-width: 350px;
    height: 100vh;
    flex-direction: column;
    background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
    transition: left 0.3s ease;
    box-shadow: 2px 0 15px rgba(0, 0, 0, 0.1);
    gap: 0;
    padding: 0;
    overflow-y: auto;
    z-index: 999;
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-item {
    width: 100%;
  }

  .nav-link {
    width: 100%;
    padding: 1.2rem 1.5rem;
    border-bottom: 1px solid #f3f4f6;
    border-radius: 0;
  }

  .nav-link::after {
    display: none;
  }

  .nav-link::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0;
    background-color: #dc143c;
    transition: width 0.3s ease;
  }

  .nav-link:hover::before,
  .nav-link.active::before {
    width: 4px;
  }

  .nav-link:hover {
    padding-left: 2rem;
  }

  .nav-link.active {
    background-color: rgba(220, 20, 60, 0.08);
  }

  .dropdown-toggle {
    justify-content: space-between;
    width: 100%;
  }

  /* Dropdown Menu - Mobile */
  .dropdown-menu {
    position: static;
    background-color: rgba(0, 0, 0, 0.05);
    box-shadow: none;
    border-radius: 0;
    min-width: unset;
    margin-top: 0;
    animation: none;
    opacity: 0;
    visibility: hidden;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;
    pointer-events: none;
  }

  .dropdown-menu.active {
    opacity: 1;
    visibility: visible;
    max-height: 500px;
    pointer-events: auto;
  }

  .dropdown-menu li:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  .dropdown-menu a,
  .dropdown-link {
    padding: 1rem 1.5rem;
    padding-left: 2.5rem;
    color: #374151;
    border: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border-left: 4px solid transparent;
  }

  .dropdown-menu a:hover,
  .dropdown-link:hover {
    background-color: rgba(220, 20, 60, 0.08);
    color: #dc143c;
    padding-left: 2.75rem;
    border-left-color: #dc143c;
    box-shadow: inset 8px 0 15px rgba(220, 20, 60, 0.05);
  }
}
</style>