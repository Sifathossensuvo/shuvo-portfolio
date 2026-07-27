# Sifat Hossen Suvo — Digital Legacy

A cinematic, story-first personal site built with React, Vite, Tailwind CSS, Framer Motion,
and a real 3D particle field (React Three Fiber / Three.js) in the hero.

## Run it locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production build lands in `dist/` — deploy that folder anywhere static
(Vercel, Netlify, GitHub Pages, your own server).

## Sections included

Hero (3D scene) → About → Skills → Featured Projects (+ hidden "View All Projects" route) →
Open Source → My Story → Life Timeline → Daily Journey → Dream Tracker → Future Goals →
Bucket List → Achievements & Certificates → Gallery → Favorite Books → Favorite Music →
My Workspace → Notes to Self (quotes) → Letter to My Future Self → Visitor Messages →
Contact → Final Goodbye.

**Current Mission was intentionally left out** per your request — everything else from the
original structure is now covered somewhere above.

## Right-click & devtools shortcuts

`src/components/ProtectionGuard.jsx` blocks the right-click menu and the common devtools
keyboard shortcuts (F12, Ctrl/Cmd+Shift+I/J/C, Ctrl+U), showing a small on-brand toast instead
of a plain browser `alert()`. One honest limitation: a browser's own menu (e.g. Chrome's
"More tools → Developer tools") can't be blocked by any website's JavaScript — this only
catches right-click and keyboard attempts, which covers the vast majority of casual tries.

## Entry experience & music

- On load, visitors see a "click 3 times to begin" gate (`src/components/EntryGate.jsx`).
  The first click also starts background music (loop, autoplay-safe since it's triggered by
  a real user gesture). After the 3rd click, the loading screen plays, then the site reveals.
- **Add your own track** at `public/audio/theme.mp3` (loops automatically). Until that file
  exists, the click gate still works fine — it just won't have audio to play, and the small
  music toggle button (bottom-right, once inside the site) lets visitors retry/mute anytime.

## Hidden "View All Projects" route

- The Projects section has a **View All Projects** button that routes to `/all-projects`
  (`src/pages/AllProjects.jsx`, data in `src/data/allProjects.js`).
- This route is **not linked from any navigation** — it's only reachable via that button
  (or by typing the URL directly), exactly as requested.
- Add as many real projects as you like to `allProjects.js`; each renders as a card with
  an image slot, blurb, stack tags, and live/code links.

## What to edit first

- `src/data/story.js` — your story, in your own words.
- `src/data/timeline.js` — life timeline entries.
- `src/data/dreams.js` — dream tracker cards.
- `src/data/projects.js` — **replace the two featured placeholder projects** with real ones.
- `src/data/allProjects.js` — full project list for the `/all-projects` page.
- `src/data/openSource.js`, `src/data/achievements.js`, `src/data/books.js`, `src/data/music.js`,
  `src/data/futureGoals.js`, `src/data/bucketList.js`, `src/data/dailyJourney.js` — all the newer
  sections, same pattern: edit the array, the section updates automatically.
- `src/data/quotes.js` — your own reflective one-liners.
- `src/data/gallery.js` — set `src` on each entry once you've added photos to `public/gallery/`.
- `src/components/Contact.jsx` — swap in your real email, GitHub, and LinkedIn.
- `index.html` — page title and meta description.

## Sections included

Hero (real 3D scene — a distorted morphing sphere + reactive particles, camera moves as you
scroll) → About (portrait frame + quick stats) → Skills (categorized icon grid) → Featured
Projects (case-study cards with image preview + 3D tilt-on-hover) → My Story → Life Timeline
(scroll-linked glowing thread) → Dream Tracker → Gallery → Notes to Self (quotes) → Letter to
My Future Self → Visitor Messages → Contact → Final Goodbye.

A custom cinematic cursor (dot + trailing ring) is active on non-touch devices and respects
`prefers-reduced-motion`.

## Every image slot is a placeholder — on purpose

Portrait, project previews, and gallery photos all render as designed placeholder frames
(gradient + corner brackets) until you add real files. This avoids shipping stock/scraped
images with unclear licensing. To add real photos:

1. Drop image files into `public/` (e.g. `public/portrait.jpg`, `public/gallery/desk.jpg`).
2. In the matching data file (`src/data/gallery.js`, `src/data/projects.js`, or directly in
   `About.jsx`), set the `src` / `image` field to `/portrait.jpg` etc.

## Not yet included (easy to add as new components + data files, following the same pattern)

Certificates/Achievements, Open Source contributions, Favorite Books & Music, Workspace tour,
Bucket List. Ask and these can be added the same way everything else was.

## Notes

- All colors are CSS/Tailwind tokens (`bg`, `accent`, `deepRed`, `soft`, `softer`, `line`) defined
  in `tailwind.config.js` — change the palette in one place.
- Respects `prefers-reduced-motion` throughout, including the 3D scene and custom cursor.
- Tech icons come from `react-icons/si` (Simple Icons) — swap or add more in `src/data/skills.js`.
