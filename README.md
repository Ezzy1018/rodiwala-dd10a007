# Rodiwala Source

# Rodiwala — Product, Conversion and Execution Plan

**Status:** Planning only. No website development authorised or started.  

**Prepared:** 5 September 2026  

**Launch market:** Delhi NCR and Uttar Pradesh  

**Primary contact:** Call or WhatsApp `9416165465`  

**Initial core products:** 10 mm aggregate, 20 mm aggregate, stone dust, M-sand/crushed sand and ready-mix concrete (RMC)

**Cost constraint:** The website and its operating tools should use free software and free tiers. The only expected unavoidable cost is a domain name, if a custom domain is wanted.

## TLDR

Rodiwala should launch as a practical construction-material sourcing and delivery partner, with five high-volume structural inputs as the fastest conversion path: 10 mm aggregate, 20 mm aggregate, stone dust, M-sand/crushed sand and ready-mix concrete. The website must not pretend to be an online store. Its job is to turn a contractor, builder, site engineer or homeowner with an immediate requirement into a complete, usable WhatsApp or call enquiry.

The first version should be static. The buyer does not need an account, checkout, dashboard or database. A focused page and a well-constructed WhatsApp link are enough to create the conversation. Add software only when it removes a proven operational problem.

The core promise is: **Tell us the material, quantity, site and required date. Rodiwala will confirm availability, delivered pricing and delivery feasibility.**

That is stronger and more believable than “best price”, “same-day delivery” or “all materials available” until those claims can be consistently proven.

## Planning boundary

This document is the current planning-phase deliverable. It defines the business model, product hierarchy, conversion behaviour, content requirements, free technology choices, measurement model, launch gates and open decisions. It does not define final colours, typography, imagery style, page mock-ups or animation details.

The next phase begins only after the product and operating assumptions in this document are accepted. It will create the visual direction, information hierarchy at screen level, component states, responsive layouts and content presentation. Implementation follows that design phase. Nothing in this document authorises website construction yet.

The Vercel Workflow guidance was reviewed for the later build process. Durable workflows are designed for retryable, resumable, long-running or approval-based operations. Rodiwala's planned static MVP has no such runtime operation, so a workflow engine is intentionally excluded from the architecture.

---

## 1. Product decision

### What Rodiwala is

Rodiwala is a lead-generation and fulfilment business for construction materials in Delhi NCR and Uttar Pradesh. It receives requirements, confirms material availability and delivery feasibility, gives a quote, and coordinates fulfilment.

It is **not** an e-commerce catalogue with fixed public pricing. Aggregate pricing varies by grade, source, quantity, vehicle, delivery distance, site access, taxes and market movement. A “price per tonne” widget would quickly become inaccurate and create disputes.

### What the site will sell at launch

| Tier | Materials | Website treatment | Reason |

|---|---|---|---|

| Core range | 10 mm aggregate, 20 mm aggregate, stone dust, M-sand/crushed sand, ready-mix concrete | Prominent home-page cards, dedicated high-intent pages and quote flows | High-volume materials around concrete, base/filling and structural work; commercially meaningful for site delivery |

| Sourced range | Stone dust, sand, bricks/blocks, cement, TMT steel, pavers, RMC and other project materials | Catalogue cards and a guided “source another material” enquiry | Supports the stated broad sourcing model without pretending every product is stocked |

| Expansion range | Any product proven profitable and fulfilable in a service cluster | Dedicated page only after 10+ completed enquiries or a reliable supply arrangement | Stops the site from becoming a thin, unmaintained catalogue |

“All construction materials” can be used as a sourcing capability only if the supporting copy says: “Share your requirement. Availability and delivery are confirmed before quoting.”

### Why these five are the core range

This is a commercial decision based on the high-volume part of a construction site's workflow. It is not a claim that these are the five biggest materials in every project.

| Core product | Buyer intent | Required quote inputs | Operational caution |

|---|---|---|---|

| 10 mm aggregate | RCC, RMC and finer concrete requirement | quantity, unit, site, date | Do not prescribe mix suitability |

| 20 mm aggregate | Common concrete and base-related requirement | quantity, unit, site, date | Confirm grade/source before quote |

| Stone dust | Filling, levelling, paver bedding and relevant site work | quantity, unit, site access | “Dust” is not one universal specification; state the actual supplied material |

