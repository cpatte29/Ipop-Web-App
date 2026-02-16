# Connect to Shopify - Updated Instructions

Your repository has been cleaned and is now ready for Shopify!

## ✅ What Was Fixed

**Problem:** Repository had too many files (static HTML, documentation, etc.) causing Shopify timeout errors.

**Solution:** Removed all non-theme files. Repository now contains ONLY:

```
Ipop-Web-App/  (root)
├── layout/
│   └── theme.liquid              ✅ Main entry point
├── templates/
│   ├── index.json
│   ├── page.start-fundraiser.liquid
│   ├── page.fundraiser.liquid
│   └── collection.ipop-fundraiser.liquid
├── sections/
│   ├── header.liquid
│   ├── footer.liquid
│   └── (6 homepage sections)
├── assets/
│   ├── base.css
│   ├── global.js
│   ├── custom-home.css.liquid
│   └── ipop-cart.js.liquid
├── config/
│   ├── settings_schema.json
│   └── settings_data.json
├── snippets/
│   ├── meta-tags.liquid
│   └── product-card-ipop.liquid
└── locales/
    └── en.default.json
```

**Old files?** All archived in `.archive/` folder (not tracked by git, won't interfere).

---

## 🚀 Connect to Shopify (3 Steps)

### Step 1: Go to Shopify Admin

1. Log in to your Shopify store
2. Navigate to: **Online Store → Themes**

### Step 2: Connect from GitHub

1. Click **"Add theme"** (top right)
2. Select **"Connect from GitHub"**
3. Choose:
   - **Repository:** `cpatte29/Ipop-Web-App`
   - **Branch:** `claude/create-new-session-MzBWR`
4. Click **"Connect"**

### Step 3: Wait for Installation

- Shopify will validate and install (30-60 seconds)
- You should see: "Theme installed successfully"

---

## 📋 After Connection: Create Pages

Once connected, create these 2 pages:

### Page 1: Start a Fundraiser
1. Go to **Online Store → Pages**
2. Click **"Add page"**
3. **Title:** `Start a Fundraiser`
4. **Template:** Select `page.start-fundraiser`
5. Click **Save**

### Page 2: Fundraiser
1. Click **"Add page"**
2. **Title:** `Fundraiser`
3. **Template:** Select `page.fundraiser`
4. Click **Save**

---

## 🎨 Customize Your Theme

After installation:

1. Click **"Customize"** on your theme
2. Edit these sections:
   - Hero Banner
   - How It Works
   - Value Props
   - Testimonials
   - Partnerships
   - Final CTA
3. Upload images and update text
4. Click **Save** when done

---

## ✅ Test Your Theme

1. Click **"Preview"** to test before publishing
2. Visit `/pages/start-fundraiser` to test signup
3. Create a test fundraiser
4. View the fundraiser page
5. Click "Shop Gourmet Popcorn"
6. Add items to cart
7. Verify fundraiser attribution works

---

## 🎉 Publish When Ready

When everything looks good:

1. Go back to **Themes**
2. Find your theme
3. Click **"Publish"**

Your fundraising site is now live on Shopify!

---

## 🆘 Still Having Issues?

If you still see errors:

1. **Clear your browser cache**
2. **Disconnect and reconnect** the GitHub integration
3. **Check repository access:** Make sure Shopify has permission
4. **Verify branch:** Confirm you selected `claude/create-new-session-MzBWR`

---

## 📞 Need Help?

- [Shopify Support](https://help.shopify.com)
- [GitHub Integration Docs](https://help.shopify.com/en/manual/online-store/themes/adding-themes#add-a-theme-with-github)

---

**Branch:** `claude/create-new-session-MzBWR`
**Status:** ✅ Clean Shopify theme - Ready to connect!
