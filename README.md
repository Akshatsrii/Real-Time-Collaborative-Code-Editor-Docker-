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
  <img src="https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white"/>
  <img src="https://img.shields.io/badge/Amazon_EC2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white"/>
  <img src="https://img.shields.io/badge/Amazon_ECR-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white"/>
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/yourusername/collabcode?style=social"/>
  <img src="https://img.shields.io/github/forks/yourusername/collabcode?style=social"/>
  <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square"/>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square"/>
</p>

<br/>

> ⚡ *Code together. Ship faster. No setup friction.*
> A production-ready real-time collaborative editor — built to learn **Docker** and **AWS** end-to-end.

</div>

---

## 📑 Table of Contents

- [✨ Features](#-features)
- [🛠 Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🖥 Local Development](#-local-development)
- [🐳 Docker Setup](#-docker-setup)
- [☁️ AWS Deployment](#️-aws-deployment)
- [🔐 Environment Variables](#-environment-variables)
- [🔁 Architecture & Flowchart](#-architecture--flowchart)
- [🗺 AWS Infrastructure Diagram](#-aws-infrastructure-diagram)

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
| ☁️ **AWS-Ready** | Deploy with EC2 + ECR for a real cloud production setup |

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
│   ├── Dockerfile           # Frontend Docker image
│   └── package.json
│
├── 🖥 backend/
│   ├── server.js            # Express + WebSocket (y-websocket)
│   ├── Dockerfile           # Backend Docker image
│   └── package.json
│
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

## ☁️ AWS Deployment

<div align="center">

```
   █████╗ ██╗    ██╗███████╗
  ██╔══██╗██║    ██║██╔════╝
  ███████║██║ █╗ ██║███████╗
  ██╔══██║██║███╗██║╚════██║
  ██║  ██║╚███╔███╔╝███████║
  ╚═╝  ╚═╝ ╚══╝╚══╝ ╚══════╝
  Amazon Web Services — Production Deployment
```

</div>

This project is designed as a **learning exercise** for Docker + AWS. You will:

- Push Docker images to **Amazon ECR** (Elastic Container Registry)
- Run containers on an **Amazon EC2** instance
- Expose the app via EC2's public IP

---

### 🧱 AWS Services Used

| Service | Role |
|---|---|
| **EC2** | Virtual machine to run your containers |
| **ECR** | Private Docker image registry |
| **Security Groups** | Firewall rules (open ports 80, 1234) |
| **IAM** | Permissions for ECR access |

---

### 📋 Step-by-Step AWS Deployment

#### Step 1 — Install AWS CLI & configure

```bash
# Install AWS CLI (Linux/macOS)
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip && sudo ./aws/install

# Configure with your IAM credentials
aws configure
# AWS Access Key ID:     <your-access-key>
# AWS Secret Access Key: <your-secret-key>
# Default region:        ap-south-1        ← Mumbai (closest for India)
# Output format:         json
```

---

#### Step 2 — Create ECR Repositories

```bash
# Create repo for backend
aws ecr create-repository --repository-name collabcode-backend --region ap-south-1

# Create repo for frontend
aws ecr create-repository --repository-name collabcode-frontend --region ap-south-1
```

---

#### Step 3 — Build, Tag & Push Images to ECR

```bash
# Authenticate Docker to ECR
aws ecr get-login-password --region ap-south-1 | \
  docker login --username AWS --password-stdin \
  <your-aws-account-id>.dkr.ecr.ap-south-1.amazonaws.com

# ---- Backend ----
docker build -t collabcode-backend ./backend

docker tag collabcode-backend:latest \
  <your-aws-account-id>.dkr.ecr.ap-south-1.amazonaws.com/collabcode-backend:latest

docker push \
  <your-aws-account-id>.dkr.ecr.ap-south-1.amazonaws.com/collabcode-backend:latest

# ---- Frontend ----
docker build -t collabcode-frontend ./frontend

docker tag collabcode-frontend:latest \
  <your-aws-account-id>.dkr.ecr.ap-south-1.amazonaws.com/collabcode-frontend:latest

docker push \
  <your-aws-account-id>.dkr.ecr.ap-south-1.amazonaws.com/collabcode-frontend:latest
```

---

#### Step 4 — Launch an EC2 Instance

```
AWS Console → EC2 → Launch Instance

  Name          : collabcode-server
  AMI           : Ubuntu Server 22.04 LTS (Free tier eligible)
  Instance type : t2.micro (Free tier)
  Key pair      : Create new → download .pem file (keep it safe!)
  
  Security Group (Inbound Rules):
  ┌──────────┬──────────┬─────────────┐
  │ Type     │ Port     │ Source      │
  ├──────────┼──────────┼─────────────┤
  │ SSH      │ 22       │ My IP       │
  │ HTTP     │ 80       │ 0.0.0.0/0   │
  │ Custom   │ 1234     │ 0.0.0.0/0   │
  └──────────┴──────────┴─────────────┘
```

---

#### Step 5 — SSH into EC2 & Install Docker

```bash
# SSH into your instance
chmod 400 your-key.pem
ssh -i your-key.pem ubuntu@<your-ec2-public-ip>

# Install Docker on EC2
sudo apt update && sudo apt upgrade -y
sudo apt install -y docker.io docker-compose awscli

# Add ubuntu user to docker group (no sudo needed)
sudo usermod -aG docker ubuntu
newgrp docker
```

---

#### Step 6 — Pull & Run Images on EC2

```bash
# Authenticate to ECR from inside EC2
aws ecr get-login-password --region ap-south-1 | \
  docker login --username AWS --password-stdin \
  <your-aws-account-id>.dkr.ecr.ap-south-1.amazonaws.com

# Pull images
docker pull <your-aws-account-id>.dkr.ecr.ap-south-1.amazonaws.com/collabcode-backend:latest
docker pull <your-aws-account-id>.dkr.ecr.ap-south-1.amazonaws.com/collabcode-frontend:latest

# Run backend
docker run -d \
  --name collabcode-backend \
  -p 1234:1234 \
  <your-aws-account-id>.dkr.ecr.ap-south-1.amazonaws.com/collabcode-backend:latest

# Run frontend
docker run -d \
  --name collabcode-frontend \
  -p 80:80 \
  <your-aws-account-id>.dkr.ecr.ap-south-1.amazonaws.com/collabcode-frontend:latest

# Verify containers are running
docker ps
```

---

#### Step 7 — Access Your Live App 🎉

```
http://<your-ec2-public-ip>
```

Share the URL with a friend, open it in two tabs, enter the same room — and you're collaborating live from the cloud!

---

### 🔄 Re-deploy After Code Changes

```bash
# Local machine: rebuild and push new image
docker build -t collabcode-backend ./backend
docker tag collabcode-backend:latest <ecr-uri>/collabcode-backend:latest
docker push <ecr-uri>/collabcode-backend:latest

# On EC2: pull and restart
ssh -i your-key.pem ubuntu@<ec2-ip>
docker pull <ecr-uri>/collabcode-backend:latest
docker stop collabcode-backend && docker rm collabcode-backend
docker run -d --name collabcode-backend -p 1234:1234 <ecr-uri>/collabcode-backend:latest
```

---

## 🔐 Environment Variables

Create a `.env` file in `frontend/` for local development:

```env
# frontend/.env
VITE_WS_URL=ws://localhost:1234
```

For production (EC2):

```env
VITE_WS_URL=ws://<your-ec2-public-ip>:1234
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

## 🗺 AWS Infrastructure Diagram

```
  ┌──────────────────────────────────────────────────────────────┐
  │                        AWS CLOUD                             │
  │                    Region: ap-south-1                        │
  │                                                              │
  │   ┌──────────────────────────────────────────────────────┐   │
  │   │                 Amazon ECR                           │   │
  │   │  ┌─────────────────────┐  ┌─────────────────────┐   │   │
  │   │  │ collabcode-backend  │  │ collabcode-frontend  │   │   │
  │   │  │ :latest             │  │ :latest              │   │   │
  │   │  └──────────┬──────────┘  └──────────┬───────────┘   │   │
  │   └─────────────┼──────────────────────── ┼───────────────┘   │
  │                 │  docker pull             │                   │
  │                 ▼                         ▼                   │
  │   ┌──────────────────────────────────────────────────────┐   │
  │   │                 EC2 Instance (t2.micro)               │   │
  │   │                  Ubuntu 22.04 LTS                     │   │
  │   │                                                        │   │
  │   │   ┌────────────────┐     ┌──────────────────────┐    │   │
  │   │   │  Docker        │     │  Docker               │    │   │
  │   │   │  Container     │     │  Container            │    │   │
  │   │   │  backend       │     │  frontend             │    │   │
  │   │   │  PORT: 1234    │     │  PORT: 80 (nginx)     │    │   │
  │   │   └────────────────┘     └──────────────────────┘    │   │
  │   │                                                        │   │
  │   │   Security Group Inbound:                              │   │
  │   │   :22   (SSH)   ← Your IP only                        │   │
  │   │   :80   (HTTP)  ← 0.0.0.0/0                          │   │
  │   │   :1234 (WS)    ← 0.0.0.0/0                          │   │
  │   └──────────────────────────────────────────────────────┘   │
  │                          ▲                                    │
  └──────────────────────────┼────────────────────────────────────┘
                             │
                   Public IP / DNS
                             │
            ┌────────────────┴──────────────────┐
            │                                   │
    ┌───────┴──────┐                   ┌────────┴──────┐
    │   User A     │                   │   User B      │
    │  Browser     │                   │  Browser      │
    └──────────────┘                   └───────────────┘
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

**Built with ❤️ to learn Docker & AWS in a real-world project**

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:C4A882,25:D2B48C,50:FFFFFF,75:DEB887,100:F5DEB3&height=100&section=footer" width="100%"/>

</div>
