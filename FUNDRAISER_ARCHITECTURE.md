# Fundraiser System Architecture

## Overview

This document explains the complete fundraiser user flow, from creation to attribution, and how it's designed to integrate seamlessly with Shopify.

---

## User Flow

### 1. Fundraiser Creation
**Page:** `start-fundraiser.html`

**Process:**
1. User fills out the fundraiser form with:
   - Organization name
   - Organization type
   - Contact information
   - Fundraising goal
   - Number of participants
   - Description/message

2. On submission:
   - JavaScript generates a unique **slug** from the organization name
     - Example: "Lincoln High School Soccer Team" → `lincoln-high-school-soccer-team`
   - Data is saved to **localStorage** under key `ipop_fundraisers`
   - User receives a unique fundraiser URL: `/fundraiser.html?id=lincoln-high-school-soccer-team`

3. Success screen shows:
   - Shareable fundraiser link
   - "View Your Page" button
   - Instructions for sharing

### 2. Fundraiser Page
**Page:** `fundraiser.html`

**How It Works:**
- URL format: `/fundraiser.html?id={slug}`
- JavaScript (`fundraiser.js`) reads the slug from URL parameter
- Loads fundraiser data from localStorage
- Dynamically renders:
  - Organization name and type
  - Description
  - Fundraising goal and progress (mocked for now)
  - "Support This Fundraiser" CTA button
  - Share functionality (copy link, email, social media)

**Attribution Link:**
- "Support This Fundraiser" button redirects to:
  ```
  /shop.html?fundraiser={slug}
  ```
- This query parameter is the key to attribution tracking

### 3. Shopping with Attribution
**Page:** `shop.html?fundraiser={slug}`

**How It Works:**
- When page loads, `cart.js` reads `?fundraiser=` from URL
- Stores fundraiser slug in localStorage under key `ipop_current_fundraiser`
- Every item added to cart includes the fundraiser attribution
- Cart items structure:
  ```javascript
  {
    productName: "Kettle Corn",
    size: "Snack Size",
    price: 10.00,
    quantity: 1,
    fundraiser: "lincoln-high-school-soccer-team"  // ← Attribution
  }
  ```

### 4. Checkout with Attribution
**Page:** `checkout.html`

**Features:**
- If fundraiser attribution exists:
  - Shows a banner: "🎉 Supporting Fundraiser: [Org Name]"
  - Displays "50% of this order supports their fundraising goal"
- Order data includes fundraiser slug
- When order is submitted, fundraiser attribution is logged in order data

---

## Technical Architecture

### Data Storage (Current)

**localStorage Keys:**

1. **`ipop_fundraisers`** - Array of all fundraisers
   ```javascript
   [
     {
       slug: "lincoln-high-school-soccer-team",
       orgName: "Lincoln High School Soccer Team",
       orgType: "School",
       contactName: "Jane Smith",
       email: "jane@example.com",
       phone: "(555) 123-4567",
       goal: 5000,
       participants: 25,
       description: "Help our soccer team...",
       createdAt: "2026-01-30T10:00:00.000Z",
       status: "active"
     }
   ]
   ```

2. **`ipop_current_fundraiser`** - Current fundraiser slug for attribution
   ```
   "lincoln-high-school-soccer-team"
   ```

3. **`ipopCart`** - Shopping cart with fundraiser attribution
   ```javascript
   [
     {
       productName: "Kettle Corn",
       size: "Snack Size",
       price: 10.00,
       quantity: 2,
       fundraiser: "lincoln-high-school-soccer-team"  // ← Attribution!
     }
   ]
   ```

### Key JavaScript Files

1. **`fundraiser.js`**
   - Generates slugs from organization names
   - Saves/loads fundraiser data
   - Renders fundraiser pages dynamically
   - Handles share functionality
   - Calculates mock progress (for demo)

2. **`cart.js`** (Enhanced)
   - `getFundraiserAttribution()` - Reads fundraiser from URL or localStorage
   - `addToCart()` - Includes fundraiser attribution when adding items
   - `clearFundraiserAttribution()` - Clears attribution when cart is cleared

