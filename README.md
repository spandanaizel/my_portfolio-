# Spandana (Izel) — Portfolio

A dark-mode, glassmorphism personal portfolio built with React, TypeScript, Vite, Tailwind CSS and Framer Motion.

## Tech Stack

- React 18 + Vite
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- React Router DOM (routing)
- React Icons + Lucide Icons
- EmailJS (contact form)

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## EmailJS Setup (Contact Form)

The contact form uses [EmailJS](https://www.emailjs.com/) to send messages without a backend.

1. Create a free account at emailjs.com.
2. Create an Email Service and an Email Template.
3. Open `src/components/Contact/ContactForm.tsx` and replace:
   - `SERVICE_ID`
   - `TEMPLATE_ID`
   - `PUBLIC_KEY`

   with your own credentials from the EmailJS dashboard.

## Project Structure

```
src/
  components/
    Sidebar/        Profile, contact info, socials
    Navbar/         Top navigation with active tab highlight
    About/          About intro + "What I'm Doing" cards
    Resume/         Experience list
    Timeline/       Reusable timeline for education
    Skills/         Animated skill progress bars
    Portfolio/      Filter tabs
    ProjectCard/     Individual project card with hover overlay
    Contact/        Contact cards + form
    SocialLinks/    Social icon links
    Common/         Loading screen, scroll-to-top, page transitions
  pages/             Route-level pages (About, Resume, Portfolio, Contact)
  data/              Static content (editable without touching components)
  types/             Shared TypeScript interfaces
  hooks/             Custom hooks (loading, scroll visibility)
  styles/            Global Tailwind + custom CSS (scrollbar, glass utility)
```

## Customizing Content

All personal content (bio, skills, projects, education, social links) lives in `src/data/*.ts` — edit these files to update the site without touching component code.

## Replacing Placeholder Images

Profile and project images are SVG placeholders under `public/`. Replace `public/profile.svg` and the files in `public/projects/` with real photos/screenshots (JPG/PNG/WebP) and update the `image` paths in `src/data/projectsData.ts`.
