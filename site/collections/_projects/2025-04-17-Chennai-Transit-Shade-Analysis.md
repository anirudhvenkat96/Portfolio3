---
date: 2025-04-17 00:00:00 +0000
title: Chennai Transit Shade Analysis
subtitle: Remote Sensing, Urban Equity, Interactive Mapping, Heat Resilience
image: /images/chennai01.jpg
---

Chennai's transit network serves millions of daily commuters, yet the walkability of streets connecting people to bus, metro, and MRTS stops varies dramatically across the city. This project maps tree canopy coverage along the actual walking networks surrounding 1,170 transit stops — asking a simple equity question: who gets to walk to transit in the shade?

---

### Methodology

Sentinel-2 NDVI satellite imagery was sourced from Google Earth Engine (2023) and used to classify vegetated surfaces across the city using a threshold of 0.3. Street networks within 600m of each transit stop were extracted using OSMnx, isolating only the walkable segments reachable on foot. Canopy coverage was then sampled directly along each street segment using rasterstats — not as a circular buffer, but as a network-based analysis that counts only canopy directly overhead of walkable streets. This produces a shade score that reflects the actual pedestrian experience of walking to transit, rather than a generalised measure of neighbourhood greenery.

---

### Key Findings

Across 1,170 stops, the city-wide average shade score is **26.8%**. Coverage varies significantly by transit mode: Metro stops average **21.8%**, MRTS stops **25.8%**, and bus stops **27.7%** — suggesting that newer rapid transit infrastructure has been sited in less-canopied corridors, while the legacy bus network is more often embedded in older, tree-lined streets.

The range across individual stops is stark. **Anna University** is the shadiest stop at **81.1%** coverage. **Redhills Market** is the least shaded at **1.1%**. Of the 1,170 stops analysed, **227 fall below 10% shade coverage** — a threshold that represents meaningful heat exposure for pedestrians — while only **9 stops exceed 75%**.

---

### Interactive Map

<iframe
  src="https://chennai-shade-transit-analysis.vercel.app"
  width="100%"
  height="600"
  style="border: none;"
  title="Chennai Transit Shade Analysis">
</iframe>

*Hover over any transit stop to see the walkable street network coloured by tree canopy coverage*

---

### Data Sources

- Sentinel-2 satellite imagery via Google Earth Engine (2023)
- OpenStreetMap bus stop locations via Overpass API
- Chennai Metro and MRTS station data via OpenCity
- NDVI threshold: 0.3 (vegetation vs urban surface)

---

[View the full code and methodology on GitHub](https://github.com/anirudhvenkat96/chennai-shade-transit-analysis)
