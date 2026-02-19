```markdown
<div align="center">
  <img src="public/animated_logo.svg" alt="GateNexus Logo" width="120" />
  <h1 align="center">GateNexus</h1>
  <p align="center">
    A modern GATE exam practice and preparation platform.
  </p>
</div>

---

## About The Project

GateNexus is a feature-rich application built to provide a comprehensive and engaging platform for GATE exam aspirants. Designed with a focus on usability and performance, it offers a distraction-free environment for students to practice, track, and improve their technical knowledge.

## Core Features

- **Extensive Question Bank**: Access a vast library of GATE PYQ questions, neatly organized by subject, year, and difficulty.
- **Performance Tracking**: Monitor progress with detailed statistics on accuracy and study time to identify weak areas.
- **Smart Revision**: Utilizes the Leitner System to effectively schedule and revise technical topics.
- **Simulated Environment**: Built-in timers and topic tests simulate real exam conditions to boost time management skills.
- **Secure Authentication**: Safe and seamless user sign-in powered by Supabase.
- **Cloud Sync**: User progress and profiles are securely synced across devices in real-time.
- **Progressive Web App (PWA)**: Installable directly to the system for a native application experience.

## System Architecture & Tech Stack

| Category       | Technology                                                                                                                                                                                                                                                                                                                                        |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Frontend** | ![React](https://img.shields.io/badge/react-%2320232A.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) |
| **Backend** | ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)                                                                                                                                                                                                                                       |
| **State Mgmt** | ![React Context API](https://img.shields.io/badge/react-context-blue?style=for-the-badge&logo=react)                                                                                                                                                                                                                                              |
| **Animations** | ![Framer Motion](https://img.shields.io/badge/framer%20motion-black?style=for-the-badge&logo=framer)                                                                                                                                                                                                                                              |
| **Database** | ![Dexie](https://img.shields.io/badge/Dexie.js-DataStore-blue?style=for-the-badge) (IndexedDB for local caching)                                                                                                                                                                                                                                  |

## Project Directory Structure

```text
GateNexus/
├── public/                # Static assets (logo, sounds, favicons)
├── src/
│   ├── components/        # Reusable React UI components
│   ├── context/           # React Context providers for global state
│   ├── data/              # Static dataset mappings (FAQs, subjects)
│   ├── hooks/             # Custom React hooks for business logic
│   ├── pages/             # Top-level application views
│   ├── routes/            # Application routing definitions
│   ├── types/             # TypeScript interfaces and type definitions
│   ├── utils/             # Core utility and helper functions
│   ├── App.tsx            # Main application root
│   └── main.tsx           # Application entry point
├── supabase/              # Local database configuration and migrations
└── package.json           # Dependency management and build scripts

```

## Getting Started (Local Development)

To run this project locally for evaluation or development:

### Prerequisites

* [Node.js](https://nodejs.org/en/) (v18.x or later)
* npm package manager
* [Supabase CLI](https://supabase.com/docs/guides/cli) (for local database deployment)

### Installation & Setup

1. **Clone the repository:**
```sh
git clone [https://github.com/Jeeteshwar/GateNexus.git](https://github.com/Jeeteshwar/GateNexus.git)
cd GateNexus

```


2. **Install dependencies:**
```sh
npm install

```


3. **Initialize the Database:**
```sh
supabase start

```


*(Note: This will output your local Supabase URL and keys).*
4. **Configure Environment Variables:**
Create a `.env` file in the root directory and add your local credentials:
```env
VITE_SUPABASE_PROJECT_URL=your_local_supabase_url
VITE_SUPABASE_ANON_PUBLIC_KEY=your_local_anon_key

```


5. **Run the Application:**
```sh
npm run dev

```



---

## Project Team

This software was developed as a final-year academic project at Government Engineering College Kaimur by:

* **Jeeteshwar Shrivastava** (Lead Developer)
* **Aasish Kumar Pandey** (Project Partner)

```

***

This version removes all the external links that point to the old repository, deletes the open-source "Contributing" and "License" jargon, and clearly establishes this as your own academic work. 

Would you like to tackle the `src/data/subjects.ts` file next so we can structure the actual subjects to perfectly match your syllabus?

```