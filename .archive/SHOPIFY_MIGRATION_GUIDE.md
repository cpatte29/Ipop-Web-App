# Shopify Migration Guide for iPOP Gourmet Popcorn

## Current Website Analysis

Your current static website includes:
- 12 popcorn flavors with product images
- 2 size options per product (Snack Size - $10, Value Size - $15)
- Custom cart functionality using localStorage
- Checkout page with contact form
- Fundraising information pages
- Contact and about pages

---

## Pre-Migration Checklist

### 1. **Product Data Organization**

You need to create a product catalog with complete information for all 12 flavors:

#### Product List:
1. Kettle Corn
2. Caramel Apple
3. Buffalo Ranch
4. Birthday Cake
5. White Cheddar
6. Caramel Cheddar
7. Milk Chocolate Drizzle
8. Rainbow
9. Cheddar Cheese
10. Pineapple
11. Cinnamon Twist
12. Caramel

#### For Each Product, Prepare:
- **Product Name** (e.g., "Kettle Corn Gourmet Popcorn")
- **Product Description** (your current descriptions are ready)
- **Product Images** (you have these):
  - Kettle-Corn.png
  - Caramel-Apple.png
  - Buffalo-Ranch.png
  - Birthday-Cake.png
  - White-Cheddar.png
  - Caramel-Cheddar.png
  - Milk-Chocolate-Drizzle.png
  - Rainbow.png
  - Cheddar-Cheese.png
  - Pineapple.png
  - Cinnamon-Twist.png
  - Caramel.png

- **Product Variants** (Shopify uses variants for sizes):
  - Snack Size (4 cups) - $10.00
  - Value Size (1 gallon) - $15.00

- **SKUs** (Stock Keeping Units - create unique codes):
  - Example: KC-SNACK, KC-VALUE, CA-SNACK, CA-VALUE, etc.

- **Inventory Tracking**: Decide if you'll track inventory
- **Weight**: Needed for shipping calculations
- **Product Category/Tags**: "Popcorn", "Gourmet", "Snacks", flavor tags

---

### 2. **Image Optimization**

✅ **Current Status**: You have high-quality PNG files

**Shopify Best Practices**:
- Recommended size: 2048 x 2048 pixels (square)
- Format: JPG or PNG (JPG for better performance)
- File size: Under 2MB per image
- White or transparent background preferred
- Multiple images per product (front, back, lifestyle shots) if available

**Action Items**:
- [ ] Verify all 12 product images are high resolution
- [ ] Consider creating additional product angles/lifestyle shots
- [ ] Optimize images if they're larger than 2MB
- [ ] Consider adding your logo.png as well

---

### 3. **Content Migration**

**Pages to Recreate in Shopify**:
- [ ] Home Page (index.html content)
- [ ] Shop/Products Page (automatic in Shopify)
- [ ] About Us (about.html)
- [ ] How It Works (how-it-works.html)
- [ ] Contact (contact.html)
- [ ] Start a Fundraiser (start-fundraiser.html)

**Content to Extract**:
- [ ] Copy all text content from each page
- [ ] Save your business information:
  - Store hours: Mon-Sat 10am-6pm, Sun Closed
  - Address: 1605 N Germantown Pkwy Ste 112, Cordova, TN 38018
  - Phone: (901) 239-4767
  - Email: contact@ipopgourmet.com
- [ ] Fundraising tour content (tour pages)

---

### 4. **Design Elements to Preserve**

**Brand Colors** (from your styles.css):
```
Red: #E63946 (primary color)
Yellow: #FFD700 (accent)
```

**Key Design Features**:
- [ ] Logo file (logo.png)
- [ ] Color scheme documentation
- [ ] Font preferences (if specific fonts are important)
- [ ] Any custom icons or graphics

---

### 5. **Functionality Requirements**

#### Current Custom Features:
✅ Shopping cart with localStorage
✅ Add to cart buttons
✅ Quantity adjustments
✅ Cart badge showing item count
✅ Checkout contact form
✅ Form submissions (fundraiser, contact)

#### Shopify Equivalents:
- **Shopping Cart**: Built-in, no custom code needed
- **Add to Cart**: Built-in with variant selection
- **Checkout**: Full payment processing (Shopify Payments)
- **Forms**: Use Shopify Forms app or contact form

#### Features That Need Special Handling:
- **Fundraiser Program**: May need custom solution
  - Consider Shopify app for fundraising
  - Or create custom discount codes per fundraiser
  - Track fundraiser orders via order tags/notes

---

### 6. **Business Setup Requirements**

