FitLife Fitness App Landing Page Tutorial

📋 Table of Contents

Introduction

Tech Stack

Features

Quick Start

Code Snippets

Assets & More

🚀 Introduction

In this tutorial, you'll learn how to build a sleek, responsive landing page for your Fitness App. FitLife helps users achieve their health goals through personalized workout plans, real-time progress tracking, and nutrition guidance. This project uses React, Vite, Tailwind CSS, and Zustand to deliver a polished website designed to showcase your app and attract users.

Watch the full tutorial on YouTube
.

⚙️ Tech Stack

React – For building the user interface

Vite – For fast development and optimized builds

Tailwind CSS – For rapid, responsive styling

TypeScript – For type safety and modern JavaScript features

Zustand – For lightweight state management and theme persistence

⚡️ Features

Modern Landing Page Design:
A sleek, responsive design highlighting your Fitness App’s unique value proposition.

Dark/Light Mode:
Seamlessly toggle between dark and light themes using Zustand and Tailwind CSS design tokens.

Interactive Sections:
Hero, Features, Stats, Pricing, and CTA components designed with React.

Animated Elements:
Smooth hover animations and transitions for a dynamic user experience.

State Management:
Persistent UI state using Zustand ensures consistent theme settings across sessions.

👌 Quick Start
Prerequisites

Git

Node.js

npm

Cloning the Repository
git clone https://github.com/phamphamta/landing-page-fitl-e.git
cd fitness-app-landing-page

Installing Dependencies
npm install

Running the Development Server
npm run dev


Your site will be running at http://localhost:3000
.

## 💻 Code Snippets

### Theme Store (using Zustand and persist)

```tsx
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStore {
  theme: "light" | "dark";
  toggleTheme: () => void;
  setTheme: (theme: "light" | "dark") => void;
}

const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme:
        typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
      toggleTheme: () => {
        const newTheme = get().theme === "light" ? "dark" : "light";
        if (typeof document !== "undefined") {
          document.documentElement.classList.toggle("dark", newTheme === "dark");
        }
        set({ theme: newTheme });
      },
      setTheme: (theme: "light" | "dark") => {
        if (typeof document !== "undefined") {
          document.documentElement.classList.toggle("dark", theme === "dark");
        }
        set({ theme });
      },
    }),
    {
      name: "app-theme",
      onRehydrateStorage: () => (state) => {
        if (state?.theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      },
    }
  )
);

export default useThemeStore;
```

### Custom Button Component with Animation

```tsx
import React from "react";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-full outline-none cursor-pointer relative overflow-hidden border border-transparent bg-violet-600 text-white transform transition duration-300 hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
};
```


🎨 Assets & More

Images:
Use high-quality fitness-related images from Unsplash
 or Pexels
.

SVG Icons:
Import SVG icons for fitness, health stats, and nutrition tracking.

Design Tokens:
Colors, shadows, and typography defined in global CSS ensure consistent dark/light mode styling.

Feel free to customize this README to suit your Fitness App landing page project. Happy coding and enjoy building your modern, responsive landing page!
