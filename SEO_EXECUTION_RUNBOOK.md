# Rodiwala SEO execution runbook

## Mission

Make Rodiwala discoverable and credible for:

- `Rodiwala`
- `Rodi Wala`
- `Roadi Wala`
- `buy construction material`
- `construction material supplier India`
- `rodi supplier`
- `10 mm rodi supplier`
- `20 mm rodi supplier`
- `stone dust supplier`
- `M-sand supplier`
- `RMC supplier India`

The first milestone is to own the branded search result. The second is to earn impressions and enquiries for material-specific and commercial searches. A first-page organic ranking cannot be guaranteed by any agent. Do not claim that it has been achieved until a neutral Google search and Search Console data confirm it.

## How another AI must use this file

1. Read `AGENTS.md`, this file and `SEO_PLAN.md` before changing the repository.
2. Inspect the current repository and live URLs before making assumptions.
3. Execute the phases in order. Do not skip a failed launch or indexing gate.
4. Use only confirmed business facts. If a field is marked `REQUIRED INPUT`, stop that task and ask the owner for the fact.
5. Never fabricate an address, city coverage, price, stock level, delivery promise, review, certification, customer, backlink or partnership.
6. After every code change, run the validation commands in this file.
7. Report completed, blocked and owner-only actions separately.

## Current state at handoff

### Implemented in the repository

- Server-rendered titles, descriptions, canonicals, Open Graph metadata and robots metadata.
- Organization, WebSite, Service and FAQ JSON-LD where the claims are supported.
- Homepage positioning around quote-led construction-material sourcing.
- Dedicated `/buy-construction-material` page.
- Material pages for aggregate, stone dust, M-sand and ready-mix concrete.
- XML sitemap route and crawler-accessible `public/robots.txt`.
- `public/llms.txt` with the current catalogue and buying process.
- Internal navigation to the buying page.
- India-wide wording without claiming universal stock, fixed pricing or guaranteed delivery.

### Known launch blocker

The code in GitHub `main` includes the new buying page, but the live Lovable deployment previously returned 404 for:

`https://rodiwala.lovable.app/buy-construction-material`

The live sitemap previously omitted that URL. The first execution task is therefore to publish the current build and re-run the launch gate. Do not submit an incomplete sitemap to Google.

### Execution status: 5 September 2026

- GitHub `main` is synced and clean after the latest Lovable commits were merged safely.
- Lovable now returns `200` for the priority routes, including `/buy-construction-material`.
- Lovable's sitemap now includes the buying page and material routes.
- A Git-connected Vercel production fallback is live at `https://rodiwala.vercel.app`; it also returns `200` for the priority routes.
- The Google Search Console HTML verification file is deployed at `https://rodiwala.vercel.app/googlee1858dd9e2bcdb57.html` and returns `200` with the exact token.
- The canonical URLs and sitemap currently prefer `https://rodiwala.lovable.app`.
- Google Search Console is not authenticated in the available browser session, so sitemap submission and URL Inspection remain owner-authorised actions.
- Google Business Profile is not authenticated in the available browser session, and business facts such as service areas and hours still require owner confirmation.

### Confirmed working facts currently safe to use

- Brand: Rodiwala.
- Alternate spellings: Rodi Wala and Roadi Wala.
- Business category: quote-led construction-material sourcing.
- Materials represented on the site: 10 mm aggregate, 20 mm aggregate, stone dust, M-sand/crushed sand and RMC.
- Public contact number currently represented in the site: `+91 94161 65465`.
- Current public host: `https://rodiwala.lovable.app`.

### REQUIRED INPUT: owner facts before local SEO or stronger commercial claims

- Approved legal/public business name.
- Final domain, if different from the Lovable host.
- Real operating address or confirmed service-area-only model.
- Cities, states and pin codes actually served.
- Business hours and holiday hours.
- Approved email and social profile URLs.
- Materials, grades, units, stock policy and minimum order information.
- Real delivery-feasibility rules and lead-time ranges.
- Approved customer photos, project details and review permissions.
- Google Business Profile ownership and verification access.

## Phase 0: production launch gate

