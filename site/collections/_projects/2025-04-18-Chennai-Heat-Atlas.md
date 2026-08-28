---
date: 2025-04-18 00:00:00 +0000
title: Chennai Heat Island & Heat Equity Atlas
subtitle: Remote Sensing, Urban Heat Islands, Environmental Justice, Spatial Analysis
image: /images/Heat-island-01.jpg
category: geospatial
hide_hero: true
---

<iframe
  src="https://chennai-heat-atlas.vercel.app"
  style="width:100vw; height:700px; border:none; display:block; margin-left:calc(-50vw + 50%); margin-bottom:2rem;"
  title="Chennai Heat Island & Heat Equity Atlas">
</iframe>

*Hover over any ward to see LST, SC share, and heat burden index*

---

Chennai's urban heat is not uniform — it concentrates in specific corridors and neighbourhoods shaped by land use, surface materials, and decades of underinvestment in green infrastructure. This project builds a complete heat equity atlas for all 155 municipal wards, combining Landsat 8 satellite thermal data, K-means clustering of urban heat zones, and Census 2011 socioeconomic indicators to ask: who bears the greatest burden of extreme heat?

---

### Key Findings

Land Surface Temperature across Chennai's 155 wards ranges from **21°C in waterbodies and forested areas to over 55°C on exposed rooftops and industrial surfaces** — a 34-degree spread within a single city boundary. The city-wide ward mean for 2023 is approximately **38°C**, with the hottest wards concentrated in the northern industrial belt and dense inner-city fabric.

Wards with higher Scheduled Caste population shares are significantly overrepresented in the upper heat quintiles. OLS regression identifies **SC share and NDVI as the two strongest predictors of ward-level LST** — with SC share positively associated with heat exposure and NDVI negatively associated, after controlling for deprivation. The **Heat Burden Index** — a composite of thermal, social, and vegetation variables — reveals that the wards most exposed to heat are also those least equipped to cope with it.

Of the 155 wards analysed, **31 score above 0.6 on the Heat Burden Index**, indicating co-occurring high LST, low canopy, high SC share, and high asset deprivation. Only **8 wards score below 0.3**, clustered around the Adyar estuary, Guindy National Park, and the IIT Madras campus.

---

### How It Works

**Land Surface Temperature Retrieval**
- Landsat 8 Collection 2 Level-2 imagery acquired via Google Earth Engine for four years: 2015, 2018, 2021, and 2023
- Images filtered to the March–July pre-monsoon season to capture peak heat stress conditions
- LST derived from Band 10 thermal infrared using the standard radiometric calibration: radiance scaling, conversion to brightness temperature, and atmospheric correction via the emissivity-based approach
- Median annual composite computed from all cloud-free scenes to suppress noise from individual overpasses

**K-Means Clustering of Urban Heat Zones**
- Valid LST pixels (non-masked, non-zero) extracted and clustered into **6 thermally distinct zones** using K-Means (k=6, n_init=10, random_state=42)
- Clusters sorted by mean temperature and labelled: Water / Vegetation, Cool Urban, Moderate, Warm Urban, Hot Urban, and Extreme Hotspot
- Each cluster vectorized into a GeoJSON polygon layer for display in the interactive dashboard

**Heat Equity Analysis: LST × Census 2011**
- Ward-level zonal statistics (mean, max, 90th percentile LST; mean NDVI) computed using rasterstats against the 155-ward boundary layer
- Joined to Census 2011 data: Scheduled Caste share, Scheduled Tribe share, total households, and a **deprivation index** derived from the proportion of households reporting no listed assets (Census HH-14 table)
- OLS regression with `lst_mean_2023` as dependent variable and `deprivation_index + sc_share + ndvi_mean_2023` as predictors — SC share and NDVI emerge as significant at p < 0.05

**Heat Burden Index**
- Composite index constructed from four min-max normalised variables:
  > HBI = 0.4 × LST\_norm + 0.3 × Deprivation\_norm + 0.2 × SC\_share\_norm + 0.1 × (1 − NDVI\_norm)
- Weights reflect the relative contribution of thermal exposure, socioeconomic vulnerability, structural inequality, and green infrastructure deficit
- Index ranges from 0 (lowest burden) to 1 (highest burden) and is mapped as a ward-level choropleth

**Tools and Stack**
- Google Earth Engine — Landsat 8 image collection, LST computation, NDVI compositing
- Python (rasterio, scikit-learn, rasterstats, geopandas, statsmodels) — clustering, zonal statistics, regression
- Pandas — Census 2011 HH-14 table processing and ward-level aggregation
- Mapbox GL JS + Next.js — interactive dashboard with layer toggles and ward hover popups, deployed on Vercel

---

[View the full code and methodology on GitHub](https://github.com/anirudhvenkat96/chennai-heat-atlas)
