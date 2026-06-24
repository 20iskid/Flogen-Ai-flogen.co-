# Flogen

Company website for **Flogen** — a modern full-stack web application with a Next.js frontend, Express API backend, PostgreSQL database, and Docker containerization.

## Project structure

```
flogen.co/
├── frontend/          # Next.js 15 + React + Tailwind CSS
├── backend/           # Express 5 + TypeScript API
├── nginx/             # Reverse proxy config (production)
├── docker-compose.yml       # Production stack
├── docker-compose.dev.yml   # Development with hot reload
└── .env.example       # Environment variable template
```

## Quick start (Docker — recommended)

1. Copy environment variables:

   ```bash
   cp .env.example .env
   ```

2. Start the full dev stack:

   ```bash
   docker compose -f docker-compose.dev.yml up --build
   ```

3. Open:
   - **Website:** http://localhost:3000
   - **API:** http://localhost:4000/health
   - **Database:** localhost:5432

## Quick start (local, no Docker)

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

Set `DATABASE_URL` in a `.env` file if you want contact form submissions persisted to PostgreSQL.

## Production

```bash
cp .env.example .env
# Edit .env with production values
docker compose up --build -d
```

Nginx serves the site on port 80 and proxies `/api/*` to the backend.

## API endpoints

| Method | Path       | Description              |
|--------|------------|--------------------------|
| GET    | `/health`  | Health check             |
| POST   | `/contact` | Submit contact form      |

## Tech stack

- **Frontend:** Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend:** Express 5, TypeScript, Zod validation, PostgreSQL
- **Infrastructure:** Docker, Docker Compose, Nginx, PostgreSQL 16

## License

Apache License 2.0 — see [LICENSE](LICENSE).
