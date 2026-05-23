<div align="center">

<!-- MAIN BANNER -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:F5DEB3,25:DEB887,50:FFFFFF,75:D2B48C,100:C4A882&height=200&section=header&text=CollabCode&fontSize=80&fontColor=5C3D1E&animation=twinkling&fontAlignY=35&desc=Real-Time%20Collaborative%20Code%20Editor&descAlignY=60&descSize=20&descColor=7B5230" width="100%"/>

<!-- BADGES -->
<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"/>
  <img src="https://img.shields.io/badge/WebSocket-010101?style=for-the-badge&logo=socketdotio&logoColor=white"/>
  <img src="https://img.shields.io/badge/Monaco_Editor-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/>
  <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black"/>
</p>

<p align="center">
  <a href="https://real-time-collaborative-code-editor-gilt.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/🚀%20Live%20Demo-Vercel%20Frontend-000000?style=for-the-badge&logo=vercel&logoColor=white"/>
  </a>
  <a href="https://real-time-collaborative-code-editor-wb5a.onrender.com" target="_blank">
    <img src="https://img.shields.io/badge/⚙️%20Backend%20API-Render%20Service-46E3B7?style=for-the-badge&logo=render&logoColor=black"/>
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/yourusername/collabcode?style=social"/>
  <img src="https://img.shields.io/github/forks/yourusername/collabcode?style=social"/>
  <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square"/>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square"/>
</p>

<br/>

