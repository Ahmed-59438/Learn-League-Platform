# LearnLeague Premium UI/UX Redesign Specification

## 1. Overview
The goal of this project is to execute a comprehensive visual and user experience (UX) redesign of the existing LearnLeague frontend. The underlying functionalities, features, and backend APIs will remain unchanged. The redesign will transform the current interface into a premium, sophisticated, LeetCode-style web application characterized by a dark-mode-first aesthetic, rich interactive data visualizations, and fluid animations.

## 2. Global Aesthetics & Theming
*   **Color Palette**: A "Deep Tech" dark theme featuring slate/navy backgrounds (e.g., `#0f172a`, `#020617`). Accents will utilize electric blue (`#3b82f6`) for primary actions and emerald green (`#10b981`) for success/streak states.
*   **Typography**: Clean, sans-serif fonts (e.g., Inter or system UI fonts) with a strict sizing hierarchy. Typography will prioritize readability and a professional "developer tool" appearance.
*   **Design Primitives**: Adoption of Shadcn UI principles. Replacing stark borders with subtle dividers (`border-slate-800`), utilizing glassmorphism (translucent backgrounds with blur) for floating elements, and incorporating rounded corners (`rounded-xl` / `rounded-2xl`) for cards and modals.

## 3. Core Component Upgrades
*   **App Shell & Navigation**: 
    *   Transition from a standard top-bar or basic layout to a professional sidebar navigation structure (collapsible on desktop, bottom-tab on mobile).
    *   Integration of `framer-motion` for fluid page transitions between routes.
*   **Interactive Charts (Recharts)**:
    *   **Dashboard**: Animated line charts displaying XP accumulation over time.
    *   **Activity**: A heatmap or activity grid (similar to GitHub contributions) visualizing daily study streaks and completed tasks.
*   **Micro-interactions**: 
    *   Animated SVG progress rings for daily goals.
    *   Smooth hover states on buttons, cards, and list items.
    *   Strikethrough animations when completing tasks.

## 4. Page-Specific Enhancements
*   **Dashboard (`/learning`)**: Reorganized as a comprehensive mission control center. Focus on visual hierarchy, bringing streaks, daily tasks, and XP charts to the forefront using grid layouts and premium card designs.
*   **Leaderboard & Friends (`/leaderboard`, `/friends`)**: Redesigned as a competitive gaming ladder. Top 3 users will feature unique glowing visual treatments. Avatars and rank changes will be animated.
*   **Tasks (`/tasks`)**: Enhanced list UI with tactile feedback (animations and clear state changes) when marking items complete.
*   **Tests (`/test`)**: A distraction-free, focused UI for AI assessments that feels like a professional testing environment.

## 5. Technical Constraints
*   **Scope**: Purely frontend (CSS/Tailwind, React components, animations). No modifications to backend logic or existing database schema.
*   **Stack**: Next.js 16 (App Router), React 19, Tailwind CSS v4, Zustand, Recharts, Framer Motion, Lucide React.
*   **Responsiveness**: Must maintain visual integrity across mobile, tablet, and desktop views.

## 6. Implementation Strategy (To be expanded in the Implementation Plan)
1.  Establish global CSS variables and Tailwind configuration for the new theme.
2.  Build reusable foundational components (Buttons, Cards, Inputs, Progress Rings).
3.  Redesign the global AppShell layout.
4.  Refactor individual pages iteratively (Dashboard, Leaderboard, Tasks, etc.).
5.  Apply Recharts and Framer Motion for final polish.