**Before Launching on Shopify**:
- [ ] **Business License**: Verify you have proper licensing for online sales
- [ ] **Tax Information**:
  - Current site uses 9.25% tax
  - Set up tax collection in Shopify
  - Enable automatic tax calculation by location
- [ ] **Payment Gateway**:
  - Shopify Payments (recommended, 2.9% + 30¢ per transaction)
  - Or third-party gateway (PayPal, Stripe, etc.)
  - Set up bank account for payments
- [ ] **Shipping Strategy**:
  - Define shipping zones
  - Set shipping rates
  - Decide: pickup only, local delivery, or nationwide shipping?
  - Package weights and dimensions
- [ ] **Return/Refund Policy**: Create and document
- [ ] **Privacy Policy**: Required for online store
- [ ] **Terms of Service**: Create legal terms

---

### 7. **Domain & Email**

- [ ] **Domain Name**:
  - Do you own a domain? (e.g., ipopgourmet.com)
  - If yes, prepare to connect it to Shopify
  - If no, choose and purchase one
- [ ] **Email Setup**:
  - Professional email addresses
  - Order confirmation emails
  - Customer support email

---

### 8. **Shopify Plan Selection**

**Shopify Plans** (as of 2024):
- **Basic**: $39/month - Good for starting out
- **Shopify**: $105/month - Better reporting, lower transaction fees
- **Advanced**: $399/month - Advanced features

**Recommendation for iPOP**:
- Start with **Basic Plan** ($39/month)
- Includes unlimited products, 2 staff accounts, 24/7 support
- Can upgrade as you grow

---

### 9. **Apps You May Need**

**Recommended Shopify Apps**:
- [ ] **Product Reviews**: Judge.me, Yotpo (free options available)
- [ ] **Contact Forms**: Shopify Forms (free)
- [ ] **Email Marketing**: Shopify Email (2,500 emails/month free)
- [ ] **Fundraiser Management**: Custom or third-party app
- [ ] **Inventory Management**: If needed for tracking
- [ ] **Local Pickup**: Store Pickup app (if offering pickup)

---

### 10. **Data Migration Steps**

**Product Import Process**:
1. Create CSV file with product data
2. Format: Product Name, Description, Variant, Price, SKU, Image URL
3. Import via Shopify admin: Products > Import

**CSV Template Format**:
```csv
Handle,Title,Body (HTML),Vendor,Type,Tags,Published,Option1 Name,Option1 Value,Variant SKU,Variant Price,Variant Inventory Tracker,Variant Inventory Qty,Variant Weight Unit,Image Src
kettle-corn,Kettle Corn Gourmet Popcorn,"Lightly sweetened with a hint of salt. Perfectly balanced sweet and savory flavor.",iPOP,Popcorn,"popcorn,sweet",TRUE,Size,Snack Size (4 cups),KC-SNACK,10.00,shopify,100,lb,https://...
kettle-corn,Kettle Corn Gourmet Popcorn,"Lightly sweetened with a hint of salt. Perfectly balanced sweet and savory flavor.",iPOP,Popcorn,"popcorn,sweet",TRUE,Size,Value Size (1 gallon),KC-VALUE,15.00,shopify,100,lb,https://...
```

---

### 11. **Features You'll Lose (And Alternatives)**

#### Lost Features:
1. **Custom Checkout Form**: Shopify has standardized checkout
   - **Alternative**: Use order notes for special instructions
   - Can customize checkout with Shopify Plus (higher tier)

2. **Static Fundraiser Pages**: Current tour pages are custom
   - **Alternative**: Use Shopify Pages for content
   - May need custom app for fundraiser tracking

3. **localStorage Cart**: Replaced by Shopify's cart system
   - **Benefit**: More reliable, syncs across devices

#### Gained Features:
- ✅ Real payment processing (credit cards, PayPal, etc.)
- ✅ Order management dashboard
- ✅ Customer accounts
- ✅ Inventory tracking
- ✅ Sales analytics and reporting
- ✅ Abandoned cart recovery
- ✅ Discount codes
- ✅ Mobile-optimized checkout
- ✅ Automatic tax calculation
- ✅ Email notifications

---

### 12. **Testing Requirements**

**Before Going Live**:
- [ ] Test all products display correctly
- [ ] Test add to cart for all variants
- [ ] Complete a test order end-to-end
- [ ] Test on mobile devices
- [ ] Verify tax calculations
- [ ] Test shipping calculations (if applicable)
- [ ] Test contact forms
- [ ] Verify email notifications work
- [ ] Check all page links
- [ ] Test payment gateway

