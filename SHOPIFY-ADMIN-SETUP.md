# Shopify Admin Setup - Required Pages

## ⚠️ CRITICAL: You must create these pages in Shopify Admin for the site to work

Your theme templates are ready, but Shopify needs actual pages created in the admin panel to use them.

---

## 📋 Required Pages to Create

### 1. Start a Fundraiser Page

**Status:** 🔴 REQUIRED - Site navigation links to this page

**Steps:**
1. In Shopify Admin, go to: **Online Store → Pages → Add page**
2. Fill in:
   - **Title:** `Start a Fundraiser`
   - **Handle:** `start-fundraiser` (must be exact)
   - **Content:** Leave blank (template handles everything)
   - **Template:** Select `page.start-fundraiser` from dropdown
   - **Visibility:** Visible
3. Click **Save**

**What it does:**
- Shows the fundraiser request form
- When customers submit, opens email with their details
- You receive their fundraiser request

**Test it:** Visit `https://[your-store].myshopify.com/pages/start-fundraiser`

---

### 2. About Us Page

**Status:** 🟡 RECOMMENDED - Header navigation links to this

**Steps:**
1. In Shopify Admin, go to: **Online Store → Pages → Add page**
2. Fill in:
   - **Title:** `About Us`
   - **Handle:** `about-us` (must be exact)
   - **Content:** Leave blank (template handles everything)
   - **Template:** Select `page.about` from dropdown
   - **Visibility:** Visible
3. Click **Save**

**What it does:**
- Shows company information
- Mission, values, Memphis branding
- Already has content built into template

**Test it:** Visit `https://[your-store].myshopify.com/pages/about-us`

---

## 🔧 Optional Pages (For Later)

### 3. How It Works Overview Page

**Status:** ⚪ OPTIONAL - Can add later when scaling

**Steps:**
1. In Shopify Admin, go to: **Online Store → Pages → Add page**
2. Fill in:
   - **Title:** `How Fundraising Works`
   - **Handle:** `how-it-works`
   - **Content:** Leave blank
   - **Template:** Select `page.how-it-works` from dropdown
   - **Visibility:** Visible
3. Click **Save**

**What it does:**
- Overview of fundraising process
- Benefits, steps, success stories
- Alternative to going straight to form

**Note:** For Quick MVP, the "Fundraising" nav button goes directly to the form. You can change it to this overview page later if you want a two-step process (overview → then form).

---

## ✅ Verification Checklist

After creating the pages, test each one:

- [ ] Visit `/pages/start-fundraiser` - form should load
- [ ] Fill out fundraiser form and click submit
- [ ] Email client opens with pre-filled details
- [ ] Visit `/pages/about-us` - about page should load
- [ ] Click "Fundraising" in header - should go to start-fundraiser form
- [ ] Check footer links work

---

## 🚨 Common Issues & Fixes

### "404 Not Found" Error

**Problem:** Page doesn't exist yet
**Fix:** Create the page in Shopify Admin following steps above

### "Template not found" Error

**Problem:** Template file not uploaded to theme
**Fix:** Make sure your theme code is published (it should be)

### "Form doesn't open email"

**Problem:** Browser blocking mailto: links
**Fix:**
- Make sure user has default email client set up
- Try different browser
- Check pop-up blocker settings

### "Email recipient is wrong"

**Problem:** Default email is `contact@ipopgourmet.com`
**Fix:** Edit `/templates/page.start-fundraiser.liquid` line 312:
```javascript
const mailtoLink = `mailto:YOUR-EMAIL@example.com?subject=...`;
```

---

## 📧 Email Configuration (Important!)

The fundraiser form sends emails to: **contact@ipopgourmet.com**

**To change this:**
1. Open `templates/page.start-fundraiser.liquid`
2. Find line 312:
   ```javascript
   const mailtoLink = `mailto:contact@ipopgourmet.com?subject=...`;
   ```
3. Replace with your email:
   ```javascript
   const mailtoLink = `mailto:your-real-email@gmail.com?subject=...`;
   ```
4. Save and push changes

---

## 🎯 Quick Start (Do This Now!)

**Minimum to go live:**

1. ✅ Create `/pages/start-fundraiser` page
2. ✅ Test the form submission
3. ✅ Update email address if needed
4. ⚪ Create `/pages/about-us` (optional but recommended)

**That's it!** Your fundraiser system is ready to accept requests.

---

## 📞 Need Help?

If you get stuck:
1. Double-check the page handle matches exactly (no typos)
2. Make sure template is selected in page editor
3. Verify theme is published and live
4. Clear browser cache and try again

---

**Last Updated:** February 18, 2026
**Version:** Quick MVP 1.0
