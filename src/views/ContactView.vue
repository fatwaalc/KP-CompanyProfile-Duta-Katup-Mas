<template>
  <div class="contact-view">
    <!-- Contact Hero Section -->
    <section class="contact-hero">
      <div class="hero-content">
        <span class="hero-label">{{ t('contact.hero.label') }}</span>
        <h1 class="hero-title">{{ t('contact.hero.title') }}</h1>
        <p class="hero-subtitle">{{ t('contact.hero.subtitle') }}</p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section">
      <div class="contact-container">
        <!-- Contact Info Cards -->
        <div class="contact-info-grid">
          <!-- Address Card -->
          <div class="info-card">
            <div class="info-icon">
              <MapPin :size="32" />
            </div>
            <h3 class="info-title">{{ t('contact.info.address') }}</h3>
            <p class="info-text">
              {{ t('contact.address.line1') }}<br>
              {{ t('contact.address.line2') }}<br>
              {{ t('contact.address.line3') }}
            </p>
          </div>

          <!-- Phone Card -->
          <div class="info-card">
            <div class="info-icon">
              <Phone :size="32" />
            </div>
            <h3 class="info-title">{{ t('contact.info.phone') }}</h3>
            <p class="info-text">
              (0542) <br>
              772011 / 772012 / 772013
            </p>
          </div>

          <!-- Email Card -->
          <div class="info-card">
            <div class="info-icon">
              <Mail :size="32" />
            </div>
            <h3 class="info-title">{{ t('contact.info.email') }}</h3>
            <p class="info-text">
              <a href="mailto:admin@dutakatupmas.co.id">admin@dutakatupmas.co.id</a>
            </p>
          </div>

          <!-- Hours Card -->
          <div class="info-card">
            <div class="info-icon">
              <ClockCheck :size="32" />
            </div>
            <h3 class="info-title">{{ t('contact.info.hours') }}</h3>
            <p class="info-text">
              {{ t('contact.hours.weekdays') }}<br>
              {{ t('contact.hours.weekends') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Location Section -->
    <LocationSection />
  </div>
</template>

<script setup>
import LocationSection from '@/components/sections/LocationSection.vue'
import { MapPin, Phone, Mail, ClockCheck } from 'lucide-vue-next'
import { t } from '@/i18n'
</script>

<style scoped>
.contact-view {
  width: 100%;
}

/* Contact Hero Section */
.contact-hero {
  background: linear-gradient(135deg, #002157 0%, #1a3a52 100%);
  color: white;
  min-height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-label {
  display: inline-block;
  color: #dc143c;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  padding-bottom: 12px;
  border-bottom: 2px solid #dc143c;
  animation: slideInDown 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  animation: slideInDown 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-subtitle {
  font-size: 1.2rem;
  opacity: 0.95;
  line-height: 1.6;
  animation: slideInDown 1s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Animations */
@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Contact Section */
.contact-section {
  padding: 4rem 2rem;
  background-color: #f8f9fa;
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Contact Info Grid */
.contact-info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

/* Info Card */
.info-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  animation: slideInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) backwards;
}

.info-card:nth-child(1) {
  animation-delay: 0.2s;
}

.info-card:nth-child(2) {
  animation-delay: 0.4s;
}

.info-card:nth-child(3) {
  animation-delay: 0.6s;
}

.info-card:nth-child(4) {
  animation-delay: 0.8s;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

.info-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #dc143c;
}

.info-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #002157;
  margin-bottom: 0.75rem;
}

.info-text {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  margin: 0;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.info-text a {
  color: #dc143c;
  text-decoration: none;
  transition: color 0.3s ease;
  word-break: break-all;
}

.info-text a:hover {
  color: #a00a28;
}

/* Contact Form Wrapper - Not Used */
.contact-form-wrapper {
  display: none;
}

.form-title {
  display: none;
}

/* Form Group - Hidden/Not Used */
.form-group {
  display: none;
}

.form-label {
  display: none;
}

.form-input,
.form-textarea {
  display: none;
}

.form-input:focus,
.form-textarea:focus {
  display: none;
}

.form-textarea {
  display: none;
}

/* Submit Button - Hidden */
.submit-btn {
  display: none;
}

.submit-btn:hover {
  display: none;
}

.submit-btn:active {
  display: none;
}

/* Success Message - Hidden */
.success-message {
  display: none;
}

/* Responsive */
@media (max-width: 1024px) {
  .contact-hero {
    min-height: 300px;
  }

  .hero-title {
    font-size: 2.2rem;
  }

  .hero-subtitle {
    font-size: 0.95rem;
  }
}

@media (max-width: 768px) {
  .contact-hero {
    min-height: 250px;
  }

  .hero-title {
    font-size: 1.8rem;
  }

  .hero-subtitle {
    font-size: 0.85rem;
  }

  .contact-section {
    padding: 2.5rem 1rem;
  }

  .contact-info-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .info-card {
    padding: 1.5rem;
  }

  .info-icon {
    font-size: 2rem;
  }

  .info-text {
    font-size: 0.85rem;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .form-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .contact-hero {
    min-height: 220px;
  }

  .hero-title {
    font-size: 1.4rem;
  }

  .hero-subtitle {
    font-size: 0.75rem;
  }

  .contact-section {
    padding: 2rem 1rem;
  }

  .contact-info-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .info-card {
    padding: 1.5rem 1rem;
  }

  .info-icon {
    font-size: 1.8rem;
    margin-bottom: 0.75rem;
  }

  .info-title {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .info-text {
    font-size: 0.8rem;
    line-height: 1.5;
  }

  .info-text a {
    display: inline-block;
    max-width: 100%;
    overflow-wrap: break-word;
    word-break: break-word;
  }

  .contact-form-wrapper {
    padding: 1.5rem;
  }

  .form-title {
    font-size: 1.2rem;
  }

  .submit-btn {
    padding: 0.85rem;
    font-size: 0.95rem;
  }
}
</style>
