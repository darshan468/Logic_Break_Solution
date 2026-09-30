# LOGIC BREAK SOLUTION 🚀

A modern, high-performance web platform built for **Logic Break Solution** — an IT solutions agency delivering cutting-edge digital products, artificial intelligence models, data analytics dashboards, workflow automation, and custom software engineering.

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

---

## 🌟 Key Features

- **Explore Services with Interactive "Learn More"**:
  - **Websites & Web Apps**: Responsive web applications, API integrations, SEO & speed optimization.
  - **AI & Machine Learning**: Custom ML models, NLP, predictive analytics, computer vision.
  - **Data Analytics**: Interactive BI dashboards, ETL pipelines, KPI tracking, customer insights.
  - **Automation**: End-to-end workflow automation, web scraping, scheduled jobs, system integrations.
  - **Chatbots & AI Assistants**: 24/7 conversational support, RAG knowledge retrieval, WhatsApp/Slack integration.
  - **Custom Software**: Bespoke software architecture, cloud-native solutions, cross-platform apps.

- **Direct WhatsApp Project Enquiry**:
  - Validates client details on the frontend.
  - Formats inquiry details (Name, Phone, Email, Service, Budget, Message) and opens WhatsApp directly.
  - Zero database storage for form entries ensuring privacy and zero data overhead.

- **Live Client Counter**:
  - Footer displays live counter badge starting at `15+ Clients Served`.
  - Automatically increments by +1 upon each successful inquiry submission.
  - Powered by a lightweight server endpoint with offline fallback support.

- **Sleek UI/UX & Glassmorphism Design**:
  - Tailored color palette (Charcoal, Obsidian Black, Gold `#d4af37`).
  - Dynamic background canvas particles and glowing blur effects.
  - Smooth scroll transitions, hover elevation effects, and responsive navigation.

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

### Backend Counter Service
- **Runtime**: [Node.js](https://nodejs.org/)
- **Server Framework**: [Express.js](https://expressjs.com/) (`/api/counter` endpoints)

---

## 📂 Project Structure

```
Logic Break Solution/
├── public/                 # Static assets (logo, icons, favicon)
├── server/                 # Express backend server
│   ├── index.js            # Live counter API service
│   └── counter.json        # Counter state storage
├── src/
│   ├── assets/             # Images & visual assets
│   ├── config/             # Site configuration (WhatsApp number & counter baseline)
│   │   └── site.ts
│   ├── context/            # React context (CounterContext)
│   │   └── CounterContext.tsx
│   ├── components/         # Modular React components
│   │   ├── About.tsx       # Company story, values & team overview
│   │   ├── BackgroundEffects.tsx # Canvas background particle animations
│   │   ├── Contact.tsx     # Contact form with direct WhatsApp submission
│   │   ├── Footer.tsx      # Footer links, social media & live client counter
│   │   ├── Hero.tsx         # Main landing hero banner with CTA
│   │   ├── LegalModal.tsx  # Terms of Service & Privacy Policy modals
│   │   ├── Navbar.tsx      # Glassmorphism navbar with mobile menu
│   │   ├── Preloader.tsx   # Initial page loading screen
│   │   ├── Process.tsx     # Step-by-step working process workflow
│   │   ├── Projects.tsx    # Portfolio showcase of featured work
│   │   └── Services.tsx    # Explore Services section with dynamic details
│   ├── App.tsx             # Root React component layout
│   ├── index.css           # Global styles & Tailwind CSS configuration
│   └── main.tsx            # React application entry point
├── index.html              # HTML template with SEO meta tags
├── tailwind.config.js      # Tailwind configuration
├── package.json            # Project dependencies & npm scripts
└── README.md               # Project documentation
```

---

## ⚙️ Configuration Guide

All primary configuration variables are located in a single file: `src/config/site.ts`.

- **WhatsApp Number**: Modify `whatsappNumber` (e.g. `'919994049254'`).
- **Initial Client Count Baseline**: Modify `initialClientCount` (default: `15`).
- **API URL**: Modify `apiBaseUrl` or pass `VITE_API_URL` environment variable.

---

## 🚀 Quick Start Guide

### Prerequisites
Make sure you have Node.js (v18+) and npm installed on your machine.

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Backend Counter Server (Optional for multi-user live counter syncing)
```bash
node server/index.js
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📜 Available Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| **Development** | `npm run dev` | Starts Vite dev server with Hot Module Replacement |
| **Build** | `npm run build` | Compiles TypeScript and builds production bundle in `dist/` |
| **Preview** | `npm run preview` | Previews production build locally |
| **Lint** | `npm run lint` | Runs `oxlint` for rapid code linting |

---

## 📄 License

This project is licensed under the MIT License.
