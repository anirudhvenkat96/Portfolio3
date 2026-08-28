---
date: 2026-05-28 00:00:00 +0000
title: NYC Arrests Visualizer
subtitle: Civic Tech, Data Visualization, Interactive Mapping, Python, FastAPI
image: /images/nyc-arrest-map.jpg
category: geospatial
hide_hero: true
---

<iframe
  src="https://nyc-arrest-map.vercel.app"
  style="width:100vw; height:700px; border:none; display:block; margin-left:calc(-50vw + 50%); margin-bottom:2rem;"
  title="NYC Arrests Visualizer">
</iframe>

*Animate NYPD arrest data day by day across any month, or watch crime heatmaps morph across an entire year*

---

Explore over 6 million NYPD arrest records through two interactive visualizations built on live data from NYC Open Data. The project combines a Python backend, concurrent API fetching, and client-side heatmap interpolation to make a large civic dataset explorable and visually compelling.

---

### What It Does

**Month View** — Pick any month between 2006 and 2023. Arrests animate onto the map day by day as color-coded dots: gold for felonies, blue for misdemeanors, and pink for violations. A live HUD tracks the current date and running total. Toggle a heatmap overlay to see the full month's density pattern at once.

**Year View** — Select a year and watch 12 monthly crime heatmaps morph smoothly into each other. Each month's arrest data is converted into a 300×300 intensity grid over NYC's geographic bounds, and frames between months are mathematically blended using easeInOut interpolation to create a flowing animation that reveals how crime patterns shift across seasons.

---

### How It Works

**Data Pipeline**
- Live data pulled from the NYPD Arrests Data (Historic) dataset on NYC Open Data via the Socrata Open Data API — over 6 million records spanning 2006 to present
- Python FastAPI backend proxies and paginates requests concurrently using asyncio and httpx, fetching up to 30,000 records per month across parallel page requests
- Response payload optimized to flat arrays with 4-decimal coordinate precision, reducing transfer size by ~65%
- Year endpoint fetches all 12 months simultaneously using asyncio.gather with a semaphore to manage concurrency

**Visualization**
- Month view groups arrests by date and renders each day's records as Leaflet circleMarkers in a timed animation loop
- Heatmap toggle uses Leaflet.heat with tuned radius, blur, and intensity scaling
- Year view builds Float32Array grids (300×300 cells) for each month, computes a globally normalized maxVal at the 95th percentile, and interpolates between consecutive month grids frame by frame
- Two Leaflet.heat layers crossfade during transitions — opacity of current month fades from 1→0 while next month fades from 0→1 — preserving full heatmap intensity throughout

**Tools & Stack**
- Python (FastAPI, httpx, asyncio) — concurrent data fetching and API proxy
- Leaflet.js + Leaflet.heat — map rendering and heatmap animation
- Vanilla HTML/JS — no framework dependency
- Railway — backend hosting
- Vercel — frontend hosting
- NYC Open Data Socrata API — live data source

---

[View the full code on GitHub](https://github.com/anirudhvenkat96/nyc-arrest-map)
