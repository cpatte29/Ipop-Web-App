# Fundraiser System - Complete Testing Guide

## 🎯 Overview

This guide walks you through setting up and testing the complete fundraiser system with metafields, progress tracking, and order attribution.

---

## Part 1: One-Time Setup (Shopify Metafields)

### Step 1: Create Custom Metafield Definitions

**Go to:** Shopify Admin → Settings → Custom data → Pages

**Click:** "Add definition"

Create these 7 metafield definitions:

#### 1. Organization Type
- **Name:** Organization Type
- **Namespace and key:** `custom.org_type`
- **Type:** Single line text
- **Description:** Type of organization (School, Sports Team, Church, etc.)

#### 2. Fundraiser Goal
- **Name:** Fundraiser Goal
- **Namespace and key:** `custom.goal`
- **Type:** Decimal number
- **Description:** Total fundraising goal amount in dollars

#### 3. Amount Raised
- **Name:** Amount Raised
- **Namespace and key:** `custom.raised`
- **Type:** Decimal number
- **Description:** Current amount raised (update manually as orders come in)

#### 4. Number of Supporters
- **Name:** Number of Supporters
- **Namespace and key:** `custom.supporters`
- **Type:** Integer number
- **Description:** Total number of people who have purchased

#### 5. End Date
- **Name:** End Date
- **Namespace and key:** `custom.end_date`
- **Type:** Date
- **Description:** Last day of the fundraiser

#### 6. Fundraiser Description
- **Name:** Fundraiser Description
- **Namespace and key:** `custom.description`
- **Type:** Multi-line text
- **Description:** Detailed description of what they're raising money for

#### 7. Organization Image URL
- **Name:** Organization Image URL
- **Namespace and key:** `custom.org_image_url`
- **Type:** Single line text (URL)
- **Description:** URL to team/organization photo or logo

**✅ You only need to do this once!** These definitions will be available for all future fundraiser pages.

---

## Part 2: Create a Test Fundraiser

### Step 2: Create the Page

**Go to:** Online Store → Pages → Add page

**Fill in:**

#### Basic Info:
- **Title:** `Test High School Soccer Team`
- **Content:** Leave blank (optional - metafield description will be used)

#### Template:
- Scroll to "Template" dropdown on the right
- Select: `page.fundraiser-template`

#### Page Handle:
- Should auto-generate as: `test-high-school-soccer-team`
- **Important:** Remember this! The fundraiser URL will be `/pages/test-high-school-soccer-team`