3. **`checkout.js`** (Enhanced)
   - `displayFundraiserAttribution()` - Shows fundraiser banner
   - Order submission includes fundraiser slug
   - Confirms attribution in order data

### URL Structure

| URL | Purpose | Parameters |
|-----|---------|------------|
| `/start-fundraiser.html` | Create fundraiser | None |
| `/fundraiser.html?id={slug}` | View fundraiser page | `id` = fundraiser slug |
| `/shop.html?fundraiser={slug}` | Shop with attribution | `fundraiser` = fundraiser slug |
| `/checkout.html` | Complete order | Attribution from localStorage |

---

## Why This Architecture Works

### ✅ Clean Separation
- Fundraiser creation is independent
- Attribution is URL-based (Shopify-compatible)
- Cart logic is modular

### ✅ No Backend Required (Yet)
- localStorage works for demo/testing
- All logic is client-side
- Real-feel user experience

### ✅ Shopify-Ready
- Query parameters work with Shopify
- Attribution can be passed as order notes
- Structure maps directly to Shopify concepts

---

## Shopify Integration Plan

### Phase 1: Current State (Frontend Only)
✅ **Status:** Complete

- Fundraisers stored in localStorage
- Attribution tracked via URL parameters
- Orders submitted as form data
- No payment processing yet

### Phase 2: Shopify Product Catalog
**What Changes:**
- Products come from Shopify instead of static HTML
- Use Shopify Buy Button or Storefront API
- Cart items sync with Shopify cart

**What Stays:**
- Fundraiser creation flow (same)
- Fundraiser pages (same)
- Attribution logic (same)

**How It Works:**
1. User visits `/fundraiser.html?id={slug}`
2. Clicks "Support This Fundraiser"
3. Redirected to Shopify collection with `?fundraiser={slug}`
4. When adding to cart, include fundraiser in cart attributes

**Shopify Cart Attributes:**
```javascript
{
  attributes: {
    fundraiser: "lincoln-high-school-soccer-team",
    fundraiser_name: "Lincoln High School Soccer Team"
  }
}
```

### Phase 3: Shopify Checkout
**What Changes:**
- Checkout handled by Shopify
- Payment processing automatic
- Order data stored in Shopify

**Attribution Method:**

**Option A: Cart Attributes (Recommended)**
```javascript
// Add to Shopify cart with attributes
fetch('/cart/add.js', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    items: [{
      id: 12345,  // Product variant ID
      quantity: 1,
      properties: {
        '_fundraiser': 'lincoln-high-school-soccer-team',
        '_fundraiser_name': 'Lincoln High School Soccer Team'
      }
    }]
  })
})
```

Properties prefixed with `_` are hidden from customer but visible to admin.

**Option B: Order Notes**
```javascript
// Add fundraiser info to cart note
CartJS.setNote('Fundraiser: lincoln-high-school-soccer-team');
```

**Option C: Discount Codes**
- Each fundraiser gets a unique discount code
- Code: `FUNDRAISER-{slug}`
- Tracks orders, no discount applied (or minimal)

**Recommended:** Use **Cart Attributes** (Option A) - most reliable and visible in Shopify admin.

### Phase 4: Fundraiser Management
**Backend Needed:**
- Database to store fundraiser data (replace localStorage)
- API to create/read fundraisers
- Dashboard for fundraiser organizers
- Reporting on fundraiser performance

**Shopify Integration:**
- Use Shopify webhook for `orders/create`
- When order created, check for fundraiser attribution
- Update fundraiser progress in database
- Send notification to fundraiser organizer

**Webhook Example:**
```javascript
// Webhook endpoint receives order data
app.post('/webhooks/orders/create', (req, res) => {
  const order = req.body;

  // Extract fundraiser from line items
  order.line_items.forEach(item => {
    const fundraiserSlug = item.properties._fundraiser;
    if (fundraiserSlug) {
      // Update fundraiser stats in database
      updateFundraiserProgress(fundraiserSlug, item.price * item.quantity);
    }
  });

  res.sendStatus(200);
});
```

### Phase 5: Advanced Features
- Real-time progress updates
- Fundraiser leaderboards
- Email notifications
- Automated payouts (50% profit calculation)
- Fundraiser dashboard with analytics

---

## Migration Path to Shopify

