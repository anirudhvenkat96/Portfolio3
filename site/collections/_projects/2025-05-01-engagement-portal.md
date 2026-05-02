---
date: 2025-05-01 00:00:00 +0000
title: Public Engagement Portal
subtitle: Civic Tech, Full-Stack Development, Urban Planning, Public Participation
image: /images/engagement-portal-hero.jpg
category: civic-tech
hide_hero: true
---

Public engagement in planning is broken. Planners arrive at community sessions with paper sign-in sheets, printed surveys, and no way to collect spatial opinions from residents in real time. Data gets lost, transcribed incorrectly, or never analyzed at all. This portal is a purpose-built digital tool that replaces that entire workflow — from attendee registration to map-based community input — and puts structured, exportable data in the planner's hands by the end of the session.

---

### How a session comes together

![Admin dashboard showing project and session management](/images/engagement-portal-01.jpg)

Before an engagement day, the planner creates a project and sets up a session in the admin dashboard. Each session lives under a project, can hold multiple engagement activities, and has its own photo folder for documentation.

---

### Attendees check in on arrival

![Public-facing kiosk check-in form on a tablet](/images/engagement-portal-02.jpg)

When community members arrive at the venue, they are handed a tablet or laptop with the check-in screen open. They enter their name, email, address, and neighborhood affiliation. Every submission is automatically linked to the session — no paper, no manual transcription.

---

### Surveys collect structured opinions

![Public survey form showing a multiple choice question](/images/engagement-portal-03.jpg)

The planner builds a survey in the admin panel and shares a link with attendees. The public form supports short text, long text, multiple choice, and rating scale questions. Responses are stored per session and exportable as CSV.

---

### Communities place their opinions on the map

![Map activity interface showing a pin placed on a street in Chennai](/images/engagement-portal-04.jpg)

The most powerful feature of the portal is the activity interface — a full-screen map where attendees tap to place a pin indicating a spatial preference. In this proof of concept, attendees mark where they would like to see a bus stop in their neighborhood. Every pin is saved with coordinates and linked to the attendee's record.

---

### Planners review everything in one place

![Admin activity results page showing clustered pins on a map](/images/engagement-portal-05.jpg)

After the session, the planner opens the admin panel to find a complete record — attendee list, survey responses, and all map submissions visualized as clustered markers. Every dataset is exportable. Photos uploaded during the session are stored in a dedicated folder.

---

### How it works

**Session-scoped data model**

Every piece of data — check-ins, survey responses, activity submissions — is linked to a session, which belongs to a project. This makes it possible to run multiple engagement sessions under the same project and compare data across them.

**Plugin-based activity system**

The activity interface is designed as a sandbox. The map pin-drop is the first activity type, but the architecture supports adding new types — polygon drawing, image ranking, drag-and-drop prioritization — without changing the core data model. Each activity type stores its output as structured JSON.

**Stack**

- Next.js (App Router, TypeScript) — frontend and API routes, deployed on Vercel
- Supabase — PostgreSQL database, authentication, file storage, PostGIS for spatial data
- Mapbox GL JS — map rendering for the activity interface and admin results viewer
- GitHub — version control and CI/CD trigger for Vercel

---

[View the live portal](https://engagement-portal.vercel.app)

[View the code on GitHub](https://github.com/anirudhvenkat96/engagement-portal)
