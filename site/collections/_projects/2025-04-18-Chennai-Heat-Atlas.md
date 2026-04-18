---
date: 2025-04-18 00:00:00 +0000
title: Chennai Heat Island & Heat Equity Atlas
subtitle: Remote Sensing, Urban Heat Islands, Environmental Justice, Spatial Analysis
image: /images/chennai-heat-atlas.jpg
category: chennai
---

Chennai's urban heat crisis is unevenly distributed — but until now, no one had mapped exactly where extreme heat concentrates, or who bears the greatest burden. This project builds a complete heat equity atlas for Chennai's 155 municipal wards, combining satellite remote sensing, machine learning, Census 2011 socioeconomic data, and an interactive web dashboard.

---

### Land Surface Temperature from Landsat 8

Land Surface Temperature (LST) was derived from Landsat 8 Collection 2 thermal infrared imagery (Band 10) for four years — 2015, 2018, 2021, and 2023 — using Google Earth Engine. Images were filtered to the March–July pre-monsoon season, when Chennai's heat stress peaks. Thermal radiance was converted to LST in Celsius using the standard radiometric calibration formula, and a median composite was computed for each year to suppress cloud noise.

LST values across the city range from approximately 21°C in water bodies and dense vegetation to over 55°C on exposed rooftops and industrial surfaces — a 34-degree range within a single urban boundary.

---

### K-Means Clustering of Urban Heat Zones

Raw LST values were clustered into six thermally distinct urban heat zones using K-Means (k=6, n_init=10). Clusters were sorted by mean temperature and assigned interpretive labels:

- **Water / Vegetation** — lowest temperatures, riparian corridors and parks
- **Cool Urban** — well-canopied residential streets
- **Moderate** — mixed residential fabric
- **Warm Urban** — dense commercial and residential mid-city
- **Hot Urban** — industrial zones and exposed surfaces
- **Extreme Hotspot** — rooftop-heavy areas with minimal vegetation

Each cluster was vectorized into a GeoJSON polygon layer for use in the interactive dashboard.

---

### Heat Equity Analysis: Census 2011 × LST

Ward-level LST statistics (mean, max, 90th percentile) were computed using zonal statistics against the 155-ward boundary layer. These were joined to Census 2011 data including Scheduled Caste (SC) population share, Scheduled Tribe (ST) share, total households, and a deprivation index derived from households with no listed assets.

OLS regression and correlation analysis reveal that wards with higher SC population shares and higher asset deprivation scores are disproportionately concentrated in hotter thermal zones — a pattern consistent with historical land-use exclusion and underinvestment in green infrastructure.

A composite **Heat Burden Index** was constructed:

> HBI = 0.4 × LST\_norm + 0.3 × Deprivation\_norm + 0.2 × SC\_share\_norm + 0.1 × (1 − NDVI\_norm)

This index identifies wards where thermal risk and social vulnerability reinforce each other — the highest-priority targets for shade tree planting, cool roof programs, and heat emergency planning.

---

### Live Interactive Dashboard

The analysis is published as a live Mapbox GL JS dashboard built in Next.js, allowing users to explore UHI cluster zones, ward-level Heat Burden Index, and equity indicators across the city.

**[Explore the live dashboard →](https://chennai-heat-atlas.vercel.app)**

Layer toggles allow switching between the K-Means UHI cluster map and the Heat Burden Index choropleth. Hovering any ward shows its LST mean, SC share, deprivation index, and composite HBI score.

---

### Methods & Tools

- **Google Earth Engine** — Landsat 8 image collection, LST computation, NDVI compositing
- **Python** — rasterio, scikit-learn (K-Means), rasterstats, geopandas, statsmodels
- **Pandas / Census processing** — Ward-level aggregation of Census 2011 HH-14 housing tables
- **Next.js + Mapbox GL JS** — interactive web dashboard, deployed on Vercel
- **Data sources** — Landsat 8 C2 L2 (USGS/NASA), Census of India 2011, Chennai Corporation ward boundaries