---

### 13. **SEO Considerations**

**URLs to Preserve** (301 redirects):
- /shop.html → /collections/all
- /about.html → /pages/about
- /contact.html → /pages/contact
- /how-it-works.html → /pages/how-it-works

**Meta Data to Transfer**:
- Page titles
- Meta descriptions
- Alt text for images

---

### 14. **Timeline Estimate**

**Realistic Migration Timeline**:
- **Week 1**: Setup & Planning
  - Create Shopify account
  - Choose theme
  - Gather all content and images
- **Week 2**: Product Setup
  - Upload products
  - Configure variants
  - Add descriptions and images
- **Week 3**: Design & Pages
  - Customize theme
  - Create pages (About, Contact, etc.)
  - Set up navigation
- **Week 4**: Business Setup
  - Configure payment gateway
  - Set up shipping
  - Add policies
  - Set up tax rules
- **Week 5**: Testing
  - Complete test orders
  - Mobile testing
  - Fix any issues
- **Week 6**: Launch
  - Connect domain
  - Go live
  - Monitor closely

---

### 15. **Cost Breakdown**

**Monthly Costs**:
- Shopify Basic Plan: $39/month
- Domain (if new): ~$15/year
- Apps (optional): $0-50/month
- **Total**: ~$40-90/month

**Transaction Fees**:
- Shopify Payments: 2.9% + 30¢ per transaction
- Or 2% fee if using external payment gateway

**One-Time Costs**:
- Premium theme (optional): $100-350
- Professional product photography (optional): $500-2000
- Custom development (if needed): Variable

---

### 16. **Immediate Action Items**

**Do This Now** (Before Starting Migration):

1. **Product Data Spreadsheet**
   - Create Excel/Google Sheet with all product info
   - Include names, descriptions, sizes, prices, SKUs
   - Add image filenames

2. **Gather All Assets**
   - All 12 product images in one folder
   - Logo file
   - Any additional graphics

3. **Document Business Details**
   - Write down all contact info
   - Define shipping policy
   - Define return policy
   - Note tax requirements

4. **Choose Shopify Theme**
   - Browse Shopify Theme Store
   - Pick a theme that matches your aesthetic
   - Free themes: Dawn, Sense, Studio
   - Or premium theme for more features

5. **Sign Up for Shopify Trial**
   - 3-day free trial (no credit card)
   - Extended 14-day trial with code
   - Start experimenting

---

## Questions to Answer Before Migration

1. **Fulfillment**: How will you handle orders?
   - In-store pickup only?
   - Local delivery?
   - National shipping?
   - All of the above?

2. **Fundraiser Program**: How to handle on Shopify?
   - Create discount codes per fundraiser?
   - Use order tags to track?
   - Need custom app?
   - Separate ordering system?

3. **Inventory**: Do you make to order or stock inventory?
   - Track inventory quantities?
   - Allow backorders?
   - Lead time for orders?

4. **Customer Accounts**: Allow customer registration?
   - Recommended: Yes (better for repeat customers)
   - Or guest checkout only?

5. **Marketing**: How will you drive traffic?
   - Email marketing?
   - Social media integration?
   - Google Shopping ads?

---

## Recommendation

**Should You Migrate to Shopify?**

✅ **YES, if you want**:
- Real payment processing (credit cards)
- Professional e-commerce platform
- Better scalability
- Customer accounts and order history
- Automated email notifications
- Mobile-optimized shopping
- Analytics and reporting
- Less maintenance

⚠️ **CONSIDER ALTERNATIVES if**:
- Budget is very tight ($40+/month is too much)
- You only do in-person/phone orders
- You're happy with current manual process
- You don't need real-time payment processing

---

## Alternative Platforms to Consider

If Shopify doesn't fit:
- **WooCommerce** (WordPress): More control, hosting required
- **Square Online**: Good for in-person + online
- **Wix/Squarespace**: Simpler, less powerful
- **BigCommerce**: Similar to Shopify, more features

---

## Next Steps

1. Review this entire guide
2. Answer the questions in section "Questions to Answer"
3. Create your product data spreadsheet
4. Sign up for Shopify free trial
5. Start experimenting with theme customization
6. Reach out if you need help with specific aspects

---

## Resources

- **Shopify Help Center**: https://help.shopify.com
- **Shopify Theme Store**: https://themes.shopify.com
- **Shopify App Store**: https://apps.shopify.com
- **Shopify Community**: https://community.shopify.com

---

*This guide was created based on your current iPOP Gourmet Popcorn website structure as of January 2026.*
