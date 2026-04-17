<template>
  <div class="services-view">
    <ServicesHeroSection />
    
    <!-- Service Detail Cards -->
    <div id="service-1">
      <ServiceDetailCard 
        :image="valveImage"
        title="Repair Valve Various Size & Class"
        description="Complete valve repair services for gate, globe, ball, butterfly, check, and plug valves in all sizes and pressure classes. Our workshop handles valves from 1/2&quot; to 60&quot; and pressure ratings up to 2500#."
        :features="[
          'Disassembly & Inspection',
          'Lapping & Grinding',
          'Hydrostatic & Pneumatic Testing',
          'Welding Overlay Repair',
          'Full Documentation & Certification'
        ]"
        backgroundColor="linear-gradient(135deg, #e8f0f7 0%, #d4e3f0 100%)"
      />
    </div>

    <div id="service-2">
      <ServiceDetailCard 
        :image="actuatorImage"
        title="Actuator Maintenance & Repair"
        description="Comprehensive actuator maintenance and repair services for pneumatic and hydraulic systems. We provide specialized care for rotary and linear actuators, ensuring optimal performance and extended equipment life."
        :features="[
          'Pneumatic Actuator Repair',
          'Hydraulic Actuator Service',
          'Seal & Bearing Replacement',
          'Performance Testing',
          'Spare Parts & Inventory Management'
        ]"
      />
    </div>

    <div id="service-3">
      <ServiceDetailCard 
        :image="flameareImage"
        title="Flame Arresters Installation & Maintenance"
        description="Expert installation and maintenance services for flame arresters in oil and gas pipelines. Our team ensures complete safety compliance and reliable flame protection for your systems."
        :features="[
          'Installation & Alignment',
          'Pressure Relief Valve Service',
          'System Inspection',
          'Maintenance & Recertification',
          'Safety Certification & Documentation'
        ]"
        backgroundColor="linear-gradient(135deg, #e8f0f7 0%, #d4e3f0 100%)"
      />
    </div>

    <div id="service-4">
      <ServiceDetailCard 
        :image="psvImage"
        title="PSV Maintenance & Calibration"
        description="Pressure Safety Valve maintenance, calibration, and repair services to ensure optimal protection. We provide accurate testing and certification to keep your systems safe and compliant."
        :features="[
          'PSV Removal & Installation',
          'Precision Calibration',
          'Valve Cleaning & Service',
          'Hydrostatic Test Certification',
          'Complete Documentation & Reporting'
        ]"
      />
    </div>

    <div id="service-5">
      <ServiceDetailCard 
        :image="instrumentImage"
        title="Valve Instrumentation & Automation"
        description="Advanced instrumentation solutions for valve control and monitoring. We integrate automation systems to optimize your valve operations and provide real-time data analytics."
        :features="[
          'Instrument Installation',
          'Valve Positioner Setup',
          'Flow & Pressure Monitoring',
          'SCADA System Integration',
          'Technical Support & Training'
        ]"
        backgroundColor="linear-gradient(135deg, #e8f0f7 0%, #d4e3f0 100%)"
      />
    </div>
  </div>
</template>

<script setup>
import ServicesHeroSection from '@/components/sections/ServicesHeroSection.vue'
import ServiceDetailCard from '@/components/sections/ServiceDetailCard.vue'
import valveImage from '@/assets/images/valvefake.jpg'
import actuatorImage from '@/assets/images/actuatorfake.jpg'
import flameareImage from '@/assets/images/flamearesfake.jpg'
import psvImage from '@/assets/images/psvfake.jpg'
import instrumentImage from '@/assets/images/instrumentservicefake.jpg'
</script>

<style scoped>
.services-view {
  width: 100%;
}
</style>