| M-sand / crushed sand | Fine aggregate, masonry and concrete-related requirements | application, quantity, unit, site, date | Confirm the exact type and suitability with buyer/engineer where needed |

| RMC | Time-sensitive structural pour | grade/specification, cubic metres, pump need, site, pour date/time | Lead with RMC only when a reliable batching/dispatch partner and acceptance process exist |

Local competitor catalogues consistently place aggregate, dust, sand and RMC among their structural-material ranges. Delhi public procurement material descriptions also identify 10 mm/20 mm aggregate, stone dust and M-sand as distinct available construction inputs. This supports the category choice but does not replace Rodiwala's own supply validation. [Delhi Jal Board tender reference](https://delhijalboard.delhi.gov.in/sites/default/files/Jalboard/tender/press_nit_10_25-26_flowmeter.pdf)

### Customer segments and priority

1. **Primary: contractors, civil contractors, site engineers and small builders.** They typically know the grade, quantity, delivery location and date. They are higher-value and repeatable.

2. **Secondary: independent homeowners and house-construction supervisors.** They need more guidance and often do not know the correct grade or quantity.

3. **Later: developers and institutional buyers.** These need quotation workflows, credit, compliance documents and account management. Do not lead the MVP around them.

### The actual buyer problem

The buyer is not searching for a pretty material catalogue. They are trying to avoid five risks:

- wrong grade or unsuitable material;

- unclear delivered price;

- shortage or late truck;

- wrong quantity or weighing dispute;

- a supplier who stops responding after taking an enquiry.

The website should lower these risks through transparent process, accurate requirements capture, real photos and fast human response. It must not make technical or quality guarantees without evidence.

---

## 2. Competitor research and strategic response

### What Rodi Dust currently does

