---
title: NYC Arrests Visualizer
date: 2026-05-28
image: /images/nyc-arrest-map.jpg
categories:
  - Civic Tech
  - Data Visualization
  - Interactive Mapping
---

[https://nyc-arrest-map.vercel.app/]

[↗ Open full screen](https://nyc-arrest-map.vercel.app/)

*Explore NYPD arrest data through two interactive visualizations — animate arrests day by day across a month, or watch crime heatmaps morph smoothly across an entire year.*

---

### What it does

**Month View** — Pick any month between 2006 and 2023. The map animates arrests appearing day by day as color-coded dots: gold for felonies, blue for misdemeanors, and pink for violations. A live HUD tracks the current date and running total. Toggle a heatmap overlay to see the full month's density pattern at once.

**Year View** — Select a year and watch 12 monthly crime heatmaps morph into each other using interpolated grid transitions. Each month's arrest data is converted into a 300×300 intensity grid over NYC's bounds, and frames between months are mathematically blended to create smooth flowing animations.

### How it works

- Data pulled live from the NYPD Arrests Historic dataset on NYC Open Data via the Socrata API — over 6 million records going back to 2006
- Python FastAPI backend fetches and paginates data concurrently, deployed on Railway
- Frontend uses Leaflet.js with CartoDB dark tiles and Leaflet.heat for heatmap rendering
- Year view interpolation uses easeInOut blending across Float32Array grids with a globally normalized intensity scale for consistent color across all 12 months

### Tools & Stack

- Python (FastAPI, httpx, asyncio) — concurrent data fetching and API proxy
- Leaflet.js + Leaflet.heat — map rendering and heatmap animation
- Vanilla HTML/JS — no framework dependency
- Railway — backend hosting
- Vercel — frontend hosting
- NYC Open Data Socrata API — live data source

---

[View the full code on GitHub](https://github.com/anirudhvenkat96/nyc-arrest-map)