### Step 1: Set Up Shopify Store
1. Create Shopify account
2. Import products (use `shopify-product-import-template.csv`)
3. Configure payment and shipping
4. Set up theme

### Step 2: Maintain Fundraiser Pages
- Keep `fundraiser.html` and `fundraiser.js` as-is
- These pages stay on your domain
- Link to Shopify for shopping

### Step 3: Update Shop Links
**Current:**
```html
<a href="shop.html?fundraiser={slug}">Support This Fundraiser</a>
```

**With Shopify:**
```html
<a href="https://ipopgourmet.myshopify.com/collections/all?fundraiser={slug}">
  Support This Fundraiser
</a>
```

### Step 4: Add Shopify Buy Button
Replace static product catalog with Shopify Buy Button:

```javascript
// Load Shopify Buy SDK
const client = ShopifyBuy.buildClient({
  domain: 'ipopgourmet.myshopify.com',
  storefrontAccessToken: 'your-token-here'
});

// Get fundraiser from URL
const fundraiser = new URLSearchParams(window.location.search).get('fundraiser');

// Add product to cart with fundraiser attribution
client.cart.addLineItems(cartId, {
  variantId: 'Z2lkOi8vc2hvcGlmeS9...',
  quantity: 1,
  customAttributes: [{
    key: '_fundraiser',
    value: fundraiser
  }]
});
```

### Step 5: Backend for Fundraiser Data
Options:
- **Shopify Metafields** - Store fundraiser data in Shopify
- **External Database** - Firebase, Supabase, or custom backend
- **Shopify App** - Build custom Shopify app

**Shopify Metafields Approach:**
```javascript
// Store fundraiser as Shop metafield
{
  namespace: "fundraiser",
  key: "lincoln-high-school-soccer-team",
  value: JSON.stringify({
    orgName: "Lincoln High School Soccer Team",
    goal: 5000,
    // ... rest of data
  }),
  type: "json"
}
```

### Step 6: Order Attribution
Use Shopify webhooks to track orders:
- Listen for `orders/create` webhook
- Extract fundraiser from line item properties
- Update fundraiser progress
- Send notifications

---

