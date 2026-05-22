# Build Frontend
FROM node:20-alpine AS frontend-builder

WORKDIR /app

COPY ./frontend/package*.json ./
RUN npm install

COPY ./frontend ./

RUN npm run build


# Build Backend
FROM node:20-alpine

WORKDIR /app

COPY ./backend/package*.json ./
RUN npm install

COPY ./backend ./

COPY --from=frontend-builder /app/dist ./public

EXPOSE 8080

CMD ["npm", "start"]