### 0.1 Publish

Publish the latest `main` branch in the connected Lovable project. Do not force-push, rebase, amend or rewrite already-published history.

If Lovable is not authenticated, the owner must sign in and publish from the project dashboard. Do not request passwords or one-time codes in chat.

### 0.2 Validate source code

Run from the repository root:

```sh
bun install --frozen-lockfile
bun run build
git status --short --branch
```

The build must pass. Changed files must pass the repository lint configuration. Existing unrelated lint errors must be listed rather than silently fixed.

### 0.3 Validate the live deployment

After publishing, run:

```sh
base_url="https://rodiwala.lovable.app"
for path in \
  / \
  /buy-construction-material \
  /materials \
  /aggregate \
  /stone-dust \
  /m-sand \
  /ready-mix-concrete \
  /delivery-areas \
  /how-it-works \
  /contact \
  /sitemap.xml \
  /robots.txt; do
  code="$(curl -L -s -o /dev/null -w '%{http_code}' "${base_url}${path}")"
  printf '%-34s %s\n' "$path" "$code"
done
```

Required result: every listed URL returns `200`. A `404`, redirect loop, HTML error page or stale sitemap blocks the next phase.

### 0.4 Validate rendered SEO output

For the homepage, buying page and every material page, verify the rendered HTML contains:

- one meaningful `<title>`;
- one canonical URL matching the page;
- a useful meta description;
- an H1 matching the page intent;
- visible, server-rendered primary content;
- valid JSON-LD where implemented;
- links to the buying page and contact path.

Verify the live sitemap contains every indexable page and does not contain 404 URLs.

## Phase 1: indexing and search engines

These actions require an authenticated owner session. They cannot be completed from source code alone.

### Google Search Console

1. Add the exact production property.
2. Verify ownership using the approved method.
3. Submit `https://rodiwala.lovable.app/sitemap.xml`, or the final-domain sitemap after migration.
4. Inspect and request indexing for:
   - `/`
   - `/buy-construction-material`
   - `/materials`
   - `/aggregate`
   - `/aggregate/10-mm-rodi`
   - `/aggregate/20-mm-rodi`
   - `/stone-dust`
   - `/m-sand`
   - `/ready-mix-concrete`
   - `/delivery-areas`
   - `/how-it-works`
   - `/about`
   - `/contact`
5. Check Pages, Sitemaps, Core Web Vitals and Performance weekly.

Do not repeatedly request indexing for the same URL. Fix the page or deployment first.

### Bing Webmaster Tools

1. Add and verify the production property.
2. Submit the sitemap.
3. Inspect the homepage and buying page.
4. Enable IndexNow only if the hosting setup can publish the required key safely.

## Phase 2: establish the real business entity

### Google Business Profile

Create or claim one profile only. Use:

- exact approved business name;
- the real primary category;
- real phone and website;
- real service area or real address;
- real opening hours;
- original yard, vehicle, material and delivery photos;
- only genuine customer reviews.

Do not use a virtual office, fake address, purchased reviews, incentivised reviews or duplicate profiles.

### Consistency check

The business name, phone, URL, service area and hours must match across the website, Google Business Profile, Bing, invoices or public business listings, and any genuine partner references.

## Phase 3: on-page page map

Do not change a page URL without a permanent redirect and sitemap update.