**Click "Save" button (don't close yet!)**

---

### Step 3: Add Metafield Values

**Scroll down** to the "Metafields" section on the same page.

You should see all 7 fields you created earlier. Fill them in:

#### Metafield Values for Test:
1. **Organization Type:** `Sports Team`
2. **Fundraiser Goal:** `2500` (represents $2,500)
3. **Amount Raised:** `375` (represents $375 - 15% progress)
4. **Number of Supporters:** `8`
5. **End Date:** Choose a date 30 days from now
6. **Fundraiser Description:**
   ```
   Help our varsity soccer team get to the state championships! We need new uniforms, travel expenses, and tournament fees. Every purchase brings us one step closer to our goal!
   ```
7. **Organization Image URL:**
   - **Option A:** Upload a test image:
     1. Go to Content → Files
     2. Upload any sports/team photo
     3. Click the image, copy the URL
     4. Paste here
   - **Option B:** Leave blank for now (will use default placeholder)

**Click "Save"**

**Status:** ✅ Published (make sure it's not set to "Hidden")

---

## Part 3: View Your Test Fundraiser

### Step 4: Visit the Fundraiser Page

**URL Format:** `https://[your-store].myshopify.com/pages/test-high-school-soccer-team`

**What You Should See:**

1. **Hero Section (Red Background):**
   - Organization badge: "SPORTS TEAM"
   - Title: "Test High School Soccer Team"
   - Description from metafield
   - Image (if you added one)
   - Days remaining countdown

2. **Progress Section:**
   - **Raised:** $375
   - **Goal:** $2,500
   - **Days Left:** (calculated from end date)
   - **Animated Progress Bar:** 15% filled, with shimmer effect
   - **Supporter Count:** "8 supporters have contributed so far"
   - **Milestone Message:** "Great start! You're 15% of the way!"

3. **Shop Button:**
   - "🛒 Shop Gourmet Popcorn"
   - Clicking it should go to: `/collections/all?fundraiser=test-high-school-soccer-team`

4. **Share Section:**
   - Copy link button
   - Social share buttons (Email, Facebook, Twitter)

---

## Part 4: Test the Shopping Flow

### Step 5: Test Adding Products

1. **Click** "Shop Gourmet Popcorn" button

2. **You should see:**
   - Green banner at top: "You're supporting Test High School Soccer Team!"
   - Product grid (or placeholder products if none added yet)

3. **If you have real products:**
   - Click a size button (e.g., "Snack Size $10")
   - See popup: "[Product Name] added to cart!"
   - Notice: fundraiser attribution is saved

4. **Click cart icon** in header

5. **On cart page, you should see:**
   - Green banner: "🎯 Supporting a Fundraiser!"
   - "Supporting Test High School Soccer Team"
   - "50% of your purchase supports this fundraiser"
   - Order summary shows "Fundraiser Impact: $X goes to the fundraiser"

---

## Part 5: Update Progress (Simulating Sales)

### Step 6: Update Raised Amount

**Scenario:** Someone just bought $50 worth of popcorn!

**Go to:** Online Store → Pages → Test High School Soccer Team (edit)

**Scroll to Metafields:**

1. **Amount Raised:**
   - Current: `375`
   - New: `425` (375 + 50)

2. **Number of Supporters:**
   - Current: `8`
   - New: `9`

**Click "Save"**

**Refresh the fundraiser page**

**You should see:**
- Progress bar now shows **17%** instead of 15%
- "Raised" now shows **$425**
- "**9 supporters** have contributed"
- Progress bar animates to new position!

---

## Part 6: Test Different Progress Milestones

Try updating the "Amount Raised" to see different milestone messages:

### Test Values:

| Amount | Progress | Milestone Message |
|--------|----------|-------------------|
| `375` | 15% | "Great start! You're 15% of the way!" |
| `625` | 25% | "Great start! You're 25% of the way!" |
| `1250` | 50% | "Halfway there! Keep the momentum going!" |
| `1875` | 75% | "Almost there! Just 25% to go!" |
| `2500` | 100% | "🏆 Goal Reached! Amazing work!" |
| `3000` | 100% | "🏆 Goal Reached! Amazing work!" (capped at 100%) |

---

## Part 7: Test End Date Scenarios

### Scenario A: Active Fundraiser (30+ days left)
- **End Date:** 30 days from today
- **Shows:** "⏰ 30 days remaining" (white badge)

### Scenario B: Ending Soon (1-7 days left)
- **End Date:** 3 days from today
- **Shows:** "⏰ 3 days remaining"

### Scenario C: Last Day
- **End Date:** Today
- **Shows:** "⏰ Last day to contribute!" (yellow badge)

### Scenario D: Ended
- **End Date:** Yesterday
- **Shows:** No countdown (automatically hides when past)

---

## Part 8: Create a Real Fundraiser

### When You're Ready for a Real Customer:

1. **Receive their email** (from the start-fundraiser form)

2. **Create new page:**
   - Title: `[Organization Name]` (e.g., "Lincoln High School Soccer")
   - Handle: `fundraiser-lincoln-soccer`
   - Template: `page.fundraiser-template`

3. **Fill metafields:**
   - Organization Type: From their request
   - Goal: Their requested amount
   - Raised: `0`
   - Supporters: `0`
   - End Date: Their requested end date
   - Description: From their request
   - Image URL: Upload their team photo

4. **Email them:**
   ```
   Subject: Your iPOP Fundraiser is Live!

   Hi [Name],

   Your fundraiser for [Organization] is now live!

   🎯 Your Unique Fundraiser URL:
   https://ipopgourmet.com/pages/fundraiser-[slug]

   Share this link with:
   - Team members & parents
   - Friends and family
   - Social media
   - Email lists

   Track your progress anytime by visiting your page!

   Good luck reaching your $[goal] goal!

   Best,
   iPOP Gourmet Popcorn
   ```

---

## Part 9: Update Real Fundraiser Progress

### Weekly Update Process:

**Every Monday (or when you have time):**

1. **Get orders with fundraiser attribution:**
   - Go to: Orders in Shopify Admin
   - Look for orders with fundraiser tags/notes
   - Or: Check sessionStorage attribution (advanced)

2. **Calculate totals:**
   - Add up all order totals for this fundraiser
   - Calculate 50% of that (their profit)
   - Count number of unique customers

3. **Update metafields:**
   - Go to the fundraiser page
   - Update "Amount Raised" with the 50% profit total
   - Update "Number of Supporters" with customer count
   - Save

4. **Optional:** Email the organization:
   ```
   Quick update: You've raised $X so far with Y supporters!
   Keep sharing your link to hit your goal!
   ```

---

## Part 10: Progress Bar Features

### Visual Indicators:

**Progress Percentage:**
- Displays prominently next to "Progress" label
- Shown inside bar if >15%
- Auto-calculates from raised/goal

**Shimmer Animation:**
- Gradient slides across bar
- Makes it feel active and engaging

**Color Coding:**
- **Red gradient:** Main fundraiser color (#E63946)
- **Yellow banner:** Milestone achievements
- **Green banner:** Attribution confirmation

**Milestone Badges:**
- Appear automatically at 25%, 50%, 75%, 100%
- Encourage continued sharing
- Yellow background makes them pop

---

## Troubleshooting

### Progress bar doesn't show
- **Check:** Metafields are filled in correctly
- **Check:** goal > 0 (can't divide by zero)
- **Check:** Template is `page.fundraiser-template`

### Progress bar shows 0%
- **Check:** "Amount Raised" metafield has a value
- **Clear cache:** Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

### Image doesn't display
- **Check:** URL is correct and publicly accessible
- **Check:** URL starts with `https://`
- **Try:** Re-upload to Shopify Files and get new URL

### Days remaining not showing
- **Check:** End Date metafield is filled in
- **Check:** Date is in the future

### Green banner not showing on shop page
- **Check:** You clicked the fundraiser's "Shop Popcorn" button
- **Check:** URL has `?fundraiser=slug` parameter
- **Check:** sessionStorage has `current_fundraiser` set

---

## Next Steps

Once you're comfortable with the system:

1. **Create real fundraisers** using this process
2. **Set up weekly progress update routine**
3. **Track which fundraisers are most successful**
4. **Optional:** Build order tracking automation (Phase 2)

---

## Quick Reference

### URLs:
- Fundraiser form: `/pages/start-fundraiser`
- Test fundraiser: `/pages/test-high-school-soccer-team`
- Shop with attribution: `/collections/all?fundraiser=[slug]`

### Metafield Namespaces:
- `custom.org_type`
- `custom.goal`
- `custom.raised`
- `custom.supporters`
- `custom.end_date`
- `custom.description`
- `custom.org_image_url`

### Key Files:
- Template: `templates/page.fundraiser-template.liquid`
- Cart JS: `assets/ipop-cart.js.liquid`
- Collection: `templates/collection.liquid`

---

**Last Updated:** February 18, 2026
**Version:** Metafields MVP 1.0
