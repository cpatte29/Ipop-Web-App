# Shopify GitHub Integration Setup Guide

Your repository is now structured as a valid Shopify theme and ready to connect!

## ✅ Theme Structure (Valid for Shopify)

```
Ipop-Web-App/                    ← Your GitHub repository root
├── layout/
│   └── theme.liquid             ✅ Main entry point
├── config/
│   ├── settings_schema.json     ✅ Theme settings
│   └── settings_data.json       ✅ Default data
├── locales/
│   └── en.default.json          ✅ Translations
├── sections/                    ✅ All sections
│   ├── header.liquid
│   ├── footer.liquid
│   ├── hero-banner.liquid
│   ├── how-it-works.liquid
│   ├── value-props.liquid
│   ├── testimonials.liquid
│   ├── partnerships-strip.liquid
│   └── final-cta.liquid
├── templates/                   ✅ Page templates
│   ├── index.json
│   ├── page.start-fundraiser.liquid
│   ├── page.fundraiser.liquid
│   └── collection.ipop-fundraiser.liquid
├── assets/                      ✅ CSS and JS
│   ├── base.css
│   ├── global.js
│   ├── custom-home.css.liquid
│   └── ipop-cart.js.liquid
├── snippets/                    ✅ Components
│   ├── meta-tags.liquid
│   └── product-card-ipop.liquid
└── shopify/                     📁 Documentation only
    ├── SHOPIFY_INTEGRATION_GUIDE.md
    └── QUICK_REFERENCE.md
```

---

## 🚀 Connect to Shopify (5 minutes)

### **Step 1: Ensure Branch is Pushed to GitHub**

✅ **Already done!** Your `claude/create-new-session-MzBWR` branch is pushed.

### **Step 2: Connect GitHub to Shopify**

1. **Log in** to your Shopify admin
2. Go to **Online Store → Themes**
3. Click **Add theme** (top right)
4. Select **Connect from GitHub**

### **Step 3: Authorize Shopify**

If this is your first time:
1. Click **Connect to GitHub**
2. Log in to GitHub if needed
3. Authorize **Shopify** to access your repositories
4. Grant access to the **Ipop-Web-App** repository

### **Step 4: Select Your Repository and Branch**

1. **Repository**: Select `cpatte29/Ipop-Web-App`
2. **Branch**: Select `claude/create-new-session-MzBWR`
3. Click **Connect**

Shopify will now:
- ✅ Validate the theme structure
- ✅ Install the theme
- ✅ Sync with your GitHub branch

### **Step 5: Verify Installation**

After a few moments, you should see:
- ✅ Theme appears in your theme library
- ✅ Theme name: "iPOP Fundraising Theme"
- ✅ Status: "Connected to GitHub"

---

## 🎨 Customize Your Theme

### **Option 1: Customize via Shopify Admin**

1. In **Themes**, find your new theme
2. Click **Customize**
3. Edit sections directly in the theme editor:
   - Hero Banner
   - How It Works
   - Value Props
   - Testimonials
   - Partnerships
   - Final CTA
4. Click **Save**

### **Option 2: Edit Code in GitHub**

1. Make changes to files in your GitHub repository
2. Commit and push to your branch
3. Shopify automatically syncs changes!

---

## 📄 Create Required Pages

After connecting the theme, create these pages:

### **Page 1: Start a Fundraiser**

1. Go to **Online Store → Pages**
2. Click **Add page**
3. **Title**: `Start a Fundraiser`
4. **Content**: (leave blank or add intro text)
5. **Template**: Select `page.start-fundraiser`
6. Click **Save**
7. Note the URL: `/pages/start-fundraiser`

### **Page 2: Fundraiser**

1. Click **Add page**
2. **Title**: `Fundraiser`
3. **Content**: (leave blank)
4. **Template**: Select `page.fundraiser`
5. Click **Save**
6. Note the URL: `/pages/fundraiser`

### **Assign Collection Template**

1. Go to **Products → Collections**
2. Click your main collection (or create "All Products")
3. In right sidebar: **Theme template**
4. Select `collection.ipop-fundraiser`
5. Click **Save**

---

## 🧪 Test Your Theme

### **Option 1: Preview (Recommended)**

1. In **Themes**, find your theme
2. Click **Preview**
3. Test the complete flow:
   - Homepage with all sections
   - Start Fundraiser page
   - Create a test fundraiser
   - View fundraiser page
   - Shop with attribution

### **Option 2: Publish (When Ready)**

1. Click **Actions → Publish**
2. Confirm to make it your live theme

---

## 🔄 Syncing Changes

### **When You Edit Code in GitHub:**

1. Edit files in your repository
2. Commit changes
3. Push to your branch
4. Shopify syncs automatically within 1-2 minutes

### **When You Edit in Shopify Customizer:**

1. Changes saved in Shopify
2. Automatically committed to GitHub
3. Check your repository for the commit

---

## 🆘 Troubleshooting

### **Error: "Branch isn't a valid theme"**

✅ **Fixed!** This was caused by files being in the `shopify/` subdirectory.
Now all required files are in the root directory.

### **Error: "Missing layout/theme.liquid"**

✅ **Fixed!** Created `layout/theme.liquid` as the main entry point.

### **Theme doesn't appear after connecting**

1. Wait 1-2 minutes for sync to complete
2. Refresh the Themes page
3. Check GitHub branch is correct
4. Verify repository access permissions

### **Changes not syncing**

1. Check you're on the correct branch
2. Verify GitHub connection status in Shopify
3. Try disconnecting and reconnecting
4. Check for merge conflicts in GitHub

### **Pages not found**

1. Ensure pages are created in **Online Store → Pages**
2. Verify correct template is assigned
3. Check page visibility settings (not hidden)

---

## 📊 GitHub Workflow

### **Recommended Branch Strategy:**

```
main (production)
  └── claude/create-new-session-MzBWR (development/testing)
```

**When ready for production:**

1. Test thoroughly on development branch
2. Create a Pull Request to `main`
3. Review and merge
4. Create a new Shopify theme connected to `main` branch
5. Publish as live theme

---

## 🎉 You're All Set!

Your repository is now a valid Shopify theme with:

- ✅ All required files in correct locations
- ✅ Main entry point: `layout/theme.liquid`
- ✅ Complete homepage sections
- ✅ Fundraiser flow pages
- ✅ Cart integration with attribution
- ✅ Mobile responsive design
- ✅ GitHub sync ready

**Next Steps:**

1. Connect repository to Shopify (5 minutes)
2. Create required pages (3 minutes)
3. Customize in theme editor (10 minutes)
4. Test complete flow (10 minutes)
5. Publish when ready! 🚀

---

## 📞 Need Help?

**Shopify Documentation:**
- [Connect GitHub to Shopify](https://help.shopify.com/en/manual/online-store/themes/adding-themes#add-a-theme-with-github)
- [Theme Development](https://shopify.dev/themes)

**Your Documentation:**
- See `shopify/SHOPIFY_INTEGRATION_GUIDE.md` for detailed setup
- See `shopify/QUICK_REFERENCE.md` for code examples

**Shopify Support:**
- [help.shopify.com](https://help.shopify.com)
- 24/7 Chat support in Shopify Admin

---

**Last Updated**: 2025-02-16
**Repository**: cpatte29/Ipop-Web-App
**Branch**: claude/create-new-session-MzBWR
