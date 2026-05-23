# ── Stage 1: Build Frontend ────────────────────
FROM node:20-alpine AS frontend-builder

WORKDIR /app

COPY ./frontend/package*.json ./
RUN npm ci

COPY ./frontend ./
RUN npm run build


# ── Stage 2: Production Backend ────────────────
FROM node:20-alpine AS backend

ENV NODE_ENV=production

WORKDIR /app

COPY ./backend/package*.json ./
RUN npm ci --omit=dev

COPY ./backend ./
COPY --from=frontend-builder /app/dist ./public

# Run as non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 8080

CMD ["npm", "start"]