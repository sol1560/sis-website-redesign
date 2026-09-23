# SIS Website Redesign (v2)

An unofficial concept redesign of the [SIS Group of Schools](https://sisschools.org/) website, **designed with [Open Design](https://github.com/nexu-io/open-design)** — the open-source, local-first design tool where your coding agent is the design engine.

> Not affiliated with SIS Group of Schools. School name, logo, photos and facts belong to SIS and were taken from sisschools.org for this concept. Forms are front-end only and never send data.

**Live:** https://sis-website-redesign.vercel.app

![Home hero](docs/hero.png)

| Core values | PACE | University |
|---|---|---|
| ![](docs/values.png) | ![](docs/pace.png) | ![](docs/university.png) |

---

## How it was built

The whole site came out of one Open Design session: a single conversation, about 90 minutes, and around 15 rounds of feedback. What follows is what actually moved it from generic to good.

### 1. v1 looked fine and still missed

The first prompt was roughly: *"Redesign sisschools.org, the current one is dated. Study their core values and PACE, and borrow the narrative logic of jisedu.or.id (not its UI)."*

The agent read both sites, picked up the real material (the five FRICC values, the four PACE outcomes, the logo, 30 years of history photos) and took **JIS's storytelling order**: vision → character → learning → proof (history, alumni) → admissions. That order is still how the page runs.

The visuals were another story. v1 (kept at [`archive/v1.html`](archive/v1.html)) used a Fraunces serif, shield-shaped photo crops and small uppercase labels everywhere. It was polished and it could have been any school, which is exactly the "AI look". The feedback was one line: *"It doesn't feel like SIS, and it feels AI-made."*

### 2. The fix was photos of the actual building

The turning point was two phone photos from the SIS campus, now in [`design-references/`](design-references/):

| The "Feelings are Part of You" wall | The Core Values façade |
|---|---|
| ![](design-references/feelings-wall.png) | ![](design-references/campus-core-values-facade.png) |

The agent threw out its own taste and **lifted the design language off those walls**:

- **Tall vertical banners, one color per value** (teal, blue, mustard, orange, red), set in rotated type with a bold initial, just like the façade. They became the hero.
- **Duotone kid photos** tinted to their banner color, done with SVG `feColorMatrix` + `feComponentTransfer` filters (`#duo-fairness` and the rest in `index.html`), so any real SIS photo fits the palette.
- **Geometric triangle facets** that fade from the top of each color block into white.
- **Pill-word headlines.** The wall writes "Joy · Helps · You · Connect" as alternating filled and outlined capsules. That became the site's headline system: *SIS Roots · Help · Every Child · Grow · World-Ready*.
- **The PACE wall** follows the mural directly: four columns of "Perseverance Helps You Keep Going", with "Learning is Part of You" in the middle.
- **One rounded humanist sans** (Ubuntu) close to the lettering on the posters, on pure white. No beige, no gradients, no serif.

**Lesson:** the strongest design input isn't a mood word. It's real artifacts from the brand's physical world. The agent gets much better when it can copy the brand's own visual grammar rather than inventing one.

### 3. Many small, specific critiques

After that it was a loop of short, concrete feedback, and each round was one or two sentences:

- *"The 'Compassion' heading is clipped by the photo"* → type sizes follow the container width, not the viewport.
- *"Right column doesn't line up with the pills; the nav wraps at this width"* → top alignment, `white-space: nowrap`, hamburger below 1240px.
- *"Add a little easter egg to the banners"* → banners sway in the wind as your cursor passes, photos regain color on hover, and typing **`fricc`** sends a wave across all five.
- *"Two lonely logos in a vertical image look odd"* / *"Where's university placement?"* / *"'Where SIS alumni study' has no design"* → each section redone as color-block posters in the same language.
- *"Integrity and Compassion turned black text, make them white"* → a contrast rule was reverted on purpose, with a soft text-shadow as a compromise.
- *"The campus list is boring and bloated"* → cut the map, filters and 16 cards down to a light directory grouped by country.
- *"Menu items that just duplicate the homepage should go"* → the top nav went down to Home · Admissions · News.

Things that helped: point at the exact element (Open Design lets you click-select it), say what's wrong rather than how to fix it, and keep taste decisions for yourself (*"make them white"*) even when the agent pushes back.

### 4. Getting it production-ready (Claude Code)

The Open Design export was already plain static HTML/CSS/JS with a handoff doc (`DESIGN-HANDOFF.md`, `DESIGN-MANIFEST.json`). Before deploying it, Claude Code ran every page in headless Chromium at 1440 / 390 / 360 px and fixed what turned up:

- `stories.html` threw `moreLabel is not defined`, so the story tiles never rendered.
- On phones the header was 60–73px wider than the screen, which pushed the **hamburger menu off-screen** on every page. Tighter header rules now apply below 480px.
- Added a footer disclaimer, the Open Design credit and `noindex`, since this is a concept and not the official site.

After those fixes, all 27 internal links load with no JS errors, the mobile drawer opens and form validation works.

## Structure

```
index.html            home (hero, values, PACE, academics, university, campuses, history, stories, tour form)
admissions.html       steps, tour/inquiry form, parent FAQ
news.html, article.html?a=…
stories.html          8 student stories, filterable, modal detail
campus.html?c=…       one template, 16 campuses
scholarships.html, careers.html, contact.html
assets/               sis.css / home.css / pages.css, sis.js / home.js, data.js, images
archive/              v1 and pages removed during iteration, kept for comparison
design-references/    the campus photos that defined v2
```

No build step. Open `index.html`, or serve the folder with any static server:

```bash
python3 -m http.server 8000
```

## Credits

- Design: made in **[Open Design](https://github.com/nexu-io/open-design)** by nexu-io.
- Content, logo and photography: [SIS Group of Schools](https://sisschools.org/). Values and PACE explanations are draft copy.
- Deployed on Vercel.
