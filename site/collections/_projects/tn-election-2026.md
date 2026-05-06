---
date: 2026-05-05 00:00:00 +0000
title: Tamil Nadu 2026 Election Dashboard
subtitle: Election Analysis, Interactive Mapping, Data Journalism, AI-Assisted Research
image: /images/tn-election-01.jpg
category: chennai
hide_hero: true
---

<iframe
  src="https://tn-election-2026-navy.vercel.app"
  style="width:100vw; height:700px; border:none; display:block; margin-left:calc(-50vw + 50%); margin-bottom:2rem;"
  title="Tamil Nadu 2026 Election Dashboard">
</iframe>

*Click any constituency on the map to explore results, candidates, and swing analysis across three elections*

---

Tamil Nadu's 2026 state assembly election produced one of the most dramatic single-election swings in the state's political history. Tamilaga Vettri Kazhagam (TVK), the party of actor-turned-politician Vijay contesting its debut election, emerged as the single largest party with 108 seats — while the incumbent DMK-led SPA coalition collapsed from 159 seats to 73. This dashboard tracks that story across all 234 assembly constituencies, spanning three election cycles from 2016 to 2026.

---

### Key Findings

**65 DMK-held seats flipped to TVK** — the most dramatic party-level transfer in a single Tamil Nadu election. Of the 78 total seats that moved from the SPA alliance to TVK, 65 were constituencies where DMK had won in 2021. TVK's sweep was geographically broad, cutting across districts and demographic profiles rather than concentrating in any single region.

**AIADMK+ candidates declared the highest mean candidate wealth at ₹46.54 Cr** per candidate — more than double SPA's ₹20.77 Cr and nearly three times TVK's ₹16.66 Cr. Despite this financial advantage, AIADMK+ won only 53 seats, their weakest performance since the 2021 wave election.

**Turnout reached 85.1%**, the highest ever recorded for a Tamil Nadu assembly election — a 12-point jump from 2021's 73.4%. The surge is widely attributed to first-time voters energised by TVK's entry and the generational contrast it represented.

**No alliance secured a majority** (118 seats needed). TVK's 108 seats leave government formation in flux — the single most consequential unresolved question from this election.

---

### How It Works

**Data Pipeline**

- 2021 and 2016 results sourced from the Trivedi Centre for Political Data (TCPD) Lok Dhaba dataset via OpenCity — reshaped from long-format (one row per candidate) to wide-format (one row per constituency) with winner, runner-up, and full party vote share columns for 13 parties
- 2026 results scraped from the Election Commission of India results portal, parsed from nested HTML tables, and joined to the 2021 baseline by constituency number (234/234 declared)
- Bye-election results for Aravakurichi (AIADMK, Nov 2016) and Thanjavur (DMK, Nov 2016) sourced separately and patched into the 2016 layer — these two constituencies had their main polls countermanded by ECI due to cash-for-votes seizures
- 2026 candidate affidavit data (assets, liabilities, criminal cases, education, age) scraped from Myneta.info across all 234 constituencies — 3,652 candidates total. Asset values image-protected on summary pages were retrieved by fetching individual candidate detail pages
- A constituency-ID crosswalk between Myneta's internal numbering and ECI's ac_no system was built using name normalisation, spelling override dictionaries (36 entries), and two hardcoded entries for the duplicate-named TIRUPPATTUR constituencies (ac_no 50 in Vellore and 185 in Sivaganga)

**Dashboard**

- Map rendered using D3.js with GeoJSON boundaries from the baskicanvas/tamilnadu-assembly-constituency-maps repository (234 post-delimitation ACs)
- Six map layers: 2026 Winner, 2026 Candidate Distribution (pre-election), 2021 Winner, 2021 Margin, 2016 Winner, Swing (2021→2026)
- AC click triggers a detail panel showing year-specific results, vote share bars, winner/runner-up cards, flip indicator, and 2026 candidate profiles with assets and criminal cases
- AI Election Analyst chatbot powered by Claude — grounded in the full constituency dataset via dynamic context injection, scoped to Tamil Nadu elections 2016–2026

**Tools & Stack**
- Python (pandas, geopandas, requests, BeautifulSoup, pyarrow) — data acquisition, cleaning, transformation, export
- Mapbox GL JS + D3.js — constituency choropleth and interaction layer
- Vanilla HTML/JS — single-file dashboard, no framework dependency
- Anthropic Claude API + Vercel serverless function — scoped AI chatbot with live data context
- Vercel — static hosting and API routing

---

[View the full code and methodology on GitHub](https://github.com/anirudhvenkat96/tn-election-2026)
