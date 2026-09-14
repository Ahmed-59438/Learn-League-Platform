# Contributing to LearnLeague

Thank you for your interest in contributing! This document explains how to get started.

## Local Setup

### Prerequisites
- Python 3.10+
- Node.js 20+
- A free [Groq API key](https://console.groq.com)

### Backend
```bash
cd backend
python -m venv venv && .\venv\Scripts\activate  # Windows
pip install -r requirements.txt
cp .env.example .env  # Fill in your values
alembic upgrade head  # Apply database migrations
uvicorn app:app --host 127.0.0.1 --port 8000 --reload
```

### Frontend
```bash
cd learnleague
npm install
cp .env.example .env.local
npm run dev
```

## Running Tests
```bash
cd backend
pytest tests/ -v
```

## Making a Contribution

1. Fork the repository and create a branch: `git checkout -b feat/your-feature`
2. Make your changes following the patterns in existing files
3. Add or update tests for any logic changes
4. Run `pytest tests/ -v` — all tests must pass
5. Open a Pull Request with a clear description of what changed and why

## Good First Issues
Look for issues labeled `good-first-issue` on GitHub. These are pre-scoped tasks with clear acceptance criteria.

## Code Style
- **Backend**: PEP 8, type hints on all function signatures, docstrings on public functions
- **Frontend**: TypeScript strict mode, no `any` types except where explicitly unavoidable
