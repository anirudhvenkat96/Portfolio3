---
date: 2025-04-17 00:00:00 +0000
title: Chennai Transit Shade Analysis
subtitle: Remote Sensing, Urban Equity, Interactive Mapping, Heat Resilience
image: /images/chennai01.jpg
category: chennai
hide_hero: true
---

<iframe
  src="https://chennai-shade-transit-analysis.vercel.app"
  style="width:100vw; height:80vh; border:none; display:block; margin-left:calc(-50vw + 50%); margin-bottom:2rem;"
  title="Chennai Transit Shade Analysis">
</iframe>

*Hover over any transit stop to see the walkable street network coloured by tree canopy coverage*

---

Chennai's transit network serves millions of daily commuters, yet the walkability of streets connecting people to bus, metro, and MRTS stops varies dramatically across the city. This project maps tree canopy coverage along the actual walking networks surrounding 1,170 transit stops — asking a simple equity question: who gets to walk to transit in the shade?

---

### Key Findings

Across 1,170 stops, the city-wide average shade score is **26.8%**. Coverage varies significantly by transit mode: Metro stops average **21.8%**, MRTS stops **25.8%**, and bus stops **27.7%** — suggesting that newer rapid transit infrastructure has been sited in less-canopied corridors, while the legacy bus network is more often embedded in older, tree-lined streets.

The range across individual stops is stark. **Anna University** is the shadiest stop at **81.1%** coverage. **Redhills Market** is the least shaded at **1.1%**. Of the 1,170 stops analysed, **227 fall below 10% shade coverage** — a threshold that represents meaningful heat exposure for pedestrians — while only **9 stops exceed 75%**.

---

### How It Works

**Data Collection**
- Sentinel-2 multispectral satellite imagery acquired via Google Earth Engine, filtered to January–April 2023 (dry season) to minimise cloud cover
- Median composite of all cloud-free images (<5% cloud cover) used to produce a single clean raster covering Chennai
- NDVI (Normalised Difference Vegetation Index) calculated from near-infrared and red bands — values range from -1 (water/built) to +1 (dense vegetation)
- Transit stop locations collected from three sources: OpenStreetMap via Overpass API (bus stops), OpenCity GCC portal (MRTS), and OpenStreetMap (Metro) — cleaned and deduplicated before analysis

**Network-Based Shade Analysis**
- For each of 1,170 transit stops, the walkable street network within 600m was downloaded using OSMnx — this captures only streets actually reachable on foot, not a simple radius
- Each street segment was buffered by 8 metres to approximate the canopy overhead a pedestrian would experience
- Mean NDVI was sampled along each buffered segment using rasterstats — segments with mean NDVI above 0.3 were classified as shaded, below 0.3 as unshaded
- Shade score = percentage of street segments within the 600m walking network that have canopy coverage

**Why Network-Based Analysis Matters**
- A simple radius approach would count trees inside fenced parks or behind walls — greenery that provides no shade to pedestrians
- By following the actual street network, only canopy directly overhead of walkable routes is counted
- This produces a more accurate measure of the lived experience of walking to transit in Chennai's climate

**Tools and Stack**
- Google Earth Engine — satellite imagery and NDVI computation
- Python (OSMnx, Rasterio, Rasterstats, GeoPandas) — network analysis and canopy sampling
- Mapbox GL JS — interactive web map
- GDELT BigQuery — supplementary flood event analysis
- Deployed on Vercel, version controlled on GitHub

---

[View the full code and methodology on GitHub](https://github.com/anirudhvenkat96/chennai-shade-transit-analysis)
