# PT. Duta Katup Mas - Company Profile Website

![Vue 3](https://img.shields.io/badge/Vue-3.4+-4FC08D?style=flat-square&logo=vue.js)
![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF?style=flat-square&logo=vite)
![Node](https://img.shields.io/badge/Node-18+-339933?style=flat-square&logo=node.js)
![Responsive](https://img.shields.io/badge/Responsive-Mobile%20First-FF6B6B?style=flat-square)

Sebuah website profile profesional untuk **PT. Duta Katup Mas** yang dibangun dengan teknologi Vue 3 dan Vite. Website ini menampilkan informasi perusahaan, layanan, produk, fasilitas, tim, dan testimonial klien dengan desain modern dan responsif.

## 🎯 Deskripsi Proyek

PT. Duta Katup Mas adalah perusahaan yang bergerak di bidang manufaktur dan distribusi valve (katup). Website ini berfungsi sebagai platform untuk:

- **Profil Perusahaan**: Visi, misi, dan sejarah PT. Duta Katup Mas
- **Showcase Layanan**: Menampilkan berbagai layanan yang ditawarkan
- **Katalog Produk**: Informasi lengkap mengenai produk dan spesifikasi
- **Fasilitas & Peralatan**: Dokumentasi tentang fasilitas produksi dan equipment modern
- **Tim Profesional**: Menampilkan team members dan profesionalisme perusahaan
- **Testimonial Klien**: Kepercayaan dan testimoni dari klien-klien terkemuka
- **Kontak & Lokasi**: Informasi kontak dan lokasi cabang perusahaan
- **E-Commerce Integration**: Link ke toko online PaDi UMKM untuk penjualan retail

## ✨ Fitur Utama

### 🏗️ Arsitektur & Kualitas Kode
- ✅ **Component-Based Architecture**: Modular dan reusable Vue components
- ✅ **Code Optimization**: Extracted reusable components (~800+ lines reduced code)
- ✅ **SEO Optimized**: Meta tags dan semantic HTML structure
- ✅ **Performance Focused**: Lazy loading dan optimized assets

### 🎨 User Interface & Experience
- ✅ **Modern Design**: Gradient backgrounds dan smooth animations
- ✅ **Interactive Elements**: Carousel, dropdown menus, hover effects
- ✅ **Responsive Design**: Mobile-first approach dengan breakpoints di 480px, 768px, 1024px
- ✅ **Accessibility**: Proper semantic HTML dan ARIA attributes

### 🎬 Konten & Media
- ✅ **Video Integration**: YouTube video player di hero section dan company video section
- ✅ **Image Gallery**: Product showcase dan facilities gallery
- ✅ **Carousel/Slideshow**: Multi-slide presentation untuk berbagai konten
- ✅ **Logo Marquee**: Animated scrolling logos untuk klien dan partners

### 🔧 Navigasi & Struktur
- ✅ **Multi-Page Navigation**: Router-based navigation untuk berbagai halaman
- ✅ **Active State Tracking**: Indikator halaman aktif dengan animated effects
- ✅ **Dropdown Menus**: Dropdown menu untuk nested navigation pages
- ✅ **Smooth Scrolling**: Smooth navigation experience

### 📱 Responsive & Cross-Device
- ✅ **Mobile Optimized**: Perfect rendering di semua ukuran layar
- ✅ **Tablet Support**: Optimized layout untuk tablet devices
- ✅ **Desktop Experience**: Full-featured desktop layout dengan hover effects

## 🛠️ Tech Stack

### Frontend Framework
- **Vue 3.5+** - Progressive JavaScript framework dengan Composition API
- **Vite 8.0+** - Next-generation frontend build tool dengan optimized dev server
- **Vue Router 4.0+** - Client-side routing untuk multi-page navigation

### Styling & CSS Framework
- **Tailwind CSS 4.0+** - Utility-first CSS framework (@tailwindcss/postcss, @tailwindcss/vite)
- **PostCSS** - CSS transformation with autoprefixer
- **Responsive Design** - Mobile-first approach dengan Tailwind breakpoints
- **Custom Animations** - Slide-in effects dan hover animations

### Icons & Utilities
- **Lucide Vue Next 1.0+** - Beautiful SVG icons library dengan 1000+ icons
- **Gradient & Color System** - Custom Tailwind color palette dengan navy (#002157), crimson (#dc143c), light blue gradients

### Development Tools & Build
- **Node.js 18+** - JavaScript runtime
- **NPM 9+** - Package manager
- **Hot Module Replacement (HMR)** - Real-time development updates
- **Build Optimization** - Tree-shaking, code-splitting, asset compression

### Browser Support
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📦 Instalasi & Setup

### Prerequisites
- Node.js 18.x atau lebih tinggi
- NPM 9.x atau lebih tinggi
- Git untuk version control

### Langkah Instalasi

1. **Clone Repository**
   ```bash
   git clone https://github.com/yourusername/dkm-company-profile.git
   cd dkm-company-profile/my-project
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```
   Dependencies yang akan diinstall:
   - vue@^3.5.32
   - vue-router@^4.0.13
   - lucide-vue-next@^1.0.0
   - tailwindcss@^4.0.0
   - @tailwindcss/postcss@^4.0.0
   - @tailwindcss/vite@^4.0.0
   - vite@^8.0.4
   - @vitejs/plugin-vue@^6.0.5
   - autoprefixer@^10.5.0

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   Website akan accessible di `http://localhost:5173` (atau port berikutnya jika sudah terpakai)
   - HMR enabled untuk real-time updates
   - Tailwind CSS akan auto-compile

4. **Build untuk Production**
   ```bash
   npm run build
   ```
   Menghasilkan optimized build di folder `dist/`

5. **Preview Production Build**
   ```bash
   npm run preview
   ```
   Preview build sebelum deployment

## 📂 Struktur Proyek

```
my-project/
├── src/
│   ├── components/
│   │   ├── base/                    # Base/reusable components
│   │   │   ├── GetInTouchButton.vue        # CTA button dengan Send icon
│   │   │   ├── LearnMoreButton.vue         # Learn more CTA button
│   │   │   ├── ViewAllLink.vue             # View all link component
│   │   │   ├── ServiceCard.vue             # Service card template
│   │   │   ├── CTAButtonGroup.vue          # CTA buttons group
│   │   │   ├── WatchYoutubeButton.vue      # YouTube player button
│   │   │   ├── ChevronDown.vue             # Dropdown chevron icon
│   │   │   ├── EquipmentCard.vue           # Equipment carousel card
│   │   │   ├── FacilitiesCard.vue          # Facilities carousel card
│   │   │   ├── VisionMissionCard.vue       # Vision/mission card dengan Goal icons
│   │   │   └── LearnMoreButton.vue
│   │   │
│   │   ├── common/                  # Shared components
│   │   │   ├── Navbar.vue                  # Navigation bar dengan active state & animations
│   │   │   └── Footer.vue                  # Footer component
│   │   │
│   │   ├── layouts/                 # Layout components
│   │   │   └── MainLayout.vue              # Main layout wrapper
│   │   │
│   │   └── sections/                # Page sections/blocks
│   │       ├── HeroSection.vue             # Hero banner untuk home page
│   │       ├── AboutHeroSection.vue        # Hero untuk about page
│   │       ├── WhoWeAreSection.vue         # Company overview
│   │       ├── VisionMissionSection.vue    # Vision & mission display
│   │       ├── OurServicesSection.vue      # Services showcase
│   │       ├── OurEquipmentSection.vue     # Equipment carousel
│   │       ├── OurFacilitiesSection.vue    # Facilities carousel
│   │       ├── OurTeamSection.vue          # Team member carousel
│   │       ├── CertificationsSection.vue   # Certifications carousel
│   │       ├── OurClientsSection.vue       # Client logos marquee
│   │       ├── TestimonialsSection.vue     # Testimonials carousel
│   │       ├── OnlineStoreSection.vue      # E-commerce link (PaDi UMKM)
│   │       ├── LocationSection.vue         # Company locations
│   │       ├── ChairmanNoteSection.vue     # Chairman's message
│   │       ├── CompanyVideoSection.vue     # YouTube video embed
│   │       ├── OurGroupSection.vue         # Group companies info
│   │       ├── ProductsHeroSection.vue     # Products page hero
│   │       ├── ServicesHeroSection.vue     # Services page hero
│   │       ├── AboutUsSection.vue          # About us content
│   │       ├── CertificationsSection.vue   # Certifications info
│   │       └── ServiceDetailCard.vue       # Individual service detail
│   │
│   ├── views/                       # Page components
│   │   ├── HomeView.vue                    # Landing page
│   │   ├── AboutView.vue                   # About page
│   │   ├── ServicesView.vue                # Services page
│   │   ├── ProductsView.vue                # Products page
│   │   └── ContactView.vue                 # Contact page
│   │
│   ├── router/
│   │   └── index.js                 # Vue Router configuration
│   │
│   ├── assets/
│   │   ├── images/                  # Image assets
│   │   ├── main.css                 # Global styles
│   │   └── videos/                  # Video assets
│   │
│   ├── App.vue                      # Root component
│   ├── main.js                      # Application entry point
│   └── style.css                    # Global styles
│
├── public/
│   └── videos/                      # Static video files
│
├── index.html                       # HTML entry point
├── vite.config.js                   # Vite configuration
└── package.json                     # Dependencies & scripts
```

## 🎨 Color Palette & Design System

### Primary Colors
- **Dark Blue**: `#002157` - Primary brand color
- **Crimson Red**: `#dc143c` - CTA and accent color
- **Dark Red Hover**: `#a00a28` - Hover state for CTAs

### Gradient Colors
- **Blue Gradient**: `#e8f0f7 → #d4e3f0` - Section backgrounds
- **Navy Gradient**: `#4169e1 → #1e90ff` - Vision card accents
- **Crimson Gradient**: `#dc143c → #a00a28` - Mission card accents

### Neutral Colors
- **White**: `#ffffff` - Background and text
- **Light Gray**: `#f5f5f5` - Subtle backgrounds
- **Dark Gray**: `#666666` - Secondary text
- **Dark Text**: `#333333` - Primary text

## 🔑 Komponen Utama

### Base Components
| Komponen | Deskripsi | Fitur |
|----------|-----------|-------|
| `GetInTouchButton.vue` | CTA button untuk kontak | Send icon, hover animation |
| `LearnMoreButton.vue` | Learn more button | Clickable with navigation |
| `ViewAllLink.vue` | View all link | Inline link dengan styling |
| `ServiceCard.vue` | Service display card | Icon, title, description |
| `EquipmentCard.vue` | Equipment carousel item | Image, details, responsive |
| `FacilitiesCard.vue` | Facilities carousel item | Standard carousel button styling |
| `VisionMissionCard.vue` | Vision/mission display | Goal icons untuk mission bullets |

### Section Components
- **HeroSection**: Full-width hero dengan background image dan CTA buttons
- **VisionMissionSection**: Dual cards untuk vision dan mission dengan icons
- **OurServicesSection**: Grid layout untuk service cards
- **OurEquipmentSection**: Auto-advance carousel dengan manual navigation
- **OurTeamSection**: Team member carousel dengan standardized buttons
- **TestimonialsSection**: Client testimonials dengan carousel
- **LocationSection**: Interactive location display
- **OnlineStoreSection**: E-commerce integration dengan background image

## 🎭 Fitur Interaktif

### Navbar
- ✅ Active state tracking untuk halaman saat ini
- ✅ Animated underline effect on hover (desktop)
- ✅ Left border animation (mobile)
- ✅ Dropdown menus dengan 200ms delay untuk smooth interaction
- ✅ Responsive layout untuk mobile dan desktop

### Carousels
- ✅ Auto-advance dengan timer
- ✅ Manual navigation dengan previous/next buttons
- ✅ Dot indicators untuk slide progress
- ✅ Standardized button styling across all carousels
- ✅ Responsive item display

### Animations
- ✅ Smooth scroll animations (slideInDown, slideInUp, slideInLeft)
- ✅ Hover scale effects
- ✅ Color transitions
- ✅ Transform animations pada cards
- ✅ CSS cubic-bezier easing functions

## 📱 Responsive Breakpoints

| Breakpoint | Device | Fitur |
|-----------|--------|-------|
| 1024px | Desktop | Full layout dengan hover effects |
| 768px | Tablet | Adjusted spacing, optimized layout |
| 480px | Mobile | Single column, touch-friendly sizes |

Setiap breakpoint memiliki optimized:
- Font sizes (responsive typography)
- Padding dan spacing
- Icon sizes
- Grid layouts (2-column → 1-column)
- Button sizes

## 🚀 Development Workflow

### Development Mode
```bash
npm run dev
```
Membuka development server dengan HMR untuk real-time updates.

### Production Build
```bash
npm run build
```
Menghasilkan optimized build files di folder `dist/`.

### Preview Build
```bash
npm run preview
```
