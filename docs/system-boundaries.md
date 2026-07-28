# System boundaries

Each kind of record has one owner. Exports and reports may copy data, but copies
do not silently become new masters.

| Responsibility | System of record | Website relationship |
|---|---|---|
| Brand copy, product stories, SEO | This repository | Built into static pages |
| Recipes, batches, lots, cure status, raw materials, production cost | Local Soap Suite | No private data is published |
| Sellable quantities, orders, payments, refunds, buyer history | Square | Store and checkout links only |
| Marketing consent and campaigns | MailerLite | Explicit opt-in form only |
| Wholesale prospects and follow-up | Private local pipeline | Blank template only in this repository |
| General ledger, tax liability, reconciliation, statements | Wave or accountant-selected ledger | No accounting data is published |
| Search indexing | Google Search Console | Sitemap and verification meta |
| Basic traffic and performance | Cloudflare Web Analytics | Optional public beacon |

## Reconciliation rules

- Square owns the final price and available-to-sell quantity at checkout.
- The website catalog is reconciled with Square before every release.
- The Soap Suite reports finished-goods movements and cost of goods sold.
- Accounting receives monthly summaries rather than individual production events.
- Buying does not subscribe a customer to marketing.
- MailerLite consent does not make MailerLite the customer or order system.
- No customer, prospect, tax, or production export belongs in this public repository.