> ⚡ *Code together. Ship faster. No setup friction.*
> Frontend on **Vercel** · Backend on **Render** · Dockerized for local dev.
>
> 🌐 **[Live Demo → real-time-collaborative-code-editor-gilt.vercel.app](https://real-time-collaborative-code-editor-gilt.vercel.app/)**
> ⚙️ **[Backend API → real-time-collaborative-code-editor-wb5a.onrender.com](https://real-time-collaborative-code-editor-wb5a.onrender.com)**

</div>

---

## 📑 Table of Contents

- [✨ Features](#-features)
- [🛠 Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🖥 Local Development](#-local-development)
- [🐳 Docker Setup](#-docker-setup)
- [▲ Frontend — Vercel Deployment](#-frontend--vercel-deployment)
- [🚀 Backend — Render Deployment](#-backend--render-deployment)
- [🔐 Environment Variables](#-environment-variables)
- [🔁 Architecture & Flowchart](#-architecture--flowchart)
- [🗺 Infrastructure Diagram](#-infrastructure-diagram)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔄 **Real-Time Sync** | Every keystroke synced across all clients via Yjs CRDTs |
| 👥 **Live Presence** | See who's in the room and their cursor positions |
| 🖊️ **Monaco Editor** | Full VS Code editing experience in the browser |
| 🔁 **CRDT-based** | Conflict-free collaborative editing — no overwrites |
| 🌐 **WebSocket Server** | Low-latency persistent connections via `ws` |
| 🚪 **Room System** | Isolated sessions — each room has its own shared document |
| 🎨 **Dark Themed UI** | Sleek dark editor with responsive layout |
| 🐳 **Dockerized** | Frontend + backend each containerized, compose-ready |
| ▲ **Vercel Frontend** | React app deployed on Vercel — instant CDN, zero config |
| 🚀 **Render Backend** | Node.js WebSocket server deployed on Render free tier |

---

## 🛠 Tech Stack

### Frontend
| Tool | Purpose |
|---|---|
| **React + Vite** | Fast UI with HMR dev experience |
| **Tailwind CSS** | Utility-first styling |
| **Monaco Editor** | Code editor (same engine as VS Code) |
| **Yjs** | CRDT engine for conflict-free sync |
| **y-websocket** | Yjs WebSocket provider |
| **y-monaco** | Yjs binding for Monaco Editor |

### Backend
| Tool | Purpose |
|---|---|
| **Node.js** | Runtime |
| **Express** | HTTP server & health check routes |
| **ws** | WebSocket server for real-time sync |

---

## 📁 Project Structure

```
collabcode/
│
├── 📦 frontend/
│   ├── src/
│   │   ├── App.jsx          # Main app — room join + editor
│   │   ├── App.css          # Global styles
│   │   └── main.jsx         # React entry point
│   └── package.json
│
├── 🖥 backend/
│   ├── server.js            # Express + WebSocket (y-websocket)
│   └── package.json
│
│   ├── Dockerfile          
├── 🐳 docker-compose.yml    # Orchestrate frontend + backend
└── 📖 README.md
```

---

## 🖥 Local Development

### Prerequisites

- Node.js `v18+`
- npm `v9+`

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/collabcode.git
cd collabcode
```

### 2. Start the backend

```bash
cd backend
npm install
node server.js
# Runs on http://localhost:1234
```

### 3. Start the frontend

```bash
cd frontend
npm install
npm run dev
# Runs on http://localhost:5173
```

Open two browser tabs → enter the **same room name** → start coding together! 🎉

---

## 🐳 Docker Setup

<div align="center">

```
  ██████╗  ██████╗  ██████╗██╗  ██╗███████╗██████╗
  ██╔══██╗██╔═══██╗██╔════╝██║ ██╔╝██╔════╝██╔══██╗
  ██║  ██║██║   ██║██║     █████╔╝ █████╗  ██████╔╝
  ██║  ██║██║   ██║██║     ██╔═██╗ ██╔══╝  ██╔══██╗
  ██████╔╝╚██████╔╝╚██████╗██║  ██╗███████╗██║  ██║
  ╚═════╝  ╚═════╝  ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
```

*Containerize once. Run anywhere.*

</div>

### 📄 `frontend/Dockerfile`

```dockerfile
# ---- Build Stage ----
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# ---- Serve Stage ----
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### 📄 `backend/Dockerfile`

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 1234
CMD ["node", "server.js"]
```

### 📄 `docker-compose.yml`

```yaml
version: "3.9"

services:
  backend:
    build: ./backend
    container_name: collabcode-backend
    ports:
      - "1234:1234"
    environment:
      - PORT=1234
    restart: unless-stopped

  frontend:
    build: ./frontend
    container_name: collabcode-frontend
    ports:
      - "80:80"
    depends_on:
      - backend
    restart: unless-stopped
```

### 🚀 Run with Docker Compose

```bash
# Build and start all services
docker-compose up --build

# Run in background (detached)
docker-compose up -d --build

# Stop all services
docker-compose down

# View logs
docker-compose logs -f
```

### 🔍 Useful Docker Commands

```bash
# List running containers
docker ps

# Enter a running container shell
docker exec -it collabcode-backend sh

# Remove all stopped containers + unused images
docker system prune -a

# Rebuild a single service
docker-compose up --build backend
```

---

## ▲ Frontend — Vercel Deployment

<div align="center">

```
 ██╗   ██╗███████╗██████╗  ██████╗███████╗██╗
 ██║   ██║██╔════╝██╔══██╗██╔════╝██╔════╝██║
 ██║   ██║█████╗  ██████╔╝██║     █████╗  ██║
 ╚██╗ ██╔╝██╔══╝  ██╔══██╗██║     ██╔══╝  ██║
  ╚████╔╝ ███████╗██║  ██║╚██████╗███████╗███████╗
   ╚═══╝  ╚══════╝╚═╝  ╚═╝ ╚═════╝╚══════╝╚══════╝
  Frontend CDN. Global edge. Zero config deploys.
```

</div>

> 🌐 **Live Frontend:** [https://real-time-collaborative-code-editor-gilt.vercel.app/](https://real-time-collaborative-code-editor-gilt.vercel.app/)

Vercel is the perfect home for the React + Vite frontend — instant global CDN, automatic HTTPS, and deploys on every push.

---

### 📋 Step-by-Step Vercel Deployment

#### Step 1 — Push your code to GitHub

```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/yourusername/collabcode.git
git push -u origin main
```

---

#### Step 2 — Import project on Vercel

```
vercel.com/new → Import Git Repository

  Framework Preset : Vite
  Root Directory   : frontend        ← important!
  Build Command    : npm run build
  Output Directory : dist

  Environment Variables:
  ┌──────────────┬────────────────────────────────────────────────┐
  │ Key          │ Value                                          │
  ├──────────────┼────────────────────────────────────────────────┤
  │ VITE_WS_URL  │ wss://real-time-collaborative-code-editor-     │
  │              │       wb5a.onrender.com                        │
  └──────────────┴────────────────────────────────────────────────┘
```

> ⚠️ Always use `wss://` (not `ws://`) since Vercel serves over HTTPS

---

#### Step 3 — Deploy ✅

Vercel builds and deploys automatically. Your frontend is live at:

```
https://real-time-collaborative-code-editor-gilt.vercel.app/
```

---

### 🔄 Auto Re-deploy on Push

Every `git push` to `main` triggers a new Vercel build — no extra steps needed.

```bash
git add .
git commit -m "feat: new editor theme"
git push origin main
# ✅ Vercel deploys in ~30 seconds
```

---

## 🚀 Backend — Render Deployment

<div align="center">

```
  ██████╗ ███████╗███╗   ██╗██████╗ ███████╗██████╗
  ██╔══██╗██╔════╝████╗  ██║██╔══██╗██╔════╝██╔══██╗
  ██████╔╝█████╗  ██╔██╗ ██║██║  ██║█████╗  ██████╔╝
  ██╔══██╗██╔══╝  ██║╚██╗██║██║  ██║██╔══╝  ██╔══██╗
  ██║  ██║███████╗██║ ╚████║██████╔╝███████╗██║  ██║
  ╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝  ╚═╝
  Node.js WebSocket backend. Always-on. Free tier.
```

</div>

> ⚙️ **Live Backend:** [https://real-time-collaborative-code-editor-wb5a.onrender.com](https://real-time-collaborative-code-editor-wb5a.onrender.com)

Render hosts the Node.js WebSocket server — persistent connections, free tier Web Service, auto-deploys from GitHub.

---

### 📋 Step-by-Step Render Deployment

#### Step 1 — Deploy the Backend (Web Service)

```
render.com → New → Web Service

  Connect:       Your GitHub repo
  Name:          collabcode-backend
  Root Dir:      backend
  Runtime:       Node
  Build Command: npm install
  Start Command: node server.js
  Instance Type: Free

  Environment Variables:
  ┌──────────┬───────────────┐
  │ Key      │ Value         │
  ├──────────┼───────────────┤
  │ PORT     │ 10000         │
  └──────────┴───────────────┘
```

> ✅ Render gives you a URL like:
> `https://collabcode-backend.onrender.com`
> Paste this as `VITE_WS_URL` (`wss://...`) in your Vercel env vars.

---

#### Step 2 — Verify it's running

```bash
# Health check — should return 200 OK
curl https://real-time-collaborative-code-editor-wb5a.onrender.com/health
```

---

### ⚠️ Free Tier Notes

| Behaviour | Details |
|---|---|
| 💤 **Spin-down** | Free Web Services sleep after 15 min of inactivity |
| ⏱ **Cold start** | First WebSocket connection after sleep takes ~30 sec |
| 🔁 **Workaround** | Use [UptimeRobot](https://uptimerobot.com) to ping `/health` every 10 min to keep it warm |

---

## 🔐 Environment Variables

Create a `.env` file in `frontend/` for local development:

```env
# frontend/.env
VITE_WS_URL=ws://localhost:1234
```

For production — set this in **Vercel Dashboard → Project → Settings → Environment Variables**:

```env
VITE_WS_URL=wss://real-time-collaborative-code-editor-wb5a.onrender.com
```

For the **Render backend** — set in Render Dashboard → Environment:

```env
PORT=10000
```

> ⚠️ **Never commit `.env` files.** Add them to `.gitignore`.

---

## 🔁 Architecture & Flowchart

```
  USER A (Browser)                          USER B (Browser)
  ┌─────────────────┐                      ┌─────────────────┐
  │  React App      │                      │  React App      │
  │  Monaco Editor  │                      │  Monaco Editor  │
  │  Yjs Doc (local)│                      │  Yjs Doc (local)│
  └────────┬────────┘                      └────────┬────────┘
           │  y-websocket provider                  │  y-websocket provider
           │  (WebSocket connection)                │  (WebSocket connection)
           ▼                                        ▼
  ┌─────────────────────────────────────────────────────────┐
  │                    BACKEND SERVER                       │
  │                                                         │
  │   Express HTTP  ──►  GET /health  (health check)        │
  │                                                         │
  │   y-websocket   ──►  ws://server:1234                   │
  │   Server              │                                 │
  │                       ├── Room: "my-room"               │
  │                       │     ├── User A doc state        │
  │                       │     └── User B doc state        │
  │                       │           ↕ CRDT merge          │
  │                       └── Room: "other-room"            │
  │                                                         │
  └─────────────────────────────────────────────────────────┘

  CRDT Sync Flow:
  ──────────────
  User A types "Hello"
       │
       ▼
  Yjs creates an Update (CRDT operation)
       │
       ▼
  y-websocket sends binary update to server
       │
       ▼
  Server broadcasts update to all peers in the same room
       │
       ▼
  User B's Yjs doc applies the update
       │
       ▼
  Monaco Editor reflects the change instantly ✅
  (No conflict, no overwrite — CRDT guarantees convergence)
```

---

## 🗺 Infrastructure Diagram

```
  GitHub Repository (main branch)
  ┌──────────────────────────────────────────────────────────┐
  │   git push → triggers auto-deploy on both platforms      │
  └───────────────────┬──────────────────────┬───────────────┘
                      │                      │
          ┌───────────▼──────────┐  ┌────────▼──────────────┐
          │   ▲ VERCEL           │  │   🚀 RENDER            │
          │                      │  │                        │
          │   Framework: Vite    │  │   Runtime: Node.js     │
          │   Root: /frontend    │  │   Root: /backend       │
          │   Build: npm run     │  │   CMD: node server.js  │
          │          build       │  │   PORT: 10000          │
          │   Output: /dist      │  │                        │
          │   CDN: Global Edge   │  │   ENV:                 │
          │                      │  │   PORT=10000           │
          │   ENV:               │  │                        │
          │   VITE_WS_URL=       │  │   URL:                 │
          │   wss://render-url   │  │   *.onrender.com       │
          │                      │  │                        │
          │   URL:               │  └────────────┬───────────┘
          │   *.vercel.app       │               │
          └──────────┬───────────┘               │
                     │  HTTPS                    │ wss://
                     │  (serves React app)       │ (WebSocket sync)
                     ▼                           ▼
          ┌──────────────────────────────────────────────────┐
          │                   BROWSER                        │
          │                                                  │
          │   ┌─────────────┐         ┌─────────────┐        │
          │   │   User A    │         │   User B    │        │
          │   │  Monaco Ed. │         │  Monaco Ed. │        │
          │   │  Yjs (CRDT) │◄───────►│  Yjs (CRDT) │        │
          │   └─────────────┘  sync   └─────────────┘        │
          │         via wss://render WebSocket server        │
          └──────────────────────────────────────────────────┘
```

---

## 🤝 Contributing

1. Fork the repo
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

---

<div align="center">

**Built to learn Docker, Vercel & Render in a real-world project**

🌐 [Live Demo (Vercel)](https://real-time-collaborative-code-editor-gilt.vercel.app/) &nbsp;·&nbsp; ⚙️ [Backend (Render)](https://real-time-collaborative-code-editor-wb5a.onrender.com)

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:C4A882,25:D2B48C,50:FFFFFF,75:DEB887,100:F5DEB3&height=100&section=footer" width="100%"/>

</div>
