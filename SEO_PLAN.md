# Rodiwala search growth plan

## TLDR

The fastest realistic win is to own branded searches for `Rodiwala`, `Rodi Wala` and close spelling variants, then build authority for local commercial searches such as `construction material supplier Delhi NCR`, `buy construction material Delhi NCR`, `rodi supplier`, `stone dust supplier`, `M-sand supplier` and `RMC supplier`.

The broad query `construction material` is highly competitive. It should be treated as a long-term category goal, not the first success criterion. Page one for a brand query can become realistic after indexing and consistent business signals. Page one for local commercial terms will require a verified local presence, reviews, useful pages and external references over several months.

## What has been implemented in this repository

- Reworked the homepage title, description and H1 around buying construction materials in Delhi NCR and Uttar Pradesh.
- Added `/buy-construction-material` as a dedicated high-intent landing page.
- Added unique canonical URLs, robots directives, Open Graph metadata and Twitter metadata to the key routes.
- Added server-rendered Organization, WebSite, Service and FAQ JSON-LD without inventing an address, reviews, prices, certifications or opening hours.
- Added `public/robots.txt` allowances for major search and answer-engine crawlers.
- Added `public/llms.txt` with the catalogue, buying process, delivery boundary and contact path.
- Added the buying page to the XML sitemap and linked it from the main navigation.
- Improved hero image alt text on content and material pages.

## Keyword map

| Intent | Primary targets | Best page | Notes |
| --- | --- | --- | --- |
| Brand | `Rodiwala`, `Rodi Wala`, `Roadi Wala` | Homepage, Google Business Profile | Monitor spelling variants; do not stuff misspellings into every page. |
| Local buying | `buy construction material Delhi NCR`, `construction material supplier Delhi NCR` | `/buy-construction-material`, homepage | Needs real service-area proof and external local signals. |
| Aggregate | `10 mm rodi supplier`, `20 mm rodi supplier`, `aggregate supplier Delhi NCR` | Material pages and `/aggregate` | Add verified specifications, units and delivery details when available. |
| Material-specific | `stone dust supplier`, `M-sand supplier`, `RMC supplier Delhi NCR` | `/stone-dust`, `/m-sand`, `/ready-mix-concrete` | Add technical details only after contractor or supplier review. |
| Informational | `10 mm vs 20 mm aggregate`, `M-sand uses`, `what is stone dust` | Guides to be created | Each guide needs first-hand input, an author and a review date. |
| Location | `construction material supplier Noida`, `... Ghaziabad`, `... Greater Noida` | Location pages only after confirmation | Do not create thin doorway pages or claim cities that are not actually served. |

## Required business actions

These cannot be completed safely from the repository alone:

1. Connect a custom domain such as the final approved Rodiwala domain. Replace the current Lovable URL in `src/lib/seo.ts`, `src/routes/sitemap[.]xml.ts` and `public/llms.txt` after the domain is live.
2. Create or claim a Google Business Profile. Use the exact business name, phone, website, service area, category, hours and verification method that match the real business. Do not use a fake office address.
3. Verify the site in Google Search Console and Bing Webmaster Tools. Submit the sitemap, inspect the homepage and buying page, and request indexing after every major launch.
4. Confirm the canonical business details: legal/public name, phone, WhatsApp number, operating hours, service cities, address or service-area model, email and social profiles.
5. Collect genuine customer proof: delivery photos, project type, material supplied, locality and permission to publish. Ask real customers for reviews on the Google Business Profile. Never buy or fabricate reviews.
6. Add real business details to the Contact and About pages once approved. This will make local structured data and local landing pages materially stronger.

## 90-day execution sequence

### Days 1–7: establish the entity

- Connect the final domain and redirect the Lovable subdomain if the hosting setup supports it.
- Verify Google Search Console and submit `/sitemap.xml`.
- Claim and verify Google Business Profile.
- Add the final category, service area, phone, hours, website and approved photos.
- Test the homepage, buying page and material pages in URL Inspection.
- Record baseline impressions, clicks, queries and indexed URLs.

### Weeks 2–4: make the commercial pages useful

- Add verified details to every material page: available units, typical order context, source or quality basis, lead time range and delivery limits.
- Add one reviewed guide per week: `10 mm vs 20 mm aggregate`, `M-sand vs river sand`, `stone dust uses`, and `how to request an RMC quote`.
- Add an author or reviewer line to technical guidance. A contractor or engineer should review suitability claims.
- Add unique pages for Noida, Ghaziabad, Greater Noida, Gurgaon or other cities only after Rodiwala confirms actual service coverage and each page has unique local information.
- Publish original delivery or yard images with accurate captions and alt text.

### Weeks 5–8: build local authority

- Keep the Google Business Profile active with real photos, service updates and completed work where permission exists.
- List the business consistently in relevant Indian and local directories using the same name, phone and URL.
- Ask material partners, contractors, architects, local associations and project collaborators for genuine website mentions where there is a real relationship.
- Create one useful YouTube or short-form video for each major material. Link the relevant landing page in the description.
- Add internal links from every guide to the relevant product page and from product pages back to the buying page.

### Weeks 9–12: measure and improve

- Review Search Console queries weekly and improve pages that receive impressions but weak clicks.
- Track branded searches separately from non-branded commercial searches.
- Track WhatsApp clicks, phone clicks, quote requests, qualified enquiries and delivered orders. Rankings without enquiries are not a business win.
- Refresh titles and descriptions only when the query and page intent justify it. Avoid changing URLs without redirects.
- Consolidate duplicate or thin pages instead of publishing more near-identical location pages.

## Measurement dashboard

Track these in Search Console and the analytics system:

- Indexed pages and sitemap errors
- Impressions and clicks for brand variants
- Impressions and clicks for local commercial queries
- Average position by page, not only site-wide average
- WhatsApp click-through rate
- Phone click-through rate
- Qualified quote enquiries
- Enquiry-to-order conversion rate
- Google Business Profile views, calls, website actions and direction requests
- Number and quality of genuine reviews

The first useful milestone is not “rank for everything”. It is: the branded query is owned, the buying page is indexed, local profile actions are increasing, and non-branded pages begin receiving impressions for material-specific searches.

## Do not do these things

- Do not repeat `best`, `cheap`, `near me` or every city name unnaturally.
- Do not create dozens of pages that only swap the city name.
- Do not publish fake prices, stock, delivery times, reviews, certifications or addresses.
- Do not buy bulk backlinks or directory spam.
- Do not rely on `llms.txt`, schema or meta keywords as ranking shortcuts. They help machines understand the site, but they do not replace useful pages, a trusted business entity and external evidence.

## Official references

- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google Search sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Google Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [Google LocalBusiness structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google Business Profile](https://support.google.com/business/answer/7039811)
