# Fundraising Homepage - Double Good Inspired Layout

A modern, responsive ecommerce/fundraising homepage inspired by Double Good's clean design aesthetic. Built with semantic HTML5 and vanilla CSS - **no frameworks, no dependencies**.

## 🎨 What You Get

A complete homepage layout matching Double Good's exact flow:

1. **Fixed Header** - Navigation with dropdowns and CTAs
2. **Hero Section** - Orange gradient background, large headline, animated elements
3. **How It Works** - 3-step process with numbered badges
4. **Action Banner** - Orange CTA banner with product visual
5. **Results Section** - Blue gradient background with stats
6. **Features Section** - Gray background, 2-column layout
7. **Success Stories** - Asymmetric grid showcasing case studies
8. **Testimonials** - Horizontal scrolling testimonial cards
9. **Final CTA** - Cyan gradient call-to-action
10. **Footer** - Multi-column layout with newsletter signup

---

## 🚀 Quick Start

### Option 1: View Locally

1. Download `index.html` and `styles.css`
2. Keep them in the same folder
3. Open `index.html` in your browser

### Option 2: Upload Your Logo

1. Add your logo image to the project folder
2. Replace "YourBrand" text in `index.html` (line 15):
   ```html
   <a href="/" class="logo">
       <img src="your-logo.png" alt="Your Brand">
   </a>
   ```

### Option 3: Deploy

- **GitHub Pages**: Push to repo, enable Pages in Settings
- **Shopify**: Convert to `.liquid` (see Shopify section below)
- **Netlify/Vercel**: Drag and drop folder

---

## 🎨 Easy Customization

### Change Colors (Lines 16-26 in `styles.css`)

```css
:root {
    --color-orange: #YOUR_COLOR;    /* Primary brand color */
    --color-blue: #YOUR_COLOR;      /* Secondary accent */
    --color-cyan: #YOUR_COLOR;      /* CTA backgrounds */
    --color-yellow: #YOUR_COLOR;    /* Numbered badges */
    --color-dark: #1D1C1D;          /* Text and buttons */
}
```

**Example**: For a green brand
```css
--color-orange: #2ECC71;  /* Change to green */
--color-yellow: #F1C40F;  /* Keep yellow badges */
```

### Change Typography

```css
:root {
    --font-primary: 'Your Font', sans-serif;
}
```

Don't forget to add the font link in `index.html` `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet">
```

### Adjust Spacing

```css
:root {
    --spacing-xl: 4.8rem;  /* Increase for more space */
    --spacing-3xl: 9.6rem; /* Section padding */
}
```

### Change Container Width

```css
:root {
    --container-width: 1440px;  /* Wider layout */
}
```

---

## 📝 Customize Content

### Update the Hero Section (Lines 60-85 in `index.html`)

```html
<h1 class="hero-title">Your Headline Here</h1>
<p class="hero-subtitle">Your subtitle text</p>
<a href="#start" class="btn btn-primary btn-lg">Your CTA</a>
```

### Change "How It Works" Steps (Lines 88-136)

Each step has:
- **Step number** (1, 2, 3)
- **Title**
- **Description**
- **Image placeholder**

Just update the text:
```html
<h3 class="step-title">Your Step Title</h3>
<p class="step-description">Your step description...</p>
```

### Update Success Stories (Lines 209-254)

```html
<div class="story-badge">$XX,XXX Raised</div>
<h3 class="story-title">Your Organization Name</h3>
```

---

## 🖼️ Adding Images

### Replace Placeholders

All placeholders are marked with class `.image-placeholder` or similar.

**Hero Image** (line 74):
```html
<div class="hero-visual">
    <img src="your-hero-image.jpg" alt="Product">
</div>
```

**Success Story Images** (line 217):
```html
<div class="story-image">
    <img src="success-story-1.jpg" alt="Team Name">
</div>
```

### Image Guidelines

- **Hero**: 1200x1200px (square)
- **Steps**: 800x600px (4:3 ratio)
- **Success Stories**: 800x1000px (4:5 ratio)
- **Format**: WebP for best performance, JPG fallback

---

## 🛍️ Shopify Integration

### Convert to Shopify Theme

1. **Rename files**:
   - `index.html` → `sections/homepage.liquid`
   - `styles.css` → `assets/homepage.css`

2. **Link stylesheet** in `layout/theme.liquid`:
   ```liquid
   {{ 'homepage.css' | asset_url | stylesheet_tag }}
   ```

3. **Add Shopify Schema** (bottom of `homepage.liquid`):

```liquid
{% schema %}
{
  "name": "Homepage",
  "settings": [
    {
      "type": "text",
      "id": "hero_title",
      "label": "Hero Title",
      "default": "Fundraising has never been easier"
    },
    {
      "type": "textarea",
      "id": "hero_subtitle",
      "label": "Hero Subtitle"
    },
    {
      "type": "url",
      "id": "cta_link",
      "label": "CTA Button Link"
    },
    {
      "type": "image_picker",
      "id": "hero_image",
      "label": "Hero Image"
    }
  ],
  "presets": [
    {
      "name": "Homepage"
    }
  ]
}
{% endschema %}
```

4. **Replace static content with Liquid**:

```liquid
<!-- Before -->
<h1 class="hero-title">Fundraising has never been easier</h1>

