# PT. Duta Katup Mas - Company Profile Website

![Vue 3](https://img.shields.io/badge/Vue-3.5+-4FC08D?style=flat-square&logo=vue.js)
![Vite](https://img.shields.io/badge/Vite-8+-646CFF?style=flat-square&logo=vite)
![Node](https://img.shields.io/badge/Node-18+-339933?style=flat-square&logo=node.js)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

Website company profile untuk PT. Duta Katup Mas yang dibangun menggunakan Vue 3 dan Vite. Proyek ini menampilkan informasi perusahaan, layanan, produk, fasilitas, tim, testimoni, serta informasi kontak dalam tampilan modern dan responsif.

Dokumen ini disusun untuk kebutuhan pengembangan internal perusahaan dan mitra yang memiliki otorisasi.

## Ringkasan

Website ini difokuskan untuk:
- Menampilkan profil dan kapabilitas perusahaan secara profesional.
- Menyajikan layanan, fasilitas, dan produk secara visual.
- Memudahkan calon klien menghubungi perusahaan.
- Menjaga performa dan maintainability dengan arsitektur komponen.

## Fitur Utama

- Multi-page website berbasis Vue Router.
- Struktur komponen modular (base, common, layout, section).
- Carousel untuk equipment, fasilitas, tim, dan testimoni.
- Navbar responsif dengan active state dan dropdown menu.
- Integrasi media (gambar, video, logo klien/partner).
- Tampilan mobile-first untuk desktop, tablet, dan mobile.
- UI interaktif dengan transisi dan animasi halus.

## Kebijakan Proyek Perusahaan

- Seluruh perubahan konten perusahaan harus melalui persetujuan PIC/owner bisnis terkait.
- Informasi sensitif (data klien, kontak internal, dokumen legal, kredensial) tidak boleh disimpan di repository.
- Asset visual (logo, foto, sertifikat, video) wajib memiliki izin penggunaan yang jelas.
- Perubahan pada identitas merek (logo, warna, tagline) harus mengikuti brand guideline resmi perusahaan.
- Rilis ke production wajib melewati proses review teknis dan approval manajemen yang berwenang.

## Keamanan Dan Kepatuhan

- Jangan commit file `.env`, token API, password, atau secret lain.
- Gunakan variabel environment untuk konfigurasi sensitif.
- Jika menemukan celah keamanan, laporkan secara private ke maintainer proyek, jangan dipublikasikan di issue publik.
- Pastikan dependensi yang digunakan masih aktif dan tidak memiliki kerentanan kritis.

## Teknologi Yang Digunakan

### Frontend
- Vue 3
- Vue Router 4
- Vite

### Styling
- Tailwind CSS 4
- PostCSS
- Autoprefixer

### Library Tambahan
- lucide-vue-next (ikon)

### Tooling
- Node.js 18+
- npm 9+

## Prasyarat Instalasi

Pastikan environment lokal sudah memiliki:
- Node.js versi 18 atau lebih baru.
- npm versi 9 atau lebih baru.
- Git.

## Instalasi Dan Menjalankan Proyek

1. Clone repository

```bash
git clone https://github.com/fatwaalc/KP-CompanyProfile-Duta-Katup-Mas.git
cd Company Profile DKM/my-project
```

2. Install dependency

```bash
npm install
```

3. Jalankan mode development

```bash
npm run dev
```

4. Build untuk production

```bash
npm run build
```

5. Preview hasil build

```bash
npm run preview
```

## Susunan Proyek

```text
my-project/
|-- public/
|   `-- videos/
|-- src/
|   |-- assets/
|   |   |-- images/
|   |   `-- main.css
|   |-- components/
|   |   |-- base/
|   |   |-- common/
|   |   |-- layouts/
|   |   `-- sections/
|   |-- router/
|   |   `-- index.js
|   |-- views/
|   |   |-- HomeView.vue
|   |   |-- AboutView.vue
|   |   |-- ServicesView.vue
|   |   |-- ProductsView.vue
|   |   `-- ContactView.vue
|   |-- App.vue
|   |-- main.js
|   `-- style.css
|-- index.html
|-- package.json
|-- vite.config.js
|-- tailwind.config.js
`-- postcss.config.js
```

## Contoh Penggunaan

### 1) Menjalankan aplikasi secara lokal

```bash
npm run dev
```

Setelah server berjalan, buka alamat lokal yang ditampilkan terminal (umumnya http://localhost:5173).

### 2) Menambahkan section baru ke halaman

1. Buat komponen section baru di folder `src/components/sections`.
2. Import section tersebut ke view yang dibutuhkan (misalnya HomeView).
3. Susun urutan section sesuai alur konten halaman.

Contoh:

```vue
<script setup>
import NewSection from '@/components/sections/NewSection.vue'
</script>

<template>
  <main>
    <NewSection />
  </main>
</template>
```

### 3) Build dan deploy

```bash
npm run build
```

Hasil build akan tersedia di folder `dist` dan siap dideploy ke static hosting.

### 4) Validasi sebelum rilis internal

```bash
npm run build
```

Checklist minimum sebelum merge/deploy:
- Build berhasil tanpa error.
- Navigasi utama dan section penting berfungsi di desktop dan mobile.
- Tidak ada data/konten sensitif perusahaan yang terekspos.
- Perubahan konten sudah disetujui PIC terkait.

## Kontribusi

Kontribusi mengikuti alur kerja yang lebih ketat untuk menjaga kualitas dan kepatuhan perusahaan:

1. Fork repository ini.
2. Buat branch fitur baru (`feature/nama-fitur`).
3. Lakukan perubahan sesuai scope yang disetujui.
4. Commit dengan pesan yang jelas dan terstruktur.
5. Push branch ke repository fork/internal.
6. Buat Pull Request ke branch utama.
7. Tunggu review teknis dan approval stakeholder/PIC terkait.

Saran sebelum membuat Pull Request:
- Jalankan aplikasi di mode development.
- Pastikan build berhasil tanpa error.
- Pastikan perubahan tidak merusak tampilan responsif.
- Pastikan tidak ada data sensitif atau aset tanpa izin yang ikut ter-commit.
- Sertakan ringkasan perubahan dan dampak bisnis singkat pada deskripsi PR.

## Lisensi

Proyek ini menggunakan lisensi MIT.

Silakan gunakan, modifikasi, dan distribusikan proyek ini sesuai ketentuan lisensi MIT.

Catatan: lisensi MIT berlaku untuk source code proyek. Aset merek perusahaan (nama dagang, logo, foto tertentu, materi sertifikasi, dan konten identitas perusahaan) dapat memiliki pembatasan penggunaan terpisah sesuai kebijakan PT. Duta Katup Mas.