# iPOP Shopify Integration Guide

Complete guide to integrating your fundraiser flow with Shopify for seamless product sales and checkout.

---

## 📋 **Table of Contents**

1. [Prerequisites](#prerequisites)
2. [Quick Start](#quick-start)
3. [File Upload Instructions](#file-upload-instructions)
4. [Page Setup](#page-setup)
5. [Checkout Customization](#checkout-customization)
6. [Testing the Flow](#testing-the-flow)
7. [Fundraiser Attribution Flow](#fundraiser-attribution-flow)
8. [Troubleshooting](#troubleshooting)

---

## 🔧 **Prerequisites**

- Shopify store (any plan)
- Dawn theme (or compatible theme)
- GitHub account connected to Shopify
- Basic familiarity with Shopify admin

---

## ⚡ **Quick Start**

### **5-Minute Setup Checklist**

- [ ] Upload all section files
- [ ] Upload page templates
- [ ] Upload assets (CSS and JavaScript)
- [ ] Upload snippets
- [ ] Create required pages in Shopify
- [ ] Assign templates to pages
- [ ] Add cart JavaScript to theme.liquid
- [ ] Test fundraiser flow

---

## 📤 **File Upload Instructions**

### **Step 1: Upload Sections**

1. Go to **Shopify Admin → Online Store → Themes**
2. Click **Actions → Edit code**
3. In the left sidebar, find **Sections** folder
4. Click **Add a new section** and upload these files:
   - `hero-banner.liquid`
   - `how-it-works.liquid`
   - `value-props.liquid`
   - `testimonials.liquid`
   - `partnerships-strip.liquid`
   - `final-cta.liquid`

### **Step 2: Upload Templates**

1. In the left sidebar, find **Templates** folder
2. Click **Add a new template** for each file:
   - `page.start-fundraiser.liquid`
   - `page.fundraiser.liquid`
   - `collection.ipop-fundraiser.liquid`

### **Step 3: Upload Assets**

1. In the left sidebar, find **Assets** folder
2. Click **Add a new asset** and upload:
   - `custom-home.css.liquid`
   - `ipop-cart.js.liquid`

### **Step 4: Upload Snippets**

1. In the left sidebar, find **Snippets** folder
2. Click **Add a new snippet**:
   - `product-card-ipop.liquid`

### **Step 5: Add Cart JavaScript to Theme**

1. In **Layout** folder, open `theme.liquid`
2. Find the closing `</body>` tag (near the end of the file)
3. Add this line BEFORE `</body>`:

```liquid
{{ 'ipop-cart.js' | asset_url | script_tag }}
```

4. Save the file

---

## 📄 **Page Setup**

### **Create Required Pages**

1. Go to **Online Store → Pages**
2. Click **Add page** for each of these:

#### **Page 1: Start a Fundraiser**
- **Title**: `Start a Fundraiser`
- **Content**: Leave blank or add a subtitle
- **Template**: `page.start-fundraiser`
- **URL**: `/pages/start-fundraiser`

#### **Page 2: Fundraiser**
- **Title**: `Fundraiser`
- **Content**: Leave blank
- **Template**: `page.fundraiser`
- **URL**: `/pages/fundraiser`
- ⚠️ **Note**: This page will load fundraiser data via `?id=` parameter

### **Assign Template to Collection**

1. Go to **Products → Collections**
2. Click your main collection (or create one called "All Products")
3. In the right sidebar, find **Theme template**
4. Select `collection.ipop-fundraiser`
5. Save

---

## 🛒 **Checkout Customization**

Fundraiser attribution needs to flow through to checkout so you can track which sales belong to which fundraiser.

### **Option 1: Cart Note (Works on All Plans)**

✅ **Already Implemented** - The `ipop-cart.js` file automatically adds a cart note with fundraiser info.

**What it does:**
- Adds note: `"Supporting: Lincoln Middle School (lincoln-ms)"`
- Visible in Orders → Order details → Additional details

**To view fundraiser attribution:**
1. Go to **Orders** in Shopify Admin
2. Click any order
3. Scroll to **Additional details**
4. You'll see the fundraiser information

### **Option 2: Line Item Properties (Works on All Plans)**

✅ **Already Implemented** - Each cart item gets custom properties.

**What it does:**
- Adds hidden properties: `_fundraiser` and `_fundraiser_name`
- Visible in order line items

**To view:**
1. Go to **Orders → [Order]**
2. Look at line items
3. Properties show which fundraiser the item supports

### **Option 3: Custom Checkout Fields (Shopify Plus Only)**

If you have **Shopify Plus**, you can add custom checkout fields:

1. Go to **Settings → Checkout**
2. Scroll to **Order processing**
3. Add custom JavaScript:

```javascript
<script>
  // Pass fundraiser attribution to checkout
  (function() {
    var fundraiser = sessionStorage.getItem('ipop_current_fundraiser');
    if (fundraiser && Shopify.Checkout) {
      Shopify.Checkout.note = Shopify.Checkout.note || '';
      if (Shopify.Checkout.note.indexOf('Supporting:') === -1) {
        var fundraisers = JSON.parse(localStorage.getItem('ipop_fundraisers') || '[]');
        var fundraiserData = fundraisers.find(function(f) { return f.slug === fundraiser; });
        if (fundraiserData) {
          Shopify.Checkout.note += '\nSupporting: ' + fundraiserData.orgName;
        }
      }
    }
  })();
</script>
```

### **Option 4: Order Tags (Requires App or Custom Development)**

For advanced tracking, you can use Shopify Flow or a custom app to:
- Automatically tag orders with fundraiser slug
- Generate fundraiser reports
- Send automated emails to fundraiser coordinators

---

## 🧪 **Testing the Flow**

### **Complete End-to-End Test**

#### **Test 1: Create a Fundraiser**

1. Visit `/pages/start-fundraiser`
2. Fill out the form:
   - Organization: "Test High School"
   - Type: "School"
   - Contact: "John Doe"
   - Email: your-email@test.com
   - Phone: (555) 123-4567
   - Goal: $1,000 - $2,500
   - End date: (2 weeks from today)
   - Upload an image (optional)
3. Click **Start My Fundraiser**
4. ✅ Verify: Success message appears
5. ✅ Verify: Form and instructions are hidden
6. ✅ Verify: Unique fundraiser URL is generated

#### **Test 2: View Fundraiser Page**

1. Click **View Your Page** button
2. ✅ Verify: Fundraiser page loads
3. ✅ Verify: Organization name displays
4. ✅ Verify: Progress bar shows
5. ✅ Verify: Countdown shows days remaining
6. ✅ Verify: "Shop Gourmet Popcorn" button exists

#### **Test 3: Shop with Fundraiser Attribution**

1. Click **Shop Gourmet Popcorn**
2. ✅ Verify: Green fundraiser banner appears at top
3. ✅ Verify: Banner says "Supporting [Your Org Name]"
4. ✅ Verify: Product grid displays
5. Click **Add to Cart** on any product
6. ✅ Verify: "Added to cart" notification appears
7. ✅ Verify: Cart count updates

#### **Test 4: Checkout with Attribution**

1. Click cart icon in header
2. ✅ Verify: Product is in cart
3. Click **Checkout**
4. Complete checkout (or use Shopify test mode)
5. Go to **Orders** in Shopify Admin
6. ✅ Verify: Order has note with fundraiser info

---

## 🔄 **Fundraiser Attribution Flow**

### **How Attribution Works**

```
1. User visits: /pages/fundraiser?id=lincoln-ms
   ↓
2. JavaScript stores 'lincoln-ms' in sessionStorage
   ↓
3. User clicks "Shop Gourmet Popcorn"
   ↓
4. URL becomes: /collections/all?fundraiser=lincoln-ms
   ↓
5. Green banner shows: "Supporting Lincoln Middle School"
   ↓
6. User adds product to cart
   ↓
7. Cart receives properties: _fundraiser='lincoln-ms'
   ↓
8. Cart note added: "Supporting: Lincoln Middle School"
   ↓
9. User checks out
   ↓
10. Order includes fundraiser attribution
```

### **Data Storage Locations**

| Data | Storage | Duration | Purpose |
|------|---------|----------|---------|
| Fundraiser details | localStorage | Permanent (until cleared) | Store all fundraiser info |
| Current fundraiser | sessionStorage | Current session | Track active fundraiser |
| Cart note | Shopify cart | Until checkout | Pass to order |
| Line item properties | Shopify cart | Persists to order | Track per-item attribution |

---

## 🐛 **Troubleshooting**

### **Problem: Fundraiser page shows "Not Found"**

**Solution:**
1. Check localStorage has fundraiser data:
   - Open DevTools → Console
   - Type: `localStorage.getItem('ipop_fundraisers')`
   - Should show array of fundraisers
2. Verify URL has correct `?id=` parameter
3. Check fundraiser slug matches exactly

### **Problem: Green banner doesn't appear on shop page**

**Solution:**
1. Check URL has `?fundraiser=` parameter
2. Verify sessionStorage has fundraiser:
   - DevTools → Console
   - Type: `sessionStorage.getItem('ipop_current_fundraiser')`
3. Clear browser cache and try again

### **Problem: Cart doesn't update**

**Solution:**
1. Verify `ipop-cart.js` is loaded:
   - DevTools → Network tab
   - Look for `ipop-cart.js`
2. Check theme.liquid has the script tag
3. Check browser console for JavaScript errors

### **Problem: Fundraiser attribution not in orders**

**Solution:**
1. Check Orders → Additional details for cart note
2. Verify line item properties are being added
3. Test with a new cart (clear existing cart first)
4. Check sessionStorage has fundraiser slug during checkout

### **Problem: Mobile display issues**

**Solution:**
1. Clear mobile browser cache
2. Test in incognito/private mode
3. Check responsive CSS is loading
4. Verify viewport meta tag exists in theme.liquid

---

## 📊 **Tracking Fundraiser Sales**

### **Manual Method (All Plans)**

1. Go to **Orders** in Shopify Admin
2. Use search/filter to find orders with fundraiser notes
3. Export to CSV for analysis
4. Calculate totals per fundraiser manually

### **Automated Method (Shopify Plus or Custom App)**

Options:
- **Shopify Flow**: Create automation to tag orders
- **Custom Reports**: Build Shopify report for fundraiser sales
- **Third-party App**: Use analytics app that reads order properties
- **Custom Dashboard**: Build admin dashboard to view fundraiser stats

---

## 🚀 **Going Live Checklist**

Before launching your fundraiser integration:

- [ ] Test complete flow on test store
- [ ] Verify all pages load correctly
- [ ] Confirm fundraiser attribution works
- [ ] Test mobile responsiveness
- [ ] Check cart functionality
- [ ] Verify checkout attribution
- [ ] Test email notifications
- [ ] Set up order tracking process
- [ ] Train staff on viewing fundraiser orders
- [ ] Create fundraiser coordinator guide
- [ ] Set up backup/export process for fundraiser data

---

## 💡 **Future Enhancements**

Consider these upgrades after launch:

1. **Database Backend**: Replace localStorage with real database
2. **Admin Dashboard**: Build Shopify app for fundraiser management
3. **Automated Reporting**: Email monthly reports to fundraiser coordinators
4. **Public Leaderboard**: Show top-performing fundraisers
5. **Fundraiser Login Portal**: Let coordinators view their stats
6. **Automated Payouts**: Calculate and track fundraiser profits

---

## 📞 **Support**

For Shopify-specific questions:
- [Shopify Help Center](https://help.shopify.com)
- [Shopify Community](https://community.shopify.com)
- [Liquid Documentation](https://shopify.dev/api/liquid)

For Ajax Cart API:
- [Ajax Cart API Docs](https://shopify.dev/api/ajax/reference/cart)

---

## 🎉 **You're Ready!**

Your Shopify store is now integrated with the fundraiser flow! Test thoroughly and launch when ready.

**Remember**: This is a demo flow using localStorage. For production, migrate to a real database for cross-device support.
