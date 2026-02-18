# iPOP Fundraiser Setup Guide (Quick MVP)

## 📋 Overview

This guide explains how to manually create and manage fundraisers using the Quick MVP email-based system. This approach requires no additional apps or coding and works immediately with your Shopify theme.

---

## 🎯 How It Works

### **Customer Journey:**
1. Customer visits `/pages/start-fundraiser`
2. Fills out fundraiser request form
3. Clicks "Start My Fundraiser"
4. Email opens with pre-filled details
5. Customer sends email to you
6. You create their fundraiser page manually
7. You email them their unique fundraiser URL
8. They share the URL with supporters

### **Your Process:**
1. Receive fundraiser request email
2. Create new page in Shopify Admin (5 minutes)
3. Customize page content with organization details
4. Email customer their unique URL
5. Track orders manually or via order tags
6. Update progress periodically

---

## 📧 Step 1: Receive Fundraiser Request

When a customer submits the form, you'll receive an email like this:

```
Subject: New Fundraiser Request: Lincoln High School Soccer Team

NEW FUNDRAISER REQUEST
=====================

Organization Details:
- Organization Name: Lincoln High School Soccer Team
- Organization Type: Sports Team
- Fundraising Goal: $2,500 - $5,000
- Number of Participants: 25
- End Date: 2026-06-15

Contact Information:
- Contact Person: Sarah Johnson
- Email: sjohnson@lincolnhigh.edu
- Phone: (901) 555-1234

Additional Details:
We're raising money for new uniforms and travel to state championships.

---
Submitted: 2/18/2026, 10:30 AM

ACTION ITEMS:
1. Create Shopify page: /pages/lincoln-high-school-soccer-team
2. Assign template: page.fundraiser-template.liquid
3. Add organization details to page content
4. Email customer their unique fundraiser URL
5. (Optional) Upload organization photo if provided
```

---

## 🛠️ Step 2: Create the Fundraiser Page

### **In Shopify Admin:**

1. **Go to:** Online Store → Pages → Add page

2. **Page Settings:**
   - **Title:** Lincoln High School Soccer Team
   - **Handle:** `fundraiser-lincoln-soccer` (auto-generates from title, edit if needed)
   - **Template:** Select `page.fundraiser-template`

3. **Add Custom Metafields** (Optional but recommended):
   Navigate to Metafields section and add:

   | Metafield Name | Namespace.Key | Type | Value |
   |----------------|---------------|------|-------|
   | Organization Type | `custom.org_type` | Single line text | `Sports Team` |
   | Description | `custom.description` | Multi-line text | `Help us fund new uniforms and travel to state championships!` |
   | Goal | `custom.goal` | Number (decimal) | `5000` |
   | End Date | `custom.end_date` | Date | `2026-06-15` |
   | Raised | `custom.raised` | Number (decimal) | `0` (update manually) |
   | Supporters | `custom.supporters` | Number (integer) | `0` (update manually) |

   **Alternative (If metafields not available):**
   Edit the template file directly for each fundraiser (copy template and rename to `page.fundraiser-[org-slug].liquid`)

4. **Upload Organization Photo** (if provided):
   - Go to: Content → Files → Upload files
   - Upload their team photo/logo
   - Copy the file URL
   - In page template, uncomment the image section and paste URL

5. **Save and Publish**

---

## 📤 Step 3: Email the Customer

Send them an email with their fundraiser details:

```
Subject: Your iPOP Fundraiser is Live! 🎉

Hi Sarah,

Great news! Your fundraiser for Lincoln High School Soccer Team is now live!

Your Unique Fundraiser URL:
https://ipopgourmet.com/pages/fundraiser-lincoln-soccer

Here's what to do next:

1. Share Your Link
   Share this URL with team members, parents, friends, and family via:
   - Email
   - Text message
   - Social media (Facebook, Twitter, Instagram)
   - Team group chats

2. Track Your Progress
   Visit your fundraiser page anytime to see:
   - Total amount raised
   - Number of supporters
   - Days remaining

3. Every Purchase = 50% Profit
   When someone clicks your link and buys popcorn, 50% of the sale
   automatically goes toward your fundraiser goal!

Need help? Reply to this email anytime.

Good luck reaching your $5,000 goal!

Best,
iPOP Gourmet Popcorn Team
(901) 239-4767
```

