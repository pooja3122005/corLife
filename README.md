# corlife_website
# ❤️ Corlife Website

A modern, responsive healthcare website built using **React**, **Vite**, **Bun**, and **Tailwind CSS v4**.

## 🚀 Tech Stack

- React
- Vite
- Bun
- Tailwind CSS v4
- JavaScript
- ESLint

---

## 📁 Project Structure

```
corlife/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── bun.lock
└── README.md
```

---

## 📦 Installation

### Clone the repository

```bash
git clone <repository-url>
```

Navigate to the project folder.

```bash
cd corlife
```

Install dependencies using Bun.

```bash
bun install
```

---

## ▶️ Run the Development Server

```bash
bun run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

## 🏗️ Build for Production

```bash
bun run build
```

---

## 👀 Preview Production Build

```bash
bun run preview
```

---

## 🎨 Tailwind CSS Setup

Install Tailwind CSS:

```bash
bun add -D tailwindcss @tailwindcss/vite
```

Update `vite.config.js`:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
});
```

Update `src/index.css`:

```css
@import "tailwindcss";
```

---

## 📜 Available Scripts

Start development server:

```bash
bun run dev
```

Build project:

```bash
bun run build
```

Preview production build:

```bash
bun run preview
```

Install a package:

```bash
bun add <package-name>
```

Install a development package:

```bash
bun add -D <package-name>
```

Remove a package:

```bash
bun remove <package-name>
```

---

## 📂 Assets

Store images, icons, logos, and other static resources inside:

```
src/assets/
```

---