The reviewed competitor markets a broad building-material catalogue, including aggregate, dust, sand, bricks, RMC, cement, steel and pavers. Its aggregate page lists 10 mm and 20 mm rodi alongside larger grades, while the homepage positions competitive price, material quality and on-time delivery as its main benefits. It also has educational material pages, calculators, reviews and a basic enquiry form. [Rodi Dust homepage](https://www.rodidust.com/index.html) and [aggregate page](https://www.rodidust.com/aggregate.html)

### What to learn, not copy

| Competitor signal | What it proves | Rodiwala response |

|---|---|---|

| Broad material range | Buyers value one contact for more than aggregate | Keep “source any material” but organise it by requirement rather than a giant navigation menu |

| Product education and calculators | Buyers need help translating a site requirement into an order | Add useful aggregate guidance and a guarded estimator later; never present its output as an engineering recommendation |

| Prominent phone enquiries | Urgent buyers prefer immediate human contact | Persistent mobile Call and WhatsApp actions; capture the reason for contact before the handoff |

| Repeated generic forms | The competitor accepts incomplete requirements | Rodiwala’s WhatsApp selector prepares material, size, quantity, delivery pin code/locality and required date |

| Strong superlative claims and testimonials | The market expects proof | Use only customer reviews, site photographs, delivery proof and business facts that Rodiwala can verify |

### Clear opportunity

Rodiwala should be the **easier-to-brief supplier**. Its advantage is not a fancier design. It is a conversion path that gives a sales person the information needed to quote without a second round of questions.

### Competitive traps to avoid

- Do not copy reviews, project logos, product copy, images or claims from Rodi Dust.

- Do not claim “unbeatable prices”, “100% genuine” or “on-time delivery” unless the company can define and substantiate them.

- Do not make 20 cloned city pages. Google defines doorway abuse as pages made mainly to rank for similar queries. Build a locality page only when it contains a real delivery workflow, original proof and relevant service detail. [Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies)

- Do not claim a product conforms to IS 383 or any other standard until the particular supplier, grade and supporting test documentation are verified. IS 383:2016 covers coarse and fine aggregates used in concrete, but website claims must describe the actual supplied material. [BIS IS 383 reference](https://www.services.bis.gov.in/tmp/tbl5_2024-11-10_11.pdf)

---

## 3. Positioning and messaging system

### Positioning statement

**Rodiwala helps Delhi NCR and UP construction sites source and arrange delivery of core materials including aggregate, stone dust, M-sand and ready-mix concrete.**

### Homepage message hierarchy

**H1:** Core Construction Materials, Delivered for Your Site  

**Support:** 10 mm & 20 mm aggregate, stone dust, M-sand and ready-mix concrete. Share your quantity, site location and required date. Rodiwala will confirm availability and delivered pricing for your requirement.  

**Primary CTA:** Get Quote on WhatsApp  

**Secondary CTA:** Call 9416165465  

**Tertiary path:** Need another material? Send your requirement.

Do not put “Delhi NCR and UP” into every line of copy. State it once near the hero and use location qualifiers naturally on relevant pages.

### Voice

Use plain English with familiar Indian construction terms. Keep important labels bilingual where useful: “Aggregate (Rodi)”, “10 mm Rodi”, “20 mm Rodi”. Hindi landing pages are a Phase 2 decision, only after confirming customer language and search demand. A half-translated site will hurt trust.

### Trust hierarchy

1. Real, dated material and loading/delivery photos.

2. A visible, responsive phone and WhatsApp contact.

3. Clear scope: material, delivery coverage and quote process.

4. Verified Google reviews, displayed with source and permission where appropriate.

5. Legal business data such as GSTIN, business address and hours, once provided.

6. Supplier test reports or documents only when they belong to the material being quoted.

---

## 4. The conversion system

### One primary journey

```text

Search / ad / referral

  → relevant material or locality page

  → understand material and delivery process

  → enter requirement details

  → WhatsApp opens with completed message

  → customer sends message or calls

  → Rodiwala qualifies and quotes

  → order / lost reason recorded

```

### WhatsApp flow

Use the official click-to-chat format with the number in international format: `https://wa.me/919416165465?text=...`. It can open a chat without the buyer saving the number and supports an encoded pre-filled message. [WhatsApp Help](https://faq.whatsapp.com/5913398998672934)

The default pre-filled message must carry attribution and requirement details:

> Hi Rodiwala, I need [10 mm / 20 mm / other] aggregate. Quantity: [value and unit]. Delivery location: [locality or pin code]. Required by: [date]. I found you on: [source page]. Please confirm availability and delivered price.

The site records `whatsapp_click`, but calls it an **intent signal**, not a lead. A lead becomes received only when the person sends a WhatsApp message or calls with a usable requirement. This distinction prevents false reporting.

### Quote path

The MVP should not depend on a website form. The primary quote path is a small requirement selector that builds a WhatsApp message in the browser. It does not store personal information and it does not need a backend. A phone call is always visible beside it.

If the team later needs a form for visitors who cannot use WhatsApp, add a free Google Form or a simple Cloudflare Pages Function only after agreeing who will monitor it. The form is a fallback, not the central conversion path. Do not add Formspree, CRM, marketing automation or a paid lead platform to the MVP.

| Field | Required | Why it matters |

|---|---:|---|

| Material | Yes | Routes the enquiry |

| Grade / size | Required for aggregate; context-specific for sand/RMC | Stops 10 mm and 20 mm ambiguity and captures the required RMC grade/specification |

| Quantity | Optional, with “I need help estimating” | Helps produce a useful quote without blocking homeowners |

| Unit | Optional: tonne, truck, cubic ft, bags, cubic metre or unknown | Makes the message commercially useful |

| Delivery locality / pin code | Yes | Determines serviceability and freight |

| Required date | Optional: today, tomorrow, this week, flexible | Helps prioritise urgency |

| Site access / notes | Optional | Useful for vehicle and unloading planning |

The selector should not ask for email or name before WhatsApp opens. The buyer can introduce themselves in the chat. This keeps the first interaction fast and avoids collecting personal information that the MVP cannot responsibly store.

### Call flow

Every phone CTA uses `tel:+919416165465`. On desktop, show the number beside the CTA. Record `call_click`; do not claim an answered call was a lead until the team records the outcome.

### Mobile sticky action bar

Three equal, labelled actions at the bottom: **Call**, **WhatsApp**, **Get Quote**. It appears after the hero, sits above browser controls and respects safe-area spacing. It must not cover the requirement selector, cookies or important content.

### What happens after a lead

| SLA | Owner action | Outcome |

|---|---|---|

| Within 5 minutes during business hours | Acknowledge WhatsApp/call and confirm missing facts | Buyer knows the request is active |

| Same conversation | Confirm material, size, quantity, location, date and site access | Lead is qualified or labelled incomplete |

| After supply/freight check | Send written quote with delivered or ex-yard basis clearly stated | Buyer can compare fairly |

| Before despatch | Confirm payment terms, vehicle type, delivery timing and contact at site | Avoids delivery failure |

| After order/loss | Mark won, lost or follow-up, with reason | Shows which traffic and materials make money |

If no one can respond promptly, do not buy urgent-intent ads. Slow response will waste paid clicks and damage the brand.

---

## 5. Information architecture and page requirements

### MVP routes

| Route | Job | Essential content | Primary action |

|---|---|---|---|

| `/` | Establish offer and convert urgent buyers | Hero, five core material cards, how quoting works, sourcing range, real proof, delivery enquiry | WhatsApp quote |

| `/aggregate` | Capture category demand | 10/20 mm comparison, applications, buying checklist, enquiry | Select a grade |

| `/aggregate/10-mm-rodi` | Capture exact intent | What it is, common applications, what to specify, real product photo, selector prefilled to 10 mm | Quote 10 mm |

| `/aggregate/20-mm-rodi` | Capture exact intent | Same structure, accurately specific to 20 mm | Quote 20 mm |

| `/stone-dust` | Capture filling, levelling and paver-base demand | Actual dust type, common applications, quote checklist, product image | Quote stone dust |

| `/m-sand` | Capture fine-aggregate demand | Exact sand type, common applications, quote checklist, product image | Quote M-sand |

| `/ready-mix-concrete` | Capture time-sensitive pour demand | Grade/specification, volume, pump/site-access and date/time questions | Request RMC quote |

| `/materials` | Show broader sourcing capability | Material categories, “availability confirmed on quote”, other-material selector | Send requirement |

| `/delivery-areas` | Set realistic expectations | “Delhi NCR and UP”, delivery-check selector, not a false exhaustive map | Check delivery |

| `/how-it-works` | Build confidence | Four-step quote-to-delivery process, what buyer needs to share | Start requirement |

| `/about` | Establish real business identity | Actual story, team/contact, operating approach, legal information when approved | Contact team |

| `/contact` | Immediate contact | Call, WhatsApp, hours, address only if public, requirement selector | Call or WhatsApp |

| `/request-quote` | Full qualification | The complete requirement selector and expected response window | Continue to WhatsApp |

| `/guides/...` | Earn search demand and help buyers | Original, reviewed guides and FAQs | Get a requirement-specific quote |

### Homepage section order

1. Header: logo, Material range, Delivery areas, How it works, Call and “Get Quote”.

2. Hero: five-core-material focus, delivery check and two conversion actions.

3. Immediate quote panel: five core choices plus “other material”, location and required date.

4. “Get a quote for a core material”: direct cards for 10 mm aggregate, 20 mm aggregate, stone dust, M-sand and RMC. Each card has an honest one-line use case, WhatsApp quote and call.

5. “What else can Rodiwala arrange”: cement, TMT, bricks/blocks, pavers and other categories grouped without competing with core cards.

6. “How your quote is confirmed”: requirements → availability check → price → delivery coordination.

7. Material guide: 10 mm, 20 mm, dust, M-sand and RMC cards. Use “common applications” and “confirm suitability with your engineer/contractor” where applicable.

8. Delivery coverage: Delhi NCR plus UP, with the honest statement that delivery depends on location, quantity and vehicle access.

9. Real proof: first-party site/loading images, reviews if verified, business identity.

10. FAQ: actual buyer questions.

11. Final CTA and footer.

### Product content rule

For every material page, use this template:

- what the material is, in plain language;

- available variants only where confirmed;

- common applications, not engineering specifications;

- what the buyer should share for a quote;

- source/grade documentation only if verified;

- related materials;

- quote CTA with product context passed through.

No fixed “quality class”, source, density, standard, stock status, price, delivery time or technical suitability claim without business evidence.

---

## 6. SEO and demand acquisition plan

### Search strategy

Start with intent that has a direct commercial outcome:

- `10 mm aggregate supplier [city]`

- `10 mm rodi price [city]`

- `20 mm aggregate supplier [city]`

- `20 mm rodi delivery [city]`

- `stone dust supplier [city]`

- `M-sand supplier [city]`

- `ready-mix concrete supplier [city]`

- `aggregate supplier near me`

- `rodi supplier [locality]`

- `construction material supplier [area]`

The final city and locality list must be based on the actual dispatch base, profitable freight radius and fulfilment reliability. “UP” is a state, not a usable delivery promise. The plan therefore uses a **coverage matrix** before we publish locality pages.

| Coverage status | Definition | Website language |

|---|---|---|

| Core | Regular, profitable delivery with known vehicle options | “Regular delivery enquiries accepted” |

| Extended | Possible after quantity and freight check | “Check delivery availability” |

| Not served | No workable route | Do not target or create an SEO page |

### Local foundation

Create and verify one Google Business Profile for the real business. Use accurate category, phone, service area, hours, images, website and business data. Google says local visibility is mainly affected by relevance, distance and prominence, and that complete, accurate information plus reviews and photos help customers assess a business. [Google Business Profile guidance](https://support.google.com/business/answer/7091?hl=en)

Do not create fictitious office addresses or multiple profiles to appear local. Do not list localities on the site that the business cannot service.

### Content roadmap

**Month 1:** 10 mm, 20 mm, stone dust, M-sand and RMC pages; aggregate category; delivery-area page; and 5 buyer FAQs.  

**Month 2:** One delivery-cluster page only for a proven core area; guide on how to request aggregate; guide on selecting a supplier; case proof if available.  

**Month 3 onwards:** Add one page or guide only when supported by actual questions, leads or sales data.

Useful initial guides:

- “What to include when requesting a 10 mm or 20 mm aggregate quote”

- “Tonne, truck or cubic feet: how to state your aggregate requirement”

- “How site access affects aggregate delivery”

- “10 mm and 20 mm aggregate: what to confirm with your contractor or engineer”

These should educate without prescribing structural design. Have a knowledgeable person review material statements before publishing.

### Structured data and technical search requirements

Use accurate JSON-LD for `Organization` / `LocalBusiness`, `BreadcrumbList` and pages that qualify. Include only real name, phone, area, hours, logo, address and socials. Google recommends fewer, complete and accurate fields over incomplete or misleading markup, and structured data does not guarantee a rich result. [Google structured-data guidance](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)

Product schema can be considered later when pages represent a clearly defined product. Do not claim a public price or availability if quotes are individually confirmed.

---

## 7. Design system and content production

### Design direction

The desired experience is “reliable site operations”, not corporate construction theatre. Use a warm off-white background, charcoal text, one strong earth/stone accent and a high-contrast action colour. The final palette must follow an approved logo or brand mark.

- Large, legible type and strong spacing.

- Actual aggregate piles, loading, trucks, weighing/delivery and site imagery.

- Material texture used sparingly, never as a distracting background.

- Simple line icons only where they clarify a process.

- Minimal animation. The buyer may be on a low-end phone and weak site network.

### Essential assets before development

| Asset | Minimum requirement | Owner |

|---|---|---|

| Brand | Rodiwala wordmark/logo, preferred colours, business legal name | Business |

| Contacts | Confirmation that 9416165465 is WhatsApp Business and call-capable | Business |

| Material imagery | 5–10 original photos each for the five core products at stockpile/loading/site scale. For RMC, show only a real partner or delivery arrangement. | Business/photographer |

| Delivery proof | Real vehicle/delivery images, only with permission | Business |

| Business facts | Address/public service base, hours, GSTIN if to be shown, actual service clusters | Business |

| Reviews | Verifiable Google reviews or written approvals | Business |

| Product inputs | Grade/source/measurement/available unit and supporting documents | Supply/operations |

Do not use AI-generated images as proof of real supply or delivery. They may be used only as neutral decorative visual support and should not depict a fictional truck, plant, customer or project.

---

## 8. Free-first technical architecture for the junior developer

### Recommended build

Use a static site generated with Astro and TypeScript, or Next.js static export if the developer already knows Next.js. Use ordinary CSS or Tailwind CSS, both free and open source. Keep product, coverage and business data in editable content files, separate from page components. Do not add a server, database or API to the MVP.

The site needs only three runtime behaviours: mobile navigation, the requirement selector that builds the WhatsApp URL, and event tracking. `tel:+919416165465` handles calls. `https://wa.me/919416165465?text=...` handles WhatsApp. The current WhatsApp click-to-chat format supports a URL-encoded pre-filled message. [WhatsApp Help](https://faq.whatsapp.com/5913398998672934)

### Logical modules

```text

app/                    routes, metadata, sitemap, robots

components/             layout, quote flow, product cards, CTA controls

content/                materials, service coverage, FAQs, guides

lib/                    validation, WhatsApp builder, analytics, anti-spam

analytics/              privacy-aware event names and tracking wrapper

```

### Free operating record

WhatsApp and phone leads are recorded by the person handling enquiries in a shared Google Sheet or LibreOffice file. The columns should be: date, source page, material, grade, quantity/unit, locality, status, quote sent, outcome and lost reason. Do not copy a buyer's phone number into analytics. Add a database only when a free sheet is no longer reliable for the volume of enquiries.

### Form behaviour

- Validate selector choices and encode all WhatsApp message parameters safely.

- Never put secrets or private customer information in the static bundle.

- If a future form is added, validate on the server, add rate limiting and use Cloudflare Turnstile in managed mode, which Cloudflare documents as free. [Turnstile reference](https://blog.cloudflare.com/turnstile-ga/)

### Performance and accessibility gates

- Use responsive image sizing, WebP/AVIF where practical, fixed image dimensions and lazy loading below the fold.

- Pre-render every marketing page at build time; keep interactive JavaScript limited to the selector, menu and tracking controls.

- Every conversion control must work with keyboard and screen readers.

- Form errors must be announced and connected to their fields.

- Target field data at the 75th percentile: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1. [web.dev thresholds](https://web.dev/articles/defining-core-web-vitals-thresholds)

- Do not add live availability or pricing calls to the static MVP. If the site later moves to Next.js server rendering, apply the current caching guidance to marketing content and keep any live operational data dynamic. [Next.js caching guidance](https://nextjs.org/docs/app/getting-started/caching)

### Integrations

| Integration | MVP requirement | Later option |

|---|---|---|

| WhatsApp | Click-to-chat with contextual message | WhatsApp Business Platform only when volume and opt-in process justify it |

| Notifications | WhatsApp and phone process | Free email alert only if a form is later added |

| Lead store | Shared Google Sheet or LibreOffice file maintained by the operator | Database/CRM only after volume justifies it |

| Analytics | Cloudflare Web Analytics plus Microsoft Clarity; add GA4 only if paid search or detailed event reporting is needed | Offline call attribution and CRM sync |

| Maps | Link/embedded map only if a real visitor-facing address exists | Google Business Profile integration |

### Free tool stack

| Need | Recommended free option | Use in MVP | Limits and notes |

|---|---|---|---|

| Source control | GitHub Free | Store code and content | Keep secrets out of the repository |

| Hosting and CDN | Cloudflare Pages Free | Deploy static build and attach a domain | Free plan has build and file limits, far above this site's needs; custom domain registration is separate. [Pages limits](https://developers.cloudflare.com/pages/platform/limits/) |

| SSL and DNS | Cloudflare Free | HTTPS, DNS and basic security | Configure only the needed records |

| Performance analytics | Cloudflare Web Analytics | Page views and real-user performance | Free and privacy-first; it does not collect visitor personal data. [Cloudflare Web Analytics](https://developers.cloudflare.com/web-analytics/about/) |

| Behaviour analytics | Microsoft Clarity Free | Heatmaps, scroll and CTA behaviour | Free with unlimited sites and traffic; mask any fields if a future form is added. [Clarity pricing](https://clarity.microsoft.com/pricing) |

| Search measurement | Google Search Console | Indexing, queries and errors | Free; no extra library is needed |

| Detailed events | Google Analytics 4 | Optional CTA event reporting | Free, but add only when the business needs it and provide appropriate privacy notice. [GA4 events](https://developers.google.com/analytics/devguides/collection/ga4/events) |

| Images | Squoosh, GIMP or ImageMagick | Resize and compress original photos | Free tools; keep originals outside the web bundle |

| Icons | Lucide or inline SVG | Product and action icons | Free open-source icons; do not add a UI library for a few icons |

| AI during production | Local Ollama models or an already available free AI assistant | Draft copy variants, alt text and QA checklists | No AI API should run in production; verify every material and business claim manually |

For proactive WhatsApp messages beyond a buyer-initiated conversation, implement explicit consent and policy-compliant templates. WhatsApp’s business policies require accurate business information and impose consent requirements for business-initiated contact. [WhatsApp Business policy](https://business.whatsapp.com/policy/preview?lang=id_ID)

---

## 9. Measurement and operating dashboard

### Events

| Event | Meaning | Counts as a lead? |

|---|---|---:|

| `view_material` | Product interest | No |

| `quote_selector_start` | Requirement selector opened | No |

| `whatsapp_message_build` | A contextual message was generated | No |

| `whatsapp_click` | Chat opened | No, intent only |

| `call_click` | Call initiated from website | No, intent only |

| `lead_working` | Team marked the WhatsApp/call enquiry as being handled in the sheet | No, process status |

| `lead_qualified` | Operator marked it serviceable and viable | Yes, qualified |

| `quote_sent` | Price sent | No, commercial milestone |

| `order_won` | Supply agreed | Yes, converted |

| `lead_lost` | Operator marked it not converted | No, but mandatory loss reason |

GA4’s recommended lead events include `generate_lead`, `qualify_lead`, `working_lead`, `close_convert_lead` and `close_unconvert_lead`. In the static MVP, only use `generate_lead` if a future form is submitted. A WhatsApp button click is an intent event, not a confirmed lead, because the site cannot know whether the visitor actually sent the message. Keep operational status in the free sheet. [GA4 event guidance](https://support.google.com/analytics/answer/9267735)

### Weekly review

Review by material, size, locality, device, landing page and source:

- received leads;

- contact rate within SLA;

- qualified rate;

- quote-to-order rate;

- average order value and gross margin where available;

- unserviceable geography;

- top lost reasons;

- WhatsApp clicks versus actual completed conversations.

Do not optimise toward the cheapest lead. Optimise toward qualified demand and profitable completed orders.

---

## 10. Delivery plan, acceptance criteria and release gates

### Phase 0 — business readiness

**Output:** approved coverage matrix, supported materials list, business proof pack, response owner and hours, lead status definitions.  

**Blocker:** Do not launch any serious traffic campaign until a human response owner and business-hours policy exist.

### Phase 1 — strategy and content

**Output:** final positioning, approved copy, visual direction, content inventory, photo shot list, SEO keyword map and page briefs.  

**Acceptance:** Every public claim has an evidence owner or is removed.

### Phase 2 — UX and visual design

**Output:** mobile-first home, five core product pages, quote and delivery-area designs; desktop variants; reusable component specification.  

**Acceptance:** A buyer can start a quote for any core product within 30 seconds on a 360px-wide phone viewport.

### Phase 3 — build

**Output:** production-ready responsive static site, data-driven pages, WhatsApp/call flows, analytics events and technical SEO.  

**Acceptance:** No hardcoded product content inside components; product context passes from every CTA into the selector and WhatsApp message.

### Phase 4 — test and launch preparation

**Output:** test report, completed test leads, staff handover, privacy/cookie copy, Google Business Profile readiness and Search Console property.  

**Acceptance:**

- Every CTA uses the correct number and message.

- WhatsApp opens with the correct material, quantity, locality and source context.

- Duplicate and invalid submissions are handled clearly.

- Call/WhatsApp paths work on Android, iPhone and desktop fallback.

- Metadata, canonical URLs, sitemap, robots and structured data validate.

- No broken links/images, console errors or unexpected layout shift.

- Keyboard journey and selector validation are usable.

- Real business claims and photos have sign-off.

### Phase 5 — controlled launch and learning

**Output:** small launch in proven delivery clusters, weekly demand dashboard, backlog based on lead evidence.  

**Decision after 30 days:** Expand materials or areas only where enquiry quality, fulfilment reliability and margin support it.

---

## 11. Product-owner defaults where facts are still missing

These are deliberate temporary decisions, not hidden assumptions:

| Unknown | Default for planning | What validates or changes it |

|---|---|---|

| Exact service locations | State Delhi NCR + UP, then prompt for locality/pin code | Coverage matrix from operations |

| Minimum order | Do not publish one | Freight and margin rules |

| Public price | “Quote based on requirement” | Stable pricing model and legal approval |

| Delivery promise | “Availability and delivery confirmed before quote” | Measured SLA and fulfilment history |

| Product quality claim | Describe material and uses only | Test reports/supplier evidence |

| Address and hours | Omit until supplied | Verified business information |

| Languages | English with familiar Hindi trade terms | Lead language data |

| Reviews/projects | Omit until independently verifiable | Written permission or Google review source |

## 12. First decisions required before design starts

1. Confirm the legal business name, actual operating/dispatch base and public address policy.

2. Confirm that `9416165465` is the customer-facing WhatsApp Business number and name the person responsible for replies.

3. Define business hours and the response SLA the team can honour.

4. Build the initial coverage matrix: core Delhi NCR localities, core UP localities, extended zone and no-go zone.

5. Define the minimum viable order and the unit used for each core-product quote, including cubic metres and pour lead time for RMC.

6. Identify material sources and what documents can substantiate grade/quality language.

7. Provide real aggregate, loading and delivery photographs.

8. Decide where each lead will be tracked: simple shared sheet for the first weeks or CRM/database from day one.

Those facts do not stop strategic planning. They do stop us from publishing promises that the operations team cannot fulfil.

## 13. Free-only MVP boundary

The first release is complete when a visitor can understand the five core products, build a useful enquiry, reach WhatsApp or call, and the team can review basic performance. It does not need a CMS, login, online payment, quote automation, inventory feed, CRM, chatbot, WhatsApp API, paid analytics, paid form service, paid image library or AI API.

The free implementation is:

```text

GitHub Free

  → Cloudflare Pages Free

  → Cloudflare DNS / SSL / basic protection

  → Cloudflare Web Analytics for performance

  → Microsoft Clarity for behaviour patterns

  → Google Search Console for search visibility

  → WhatsApp and phone for enquiries

  → Google Sheets or LibreOffice for optional manual lead outcomes

```

If a custom domain is required, the domain registration is the only planned non-free item. A free hosting subdomain can be used during development and testing. Avoid committing to a vendor whose free tier is the only reason the business can operate. Keep the site exportable as static HTML/CSS/JS so it can be moved later.

### Free-first release test

- A visitor can reach a core product and open a contextual WhatsApp message in two taps on mobile.

- A visitor can call `9416165465` in one tap.

- A visitor can select “other material” and send an open-ended requirement.

- No visitor information is stored in the website code or analytics payload.

- The operator has a free sheet and a defined daily routine for recording received enquiries.

- Cloudflare Web Analytics shows page performance, and Clarity shows whether visitors reach the core cards and use the CTAs.

- The site can be rebuilt and deployed from the repository without a paid service.

## Sources used

- [Rodi Dust homepage](https://www.rodidust.com/index.html), accessed 5 September 2026.

- [Rodi Dust aggregate page](https://www.rodidust.com/aggregate.html), accessed 5 September 2026.

- [Delhi Jal Board: C&D material descriptions](https://delhijalboard.delhi.gov.in/sites/default/files/Jalboard/tender/press_nit_10_25-26_flowmeter.pdf), accessed 5 September 2026.

- [Delhi NCR competitor category signal: BuildMart](https://buildmart-india.com/products), accessed 5 September 2026.

- [BIS: IS 383:2016 reference](https://www.services.bis.gov.in/tmp/tbl5_2024-11-10_11.pdf).

- [WhatsApp: Click to chat](https://faq.whatsapp.com/5913398998672934).

- [WhatsApp Business policy](https://business.whatsapp.com/policy/preview?lang=id_ID).

- [Google Business Profile: local ranking](https://support.google.com/business/answer/7091?hl=en).

- [Google: structured data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data).

- [Google: spam policies](https://developers.google.com/search/docs/essentials/spam-policies).

- [GA4 lead events](https://support.google.com/analytics/answer/9267735).

- [web.dev: Core Web Vitals thresholds](https://web.dev/articles/defining-core-web-vitals-thresholds).

- [Next.js: caching](https://nextjs.org/docs/app/getting-started/caching).



Build the taste and layout from the references I have provided. I have even incorporated the branding strategy and guide to it. That's the core of how the design is to be used to build it. That's the first image and the rest of the images are the references for the layout and structure, which we can leverage and learn from to build the website. Build this website for me

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://rodiwala.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6a9ed028-bf47-4d4f-a2f6-558e7bade31b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
