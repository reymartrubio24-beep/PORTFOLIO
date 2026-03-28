## Rey-Dev Portfolio 🚀

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![React][react-shield]][react-url]
[![Node][node-shield]][node-url]
[![Tailwind][tailwind-shield]][tailwind-url]
[![Gemini][gemini-shield]][gemini-url]

<br />
<div align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/3242/3242257.png" alt="Logo" width="80" height="80">

  <h3 align="center">Rey-Dev — Premium AI-Powered Portfolio</h3>

  <p align="center">
    A world-class developer portfolio showcasing AI & Software Engineering expertise, built with React 19, Node.js, and Google Gemini.
    <br />
    <br />
    <a href="https://github.com/reymartrubio24-beep/PORTFOLIO">💻 View Code</a>
    ·
    <a href="https://github.com/reymartrubio24-beep/PORTFOLIO/issues">🐞 Report Bug</a>
    ·
    <a href="https://github.com/reymartrubio24-beep/PORTFOLIO/issues">✨ Request Feature</a>
  </p>
</div>

---

## 📖 About The Project

**Rey-Dev Portfolio** is a high-performance, minimalist, and developer-focused website. It goes beyond a simple landing page by integrating an **AI-powered chatbot** that can answer questions about my professional background, projects, and skills using a custom RAG (Retrieval-Augmented Generation) system.

### ✨ Key Features

- **🤖 AI Chatbot Integration** — Real-time chat powered by **Google Gemini 2.5 Flash**, conditioned on my professional experience and project data.
- **✨ Premium UI/UX** — Modern, minimalist aesthetic with glassmorphism effects and high-end typography.
- **🎬 Dynamic Animations** — Smooth, frame-by-frame entrance and interaction animations using **Framer Motion**.
- **📊 Modular Architecture** — Decoupled frontend and backend for scalable data management and clean code.
- **📱 Ultra Responsive** — Seamless experience from widescreen monitors to mobile devices.
- **🛡️ SEO Optimized** — Dynamic document headers and meta tags for better search engine visibility.
- **🌗 Theme-Ready** — Foundation for light/dark mode switching with persistent user preferences.

---

### 🛠️ Built With

| Layer     | Technology                                                 |
| --------- | ---------------------------------------------------------- |
| Frontend  | [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/) |
| Backend   | [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/) |
| AI Model  | [Google Gemini 2.5 Flash](https://ai.google.dev/)          |
| Styling   | [Tailwind CSS](https://tailwindcss.com/) + [Vanilla CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) |
| Animations| [Framer Motion](https://www.framer.com/motion/)            |

---

## 📂 Project Structure

```
PORTFOLIO/
├── frontend/                   # React Frontend (Vite)
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── components/         # Hero, About, Projects, AIChat, etc.
│   │   ├── hooks/              # Custom React hooks (useData)
│   │   ├── context/            # Global state (ThemeContext)
│   │   └── App.jsx             # Main router & layout
│   └── index.html              # HTML entry point
├── backend/                    # Node.js Backend (Express)
│   ├── data/                   # JSON data sources (Experience, Projects)
│   ├── routes/                 # API endpoints (Chat, Contact)
│   └── index.js                # Server entry point
├── package.json                # Root package for concurrent execution
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

### 📋 Prerequisites

- **Node.js** (v20+) & **npm**
- **Google Gemini API Key** (for AI chatbot)

### ⚙️ Installation

1. **Clone the repository:**

```bash
git clone https://github.com/reymartrubio24-beep/PORTFOLIO.git
cd PORTFOLIO
```

2. **Setup the Backend:**

```bash
cd backend
npm install
```
Create a `.env` file in the `backend/` folder:
```env
PORT=5000
GEMINI_API_KEY=your_actual_api_key_here
```

3. **Setup the Frontend:**

```bash
cd ../frontend
npm install
```

4. **Start the development server:**

From the **root directory**, run:
```bash
npm run dev
```

5. **Open the app** at `http://localhost:5173`.

---

## 💡 Key Sections

### 🤖 AI Chatbot (Rey-Dev_AI_V.1.0)
The chatbot uses the Gemini 2.5 Flash model with a custom system instruction. It pulls data from `backend/data/*.json` to provide accurate answers about my work history, eliminating the need for visitors to scroll through the entire page.

### 💼 Professional Experience
An interactive timeline of my career history, showcasing growth and key accomplishments in a visually engaging way.

### 📂 Projects Showcase
A curated gallery of my best work, featuring project descriptions, tech stacks, and direct links to live demos or source code.

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📫 Contact

**Rey Mart Rubio** — [GitHub Profile](https://github.com/reymartrubio24-beep)

Project Link: [https://github.com/reymartrubio24-beep/PORTFOLIO](https://github.com/reymartrubio24-beep/PORTFOLIO)

<!-- MARKDOWN LINKS & IMAGES -->

[forks-shield]: https://img.shields.io/github/forks/reymartrubio24-beep/PORTFOLIO?style=for-the-badge
[forks-url]: https://github.com/reymartrubio24-beep/PORTFOLIO/network/members
[stars-shield]: https://img.shields.io/github/stars/reymartrubio24-beep/PORTFOLIO?style=for-the-badge
[stars-url]: https://github.com/reymartrubio24-beep/PORTFOLIO/stargazers
[issues-shield]: https://img.shields.io/github/issues/reymartrubio24-beep/PORTFOLIO?style=for-the-badge
[issues-url]: https://github.com/reymartrubio24-beep/PORTFOLIO/issues
[react-shield]: https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[node-shield]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[node-url]: https://nodejs.org/
[tailwind-shield]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[tailwind-url]: https://tailwindcss.com/
[gemini-shield]: https://img.shields.io/badge/Google_Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white
[gemini-url]: https://ai.google.dev/