<!-- After -->
<h1 class="hero-title">{{ section.settings.hero_title }}</h1>
```

### Product Integration

```liquid
{% for product in collections.frontpage.products limit: 6 %}
  <article class="product-card">
    <div class="product-image">
      <img src="{{ product.featured_image | img_url: '800x' }}" alt="{{ product.title }}">
    </div>
    <h3 class="product-title">{{ product.title }}</h3>
    <span class="product-price">{{ product.price | money }}</span>
    <a href="{{ product.url }}" class="btn btn-primary">Shop Now</a>
  </article>
{% endfor %}
```

---

## 🎨 Color Palette Reference

Based on Double Good's design:

| Color | Hex | Usage |
|-------|-----|-------|
| Orange | `#FF9500` | Primary brand, hero background |
| Blue | `#1a5f7a` | Stats section background |
| Cyan | `#8dd8d1` | Final CTA background |
| Yellow | `#FFCC00` | Step numbers, badges |
| Green | `#4CAF50` | Testimonial cards |
| Dark | `#1D1C1D` | Text, buttons |
| Gray | `#F5F5F5` | Section backgrounds |

---

## 📱 Mobile Responsive

The layout automatically adapts:

- **Desktop** (1024px+): Multi-column grids
- **Tablet** (768px-1023px): 2-column layouts, stacked sections
- **Mobile** (<768px): Single column, simplified navigation

Test responsiveness:
1. Open in browser
2. Press `F12` (DevTools)
3. Click device icon (mobile view)
4. Resize to test breakpoints

---

## ✨ Features

✅ **100% Responsive** - Mobile-first design
✅ **No Dependencies** - Pure HTML/CSS
✅ **SEO Optimized** - Semantic HTML5
✅ **Fast Loading** - Minimal CSS, no JS required
✅ **Accessible** - ARIA labels, keyboard navigation
✅ **Shopify Ready** - Easy Liquid conversion
✅ **Customizable** - CSS variables for theming

---

## 📋 File Structure

```
Ipop-Web-App/
├── index.html          # Complete homepage (411 lines)
├── styles.css          # All styles (847 lines)
└── README.md           # This file
```

---

## 🎯 Layout Decisions Explained

### Why This Structure?

**Hero Section**
- **Orange gradient**: Energetic, fundraising-friendly
- **Large text (60px)**: Immediate impact
- **Floating elements**: Visual interest without images

**How It Works**
- **3 steps**: Digestible, not overwhelming
- **Yellow badges**: Stand out, guide the eye
- **Border-top**: Clean separation

**Results Section**
- **Blue gradient**: Trust and professionalism
- **Orange border accent**: Branded callouts
- **50% stat**: Key value proposition

**Success Stories**
- **60/40 grid**: Asymmetric = interesting
- **Overlay gradients**: Text readability
- **Badge system**: Quick scan of impact

**Testimonials**
- **Horizontal scroll**: Modern UX pattern
- **Color variety**: Visual interest
- **Fixed width cards**: Consistent experience

---

## 🔧 Advanced Customization

### Add Gradient Variations

```css
.hero-section {
    background: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);
}
```

### Change Border Radius Style

```css
:root {
    --radius-lg: 0;  /* Square corners */
    --radius-lg: 2rem;  /* Rounded (current) */
    --radius-lg: 9999px;  /* Pill-shaped */
}
```

### Adjust Typography Scale

```css
:root {
    --text-6xl: 7.2rem;  /* Larger headlines */
    --text-base: 1.8rem;  /* Larger body text */
}
```

---

## 📊 Performance Tips

1. **Optimize Images**:
   ```bash
   # Use WebP format
   cwebp input.jpg -q 80 -o output.webp
   ```

2. **Minify CSS** (production):
   - Use [cssnano](https://cssnano.co/)
   - Or online tool: [CSS Minifier](https://cssminifier.com/)

3. **Add Lazy Loading**:
   ```html
   <img src="image.jpg" loading="lazy" alt="Description">
   ```

---

## 🆘 Troubleshooting

**Problem**: Sections overlapping
**Solution**: Check `z-index` values in CSS (line 129)

**Problem**: Colors not changing
**Solution**: Clear browser cache (Ctrl+Shift+R)

**Problem**: Mobile menu not working
**Solution**: Add JavaScript for menu toggle (not included)

**Problem**: Font not loading
**Solution**: Check Google Fonts link in `<head>`

---

## 🎓 Learning Resources

- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Shopify Liquid Docs](https://shopify.dev/api/liquid)
- [WebAIM Accessibility](https://webaim.org/)

---

## 📄 License

This is a template inspired by public website designs. Modify and use for your projects!

---

## 🙋 Questions?

This layout provides the exact structure and flow of Double Good's homepage while being:
- ✅ **100% original code**
- ✅ **Fully customizable**
- ✅ **No branding conflicts**
- ✅ **Shopify compatible**

**Next Steps**:
1. Add your logo
2. Change colors to match your brand
3. Replace placeholder text
4. Add real images
5. Deploy or integrate with Shopify

Happy fundraising! 🎉
