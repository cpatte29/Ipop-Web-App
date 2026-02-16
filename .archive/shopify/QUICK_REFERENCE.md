# iPOP Shopify Quick Reference

Fast reference guide for common tasks and code snippets.

---

## 🔗 **Important URLs**

| Page | URL | Template |
|------|-----|----------|
| Homepage | `/` | `index.json` |
| Start Fundraiser | `/pages/start-fundraiser` | `page.start-fundraiser` |
| View Fundraiser | `/pages/fundraiser?id=slug` | `page.fundraiser` |
| Shop | `/collections/all` | `collection.ipop-fundraiser` |
| Shop with Attribution | `/collections/all?fundraiser=slug` | `collection.ipop-fundraiser` |

---

## 📦 **Files Overview**

```
shopify/
├── sections/                      # Homepage sections (editable in customizer)
│   ├── hero-banner.liquid
│   ├── how-it-works.liquid
│   ├── value-props.liquid
│   ├── testimonials.liquid
│   ├── partnerships-strip.liquid
│   └── final-cta.liquid
│
├── templates/                     # Custom page templates
│   ├── index.json                 # Homepage layout
│   ├── page.start-fundraiser.liquid   # Fundraiser signup form
│   ├── page.fundraiser.liquid    # Individual fundraiser page
│   └── collection.ipop-fundraiser.liquid  # Products with attribution
│
├── snippets/                      # Reusable components
│   └── product-card-ipop.liquid   # Product card with add-to-cart
│
└── assets/                        # CSS and JavaScript
    ├── custom-home.css.liquid     # All custom styles
    └── ipop-cart.js.liquid        # Cart integration + attribution
```

---

## 🎨 **Customizing Colors**

Edit `assets/custom-home.css.liquid`:

```css
:root {
  --ipop-color-red: #E63946;      /* Primary brand color */
  --ipop-color-yellow: #FFED00;   /* Accent color */
  --ipop-color-dark: #2D2D2D;     /* Text color */
  --ipop-color-white: #FFFFFF;    /* White */
  --ipop-color-gray: #F5F5F5;     /* Light background */
}
```

---

## 🛒 **Using the Cart API**

### **Add to Cart**

```javascript
window.iPOPCart.addToCart(variantId, quantity)
  .then(item => console.log('Added:', item))
  .catch(error => console.error('Error:', error));
```

### **Get Cart**

```javascript
window.iPOPCart.getCart()
  .then(cart => console.log('Cart:', cart));
```

### **Update Quantity**

```javascript
window.iPOPCart.updateQuantity(lineItemKey, newQuantity)
  .then(cart => console.log('Updated:', cart));
```

### **Clear Cart**

```javascript
window.iPOPCart.clearCart()
  .then(cart => console.log('Cleared:', cart));
```

### **Get Current Fundraiser**

```javascript
const fundraiserSlug = window.iPOPCart.getFundraiserAttribution();
console.log('Current fundraiser:', fundraiserSlug);
```

---

## 📝 **Liquid Snippets**

### **Include Product Card**

```liquid
{% render 'product-card-ipop', product: product %}
```

### **Get Fundraiser from URL**

```liquid
{% if request.get.fundraiser %}
  {{ request.get.fundraiser }}
{% endif %}
```

### **Loop Through Products**

```liquid
{% for product in collection.products %}
  <div class="product-item">
    {% render 'product-card-ipop', product: product %}
  </div>
{% endfor %}
```

### **Check if Product is on Sale**

```liquid
{% if product.compare_at_price > product.price %}
  <span class="sale-badge">SALE</span>
{% endif %}
```

---

## 🎯 **Testing Checklist**

### **Quick Test (5 minutes)**

```
✅ Visit /pages/start-fundraiser
✅ Fill form and submit
✅ Click "View Your Page"
✅ Fundraiser page loads with correct info
✅ Click "Shop Gourmet Popcorn"
✅ Green banner appears
✅ Add product to cart
✅ Cart count updates
✅ View cart
✅ Check out
✅ Verify order has fundraiser note
```

---

## 🐛 **Common Console Commands**

### **View All Fundraisers**

```javascript
JSON.parse(localStorage.getItem('ipop_fundraisers') || '[]')
```

### **View Current Fundraiser**

```javascript
sessionStorage.getItem('ipop_current_fundraiser')
```

### **Clear All Fundraisers**

```javascript
localStorage.removeItem('ipop_fundraisers')
```

### **Clear Current Session**

```javascript
sessionStorage.clear()
```

