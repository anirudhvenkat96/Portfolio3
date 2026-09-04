---
date: 2026-09-04 00:00:00 +0000
title: Pub League
subtitle: Urban Geography, Network Analysis, Interactive Mapping, Python, deck.gl
image: /images/pub-league.jpg
category: geospatial
hide_hero: true
---

<iframe
  src="https://frontend-ten-psi-6fr65g87ip.vercel.app/"
  style="width:100vw; height:700px; border:none; display:block; margin-left:calc(-50vw + 50%); margin-bottom:2rem;"
  title="Pub League">
</iframe>

*Click any club to see how many pubs its fans can reach on foot before kickoff*

---

How many pubs can a fan actually walk to before a match, and what does the answer say about where a football ground sits in its city? Pub League ranks all 20 Premier League clubs by pub count reachable on foot from their stadium, using real street-network walking distance rather than a straight-line radius — and the ranking ends up measuring urban form as much as it measures football culture.

---

### What It Does

An interactive map draws a one-minute-interval isochrone around each stadium, from 1 to 20 minutes of walking, with every pub inside colored in as it comes into range. Clubs are ranked by total pubs reachable within a 20-minute walk, and each stadium's drawing shows the underlying route network — the paths a fan would actually take, merged into a single set of lines weighted by how many routes share each street.

---

### Key Findings

Newcastle reaches **167 pubs** within 20 minutes — St James' Park sits inside the city centre, so the walk starts in a dense pub grid. Brighton reaches **3**, because the Amex is out at Falmer, well outside the city.

Grounds fall into a few distinct patterns: some have pubs within a minute or two and plateau quickly; others sit empty until a town centre comes into range around the 12–15 minute mark; a few stay near zero no matter how far you walk. Old Trafford is a case of the map lying: pubs across the Manchester Ship Canal in Salford Quays look close by straight-line distance, but there's no bridge on the direct line, so the actual walk is much longer — Old Trafford reaches only **8** pubs in 20 minutes.

---

### How It Works

**Data Pipeline**
- Street network and walking routes computed with OSMnx, using actual pedestrian paths rather than radial distance
- Isochrones generated at every minute from 1 to 20, seeded from points along the stadium's perimeter rather than its centroid, so the walk starts roughly at the turnstiles
- Pubs sourced from OpenStreetMap — 46,081 across Great Britain — spatially joined against each isochrone to determine when each one becomes reachable
- Routes from the stadium to every reachable pub are merged into a single network, with each street segment weighted by how many individual routes pass through it — the shared trunk lines you see in each drawing are the streets most routes have in common

**Tools & Stack**
- Python (OSMnx, GeoPandas, Shapely, pyrosm) — network extraction, isochrone generation, spatial joins, route merging, exported as static JSON
- Next.js + deck.gl — frontend rendering, with no basemap tiles; every line and polygon on the map is drawn from the project's own data
- Vercel — hosting
