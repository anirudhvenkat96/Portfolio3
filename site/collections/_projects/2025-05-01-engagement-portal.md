---
date: 2025-05-01 00:00:00 +0000
title: Public Engagement Portal
subtitle: Civic Tech, Full-Stack Development, Urban Planning, Public Participation
image: /images/engagement-portal-hero.png
category: civic-tech
hide_hero: true
---

Public engagement in planning practices takes time and effort to plan. Especially in small and medium sized firms, time is money and finding efficient ways to gather public opinion is invaluable. I wanted to find ways to eliminate the boring and costly parts of public engagement efforts such as logging attendee details, using third party survey apps, consolidating all kinds of data into a digital format, etc. Often, Planners arrive at community sessions with paper sign-in sheets, printed or emailed surveys, and no way to collect digitized spatial opinions from residents in real time. Data gets lost, transcribed incorrectly, or never analyzed at all. This portal is a purpose-built digital tool that replaces that entire workflow from attendee registration to map-based community input, putting structured, exportable data in the planner's hands by the end of the session.

---

### How a session comes together

<div style="position:relative; width:100%; overflow:hidden; border-radius:8px; background:#f3f4f6;">
  <div id="carousel-track" style="display:flex; transition:transform 0.4s ease;">
    <img src="/images/engagement-portal-01.jpg" alt="Admin projects dashboard" style="min-width:100%; width:100%; object-fit:cover; display:block;">
    <img src="/images/engagement-portal-02.jpg" alt="Admin sessions page" style="min-width:100%; width:100%; object-fit:cover; display:block;">
  </div>
  <button onclick="moveCarousel(-1)" style="position:absolute; left:12px; top:50%; transform:translateY(-50%); background:rgba(255,255,255,0.85); border:none; border-radius:50%; width:36px; height:36px; font-size:18px; cursor:pointer; line-height:1;">‹</button>
  <button onclick="moveCarousel(1)" style="position:absolute; right:12px; top:50%; transform:translateY(-50%); background:rgba(255,255,255,0.85); border:none; border-radius:50%; width:36px; height:36px; font-size:18px; cursor:pointer; line-height:1;">›</button>
  <div style="position:absolute; bottom:10px; width:100%; display:flex; justify-content:center; gap:6px;">
    <span id="dot-0" style="width:8px; height:8px; border-radius:50%; background:#1d4ed8; display:inline-block;"></span>
    <span id="dot-1" style="width:8px; height:8px; border-radius:50%; background:#cbd5e1; display:inline-block;"></span>
  </div>
</div>

<script>
var _ci = 0;
var _ct = 2;
function moveCarousel(dir) {
  _ci = (_ci + dir + _ct) % _ct;
  document.getElementById('carousel-track').style.transform = 'translateX(-' + (_ci * 100) + '%)';
  for (var i = 0; i < _ct; i++) {
    var dot = document.getElementById('dot-' + i);
    if (dot) dot.style.background = i === _ci ? '#1d4ed8' : '#cbd5e1';
  }
}
</script>

Before an engagement day, the planner creates a project and sets up a session in the admin dashboard. Each session lives under a project, can hold multiple engagement activities, and has its own photo folder for documentation.

---

### Attendees check in on arrival

![Public-facing kiosk check-in form on a tablet](/images/engagement-portal-03.jpg)

When community members arrive at the venue, they are handed a tablet or laptop with the check-in screen open. They enter their name, email, address, and neighborhood affiliation. Every submission is automatically linked to the session — no paper, no manual transcription.

---

### Surveys collect structured opinions

![Public survey form showing a multiple choice question](/images/engagement-portal-04.jpg)

The planner builds a survey in the admin panel and shares a link with attendees. This survey can also be emailed to community members who could not attend in person. The public form supports short text, long text, multiple choice, and rating scale questions. Responses are stored per session and exportable as CSV.

---

### Communities place their opinions on the map

![Map activity interface showing a pin placed on a street in Chennai](/images/engagement-portal-05.jpg)

The most powerful feature of the portal is the activity interface which is a full-screen map where attendees tap to place a pin indicating a spatial preference. In this proof of concept, attendees mark where they would like to see a bus stop in their neighborhood. Every pin is saved with coordinates and linked to the attendee's record.

---

### Planners review everything in one place

![Admin activity results page showing clustered pins on a map](/images/engagement-portal-06.jpg)

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
