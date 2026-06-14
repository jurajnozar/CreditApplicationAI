# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A small **static** (no build, no server, no dependencies) educational website in
**Czech**: an interactive credit-risk quiz. The user inspects a deliberately
suspicious credit report for the fictional company "Nejlepší dárky s.r.o.",
marks the cells they think carry risk, and sees a score with explanations.
The twist: **all 15 cells are risks** — it is intentionally a trick ("chyták").

Open `index.html` directly in a browser to run it. No tooling, lint, or tests.

## Architecture

Three pages, navigated by plain links + `window.location`. State is carried in
`sessionStorage`.

- `index.html` (repo root) — thin launcher that redirects to `assets/html/page1.html`.
- `assets/html/page1.html` — intro; "Spustit" → page 2.
- `assets/html/page2.html` + `assets/js/page2.js` — the quiz. Renders a 3×5 grid
  from `CELLS`. Clicking a cell toggles the `.marked` class (shows `Risk-marked.svg`
  overlay). "Vyhodnotit" writes the marked cell **indices** to `sessionStorage`
  under `STORAGE_KEY` and navigates to page 3.
- `assets/html/page3.html` + `assets/js/page3.js` — results. Reads the indices,
  shows **RESULT = number of marked cells** in the `###` placeholder, renders the
  same grid with label + red explanation, and puts `Selected.svg` on marked cells.
  "Od začátku" clears `sessionStorage` and returns to page 1.

### Single source of truth — `assets/js/data.js`
`CELLS` is an array of 15 `{ icon, label[], explanation }` objects in grid order.
**Pages 2 and 3 both build their grids from this array**, so the two grids stay
aligned by index. Change quiz content here, not in the HTML. `STORAGE_KEY` (the
sessionStorage key shared by both pages) also lives here.

The shared `STORAGE_KEY` value is the contract between page 2 (writer) and page 3
(reader) — keep them in sync via `data.js`.

## Conventions

- **Path layout (required by the project owner):** JS in `assets/js/`, CSS in
  `assets/css/`, page files in `assets/html/`, images in `assets/img/`. Pages
  reference assets with `../css`, `../js`, `../img`.
- **Design** comes from the wireframe `assets/wireframe/*.docx` (Czech). Theme:
  Comic Sans font, white background, hand-drawn black-ink illustrations,
  blue `#0B769F` data labels, red `#C00000` risk explanations. These values are
  centralized as CSS custom properties in `assets/css/styles.css`.
- **Responsive grid:** `.grid` is CSS Grid, 3 cols → 2 cols (`max-width:760px`)
  → 1 col (`max-width:480px`).
- **Cell icons** (named after each cell's field, e.g. `address.png`,
  `wages.png`, `existing-loan-1.png`) and intro images were extracted from the
  wireframe `.docx` (a zip); each `CELLS[i].icon` names its file.
- Czech UI text and diacritics are intentional — preserve them exactly.

## Verifying changes

No test suite. To verify visually, render pages with headless Chrome:
`"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --screenshot=/tmp/out.png --window-size=1100,1300 "file://$PWD/assets/html/page2.html"`.
To exercise the dynamic state (overlays / RESULT / badges), seed `sessionStorage`
in a throwaway page in `assets/html/` (so relative paths resolve), screenshot,
then delete it. To test breakpoints reliably, load a page inside fixed-width
`<iframe>`s — headless Chrome clamps `--window-size` to a ~500px minimum, so a
small window does not prove the 1-column layout.