| Page | Primary intent | Required content | Schema |
| --- | --- | --- | --- |
| `/` | Rodiwala; construction material supplier India | Clear business definition, materials, quote CTA, service boundary, FAQs | Organization, WebSite, FAQ |
| `/buy-construction-material` | Buy construction material | Requirement checklist, quote steps, delivery feasibility, CTA | Service, FAQ |
| `/materials` | Construction material catalogue | Links to each material with useful summaries | ItemList or CollectionPage if validated |
| `/aggregate` | Aggregate/rodi supplier | 10 mm and 20 mm use cases and enquiry paths | Service |
| `/aggregate/10-mm-rodi` | 10 mm rodi supplier | Confirmed use, size, order and delivery notes | Service |
| `/aggregate/20-mm-rodi` | 20 mm rodi supplier | Confirmed use, size, order and delivery notes | Service |
| `/stone-dust` | Stone dust supplier | Confirmed use, material description and quote path | Service |
| `/m-sand` | M-sand supplier | Crushed-sand explanation, confirmed suitability and quote path | Service |
| `/ready-mix-concrete` | RMC supplier India | Grade, quantity and site details required before quoting | Service |
| `/delivery-areas` | Delivery feasibility | Actual service-area model and constraints | LocalBusiness only after inputs |
| `/how-it-works` | How to buy | Numbered quote process and requirement checklist | HowTo only if the visible steps qualify |
| `/about` | Brand/entity trust | Who operates the service, experience and proof | Organization |
| `/contact` | Enquiry conversion | Phone, WhatsApp, hours and response expectation only when confirmed | ContactPage |

## Phase 4: content queue

Create these only with first-hand review and approved facts. Each guide must have an author or reviewer, publication date, last-reviewed date and links to the relevant commercial page.

1. `10 mm vs 20 mm aggregate: how to choose for a project`
2. `What is rodi aggregate and where is it used?`
3. `M-sand vs river sand: questions to ask before ordering`
4. `What is stone dust and when is it used?`
5. `How to request a construction-material quote`
6. `What details affect delivered aggregate pricing?`
7. `RMC enquiry checklist: grade, quantity, site and pour details`
8. `Construction-material delivery checklist for site teams`

Each article must contain:

- a direct answer in the opening paragraph;
- clear H2/H3 headings based on real customer questions;
- 40–60 word self-contained answer blocks where natural;
- a practical checklist or table where useful;
- no unsupported prices, ratings, stock or delivery promises;
- internal links to one material page and `/buy-construction-material`;
- one clear enquiry CTA;
- FAQ schema only for visible, genuine questions and answers.

## Phase 5: local and authority work

Only after the business inputs are confirmed:

1. Create location pages for real service areas only.
2. Add unique local proof to each page: service boundary, route context, delivery considerations, local project examples or original photos.
3. Keep one canonical version of every business listing.
4. Earn genuine mentions from contractors, suppliers, architects, associations and project partners.
5. Publish original videos or photos with links to the relevant material page.
6. Do not buy bulk links or create automated directory pages.

## Weekly operating loop

Every week, record:

- indexed URL count;
- sitemap errors;
- branded impressions and clicks;
- non-branded commercial impressions and clicks;
- average position by page;
- phone clicks, WhatsApp clicks and quote requests;
- Google Business Profile calls, website actions and reviews;
- new genuine mentions or referring domains;
- pages with impressions but low click-through rate;
- pages with clicks but weak enquiry conversion.

Improve one high-impression page and one conversion blocker each week. Do not publish pages merely to increase URL count.

## Acceptance criteria

The SEO implementation is considered launched only when:

- all priority URLs return `200` in production;
- the sitemap is live, complete and submitted;
- the homepage and buying page are indexable and pass URL Inspection;
- branded metadata and structured data are visible in rendered HTML;
- the Business Profile is verified or its verification status is explicitly recorded;
- no page contains fabricated business claims;
- Search Console tracking has a baseline;
- the owner has a weekly review record.

The branded SEO milestone is considered evidenced only when a neutral search shows an official Rodiwala result on page one and Search Console records branded impressions. Commercial SEO is a separate milestone and requires sustained content, entity proof and external authority.

## Safe handoff prompt

Use this prompt when assigning the repository to another AI:

> Read `AGENTS.md`, `SEO_EXECUTION_RUNBOOK.md` and `SEO_PLAN.md`. Work as an SEO implementation engineer for Rodiwala. Execute the phases in order, beginning with the production launch gate. Inspect the live URLs before editing. Use only confirmed business facts. Never fabricate prices, stock, locations, reviews, certifications, delivery guarantees or backlinks. Make the smallest useful code/content changes, validate with `bun run build`, lint changed files, check live HTTP status and sitemap output, then report completed tasks, failed gates, owner-only actions and exact next steps. Do not claim a Google ranking without a neutral SERP check and Search Console evidence.