## Data Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    1. CREATE FUNDRAISER                      │
│                                                              │
│  User fills form → Generate slug → Save to localStorage →   │
│  Get unique URL: /fundraiser.html?id={slug}                 │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│                   2. SHARE FUNDRAISER                        │
│                                                              │
│  Organizer shares: /fundraiser.html?id={slug}               │
│  Supporters visit fundraiser page                           │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│                   3. SHOP WITH ATTRIBUTION                   │
│                                                              │
│  Click "Support" → /shop.html?fundraiser={slug}             │
│  Store slug in localStorage                                  │
│  Add items to cart with fundraiser attribution              │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│                   4. CHECKOUT & ORDER                        │
│                                                              │
│  View cart with fundraiser banner                           │
│  Complete order with fundraiser slug in order data          │
│  [Future: Shopify processes payment & fulfillment]          │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│                   5. ATTRIBUTION TRACKING                    │
│                                                              │
│  Order includes fundraiser slug                             │
│  [Future: Webhook updates fundraiser progress]              │
│  [Future: Notify organizer of new order]                    │
│  [Future: Calculate 50% profit attribution]                 │
└─────────────────────────────────────────────────────────────┘
```

---

## Testing the Flow

### Test Scenario 1: Create Fundraiser
1. Go to `/start-fundraiser.html`
2. Fill out form:
   - Org: "Lincoln High School Soccer Team"
   - Type: "Sports Team"
   - Goal: "$2,500 - $5,000"
   - Add contact info
3. Submit form
4. Verify:
   - Success message appears
   - Fundraiser URL is shown
   - Can click "View Your Page"

### Test Scenario 2: View Fundraiser Page
1. Click fundraiser URL or visit `/fundraiser.html?id=lincoln-high-school-soccer-team`
2. Verify:
   - Organization name displays
   - Progress bar shows (mocked data)
   - "Support This Fundraiser" button present
   - Share functionality works

### Test Scenario 3: Shop with Attribution
1. From fundraiser page, click "Support This Fundraiser"
2. Verify URL includes `?fundraiser=lincoln-high-school-soccer-team`
3. Add products to cart
4. Open browser DevTools → Application → Local Storage
5. Verify `ipop_current_fundraiser` is set
6. Verify cart items include `fundraiser` property

### Test Scenario 4: Checkout with Attribution
1. Go to checkout
2. Verify fundraiser banner appears at top
3. Fill out checkout form
4. Submit order
5. Open browser Console
6. Verify order data includes `fundraiser` property

### Test Scenario 5: Multiple Fundraisers
1. Create fundraiser A
2. Create fundraiser B
3. Open DevTools → Local Storage → `ipop_fundraisers`
4. Verify both fundraisers are stored
5. Visit both fundraiser pages
6. Verify each loads correct data

---

## Current Limitations & Future Enhancements

### Current Limitations
- ❌ No real payment processing
- ❌ No actual progress tracking (mocked)
- ❌ Data lost if localStorage is cleared
- ❌ No backend validation
- ❌ No duplicate prevention (same org can create multiple)
- ❌ No fundraiser management dashboard
- ❌ No reporting or analytics

### Future Enhancements (With Shopify)
- ✅ Real payment processing
- ✅ Actual progress tracking from real orders
- ✅ Persistent data storage (database)
- ✅ Backend API for fundraiser management
- ✅ Admin dashboard for organizers
- ✅ Automated email notifications
- ✅ Real-time progress updates
- ✅ Fundraiser performance analytics
- ✅ Automated profit calculations
- ✅ Payout management

---

## Code Quality & Maintainability

### Why This Approach is Good

**1. Separation of Concerns**
- Fundraiser logic in `fundraiser.js`
- Cart logic in `cart.js`
- Checkout logic in `checkout.js`
- Each file has a single responsibility

**2. URL-Based Attribution**
- Works without cookies
- Shareable links
- Works across devices
- Shopify-compatible

**3. Progressive Enhancement**
- Works now without backend
- Easy to add backend later
- Can integrate Shopify incrementally

**4. No Overengineering**
- Simple localStorage for now
- No unnecessary frameworks
- Clean, readable code
- Easy to understand and modify

**5. Future-Proof**
- Query parameters are universal
- Cart attributes map to Shopify
- Slug-based URLs are scalable
- Clean migration path

---

## Integration Checklist

### ✅ Current Implementation
- [x] Fundraiser creation form
- [x] Slug generation
- [x] Fundraiser page template
- [x] URL-based attribution
- [x] Cart attribution tracking
- [x] Checkout attribution display
- [x] Share functionality
- [x] localStorage data persistence

### 🔄 Next Steps (Shopify Integration)
- [ ] Set up Shopify store
- [ ] Import products to Shopify
- [ ] Update shop links to point to Shopify
- [ ] Implement Shopify Buy Button
- [ ] Add cart attributes for fundraiser
- [ ] Set up Shopify webhooks
- [ ] Create backend for fundraiser data
- [ ] Implement progress tracking
- [ ] Build organizer dashboard
- [ ] Set up email notifications

---

## Security Considerations

### Current (Frontend Only)
- ⚠️ localStorage can be edited by users
- ⚠️ No validation of fundraiser data
- ⚠️ No prevention of duplicate fundraisers

### With Backend
- ✅ Server-side validation
- ✅ Unique slug enforcement
- ✅ Secure fundraiser data storage
- ✅ Verification of organizer identity
- ✅ Protection against fraud

### With Shopify
- ✅ PCI-compliant payment processing
- ✅ Secure checkout
- ✅ Order verification
- ✅ Fraud detection

---

## Summary

This fundraiser system provides a **complete, believable user flow** from creation to checkout, without requiring a backend or Shopify integration yet. The architecture is designed to be **Shopify-compatible** and can be integrated incrementally.

**Key Benefits:**
- Works now (demo-ready)
- Feels real to users
- Clean codebase
- Easy Shopify integration
- Scalable architecture
- No overengineering

**Next Milestone:**
Integrate with Shopify for real payment processing and fulfillment, while keeping the fundraiser creation and page system intact.

---

**Last Updated:** January 30, 2026
**Status:** ✅ Phase 1 Complete - Frontend Implementation Ready
