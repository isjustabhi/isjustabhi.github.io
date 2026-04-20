# ⚡ Abhiram Varma — Portfolio

A futuristic, fully interactive personal portfolio built with React, Tailwind CSS, and Framer Motion. Features glassmorphism, neon gradients, particle animations, and a simulated AI chat assistant.

## 🚀 Quick Start

```bash
npm install
npm run dev        # Local dev server at http://localhost:5173
npm run build      # Production build → dist/
```

## 📦 Deploy to GitHub Pages

### Option 1: GitHub Actions (Recommended)
1. Push this repo to GitHub
2. Go to **Settings → Pages → Source** → select **GitHub Actions**
3. Push to `main` — the included workflow (`.github/workflows/deploy.yml`) auto-deploys

### Option 2: Manual Deploy
```bash
npm run build
npx gh-pages -d dist
```
Then set **Settings → Pages → Source** to `gh-pages` branch.

## 🛠 Customization

All content lives in **`src/data/`** as JSON files — no code changes needed:

| File | What to Edit |
|------|-------------|
| `profile.json` | Name, role, bio, links |
| `projects.json` | Projects (title, description, tech stack, GitHub links) |
| `experience.json` | Work experience timeline |
| `skills.json` | Skill categories and proficiency levels |
| `chatResponses.json` | AI chat responses, keywords, and suggestions |

## 🤖 AI Chat — "Ask About Abhi"

The floating chat uses keyword matching against `chatResponses.json`. To connect a real API later, edit `src/components/AiChat.jsx` — replace the `findResponse()` function with an API call.

## 🧩 Tech Stack

- **React** (Vite)
- **Tailwind CSS v4**
- **Framer Motion**
- **Lucide React** (icons)
