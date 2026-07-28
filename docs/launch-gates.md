# Owner-controlled launch gates

The website may be published in catalog-preview mode before these gates are
complete. Do not add `PUBLIC_SQUARE_STORE_URL` or accept a live order until every
commerce gate is signed off.

## 1. Identity and permissions

- [x] Confirm use of “Red Mountain Soap” with Utah business-name/DBA guidance.
- [x] Search Utah registrations and federal trademarks for conflicting uses.
- [x] Keep “Red Mountain Soap LC” on legal, tax, processor, invoice, and policy records.
- [x] Confirm the Ivins operations address remains private and is not represented as a storefront.

## 2. Tax, banking, and insurance

- [ ] Confirm the Utah sales-and-use-tax account, account number, and filing schedule.
- [ ] Confirm dedicated business checking and payment card.
- [ ] Obtain general and product liability coverage for online, market, wholesale, and hospitality sales.
- [ ] Ask the tax professional to approve the opening chart of accounts and first monthly close.

## 3. Product approval

For all six products:

- [ ] Stable SKU and Square item name
- [ ] Finished net weight
- [ ] Complete ingredient panel in the approved naming standard
- [ ] Fragrance and allergen disclosures
- [ ] Retail and wholesale price
- [ ] Packaging and label proof
- [ ] Available cured quantity
- [ ] Approved product copy with no disease, treatment, healing, antibacterial, or similar claims

For shipped bundles:

- [ ] Contents and substitution rules
- [ ] Packed weight and package dimensions
- [ ] Shipping charge or rate rule
- [ ] Damage and replacement workflow

## 4. Square

- [x] Create the six products and bundle items from `square-catalog-template.csv`.
- [ ] Configure Utah tax enrollment and verify taxable items and shipping treatment.
- [ ] Configure shipping and pickup-by-appointment.
- [ ] Configure inventory alerts, receipts, refunds, and customer support email.
- [ ] Verify guest checkout and optional Square buyer conveniences.
- [ ] Run one low-value live order through payment, inventory decrement, fulfillment, receipt, and refund.
- [ ] Export and securely archive the approved catalog.
- [ ] Add the verified HTTPS storefront URL to `PUBLIC_SQUARE_STORE_URL`.

## 5. Email, updates, and analytics

- [ ] Verify Namecheap Private Email SPF and DKIM.
- [ ] Start DMARC in an appropriate reviewed policy and confirm alignment.
- [ ] Create one MailerLite audience with consumer and wholesale groups.
- [ ] Enable double opt-in and test subscription plus unsubscribe.
- [ ] Authenticate the sender domain without creating a second SPF record.
- [ ] Add the verified MailerLite action to `PUBLIC_MAILERLITE_FORM_ACTION`.
- [ ] Create Cloudflare Web Analytics and add its token.
- [ ] Verify Google Search Console and submit `/sitemap.xml`.

## 6. Hosting and recovery

- [ ] Confirm valid HTTPS for both `redmountainsoap.com` and `www.redmountainsoap.com`.
- [ ] Only then enable the documented `www`-to-apex redirect.
- [ ] Enable 2FA on Namecheap, cPanel, GitHub, Square, MailerLite, and accounting.
- [ ] Download a full cPanel backup and document where it is stored.
- [ ] Deploy the exact verified `src/web/` artifact.
- [ ] Confirm the homepage, all six products, policies, 404 page, and calculator.
- [ ] Restore a previous Git revision in a rehearsal before relying on rollback.

## Final policy review

- [ ] Approve shipping destinations, handling time, and carrier language.
- [ ] Approve local-pickup instructions and privacy boundary.
- [ ] Approve the damaged-order reporting window.
- [ ] Approve the return/refund window and exceptions.
- [ ] Approve privacy disclosures for Square, MailerLite, Cloudflare, and email.
- [ ] Approve calculator disclaimer language.
