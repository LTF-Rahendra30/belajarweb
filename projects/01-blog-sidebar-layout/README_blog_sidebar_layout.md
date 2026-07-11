# Proyek 3: Traditional Layout — Blog Artikel dengan Sidebar

![Tipe Proyek](https://img.shields.io/badge/tipe-learning--project-blue)
![Level](https://img.shields.io/badge/level-intermediate-orange)
![Status](https://img.shields.io/badge/status-in--progress-yellow)

## 📖 Ringkasan Proyek

Proyek ini mengajarkan **traditional layout system** melalui pembuatan blog layout dengan sidebar menggunakan kombinasi `display`, `float`, dan `clear` di CSS. Ini merupakan fondasi penting sebelum mempelajari Flexbox dan Grid.

**Mengapa proyek ini penting?**
- Memahami *mengapa* framework modern mengenalkan Flexbox/Grid
- Lihat limitation dari traditional approach → appreciation untuk solusi modern
- CSS fundamental yang tetap relevan di production code (legacy support)

## 🎯 Tujuan Pembelajaran

Setelah menyelesaikan proyek ini, Anda akan memahami:

- [ ] Box model dalam konteks layout multi-kolom
- [ ] Display properties: `block`, `inline`, `inline-block`
- [ ] Float property dan use case originalnya (image wrapping)
- [ ] Clear property untuk menghentikan float effect
- [ ] Parent collapse problem dan solusinya
- [ ] Struktur HTML semantik untuk layout
- [ ] Perbedaan antara traditional layout vs modern approaches

## 📁 Struktur File

```
projects/03-blog-sidebar-layout/
├── index.html              # Semantic HTML struktur
├── style.css               # CSS styling (yang perlu Anda buat)
├── README.md               # File ini
└── screenshot/             # Hasil akhir visual
    └── mockup.png
```

## 🏗️ Struktur Pembelajaran (4 Tahap)

### Tahap 1️⃣: Box Model (Foundation)
**Durasi:** 2-3 hari

**Goal:** Pahami anatomy element — content, padding, border, margin.

**Konsep:**
```css
/* Box Model Anatomy */
element {
  content: "actual content";
  padding: 16px;      /* space inside */
  border: 1px solid;  /* tepi */
  margin: 20px;       /* space outside */
}
```

**Task:**
1. Buat single card element dengan padding dan margin
2. Adjust values, observe perubahan spacing
3. Inspect di browser DevTools (F12 → Elements)

**Output:** Pahami gimana spacing layer-by-layer bekerja.

---

### Tahap 2️⃣: Display Property (Behavior)
**Durasi:** 2-3 hari

**Goal:** Pahami gimana element "behave" — full width, hanya space needed, atau hybrid.

**Konsep:**
```css
.block-element {
  display: block;         /* full width, new line */
}

.inline-element {
  display: inline;        /* hanya space needed */
}

.inline-block-element {
  display: inline-block;  /* hybrid */
  width: 250px;           /* bisa set width */
}
```

**Task:**
1. Buat 3 box dalam satu row dengan `display: inline-block`
2. Compare dengan `display: block` (akan stack vertical)
3. Observe default behavior

**Output:** Pahami flow behavior sebelum float.

---

### Tahap 3️⃣: Float (Workaround)
**Durasi:** 2-3 hari

**Goal:** Pahami float bukan magic — ini "push element ke kiri/kanan, text wrap around".

**Konsep:**
```css
.sidebar {
  float: left;     /* push ke kiri, text wrap */
  width: 250px;
}

/* Content wrap around sidebar natural-flow */
.content {
  /* no float, natural flow */
}

/* Stop float effect */
.footer {
  clear: both;     /* turun ke bawah */
}
```

**Historical Context:**
> Float dulunya dibuat untuk image wrapping (text around image), bukan untuk layout. Tapi developer cerdik menggunakan ini untuk multi-column layout sebelum Flexbox ada (pre-2015).

**Task:**
1. Set sidebar width 250px, `float: left`
2. Lihat content wrap around
3. Observe parent collapse (ini common problem)
4. Fix dengan `overflow: hidden` di parent

**Output:** Pahami float limitation dan parent collapse.

---

### Tahap 4️⃣: Kombinasi Real-World Layout
**Durasi:** 3-4 hari

**Goal:** Gabungkan semua konsep menjadi complete blog layout.

**Task:**
1. Apply Box Model ke semua element (padding, margin)
2. Apply Display Property untuk header/footer (block, full width)
3. Apply Float + Clear untuk sidebar/content layout
4. Test responsive behavior (open DevTools, resize)

**Output:** Functional blog layout yang proper.

---

## 📝 HTML Structure (Sudah Disiapkan)

```html
<header class="site-header">
  <!-- Header content -->
</header>

<main class="page-layout">
  <aside class="sidebar">
    <!-- Categories, related articles -->
  </aside>

  <article class="content">
    <!-- Main blog post -->
  </article>
</main>

<footer class="site-footer">
  <!-- Footer content -->
</footer>
```

**Alasan Struktur:**
- `<header>` — semantic HTML5 untuk bagian atas
- `<main>` — wrapper utama konten
- `<aside>` — semantic tag untuk sidebar (related content)
- `<article>` — semantic tag untuk blog post
- `<footer>` — semantic HTML5 untuk bagian bawah

## 🎨 CSS Tasks (Yang Perlu Anda Kerjakan)

### Prioritas 1: Box Model Fundamentals
```css
/* Set default spacing */
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1.6;
}

/* Header styling */
.site-header {
  padding: 20px 30px;
  border-bottom: 1px solid #e0e0e0;
  background: #f9f9f9;
}

/* Main content wrapper */
.page-layout {
  display: flow-root;  /* or overflow: hidden; fix parent collapse */
}
```

### Prioritas 2: Layout dengan Float
```css
.sidebar {
  float: left;
  width: 250px;
  padding: 20px;
  background: #f5f5f5;
  border-right: 1px solid #e0e0e0;
}

.content {
  margin-left: 270px;  /* atau: margin-left: 250px + padding */
  padding: 20px 30px;
}
```

### Prioritas 3: Clear Float
```css
.site-footer {
  clear: both;
  padding: 20px 30px;
  border-top: 1px solid #e0e0e0;
  background: #f9f9f9;
  text-align: center;
  color: #666;
}
```

## ⚠️ Common Issues dan Solusi

### Problem 1: Parent Collapse
**Gejala:** Footer turun ke tengah, height `page-layout` collapse.

**Penyebab:** Float element di-remove dari normal flow, parent tidak tahu tingginya.

**Solusi:**
```css
.page-layout {
  overflow: hidden;  /* Solusi 1 */
  /* atau */
  display: flow-root;  /* Solusi 2 (CSS3, modern) */
}
```

---

### Problem 2: Content Behind Sidebar
**Gejala:** Content tumpang tindih di bawah sidebar.

**Penyebab:** Content tidak kasih space untuk sidebar.

**Solusi:**
```css
.content {
  margin-left: 270px;  /* sidebar 250px + padding gap */
  /* atau: overflow: hidden; (alt solution) */
}
```

---

### Problem 3: Footer Tidak Turun Bawah
**Gejala:** Footer berada di samping sidebar, tidak di bawah.

**Penyebab:** Lupa `clear: both` pada footer.

**Solusi:**
```css
.site-footer {
  clear: both;  /* PENTING! */
}
```

---

## 📊 Flowchart: Traditional Layout vs Modern Approach

```
Traditional Layout (Float)          Modern Layout (Flexbox)
├─ Box Model                        ├─ Box Model
├─ Display (block/inline)           ├─ Display: flex
├─ Float (push element)             ├─ Flex direction (row/column)
└─ Clear (stop float)               └─ Justify-content, align-items
```

**Kesimpulan:** Flexbox menyelesaikan banyak problem float dengan lebih clean. Tapi memahami float itu fundamental untuk appreciation terhadap solusi modern.

## ✅ Checklist Penyelesaian

- [ ] Pahami Box Model (Tahap 1)
- [ ] Pahami Display Properties (Tahap 2)
- [ ] Pahami Float + Clear (Tahap 3)
- [ ] CSS layout complete dan functional (Tahap 4)
- [ ] Layout terlihat sesuai mockup
- [ ] Test di multiple browser (Chrome, Firefox, Safari)
- [ ] Test responsive (resize window)
- [ ] Commit ke git dengan message yang jelas

## 🚀 Next Steps Setelah Proyek Ini

Setelah menyelesaikan traditional layout ini, Anda siap untuk:

1. **Flexbox** — Layout modern yang lebih powerful dan clean
2. **CSS Grid** — 2D layout system yang komprehensif
3. **Responsive Design** — Media queries dan mobile-first approach
4. **JavaScript Interactivity** — DOM manipulation, events

## 📚 Referensi Pembelajaran

### Dokumentasi
- [MDN: CSS Display](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
- [MDN: CSS Float](https://developer.mozilla.org/en-US/docs/Web/CSS/float)
- [MDN: CSS Clear](https://developer.mozilla.org/en-US/docs/Web/CSS/clear)
- [MDN: CSS Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model)

### Articles & Guides
- [CSS Tricks: All About Floats](https://css-tricks.com/all-about-floats/)
- [A Visual Guide to CSS](https://a.singlediv.com/)

### Tools
- Browser DevTools (F12) untuk inspect box model
- [DevTools Box Model Visualization](https://developer.chrome.com/docs/devtools/css/reference/#model)

## 📝 Catatan Pembelajaran

**Tanggal Mulai:** 11 Juli 2026  
**Target Selesai:** 25 Juli 2026 (2 minggu)

**Progress:**
- [ ] Tahap 1 (Box Model)
- [ ] Tahap 2 (Display Property)
- [ ] Tahap 3 (Float)
- [ ] Tahap 4 (Kombinasi)

---

## 🎓 Filosofi Pembelajaran

> Memahami **mengapa** sistem lama diperlukan memberikan appreciation terhadap solusi modern. Jangan skip fundamentals — Flexbox dan Grid lebih mudah dipelajari ketika Anda tahu problem yang mereka solve.

**Remember:** Kemampuan CSS bukan tentang know semua properties, tapi **understand core concepts** dan bagaimana mereka bekerja bersama.

---

Dibuat sebagai bagian dari learning journey menuju Web3 fullstack development.  
Good luck! 💪
