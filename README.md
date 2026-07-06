<div align="center">

# 🚀 CodePrix

### AI-Powered Cloud IDE built with Next.js, WebContainers & Ollama

<p align="center">
  <a href="https://code-prix.vercel.app">
    <img src="public/vibe-code-editor-thumbnaail.svg" alt="CodePrix Banner" width="900">
  </a>
</p>

<p align="center">

<a href="https://code-prix.vercel.app">🌐 Live Demo</a> •
<a href="https://github.com/yash8233/CodePrix/issues">Report Bug</a> •
<a href="https://github.com/yash8233/CodePrix/issues">Request Feature</a>

</p>

<p align="center">

<img src="https://img.shields.io/github/stars/yash8233/CodePrix?style=for-the-badge" />
<img src="https://img.shields.io/github/forks/yash8233/CodePrix?style=for-the-badge" />
<img src="https://img.shields.io/github/license/yash8233/CodePrix?style=for-the-badge" />
<img src="https://img.shields.io/github/issues/yash8233/CodePrix?style=for-the-badge" />

</p>

</div>

---

## 📖 About

**CodePrix** is a browser-based AI-powered development environment that combines a modern code editor, browser runtime, AI code assistance, and project management into one seamless experience.

Built with **Next.js 15**, **Monaco Editor**, **WebContainers**, **Prisma**, **MongoDB**, and **Ollama**, CodePrix enables developers to build and preview applications directly inside the browser without local setup.

---

## ✨ Features

### 🤖 AI Features

- AI Code Completion
- AI Chat Assistant
- Context-Aware Suggestions
- Inline Code Completion
- Local LLM Integration using Ollama

### 💻 IDE Features

- Monaco Editor
- Multi-file Editing
- File Explorer
- Folder Management
- Create / Rename / Delete Files
- Save & Save All
- Keyboard Shortcuts

### ⚡ Runtime

- Browser-based Execution
- StackBlitz WebContainers
- Live Preview
- Embedded Terminal
- Real-time File Synchronization

### 🔐 Authentication

- Google OAuth
- GitHub OAuth
- JWT Sessions
- NextAuth v5

### 📦 Project Templates

- React
- Next.js
- Express
- Vue
- Hono
- Angular

### 🎨 User Experience

- Responsive Design
- Dark / Light Theme
- Project Dashboard
- Favorites
- Fast Navigation

---

## 🏗 Architecture

```text
                Next.js App Router
                        │
        ┌───────────────┼───────────────┐
        │               │               │
        ▼               ▼               ▼
   NextAuth         Prisma ORM     WebContainers
        │               │               │
        ▼               ▼               ▼
 Google/GitHub      MongoDB      Browser Runtime
        │
        ▼
 User Authentication

               ▼

      Ollama (Local LLM)

               ▼

 AI Chat + Code Completion
```

---

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 15 |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI Library | ShadCN UI |
| Authentication | NextAuth |
| Database | MongoDB |
| ORM | Prisma |
| Editor | Monaco Editor |
| Runtime | StackBlitz WebContainers |
| AI | Ollama |
| Terminal | xterm.js |
| State Management | Zustand |

---

## 📂 Folder Structure

```text
CodePrix
│
├── app
├── components
├── hooks
├── lib
├── modules
├── prisma
├── public
├── scripts
├── vibecode-starters
├── package.json
└── README.md
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/yash8233/CodePrix.git

cd CodePrix
```

---

## Install Dependencies

```bash
npm install
```

---

## Generate Template Files

```bash
npm run generate-templates
```

---

## Configure Environment Variables

Create a `.env.local`

```env
DATABASE_URL=

AUTH_SECRET=

AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=

AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
```

---

## Generate Prisma Client

```bash
npx prisma generate
```

---

## Install Ollama

Download Ollama

https://ollama.com

Pull a model

```bash
ollama pull codellama
```

Run the model

```bash
ollama run codellama
```

---

## Start Development Server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

## ⌨ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Ctrl + S | Save Current File |
| Ctrl + Shift + S | Save All Files |
| Ctrl + Space | Trigger AI Suggestion |
| Tab | Accept Suggestion |

---

## 🚀 Deployment

Deploy on **Vercel**

Required Environment Variables

```env
DATABASE_URL=

AUTH_SECRET=

AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=

AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
```

Build

```bash
npm run build
```

---

## 📸 Screenshots

### Dashboard

> Add screenshot here

---

### Playground

> Add screenshot here

---

### AI Assistant

> Add screenshot here

---

### Live Preview

> Add screenshot here

---

## 🗺 Roadmap

- AI Agent Mode
- Git Integration
- Live Collaboration
- Docker Runtime
- Extension Marketplace
- Custom Templates
- AI Refactoring
- AI Bug Detection

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature/amazing-feature
```

3. Commit your changes

```bash
git commit -m "Add amazing feature"
```

4. Push to GitHub

```bash
git push origin feature/amazing-feature
```

5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Yash Gupta**

GitHub: https://github.com/yash8233

Live Project: https://code-prix.vercel.app

---

<div align="center">

### ⭐ If you found this project useful, consider giving it a star.

Made with ❤️ using Next.js, Prisma, Monaco Editor, WebContainers & Ollama.

</div>