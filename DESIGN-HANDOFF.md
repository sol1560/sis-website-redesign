# 3f1eaec5-234f-45d5-a91b-e556a26dacfd implementation handoff

This archive is the source of truth for turning the design into production code. Start from `index.html`, then preserve the visual system, responsive behavior, and interactions found in the exported files.

## Implementation target
- Build production UI from the exported design, not a loose reinterpretation.
- Preserve typography scale, spacing rhythm, color tokens, border radii, shadows, motion timing, and component states.
- Replace static placeholders only when the target app has real data or functional equivalents.
- Keep generated product UI free of OpenDesign chrome, preview labels, or design-process annotations.
- Treat this handoff as a visual contract: if implementation choices conflict, match the exported pixels and behavior first, then refactor internals.

## Source map
- Primary entry: `index.html`
- HTML screens detected: 15
- Stylesheets detected: 3
- Script/component files detected: 3
- Supporting assets detected: 61

## Responsive contract
Validate the implementation across this 2025–2026 viewport matrix:
- Mobile compact: 360×800
- Mobile standard: 390×844
- Mobile large: 430×932
- Foldable / small tablet: 600×960
- Tablet portrait: 820×1180
- Tablet landscape: 1024×768
- Laptop: 1366×768
- Desktop: 1440×900
- Wide desktop: 1920×1080

For responsive web exports, treat these as a modern breakpoint system for one adaptive web experience, not three fixed screenshots. Do not split responsive web into unrelated native app screens unless the project explicitly includes native targets. Use semantic layout thresholds, fluid `clamp()` type/spacing, and container queries where component width matters more than viewport width. Preserve any CSS media queries, container queries, fluid `clamp()` scales, and layout changes already present in the exported files.

## Design fidelity contract
- Extract reusable tokens before writing components: background, surface, foreground, muted text, border, accent, radius, shadow, spacing, type scale, and motion duration/easing.
- Map product screens, in-app modules/components, optional landing page, and optional OS widget surfaces before coding. Keep these surfaces separate in the target architecture.
- Match layout geometry: max-widths, gutters, grid columns, card proportions, sticky/fixed elements, and viewport-specific navigation.
- Preserve real copy, labels, and data shown in the export. Do not replace specific text with generic marketing filler.
- Preserve interactive affordances: hover, focus, pressed, disabled, loading, validation, copy/share, tab/accordion, modal/sheet, and keyboard states where present.
- Preserve accessibility semantics when converting: headings stay hierarchical, controls remain buttons/links/inputs, focus states stay visible.
- Do not keep prototype-only annotations, frame labels, or OpenDesign chrome in the production UI.

## CJX-ready UX contract
- Use `DESIGN-MANIFEST.json` as the machine-readable map for screens, app modules, OS widgets, landing pages, tokens, interactions, and viewport checks.
- Screen-file-first: when multiple user-facing surfaces exist, implement each HTML screen as its own route/file. Treat `index.html` as a launcher/overview when the manifest marks it that way, not as a combined final UI.
- If `landing.html`, app screens, platform screens, or OS widget files exist, preserve those boundaries in the target app instead of merging them into one page.
- A single self-contained `index.html` is acceptable only when the export truly contains one user-facing screen and its CSS/JS are structured enough to extract tokens, components, states, and behavior.
- If separate `css/` or `js/` files exist, treat them as source of truth for token/component/interactions before porting to React, Vue, SwiftUI, Compose, or another target stack.
- In-app modules/components are product UI blocks inside the app. OS widgets are home-screen/lock-screen/quick-access surfaces outside the app. Do not merge those concepts.

## Color and brand contract
- Use the exported design tokens and product/domain context as the color source of truth.
- Do not introduce warm beige / cream / peach / pink / orange-brown background washes unless they are already explicit brand/reference colors in the export.
- A stylesheet or design/token file was detected; inspect it for canonical color variables before choosing framework theme tokens.

## Implementation sequence for AI coding tools
1. Open `index.html` and `DESIGN-MANIFEST.json`; identify every screen file, launcher/overview file, app module, and interaction before coding.
2. If multiple HTML screens exist, map them to separate routes/surfaces first; do not merge `landing.html`, product app screens, platform screens, or OS widgets into one route.
3. Extract a token table from CSS/root styles and inline styles before building framework components.
4. Build product screens and domain-specific in-app modules from largest layout regions down to controls; avoid starting with isolated atoms that lose spatial intent.
5. Port responsive behavior across the modern viewport matrix and test each semantic breakpoint before cleanup.
6. Port interactions and states, then replace static placeholders only with real app data or functional equivalents.
7. Keep optional landing page and OS widget surfaces as separate surfaces if present.
8. Compare final screenshots against the export at 360×800, 390×844, 430×932, 820×1180, 1024×768, 1366×768, 1440×900, and 1920×1080 before declaring done.

