# iPOP Shopify Dawn Theme - Custom Homepage Sections

This directory contains all the files needed to convert your iPOP fundraising homepage into a Shopify Dawn theme with customizable sections.

## 📁 File Structure

```
shopify/
├── sections/
│   ├── hero-banner.liquid          # Hero section with stats
│   ├── how-it-works.liquid         # 3-step process section
│   ├── value-props.liquid          # Value propositions grid (3-6 cards)
│   ├── testimonials.liquid         # Customer testimonials
│   ├── partnerships-strip.liquid   # Partner logos strip
│   └── final-cta.liquid           # Final call-to-action section
├── assets/
│   └── custom-home.css.liquid     # All custom styles for sections
└── templates/
    └── index.json                  # Homepage template configuration
```

## 🚀 Installation Instructions

### Step 1: Upload Section Files

1. Log in to your Shopify admin
2. Go to **Online Store → Themes**
3. Click **Actions → Edit code** on your Dawn theme
4. In the left sidebar, find the **Sections** folder
5. Click **Add a new section** for each file:
   - Upload `hero-banner.liquid`
   - Upload `how-it-works.liquid`
   - Upload `value-props.liquid`
   - Upload `testimonials.liquid`
   - Upload `partnerships-strip.liquid`
   - Upload `final-cta.liquid`

### Step 2: Upload CSS File

1. In the left sidebar, find the **Assets** folder
2. Click **Add a new asset**
3. Upload `custom-home.css.liquid`

### Step 3: Replace Homepage Template

1. In the left sidebar, find the **Templates** folder
2. Click on `index.json`
3. **Backup the existing content** (copy and paste to a safe place)
4. Replace the entire content with the content from your `index.json` file
5. Click **Save**

### Step 4: Customize Your Homepage

1. Go to **Online Store → Themes**
2. Click **Customize** on your theme
3. You should now see all 6 sections on your homepage:
   - Hero Banner
   - How It Works
   - Value Props
   - Testimonials
   - Partnerships Strip
   - Final CTA

4. Click on each section to customize:
   - Edit text, headings, descriptions
   - Upload images
   - Change button URLs and text
   - Add/remove blocks (stats, steps, testimonials, etc.)

## ✨ Features

### All Sections Include:

- ✅ **Fully editable via Shopify theme customizer** - no code required
- ✅ **Mobile responsive** - looks great on all devices
- ✅ **Image optimization** - proper width/height attributes
- ✅ **No external dependencies** - pure Liquid and CSS
- ✅ **Repeatable blocks** - add unlimited stats, steps, testimonials, etc.

### Individual Section Features:

#### 1. Hero Banner
- Editable subtitle, title, description
- Add unlimited stat blocks (50%, $0, 5 min)
- Custom button with URL
- Hero image upload
- Animated floating elements

#### 2. How It Works
- 3-step process (expandable)
- Each step has:
  - Number badge
  - Icon (emoji or image upload)
  - Title and description
- Optional CTA button at bottom

#### 3. Value Props
- Grid layout (3-6 cards recommended)
- Each card has:
  - Icon (emoji or image)
  - Title
  - Description
- Hover effects

#### 4. Testimonials
- Grid of customer testimonials
- Each testimonial includes:
  - 5-star rating (optional)
  - Quote text
  - Author photo (optional)
  - Author name, title, organization

#### 5. Partnerships Strip
- Horizontal logo display
- Each partner has:
  - Logo image upload
  - Partner name (for alt text)
  - Optional URL
- Grayscale effect with color on hover
- Optional description and CTA

#### 6. Final CTA
- Two-column layout (content + visual)
- Primary and secondary buttons
- Feature bullets with checkmarks
- Hero image or placeholder

## 🎨 Customization Tips

### Colors

The CSS uses CSS variables for easy color customization. Edit in `custom-home.css.liquid`:

```css
:root {
  --ipop-color-red: #E63946;      /* Primary brand color */
  --ipop-color-yellow: #FFED00;   /* Accent color */
  --ipop-color-dark: #2D2D2D;     /* Text color */
  --ipop-color-white: #FFFFFF;
  --ipop-color-gray: #F5F5F5;     /* Background */
}
```

### Spacing

Adjust section padding in CSS:

```css
.ipop-hero-banner {
  padding: 8rem 0;  /* Adjust vertical padding */
}
```

### Fonts

The sections inherit your theme's font settings. To override:

```css
.ipop-hero-title {
  font-family: 'Your Custom Font', sans-serif;
}
```

## 📱 Mobile Responsiveness

All sections automatically adjust for mobile:
- **Desktop**: Multi-column grids
- **Tablet (≤768px)**: Fewer columns or stacked
- **Mobile (≤480px)**: Single column, larger touch targets

## 🔧 Advanced Customization

### Adding New Blocks

To add a new block type to any section, edit the section's `{% schema %}`:

```json
{
  "type": "new_block_type",
  "name": "New Block",
  "settings": [
    {
      "type": "text",
      "id": "custom_field",
      "label": "Custom Field"
    }
  ]
}
```

### Reordering Sections

In the Shopify theme customizer:
1. Click and drag sections to reorder
2. Click the eye icon to hide/show sections
3. Click the trash icon to remove sections

## 🆘 Troubleshooting

### Styles not loading?
- Make sure `custom-home.css.liquid` is in the **Assets** folder
- Check that the hero-banner section includes the stylesheet tag
- Clear your browser cache

### Section not showing in customizer?
- Verify the section file is in the **Sections** folder
- Check for syntax errors in the Liquid file
- Make sure the `{% schema %}` block is properly formatted

### Images not displaying?
- Use the image picker in the theme customizer
- Ensure images have proper alt text
- Check image file size (optimize large images)

## 📞 Support

For Shopify-specific questions:
- [Shopify Theme Development Docs](https://shopify.dev/themes)
- [Liquid Reference](https://shopify.dev/api/liquid)

## 📄 License

These files are customized for iPOP Gourmet Popcorn and based on the Shopify Dawn theme structure.