---

## 📊 Step 4: Track Orders (Manual Process)

### **Option A: Manual Tracking Spreadsheet**

Create a Google Sheet with columns:
- Order Number
- Customer Name
- Fundraiser
- Order Total
- 50% Profit
- Date

Update weekly based on Shopify orders.

### **Option B: Order Tags (Recommended)**

When you receive an order that came from a fundraiser link:

1. Go to Orders in Shopify Admin
2. Click the order
3. Add tag: `fundraiser:lincoln-soccer`
4. Add tag: `profit:$XX` (calculate 50% of order total)

Then use Shopify's filter to view all orders for a specific fundraiser.

### **Option C: Order Notes**

Ask customers to add fundraiser name in order notes during checkout.

---

## 🔄 Step 5: Update Progress

Update fundraiser progress manually (weekly or when requested):

1. Calculate total raised from orders
2. Count number of supporters
3. Update metafields:
   - `custom.raised` → Total amount raised
   - `custom.supporters` → Number of orders

Or edit the script in the template directly:

```javascript
const raised = 1250; // Update this manually
const supporters = 18; // Update this manually
```

---

## 🎨 Customization Options

### **Change the Fundraiser Theme Color:**

Edit the template and replace `#E63946` (red) with your preferred color:
- Progress bar gradient
- Button background
- Stat numbers

### **Add Organization Logo:**

In the Hero section, uncomment:
```liquid
<img
  src="https://cdn.shopify.com/s/files/1/YOUR_FILE_PATH.jpg"
  alt="Lincoln Soccer"
  style="max-width: 300px; max-height: 300px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); margin-bottom: 2rem;"
>
```

### **Change End Date:**

Update `custom.end_date` metafield or edit template directly.

---

## 📈 Scaling Tips

### **For 5-10 Fundraisers/Year:**
- Use this manual system ✅
- Create a simple spreadsheet for tracking
- Set aside 30 min/week for updates

### **For 10-25 Fundraisers/Year:**
- Consider using Shopify order tags
- Create email templates for faster responses
- Consider hiring a VA to handle page creation

### **For 25+ Fundraisers/Year:**
- Invest in custom Shopify app ($2-5k)
- Automates page creation
- Automatic order attribution
- Real-time progress tracking
- Customer dashboard

---

## 🚨 Troubleshooting

### **"The template isn't showing up"**
- Make sure you uploaded `page.fundraiser-template.liquid` to `/templates/` folder
- Clear Shopify theme cache
- Try a different template name

### **"Progress bar shows 0% even though I updated metafields"**
- Check metafield namespace is exactly `custom.raised` and `custom.goal`
- Ensure metafield type is "Number (decimal)"
- Clear browser cache and refresh page

### **"Fundraiser URL gives 404 error"**
- Make sure page is Published, not just Saved as draft
- Check page handle matches URL: `/pages/[handle]`
- Verify theme is published

### **"Orders aren't being attributed to fundraiser"**
- For MVP, attribution is manual via order tags
- Customer must use the unique fundraiser link
- Check sessionStorage (developer tools) for `current_fundraiser`

---

## 📋 Quick Checklist

When creating a new fundraiser:

- [ ] Receive and review fundraiser request email
- [ ] Create new page in Shopify Admin
- [ ] Set page handle: `fundraiser-[org-slug]`
- [ ] Assign template: `page.fundraiser-template`
- [ ] Add metafields (org_type, description, goal, end_date)
- [ ] Upload organization photo if provided
- [ ] Publish page
- [ ] Test the page loads correctly
- [ ] Email customer their unique URL
- [ ] Add fundraiser to tracking spreadsheet
- [ ] Set calendar reminder to update progress weekly

---

## 📞 Support

For questions or issues:
- Email: contact@ipopgourmet.com
- Phone: (901) 239-4767
- Review this guide
- Check Shopify Admin for page settings

---

**Last Updated:** February 18, 2026
**Version:** 1.0 (Quick MVP)