### **Get Shopify Cart**

```javascript
fetch('/cart.js')
  .then(r => r.json())
  .then(cart => console.log(cart))
```

### **View Cart Note**

```javascript
fetch('/cart.js')
  .then(r => r.json())
  .then(cart => console.log('Note:', cart.note))
```

---

## 🔧 **Debugging Tips**

### **Fundraiser Not Loading?**

1. Open DevTools Console
2. Run: `localStorage.getItem('ipop_fundraisers')`
3. Check if fundraiser exists with correct slug
4. Verify URL parameter matches slug

### **Attribution Not Working?**

1. Check console for errors
2. Verify `ipop-cart.js` is loaded
3. Check: `sessionStorage.getItem('ipop_current_fundraiser')`
4. Clear browser cache

### **Cart Not Updating?**

1. Open Network tab in DevTools
2. Watch for `/cart/add.js` request
3. Check response for errors
4. Verify variant ID is correct

---

## 📱 **Mobile Testing**

### **Responsive Breakpoints**

```css
/* Desktop: > 768px */
/* Tablet:  ≤ 768px */
/* Mobile:  ≤ 480px */
```

### **Test Devices**

- iPhone (375px width)
- iPad (768px width)
- Desktop (1200px+ width)

### **Quick Mobile Test**

1. Open DevTools
2. Click device toggle (Ctrl+Shift+M / Cmd+Shift+M)
3. Select iPhone or iPad
4. Test entire flow

---

## 🎨 **Color Variables**

| Variable | Default | Usage |
|----------|---------|-------|
| `--ipop-color-red` | #E63946 | Primary CTA, headings |
| `--ipop-color-yellow` | #FFED00 | Accent, highlights |
| `--ipop-color-dark` | #2D2D2D | Body text |
| `--ipop-color-white` | #FFFFFF | Backgrounds |
| `--ipop-color-gray` | #F5F5F5 | Cards, sections |

---

## 📊 **Finding Fundraiser Orders**

### **Method 1: Search Orders**

1. Go to **Orders** in Shopify Admin
2. Search for: `"Supporting:"`
3. All fundraiser orders appear

### **Method 2: Filter by Note**

1. Go to **Orders**
2. Click **More filters**
3. Add filter: **Note contains** → `"Supporting"`

### **Method 3: Export and Analyze**

1. Go to **Orders**
2. Click **Export**
3. Open CSV
4. Filter by **Note** column
5. Use Excel/Sheets to calculate totals

---

## 🚀 **Common Modifications**

### **Change Button Color**

Edit `custom-home.css.liquid`:

```css
.ipop-btn-primary {
  background: #YOUR_COLOR;
}
```

### **Change Hero Gradient**

Edit `hero-banner.liquid`:

```liquid
background: linear-gradient(135deg, #COLOR1 0%, #COLOR2 100%);
```

### **Add More Stats to Hero**

In theme customizer:
1. Click "Hero Banner"
2. Click "Add block"
3. Select "Stat"
4. Fill in value and label

---

## 📞 **Quick Links**

- [Shopify Admin](https://admin.shopify.com)
- [Theme Editor](https://admin.shopify.com/store/YOUR_STORE/themes)
- [Liquid Docs](https://shopify.dev/api/liquid)
- [Ajax Cart API](https://shopify.dev/api/ajax/reference/cart)

---

## 💡 **Pro Tips**

1. **Always test in incognito** - Avoids cache issues
2. **Use console.log liberally** - Debug JavaScript easily
3. **Keep localStorage clean** - Clear old test data
4. **Export orders regularly** - Backup fundraiser data
5. **Document custom changes** - Make future updates easier

---

## 🎉 **Launch Day Checklist**

```
□ Test complete flow (at least 3 times)
□ Clear all test data
□ Verify mobile works
□ Check email notifications
□ Train staff on order lookup
□ Create support documentation
□ Set up monitoring/alerts
□ Announce launch to fundraisers
□ Have backup plan ready
□ Monitor first 24 hours closely
```

---

## 📧 **Support Resources**

**Shopify Help:**
- [help.shopify.com](https://help.shopify.com)
- Chat support (bottom right corner)

**Developer Docs:**
- [shopify.dev](https://shopify.dev)
- [Liquid reference](https://shopify.dev/api/liquid)

**Community:**
- [Shopify Community](https://community.shopify.com)
- [Shopify Partners Slack](https://shopify.pxf.io/partners-slack)

---

**Last Updated**: 2025

**Version**: 1.0 (Shopify Integration)
