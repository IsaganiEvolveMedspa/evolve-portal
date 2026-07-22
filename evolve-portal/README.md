# Evolve Med Spa — Internal Employee Portal

A plain HTML/CSS/JS recreation of the "Evolve Home" page from the Claude Design
project **"Internal employee portal design (Remix)"**.

## Source

The original file (`Evolve Home.dc.html`) was authored in Claude Design's
internal component format — it uses custom tags (`<x-dc>`, `<sc-if>`),
`{{ }}` templating, and a `support.js` runtime that isn't portable outside
the design tool. This repo re-implements the same markup, styling, and
behavior as plain, dependency-free files that run in any browser or static
host.

## Structure

```
evolve-portal/
├── index.html              Home page
├── css/
│   └── style.css           All styling (extracted from inline styles)
├── js/
│   └── main.js              Greeting logic + live search/filter
├── pages/                   Placeholder stubs for linked internal pages
│   ├── inventory-and-supplies.html
│   ├── rewards-programs.html
│   ├── financing-sources.html
│   ├── front-desk-hub.html
│   ├── holiday-information.html
│   ├── brand-and-marketing-hub.html
│   ├── policies-and-procedures.html
│   ├── microsoft-suite.html
│   └── quick-contacts.html
└── README.md
```

## Behavior recreated

- **Time-based greeting** — "Good morning / afternoon / evening, {name}."
  based on the visitor's local time, plus today's date, matching the
  original component's `renderVals()` logic. Defaults to "Team" for the name.
- **Live search** — typing in the header search box filters tiles by their
  keywords and hides any section left with zero visible tiles, matching the
  original `handleSearch()` logic.

## Scope note

The design project is **15 pages**; only the Home page was exported/shared,
so only Home is fully recreated. Nine tiles on Home link to sibling pages
(e.g. "Rewards Programs," "Front Desk Hub") that live under `pages/` as
simple placeholder stubs — same header/footer chrome, with a note that the
real content wasn't part of this handoff. Swap in the real markup for each
once you export those pages too.

External tool links (Zenoti, Insperity, Power BI, Open Wrench, SharePoint,
Google Sheets, etc.) are kept as-is since they point to real third-party
systems, not pages in this project. Long, session-specific query strings
were trimmed off a couple of SSO redirect URLs for readability — replace
with the live link if the shortened version doesn't route correctly.

## Running locally

No build step. Just open `index.html` in a browser, or serve the folder
with any static server, e.g.:

```
npx serve .
```