## Entry points
- `admissions.html`
- `archive/index-before-pages.html`
- `archive/removed/about.html`
- `archive/removed/academics.html`
- `archive/removed/schools.html`
- `archive/v1.html`
- `article.html`
- `assets/chrome.html`
- `campus.html`
- `careers.html`
- `contact.html`
- `index.html`
- `news.html`
- `scholarships.html`
- `stories.html`

## Styles
- `assets/home.css`
- `assets/pages.css`
- `assets/sis.css`

## Scripts/components
- `assets/data.js`
- `assets/home.js`
- `assets/sis.js`

## Assets and supporting files
- `assets/c-chennai.webp`
- `assets/c-cilegon.webp`
- `assets/c-mumbai.webp`
- `assets/c-palembang.webp`
- `assets/c-pik.jpg`
- `assets/c-sedayu.jpg`
- `assets/c-semarang.webp`
- `assets/DimazAndreanshah-SIS-in-Every-Step.webp`
- `assets/ELT-Circles-Jaspal-White-Circle-e1518662885141.png`
- `assets/grads.webp`
- `assets/j-1995-conception.webp`
- `assets/j-1996-jaspal-sidhu.webp`
- `assets/j-1998-may-riot.webp`
- `assets/j-2003-expanding-horizon.webp`
- `assets/j-2004-compassion.webp`
- `assets/j-2005-sis-kelapa-gading-old.webp`
- `assets/j-2006-leadership-collaboration.webp`
- `assets/j-2007-first-sis-olympics.webp`
- `assets/j-2008-supporting-edu.webp`
- `assets/j-2012-making-eduation-affordable.webp`
- `assets/j-2014-sis-logo.webp`
- `assets/j-2016-cambridge-ib.webp`
- `assets/j-2018-sis-staff.webp`
- `assets/j-2019-IFC-award-update.webp`
- `assets/j-2020-sis-myanmar.webp`
- `assets/j-2021-expanding-to-india.webp`
- `assets/j-2022-sis-south-jakarta-old.webp`
- `assets/j-2022-UNSDG.webp`
- `assets/j-2023-sis-surabaya.webp`
- `assets/j-2024-sis-bandung.webp`
- `assets/j-2025-sis-north-east-jakarta.webp`
- `assets/Jin-Hoo-SIS-in-Every-Step.webp`
- `assets/logo-cambridge.png`
- `assets/logo-ib.png`
- `assets/Logo-SIS-Brand_Group.png`
- `assets/Lubna-Brilla-Andemstia-GATEWAY-Online-Learning-Programme.webp`
- `assets/Madeline-SIS-in-Every-Step.webp`
- `assets/Muskan-Jhujunwala-SIS-in-Every-Step-Update.webp`
- `assets/n-asean-business-summit-2025.jpg`
- `assets/n-cambridge-curriculum-scaled.webp`
- `assets/n-cambridge-curriculum.webp`
- `assets/n-international-school-students.webp`
- `assets/n-investor-daily.jpg`
- `assets/n-SIS-2560-x-1114-Diversity-copy-scaled.webp`
- `assets/n-SIS-30-years-2026.webp`
- `assets/n-sis-bandung-lennard-murray.webp`
- `assets/n-sis-bsd-hiera.jpg`
- `assets/n-sis-cambridge.webp`
- `assets/n-sis-group-of-schools-update.webp`
- `assets/n-sis-preschool-senayan-jakarta-scaled.jpg`
- `assets/n-sis-space.jpg`
- `assets/n-sis-surabaya-international-school.webp`
- `assets/Nikita-Mawarni-SIS-in-Every-Step.webp`
- `assets/PSG2.jpg`
- `assets/sis-30-anniversary.png`
- `assets/SIS-Logo-Fixed.png`
- `assets/SIS-Logo-Website.png`
- `assets/Thiha-Win-SIS-Myanmar.webp`
- `assets/Victoria-Isabelle-Abadi-SIS-in-Every-Step-Update.webp`
- `image-1.png`
- `image.png`

## Coding checklist for AI tools
1. Inspect `index.html` and `DESIGN-MANIFEST.json` first and identify reusable components before coding.
2. Implement each user-facing screen file as its own route/surface; keep launcher, landing, app, platform, and OS widget files separate.
3. Extract design tokens into the target stack: colors, type scale, spacing, radius, shadows, and motion.
4. Implement layout with real 2025–2026 responsive breakpoints, fluid type/spacing, and container-query-aware component behavior; test with no horizontal overflow.
5. Preserve interactive controls, hover/focus/pressed states, form behavior, validation, and copy actions where present.
6. Implement domain-specific in-app modules with real states; do not flatten them into generic cards.
7. Keep landing page, product screens, and OS widget/quick-access surfaces separate when present.
8. Confirm the production result visually matches the exported design before refactoring internals.
9. Reject implementation shortcuts that flatten the design into generic cards, generic gradients, placeholder stats, or framework-default typography.
10. If a detail is ambiguous, keep the exported HTML/CSS/JS behavior rather than inventing a new pattern.
